'use client';

import { useState } from 'react';
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import ERC20_ABI from '../abis/ERC20.json';

const USDT_ADDRESS = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
const TOKEN_SALE_ADDRESS = '0xYourTokenSaleContractAddress';

export default function Rounds() {
  const [usdtAmount, setUsdtAmount] = useState('');
  const isKycCompleted = true;

  const usdtParsed = usdtAmount ? BigInt(Number(usdtAmount) * 1e6) : BigInt(0);

  const {
    data: approveData,
    status: approveStatus,
    error: approveError,
    writeContract: approve,
  } = useWriteContract();

  const { isLoading: isTxLoading, isSuccess: isTxSuccess } = useWaitForTransactionReceipt({
    hash:
      approveData && typeof approveData === 'object' && 'hash' in approveData
        ? (approveData as { hash: `0x${string}` }).hash
        : typeof approveData === 'string'
          ? (approveData as `0x${string}`)
          : undefined,
  });

  return (
    <div>
      <input
        type="number"
        value={usdtAmount}
        onChange={(e) => setUsdtAmount(e.target.value)}
        placeholder="Quantidade de USDT"
      />
      <button
        onClick={async () => {
          if (!usdtAmount || isNaN(Number(usdtAmount))) {
            alert('Digite um valor válido de USDT.');
            return;
          }
          try {
            await approve({
              address: USDT_ADDRESS,
              abi: ERC20_ABI,
              functionName: 'approve',
              args: [TOKEN_SALE_ADDRESS, usdtParsed],
            });
          } catch (error) {
            console.error('Erro ao tentar aprovar USDT:', error);
          }
        }}
        disabled={approveStatus === 'pending' || !isKycCompleted}
      >
        {approveStatus === 'pending' ? 'Pendente...' : isTxSuccess ? 'Concluído' : 'Aprovar USDT'}
      </button>
      {approveError && <p className="error">Erro: {approveError.message}</p>}
    </div>
  );
}