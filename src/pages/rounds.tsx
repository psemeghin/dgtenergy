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
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold font-space-grotesk mb-2 text-[#005F73]">DGT3Energy Sales Portal</h1>
          <p className="text-[#2F3E46] text-sm font-inter mb-4">Progressive rounds with fixed supply and Early Bird incentives</p>
          <div className="bg-[#FAFAFA] border border-[#2F3E46] p-4 rounded-lg inline-block shadow-sm">
            <h2 className="font-bold text-lg mb-1">Active Round: Whitelist</h2>
            <p>Goal: 350,000 USDT · Price: 0.030 USDT</p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2 mb-2">
              <div className="bg-[#005F73] h-3 rounded-full w-[20%]" />
            </div>
            <a href="/docs/LaminaExample1.pdf" target="_blank" className="text-sm underline text-[#005F73]">📄 Download PDF</a>
          </div>
        </section>

        <section className="max-w-xl mx-auto mb-12 bg-white border border-gray-200 p-6 rounded-lg shadow-md">
          {!isConnected ? (
            <div className="text-center text-gray-500">Conecte sua carteira para continuar.</div>
          ) : (
            <>
              {chainId !== 56 && (
                <div className="bg-yellow-100 text-yellow-800 p-3 rounded mb-4 text-sm">
                  ⚠️ Você está conectado à rede errada.
                  <button onClick={() => switchChain?.({ chainId: 56 })} className="underline font-semibold hover:text-yellow-700 ml-1">Mudar para BNB</button>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 mb-4">
                <button className="hover:scale-105 hover:opacity-90 transition-transform duration-300 ease-in-out bg-[#005F73] text-white py-2 rounded font-space-grotesk">
                  1. Connect Wallet
                </button>
                <button className="hover:scale-105 hover:opacity-90 transition-transform duration-300 ease-in-out bg-[#A67F59] text-white py-2 rounded font-space-grotesk">
                  2. KYC (Simplified)
                </button>
                <button
                  onClick={() => approve()}
                  disabled={approving}
                  className="hover:scale-105 hover:opacity-90 transition-transform duration-300 ease-in-out bg-yellow-400 text-white py-2 rounded font-space-grotesk"
                >
                  {approving ? "Aprovando..." : "3. Aprovar USDT"}
                </button>
                <button
                  onClick={() => buy()}
                  disabled={buying}
                  className="hover:scale-105 hover:opacity-90 transition-transform duration-300 ease-in-out bg-green-600 text-white py-2 rounded font-space-grotesk"
                >
                  {buying ? "Comprando..." : "4. Comprar Tokens"}
                </button>
              </div>

              <div className="text-sm text-gray-700 mb-4">
                💳 Saldo em DGT3: — <br />
                💰 Saldo em USDT: —
              </div>
            </>
          )}
        </section>

        <section className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <div className="border border-gray-300 rounded-xl p-6 shadow-sm bg-white">
            <h3 className="text-lg font-bold font-space-grotesk mb-2">Seed Round</h3>
            <p className="text-sm text-[#2F3E46] mb-2">Initial allocation in energy receivables · Target: 500k USDT · Price: 0.036</p>
            <p className="text-xs text-gray-500 mb-2">Status: Soon</p>
            <a href="/docs/LaminaExample2.pdf" target="_blank" className="text-sm underline text-[#005F73]">📄 Download PDF</a>
          </div>
          <div className="border border-gray-300 rounded-xl p-6 shadow-sm bg-white">
            <h3 className="text-lg font-bold font-space-grotesk mb-2">Public Rounds</h3>
            <p className="text-sm text-[#2F3E46] mb-2">Price: 0.040 USDT · Status: On Hold</p>
            <p className="text-xs text-gray-500 mb-2">Multiple rounds with PPA-linked investments</p>
            <a href="/docs/LaminaExample3.pdf" target="_blank" className="text-sm underline text-[#005F73]">📄 Download PDF</a>
          </div>
        </section>

        <section className="text-center max-w-2xl mx-auto text-xs text-[#2F3E46] px-4 pb-10">
          <p className="mb-2">
            DGTEnergy is a utility token. It does not represent equity, debt or profit-sharing rights.
            Staking rewards are discretionary and performance-linked.
            Participation may require KYC/AML depending on jurisdiction.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/docs/whitepaper.pdf" className="underline">Whitepaper</a>
            <a href="/docs/legal.pdf" className="underline">Legal Terms</a>
            <a href="/docs/product1_factsheet.pdf" className="underline">Product 1 Factsheet</a>
          </div>
        </section>
      </main>
    </>
  );
}