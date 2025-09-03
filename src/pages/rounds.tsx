// src/pages/rounds.tsx
import Head from "next/head";
import { useAccount, useConnect, useDisconnect, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { useState } from 'react';
import { parseUnits } from 'viem';

const USDT_ADDRESS = "0x55d398326f99059fF775485246999027B3197955";
const TOKEN_SALE_ADDRESS = "0x0f9483E001e4911BAF7c6Fc46ad269B05001F5C7";

const usdtAbi = [
  "function approve(address spender, uint256 amount) public returns (bool)"
];

const tokenSaleAbi = [
  "function buyTokens(uint256 usdtAmount) public"
];

export default function RoundsPage() {
  const [amount, setAmount] = useState("1000");
  const [status, setStatus] = useState("");

  const { address, isConnected } = useAccount();
  const { connect } = useConnect({ connector: new InjectedConnector() });
  const { disconnect } = useDisconnect();

  const usdtAmount = parseUnits(amount, 6); // USDT usa 6 decimais

  // Approve USDT
  const { config: approveConfig } = usePrepareContractWrite({
    address: USDT_ADDRESS,
    abi: usdtAbi,
    functionName: "approve",
    args: [TOKEN_SALE_ADDRESS, usdtAmount],
    enabled: isConnected,
  });
  const { data: approveData, write: approve, isLoading: approving } = useContractWrite(approveConfig);
  const { isSuccess: approveSuccess } = useWaitForTransaction({ hash: approveData?.hash });

  // Buy tokens
  const { config: buyConfig } = usePrepareContractWrite({
    address: TOKEN_SALE_ADDRESS,
    abi: tokenSaleAbi,
    functionName: "buyTokens",
    args: [usdtAmount],
    enabled: isConnected,
  });
  const { data: buyData, write: buyTokens, isLoading: buying } = useContractWrite(buyConfig);
  const { isSuccess: buySuccess } = useWaitForTransaction({ hash: buyData?.hash });

  // Feedback visual
  if (approveSuccess && status !== "Aprovado") setStatus("Aprovado");
  if (buySuccess && status !== "Compra realizada") setStatus("Compra realizada");

  return (
    <>
      <Head>
        <title>DGTEnergy — Token Sale</title>
        <meta name="description" content="Participe da venda do token DGT-Energy" />
      </Head>

      <main className="bg-white min-h-screen text-gray-900 px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Participar da Venda de Tokens</h1>
        <p className="text-center mb-6">Acompanhe as fases e oportunidades de compra do token DGT-Energy.</p>

        {!isConnected ? (
          <div className="text-center">
            <button
              onClick={() => connect()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Conectar Carteira
            </button>
          </div>
        ) : (
          <div className="bg-gray-100 rounded-lg p-6 shadow-md mb-10">
            <h2 className="text-xl font-semibold mb-2">Comprar Tokens DGT</h2>
            <p className="mb-4">Use USDT (BEP-20) para adquirir seus tokens DGTEnergy.</p>
            <input
              type="number"
              className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="flex gap-4">
              <button
                disabled={!approve || approving}
                onClick={() => {
                  setStatus("Aprovando...");
                  approve?.();
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded disabled:opacity-50">
                {approving ? "Aprovando..." : "Aprovar"}
              </button>
              <button
                disabled={!buyTokens || buying}
                onClick={() => {
                  setStatus("Comprando...");
                  buyTokens?.();
                }}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50">
                {buying ? "Comprando..." : "Comprar"}
              </button>
            </div>
            {status && <p className="text-sm text-gray-700 mt-4">{status}</p>}
          </div>
        )}

        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Etapa Atual: Whitelist</h3>
          <ul className="text-left text-gray-700 space-y-2">
            <li><strong>Objetivo:</strong> 350.000 USDT</li>
            <li><strong>Tokens disponíveis:</strong> 18.000.000</li>
            <li><strong>Preço por token:</strong> 0.030 USDT</li>
            <li><strong>Status:</strong> Aberta</li>
            <li><strong>Incentivo:</strong> Early Bird</li>
          </ul>
        </div>
      </main>
    </>
  );
}
