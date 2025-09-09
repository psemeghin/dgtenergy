'use client';

import { useEffect, useState } from 'react';
import { parseUnits } from 'viem';
import { useAccount, useContractWrite, useWaitForTransactionReceipt } from 'wagmi';
import ERC20_ABI from '../abis/ERC20.json';
import TOKEN_SALE_ABI from '../abis/TOKEN_SALE.json';

const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';
const TOKEN_SALE_ADDRESS = '0x6a9b64d39cf2543f80c752a9670a8477c1a6db5c';

export default function Rounds() {
  const { address, isConnected } = useAccount();
  const [usdtAmount, setUsdtAmount] = useState('');
  const [isKycCompleted] = useState(true);

  const usdtParsed = usdtAmount
    ? parseUnits(usdtAmount as `${number}`, 18)
    : 0n;

  // Aprovação USDT
  const {
    data: approveHash,
    isPending: isApproving,
    error: approveError,
    writeContract: approveWrite,
  } = useContractWrite();

  const {
    isSuccess: isApproveSuccess,
    isLoading: isApproveLoading,
  } = useWaitForTransactionReceipt({
    hash: approveHash,
  });

  // Compra DGT
  const {
    data: buyTxHash,
    isPending: isBuying,
    error: buyError,
    writeContract: buyWrite,
  } = useContractWrite();

  const {
    isSuccess: isBuySuccess,
    isLoading: isBuyLoading,
  } = useWaitForTransactionReceipt({
    hash: buyTxHash,
  });

  const handleApprove = () => {
    approveWrite({
      address: USDT_ADDRESS,
      abi: ERC20_ABI,
      functionName: 'approve',
      args: [TOKEN_SALE_ADDRESS, usdtParsed],
    });
  };

  const handleBuy = () => {
    buyWrite({
      address: TOKEN_SALE_ADDRESS,
      abi: TOKEN_SALE_ABI,
      functionName: 'buyTokens',
      args: [usdtParsed],
    });
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <input
        type="number"
        value={usdtAmount}
        onChange={(e) => setUsdtAmount(e.target.value)}
        placeholder="Quantidade de USDT"
        className="border px-4 py-2 w-full rounded"
      />

      <button
        onClick={handleApprove}
        disabled={!isConnected || isApproving || !isKycCompleted}
        className="bg-yellow-400 px-4 py-2 rounded disabled:opacity-50"
      >
        {isApproving ? 'Aprovando...' : 'Aprovar USDT'}
      </button>
      {approveError && (
        <p className="text-red-500 text-sm">Erro: {approveError.message}</p>
      )}
      {isApproveSuccess && (
        <p className="text-green-600 text-sm">USDT aprovado com sucesso.</p>
      )}

      <button
        onClick={handleBuy}
        disabled={!isConnected || isBuying || !isKycCompleted || !isApproveSuccess}
        className="bg-green-500 px-4 py-2 rounded disabled:opacity-50"
      >
        {isBuying ? 'Comprando...' : 'Comprar DGT'}
      </button>
      {buyError && (
        <p className="text-red-500 text-sm">Erro: {buyError.message}</p>
      )}
      {isBuySuccess && (
        <p className="text-green-600 text-sm">Compra realizada com sucesso.</p>
      )}
    </div>
  );
}