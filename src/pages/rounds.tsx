// src/pages/rounds.tsx
import React, { useState } from 'react';
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import Head from 'next/head';
import Link from 'next/link';
import { parseUnits } from 'viem';

const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';
const DGTSALE_ADDRESS = '0x0f9483E001e4911BAF7c6Fc46ad269B05001F5C7';
const DGTOKEN_ADDRESS = '0xD3Aec5eC20bE340944d5D3003E420798c2b128Dc';

const usdtAbi = [
  {
    name: 'approve',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'bool' }]
  }
];

const saleAbi = [
  {
    name: 'buyTokens',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [{ name: 'usdtAmount', type: 'uint256' }],
    outputs: []
  }
];

export default function Rounds() {
  const { isConnected } = useAccount();
  const [amount, setAmount] = useState("1000");
  const [txStatus, setTxStatus] = useState("");

  const parsedAmount = parseUnits(amount, 18);

  const { config: approveConfig } = usePrepareContractWrite({
    address: USDT_ADDRESS,
    abi: usdtAbi,
    functionName: 'approve',
    args: [DGTSALE_ADDRESS, parsedAmount],
    enabled: isConnected
  });

  const { config: buyConfig } = usePrepareContractWrite({
    address: DGTSALE_ADDRESS,
    abi: saleAbi,
    functionName: 'buyTokens',
    args: [parsedAmount],
    enabled: isConnected
  });

  const { write: approveWrite, data: approveTx } = useContractWrite(approveConfig);
  const { write: buyWrite, data: buyTx } = useContractWrite(buyConfig);

  useWaitForTransaction({
    hash: buyTx?.hash,
    onSuccess() {
      setTxStatus("✅ Compra realizada com sucesso!");
    },
    onError() {
      setTxStatus("❌ Falha ao comprar tokens.");
    },
  });

  return (
    <>
      <Head>
        <title>DGT Energy - Rounds</title>
      </Head>

      <section className="bg-white text-gray-800 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Participar da Venda de Tokens</h1>
          <p className="text-lg mb-6">Acompanhe as fases e oportunidades de compra do token DGT-Energy.</p>

          {isConnected && (
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-2">Comprar Tokens DGT</h2>
              <p className="mb-4">Use USDT (BEP-20) para adquirir seus tokens DGTEnergy.</p>

              <input
                className="px-4 py-2 border rounded text-center mb-4"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Quantidade em USDT"
              />

              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button
                  onClick={() => approveWrite?.()}
                  disabled={!approveWrite}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Aprovar
                </button>
                <button
                  onClick={() => buyWrite?.()}
                  disabled={!buyWrite}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Comprar
                </button>
              </div>

              {txStatus && <p className="mt-4 text-sm font-medium">{txStatus}</p>}
            </div>
          )}

          {!isConnected && (
            <p className="text-gray-600 italic">Conecte sua carteira para comprar tokens.</p>
          )}

          {/* Card de status da Whitelist */}
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
            <a href="/LaminaWhitelist.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Baixar Lâmina da Whitelist
            </a>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-10 text-sm text-blue-900">
            <p>
              <strong>Por que Early Bird?</strong> Comprar antecipadamente garante acesso ao menor preço,
              com tokens bloqueados e valorização no mercado secundário. Cada rodada futura representa contratos
              reais com empresas do setor energético.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-300 rounded-lg p-4 shadow">
              <h4 className="text-xl font-semibold mb-2">Whitelist</h4>
              <p className="text-gray-600 mb-1">Implementação inicial do projeto.</p>
              <p className="text-gray-700"><strong>Preço:</strong> 0.030 USDT</p>
              <Link href="/LaminaWhitelist.pdf" className="text-blue-600 underline text-sm">Ver lâmina</Link>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-4 shadow">
              <h4 className="text-xl font-semibold mb-2">Seed</h4>
              <p className="text-gray-600 mb-1">Investimento em empresa do setor energético.</p>
              <p className="text-gray-700"><strong>Preço:</strong> 0.036 USDT</p>
              <Link href="/LaminaSeed.pdf" className="text-blue-600 underline text-sm">Ver lâmina</Link>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-4 shadow">
              <h4 className="text-xl font-semibold mb-2">Rounds</h4>
              <p className="text-gray-600 mb-1">Contratos com valor e token fixos.</p>
              <p className="text-gray-700"><strong>Preço:</strong> 0.040 USDT</p>
              <Link href="/LaminaRound1.pdf" className="text-blue-600 underline text-sm">Ver lâmina</Link>
            </div>
          </div>

          <div className="text-sm text-gray-500 italic">
            Todas as compras exigem verificação KYC/AML. Tokens comprados são liberados automaticamente.
          </div>
        </div>
      </section>
    </>
  );
}
