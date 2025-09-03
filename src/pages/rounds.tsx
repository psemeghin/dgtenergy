// src/pages/rounds.tsx
import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import Head from 'next/head';
import Link from 'next/link';
import { ethers } from 'ethers';

export default function Rounds() {
  const { isConnected } = useAccount();
  const [amount, setAmount] = useState("1000"); // valor inicial pré-preenchido
  const [txStatus, setTxStatus] = useState(""); // mensagem de status

  // Endereços
  const USDT_ADDRESS = "0x55d398326f99059fF775485246999027B3197955";
  const TOKENSALE_ADDRESS = "0x0f9483E001e4911BAF7c6Fc46ad269B05001F5C7";

  const handleApprove = async () => {
    try {
      setTxStatus("Aprovando USDT...");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const usdt = new ethers.Contract(
        USDT_ADDRESS,
        ["function approve(address spender, uint256 amount) public returns (bool)"],
        signer
      );

      const tx = await usdt.approve(TOKENSALE_ADDRESS, ethers.utils.parseUnits(amount, 18));
      await tx.wait();
      setTxStatus("✅ USDT aprovado com sucesso.");
    } catch (err) {
      console.error(err);
      setTxStatus("❌ Erro ao aprovar USDT.");
    }
  };

  const handleBuyTokens = async () => {
    try {
      setTxStatus("Processando compra...");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const tokenSale = new ethers.Contract(
        TOKENSALE_ADDRESS,
        ["function buyTokens(uint256 usdtAmount) public"],
        signer
      );

      const tx = await tokenSale.buyTokens(ethers.utils.parseUnits(amount, 18));
      await tx.wait();
      setTxStatus("✅ Tokens comprados com sucesso!");
    } catch (err) {
      console.error(err);
      setTxStatus("❌ Erro ao comprar tokens.");
    }
  };

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

              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4 text-center"
                placeholder="Valor em USDT"
              />

              <div className="flex justify-center gap-4">
                <button
                  onClick={handleApprove}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Aprovar
                </button>
                <button
                  onClick={handleBuyTokens}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Comprar agora
                </button>
              </div>

              {txStatus && (
                <p className="text-sm mt-4 text-gray-700 italic">{txStatus}</p>
              )}
            </div>
          ) : (
            <p className="text-gray-600 italic">Conecte sua carteira para comprar tokens.</p>
          )}

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-300 rounded-lg p-4 shadow">
              <h4 className="text-xl font-semibold mb-2">Whitelist</h4>
              <p className="text-gray-600 mb-1">Implementação inicial do projeto.</p>
              <p className="text-gray-700"><strong>Preço:</strong> 0.030 USDT</p>
              <Link href="/LaminaWhitelist.pdf" className="text-blue-600 underline text-sm">
                Ver lâmina
              </Link>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-4 shadow">
              <h4 className="text-xl font-semibold mb-2">Seed</h4>
              <p className="text-gray-600 mb-1">Investimento em empresa do setor energético.</p>
              <p className="text-gray-700"><strong>Preço:</strong> 0.036 USDT</p>
              <Link href="/LaminaSeed.pdf" className="text-blue-600 underline text-sm">
                Ver lâmina
              </Link>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-4 shadow">
              <h4 className="text-xl font-semibold mb-2">Rounds</h4>
              <p className="text-gray-600 mb-1">Contratos com valor e token fixos.</p>
              <p className="text-gray-700"><strong>Preço:</strong> 0.040 USDT</p>
              <Link href="/LaminaRound1.pdf" className="text-blue-600 underline text-sm">
                Ver lâmina
              </Link>
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
