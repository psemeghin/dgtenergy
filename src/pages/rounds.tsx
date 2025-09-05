// src/pages/rounds.tsx
import { useEffect, useState } from "react";
import Head from "next/head";
import { useAccount, useContractWrite, useNetwork, useSwitchNetwork, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { parseUnits } from "viem";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { formatEther } from "ethers";

const USDT_ADDRESS = "0x55d398326f99059fF775485246999027B3197955";
const TOKEN_SALE_ADDRESS = "0x6a9b64d39cf2543f80c752a9670a8477c1a6db5c";
const DGT_PRICE = "0.03"; // Em USDT

// ABIs mínimos necessários
const USDT_ABI = [
  "function approve(address spender, uint256 amount) public returns (bool)",
  "function allowance(address owner, address spender) public view returns (uint256)",
  "function decimals() view returns (uint8)"
];

const SALE_ABI = [
  "function buyTokens(uint256 usdtAmount) external",
];

export default function RoundsPage() {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const [usdtAmount, setUsdtAmount] = useState("1000");
  const [isApproved, setIsApproved] = useState(false);

  const usdtParsed = parseUnits(usdtAmount, 6); // Assume 18 decimais — ajustar para 6 se USDT na BNB for 6

  // ───── PREPARE: APPROVE ─────
  const { config: approveConfig } = usePrepareContractWrite({
    address: USDT_ADDRESS,
    abi: USDT_ABI,
    functionName: "approve",
    args: [TOKEN_SALE_ADDRESS, usdtParsed],
    enabled: isConnected,
  });

  const { write: approve, isLoading: approving, data: approveTx } = useContractWrite(approveConfig);
  const { isSuccess: approved } = useWaitForTransaction({ hash: approveTx?.hash });

  // Detecta aprovação (simples, sem uso de allowance real ainda)
  useEffect(() => {
    if (approved) setIsApproved(true);
  }, [approved]);

  // ───── PREPARE: BUY ─────
  const { config: buyConfig } = usePrepareContractWrite({
    address: TOKEN_SALE_ADDRESS,
    abi: SALE_ABI,
    functionName: "buy",
    args: [usdtParsed],
    enabled: isApproved && isConnected,
  });

  const { write: buy, isLoading: buying, data: buyTx } = useContractWrite(buyConfig);

  return (
    <>
      <Head>
        <title>DGTEnergy — Token Sale Portal</title>
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800 bg-white">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Participar da Venda de Tokens</h1>
          <p className="text-gray-600 mb-4">Compre DGT-Energy usando USDT na rede BNB</p>

          {!isConnected && (
            <div className="mt-6">
              <ConnectButton />
            </div>
          )}

          {isConnected && (
            <>
              {chain?.id !== 56 && (
                <div className="bg-yellow-100 text-yellow-800 p-3 rounded mb-4">
                  ⚠️ Você está conectado à rede errada.{" "}
                  <button
                    onClick={() => switchNetwork?.(56)}
                    className="underline font-semibold"
                  >
                    Mudar para BNB
                  </button>
                </div>
              )}

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
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
                      onClick={() => approve?.()}
                      disabled={approving}
                      className="bg-yellow-400 hover:opacity-90 px-6 py-2 font-semibold rounded-md"
                    >
                      {approving ? "Aprovando..." : "Aprovar"}
                    </button>
                  ) : (
                    <button
                      onClick={() => buy?.()}
                      disabled={buying}
                      className="bg-green-500 hover:opacity-90 text-white px-6 py-2 font-semibold rounded-md"
                    >
                      {buying ? "Comprando..." : "Comprar Tokens"}
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
}
