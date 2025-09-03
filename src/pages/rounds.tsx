// src/pages/rounds.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import { useAccount, useConnect, useDisconnect, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { parseUnits } from 'viem';

const TOKEN_ADDRESS = "0xD3Aec5eC20bE340944d5D3003E420798c2b128Dc"; // DGTE
const STABLECOIN_ADDRESS = "0x55d398326f99059fF775485246999027B3197955"; // USDT (BEP20)
const SALE_CONTRACT_ADDRESS = "0x0f9483E001e4911BAF7c6Fc46ad269B05001F5C7"; // TokenSale

const USDT_ABI = [
  "function approve(address spender, uint256 amount) public returns (bool)",
];

const SALE_ABI = [
  "function buyTokens(uint256 usdtAmount) public",
];

export default function Rounds() {
  const [amount, setAmount] = useState("1000");
  const [txStatus, setTxStatus] = useState("");
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({ connector: new InjectedConnector() });
  const { disconnect } = useDisconnect();

  const parsedAmount = parseUnits(amount || "0", 18);

  const { config: approveConfig } = usePrepareContractWrite({
    address: STABLECOIN_ADDRESS,
    abi: USDT_ABI,
    functionName: "approve",
    args: [SALE_CONTRACT_ADDRESS, parsedAmount],
    enabled: isConnected,
  });

  const { write: approve, data: approveData } = useContractWrite(approveConfig);

  const { config: buyConfig } = usePrepareContractWrite({
    address: SALE_CONTRACT_ADDRESS,
    abi: SALE_ABI,
    functionName: "buyTokens",
    args: [parsedAmount],
    enabled: isConnected,
  });

  const { write: buyTokens, data: buyData } = useContractWrite(buyConfig);

  useWaitForTransaction({
    hash: approveData?.hash,
    onSuccess() {
      setTxStatus("Aprovação concluída com sucesso.");
    },
  });

  useWaitForTransaction({
    hash: buyData?.hash,
    onSuccess() {
      setTxStatus("Compra de tokens concluída!");
    },
  });

  return (
    <>
      <Head>
        <title>DGTEnergy - Rounds</title>
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-2">Participar da Venda de Tokens</h1>
        <p className="mb-6 text-gray-600">Acompanhe as fases e oportunidades de compra do token DGT-Energy.</p>

        {!isConnected ? (
          <button onClick={() => connect()} className="bg-black text-white px-6 py-2 rounded mb-6">
            Conectar Carteira
          </button>
        ) : (
          <div className="bg-gray-100 p-6 rounded shadow mb-6">
            <div className="mb-4">
              <label className="block text-sm mb-1">Valor em USDT</label>
              <input
                className="border rounded px-3 py-2 w-full max-w-sm text-center"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => approve?.()}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded"
              >
                Aprovar USDT
              </button>
              <button
                onClick={() => buyTokens?.()}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
              >
                Comprar Tokens
              </button>
            </div>
            {txStatus && <p className="mt-4 text-sm text-gray-700">{txStatus}</p>}
          </div>
        )}

        {/* Status da Etapa */}
        <div className="bg-white border border-gray-300 rounded p-6 mb-8 shadow">
          <h2 className="text-xl font-bold text-green-700 mb-4">Etapa Atual: Whitelist</h2>
          <ul className="text-left text-gray-700 space-y-2 max-w-sm mx-auto">
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
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baixar Lâmina da Whitelist
          </a>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-10 text-sm text-blue-900">
          <p>
            <strong>Por que Early Bird?</strong> Comprar antecipadamente garante acesso ao menor preço, com tokens
            bloqueados e valorização no mercado secundário (P2P). Cada rodada futura representa contratos com empresas do setor energético.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border border-gray-300 rounded-lg p-4 shadow">
            <h4 className="text-lg font-semibold mb-2">Whitelist</h4>
            <p className="text-gray-600 mb-1">Implementação inicial do projeto.</p>
            <p className="text-gray-700"><strong>Preço:</strong> 0.030 USDT</p>
            <a href="/LaminaWhitelist.pdf" className="text-blue-600 underline text-sm">Ver lâmina</a>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4 shadow">
            <h4 className="text-lg font-semibold mb-2">Seed</h4>
            <p className="text-gray-600 mb-1">Investimento em empresa do setor energético.</p>
            <p className="text-gray-700"><strong>Preço:</strong> 0.036 USDT</p>
            <a href="/LaminaSeed.pdf" className="text-blue-600 underline text-sm">Ver lâmina</a>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4 shadow">
            <h4 className="text-lg font-semibold mb-2">Rounds</h4>
            <p className="text-gray-600 mb-1">Contratos com valor e token fixos.</p>
            <p className="text-gray-700"><strong>Preço:</strong> 0.040 USDT</p>
            <a href="/LaminaRound1.pdf" className="text-blue-600 underline text-sm">Ver lâmina</a>
          </div>
        </div>

        <p className="text-sm text-gray-500 italic">
          Todas as compras exigem verificação KYC/AML. Tokens comprados são liberados automaticamente.
        </p>
      </main>
    </>
  );
}
