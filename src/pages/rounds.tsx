// src/pages/rounds.tsx
import React, { useState } from 'react';
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import Head from 'next/head';
import Link from 'next/link';
import { parseUnits } from 'viem';

const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';
const TOKENSALE_ADDRESS = '0x0f9483E001e4911BAF7c6Fc46ad269B05001F5C7';
const TOKEN_PRICE = 0.03; // USDT por DGT
const DECIMALS = 18;

export default function Rounds() {
  const { address, isConnected } = useAccount();
  const [amount, setAmount] = useState("1000"); // USDT, valor inicial
  const [txStatus, setTxStatus] = useState("");

  const usdtAmount = parseUnits(amount || "0", DECIMALS); // valor em wei
  const dgtAmount = parseUnits((parseFloat(amount || "0") / TOKEN_PRICE).toFixed(18), DECIMALS);

  // Aprovar USDT
  const { config: approveConfig } = usePrepareContractWrite({
    address: USDT_ADDRESS,
    abi: [
      {
        name: 'approve',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [
          { name: 'spender', type: 'address' },
          { name: 'amount', type: 'uint256' },
        ],
        outputs: [{ name: '', type: 'bool' }],
      },
    ],
    functionName: 'approve',
    args: [TOKENSALE_ADDRESS, usdtAmount],
    enabled: isConnected,
  });

  const { write: approve, data: approveTx } = useContractWrite(approveConfig);
  const { isLoading: isApproving, isSuccess: approved } = useWaitForTransaction({
    hash: approveTx?.hash,
    onSuccess: () => setTxStatus("✅ USDT aprovado com sucesso."),
    onError: () => setTxStatus("❌ Falha ao aprovar USDT."),
  });

  // Comprar Tokens
  const { config: buyConfig } = usePrepareContractWrite({
    address: TOKENSALE_ADDRESS,
    abi: [
      {
        name: 'buyTokens',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [{ name: 'usdAmount', type: 'uint256' }],
        outputs: [],
      },
    ],
    functionName: 'buyTokens',
    args: [usdtAmount],
    enabled: approved,
  });

  const { write: buyTokens, data: buyTx } = useContractWrite(buyConfig);
  const { isLoading: isBuying, isSuccess: bought } = useWaitForTransaction({
    hash: buyTx?.hash,
    onSuccess: () => setTxStatus("✅ Compra de DGT realizada com sucesso."),
    onError: () => setTxStatus("❌ Erro ao comprar tokens."),
  });

  return (
    <>
      <Head>
        <title>DGT Energy - Rounds</title>
      </Head>

      <section className="bg-white text-gray-800 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Participar da Venda de Tokens</h1>
          <p className="text-lg mb-6">
            Acompanhe as fases e oportunidades de compra do token DGT-Energy.
          </p>

          {isConnected ? (
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-2">Comprar Tokens DGT</h2>
              <p className="mb-4">Use USDT para adquirir seus tokens DGTEnergy.</p>

              <div className="flex flex-col gap-4 items-center">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-48 px-4 py-2 border border-gray-300 rounded-md text-center"
                />
                <div className="flex gap-4">
                  <button
                    onClick={() => approve?.()}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded disabled:opacity-50"
                    disabled={!approve || isApproving}
                  >
                    {isApproving ? 'Aprovando...' : 'Aprovar'}
                  </button>
                  <button
                    onClick={() => buyTokens?.()}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded disabled:opacity-50"
                    disabled={!buyTokens || isBuying}
                  >
                    {isBuying ? 'Comprando...' : 'Comprar'}
                  </button>
                </div>
                {txStatus && <p className="text-sm text-gray-600 mt-2">{txStatus}</p>}
              </div>
            </div>
          ) : (
            <p className="text-gray-600 italic">Conecte sua carteira para comprar tokens.</p>
          )}

          {/* Card da Etapa Whitelist */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 mt-10 shadow">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Etapa Atual: Whitelist</h3>
            <ul className="text-left text-gray-700 space-y-2">
              <li><strong>Objetivo:</strong> 350.000 USDT</li>
              <li><strong>Tokens disponíveis:</strong> 18.000.000</li>
              <li><strong>Preço por token:</strong> 0.030 USDT</li>
              <li><strong>Status:</strong> Aberta</li>
              <li><strong>Incentivo:</strong> Early Bird</li>
            </ul>
          </div>

          <div className="mb-6">
            <a
              href="/LaminaWhitelist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Baixar Lâmina da Whitelist
            </a>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-10 text-sm text-blue-900">
            <p>
              <strong>Por que Early Bird?</strong> Comprar antecipadamente garante acesso ao menor preço, com tokens bloqueados e possibilidade de valorização no mercado secundário (P2P). Cada rodada futura representa contratos reais com empresas do setor energético.
            </p>
          </div>

          <div className="text-sm text-gray-500 italic">
            Todas as compras exigem verificação KYC/AML. Tokens comprados são liberados automaticamente.
          </div>
        </div>
      </section>
    </>
  );
}
