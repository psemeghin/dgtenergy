'use client';

import dynamic from 'next/dynamic';
const ConnectWallet = dynamic(() => import('../components/ConnectWallet'), {
  ssr: false,
});
import { useEffect, useState } from "react";
import Head from "next/head";

import {
  useAccount,
  useDisconnect,
  useSwitchChain,
  useWriteContract,
  useTransactionReceipt,
} from "wagmi";

import { parseUnits } from "viem";

const USDT_ADDRESS = "0x55d398326f99059fF775485246999027B3197955";
const TOKEN_SALE_ADDRESS = "0x6a9b64d39cf2543f80c752a9670a8477c1a6db5c";

const USDT_ABI = [
  "function approve(address spender, uint256 amount) public returns (bool)",
];

const SALE_ABI = [
  "function buyTokens(uint256 usdtAmount) external",
];

export default function RoundsPage() {
  const { address, isConnected, chainId } = useAccount();
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();

  const [usdtAmount, setUsdtAmount] = useState("1000");
  const [isApproved, setIsApproved] = useState(false);

  const usdtParsed = parseUnits(usdtAmount || "0", 6);

  const {
    data: approveHash,
    writeContract: approveWrite,
    isPending: approving,
  } = useWriteContract();

  const approve = () => {
    approveWrite?.({
      address: USDT_ADDRESS,
      abi: USDT_ABI,
      functionName: "approve",
      args: [TOKEN_SALE_ADDRESS, usdtParsed],
    });
  };

  const { data: approveReceipt } = useTransactionReceipt({
    hash: approveHash,
  });

  useEffect(() => {
    if (approveReceipt?.status === "success") {
      setIsApproved(true);
    }
  }, [approveReceipt]);

  const {
    data: buyHash,
    writeContract: buyWrite,
    isPending: buying,
  } = useWriteContract();

  const buy = () => {
    buyWrite?.({
      address: TOKEN_SALE_ADDRESS,
      abi: SALE_ABI,
      functionName: "buyTokens",
      args: [usdtParsed],
    });
  };

  return (
    <>
      <Head>
        <title>DGT-Energy — Token Sale Portal</title>
      </Head>

      <main>
        <div className="bg-white text-gray-900 min-h-screen px-4 md:px-6 py-10">
          <section className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-2">Participar da Venda de Tokens</h1>
            <p className="text-gray-600 text-sm">Compre DGT-Energy usando USDT na rede BNB Smart Chain</p>
          </section>

          <ConnectWallet />

          <section className="max-w-xl mx-auto mb-12 bg-white border border-gray-200 p-6 rounded-lg shadow-md">
            {!isConnected ? (
              <div className="text-center text-gray-500">
                Conecte sua carteira para continuar.
              </div>
            ) : (
              <>
                {chainId !== 56 && (
                  <div className="bg-yellow-100 text-yellow-800 p-3 rounded mb-4 text-sm">
                    ⚠️ Você está conectado à rede errada.{" "}
                    <button
                      onClick={() => switchChain?.({ chainId: 56 })}
                      className="underline font-semibold hover:text-yellow-700"
                    >
                      Mudar para BNB
                    </button>
                  </div>
                )}

                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Quantidade de USDT:
                </label>
                <input
                  type="number"
                  value={usdtAmount}
                  onChange={(e) => setUsdtAmount(e.target.value)}
                  className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300"
                />

                <div className="flex gap-4 justify-center">
                  {!isApproved ? (
                    <button
                      onClick={() => approve()}
                      disabled={approving}
                      className="bg-yellow-400 hover:bg-yellow-500 transition-all duration-200 px-6 py-2 font-semibold rounded-md text-white"
                    >
                      {approving ? "Aprovando..." : "Aprovar"}
                    </button>
                  ) : (
                    <button
                      onClick={() => buy()}
                      disabled={buying}
                      className="bg-green-600 hover:bg-green-700 transition-all duration-200 text-white px-6 py-2 font-semibold rounded-md"
                    >
                      {buying ? "Comprando..." : "Comprar Tokens"}
                    </button>
                  )}
                </div>

                <button
                  onClick={() => disconnect()}
                  className="mt-6 text-xs text-red-500 underline hover:text-red-600"
                >
                  Desconectar carteira
                </button>
              </>
            )}
          </section>
        </div>
      </main>
    </>
  );
}