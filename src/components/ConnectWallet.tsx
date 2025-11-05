'use client';

import { useAccount, useWriteContract } from 'wagmi';
import { parseUnits } from 'viem';
import { USDT_ADDRESS, TOKEN_SALE_ADDRESS, USDT_ABI } from '@/lib/constants';
import { useState } from 'react';

export default function RoundsPage() {
  const { address, isConnected } = useAccount();
  const [amount, setAmount] = useState('10');
  const { writeContractAsync, isPending } = useWriteContract();

  const handleApprove = async () => {
    if (!isConnected || !amount) return;
    try {
      const value = parseUnits(amount, 18);
      const hash = await writeContractAsync({
        address: USDT_ADDRESS,
        abi: USDT_ABI,
        functionName: 'approve',
        args: [TOKEN_SALE_ADDRESS, value],
      });
      console.log('Tx sent:', hash);
    } catch (err) {
      console.error('Erro ao aprovar USDT:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Participar da Venda de Tokens</h1>
      <p className="mb-6 text-center">Compre DGT-Energy usando USDT na rede BNB Smart Chain</p>

      {isConnected ? (
        <>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <label className="block mb-2 font-semibold">Quantidade de USDT:</label>
            <input
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-lg"
            />
            <button
              onClick={handleApprove}
              disabled={isPending}
              className="w-full bg-yellow-400 text-white py-2 rounded-lg font-bold hover:opacity-90 transition"
            >
              {isPending ? 'Aguardando...' : 'Aprovar'}
            </button>
            <p className="mt-4 text-red-600 text-sm cursor-pointer underline">
              Desconectar carteira
            </p>
          </div>
        </>
      ) : (
        <p className="text-center text-neutral-600">Conecte sua carteira para continuar.</p>
      )}
    </div>
  );
}