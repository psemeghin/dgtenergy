// src/pages/rounds.tsx

import { useEffect, useState } from "react";
import Head from "next/head";
import {
  useAccount,
  useContractWrite,
  useNetwork,
  useSwitchNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
  useDisconnect,
} from "wagmi/hooks";
import { parseUnits } from "viem";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const USDT_ADDRESS = "0x55d398326f99059fF775485246999027B3197955";
const TOKEN_SALE_ADDRESS = "0x6a9b64d39cf2543f80c752a9670a8477c1a6db5c";

const USDT_ABI = [
  "function approve(address spender, uint256 amount) public returns (bool)",
];

const SALE_ABI = [
  "function buyTokens(uint256 usdtAmount) external",
];

export default function RoundsPage() {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const { disconnect } = useDisconnect();

  const [usdtAmount, setUsdtAmount] = useState("1000");
  const [isApproved, setIsApproved] = useState(false);
  const [approvalHash, setApprovalHash] = useState<`0x${string}` | undefined>(undefined);

  const usdtParsed = parseUnits(usdtAmount || "0", 6); // 6 decimais para USDT

  // ───── APPROVE ─────
  const { config: approveConfig } = usePrepareContractWrite({
    address: USDT_ADDRESS,
    abi: USDT_ABI,
    functionName: "approve",
    args: [TOKEN_SALE_ADDRESS, usdtParsed],
    enabled: Boolean(address && usdtAmount),
    cacheTime: 0,
  });

  const { write: approve, isLoading: approving } = useContractWrite({
    ...approveConfig,
    onSuccess(data) {
      console.log("✅ Transação de approve enviada:", data.hash);
      setApprovalHash(data.hash);
    },
    onError(error) {
      console.error("❌ Erro ao aprovar:", error);
    },
  });

  const { isSuccess: approvalSuccess } = useWaitForTransaction({
    hash: approvalHash,
    enabled: !!approvalHash,
  });

  useEffect(() => {
    if (approvalSuccess) {
      console.log("✅ Aprovação confirmada");
      setIsApproved(true);
    }
  }, [approvalSuccess]);

  // ───── BUY ─────
  const { config: buyConfig } = usePrepareContractWrite({
    address: TOKEN_SALE_ADDRESS,
    abi: SALE_ABI,
    functionName: "buyTokens",
    args: [usdtParsed],
    enabled: isApproved && Boolean(address),
    cacheTime: 0,
  });

  const { write: buy, isLoading: buying } = useContractWrite(buyConfig);

  return (
    <>
      <Head>
        <title>DGT-Energy — Token Sale Portal</title>
      </Head>

      <main className="bg-white text-gray-900 min-h-screen px-6 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Participar da Venda de Tokens</h1>
          <p className="text-gray-600">Compre DGT-Energy usando USDT na rede BNB</p>
        </section>

        <section className="max-w-xl mx-auto mb-12 bg-gray-100 p-6 rounded-lg shadow">
          {!isConnected && (
            <div className="flex justify-center">
              <ConnectButton />
            </div>
          )}

          {isConnected && (
            <>
              {chain?.id !== 56 && (
                <div className="bg-yellow-100 text-yellow-800 p-3 rounded mb-4 text-sm">
                  ⚠️ Você está conectado à rede errada.{" "}
                  <button
                    onClick={() => switchNetwork?.(56)}
                    className="underline font-semibold"
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
                    onClick={() => {
                      console.log("🟡 Clicado em Aprovar");
                      approve?.();
                    }}
                    disabled={approving}
                    className="bg-yellow-400 hover:opacity-90 px-6 py-2 font-semibold rounded-md"
                  >
                    {approving ? "Aprovando..." : "Aprovar"}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      console.log("🟢 Clicado em Comprar");
                      buy?.();
                    }}
                    disabled={buying}
                    className="bg-green-500 hover:opacity-90 text-white px-6 py-2 font-semibold rounded-md"
                  >
                    {buying ? "Comprando..." : "Comprar Tokens"}
                  </button>
                )}
              </div>

              <button
                onClick={() => disconnect()}
                className="mt-4 text-xs text-red-500 underline"
              >
                Desconectar carteira
              </button>
            </>
          )}
        </section>

        {/* Cards e PDF */}
        <section className="max-w-4xl mx-auto text-center mb-10 px-4">
          <div className="bg-green-100 text-green-800 p-4 rounded mb-6 text-sm">
            🐣 <strong>Early Bird:</strong> quem compra agora, compra com vantagem. Tokens bloqueados e negociáveis via P2P, com valorização progressiva. Cada rodada representa um negócio real no setor energético.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 border rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-1">Whitelist</h3>
              <p className="text-sm mb-1">Preço: 0.030 USDT</p>
              <p className="text-sm mb-1">Tokens: 18.000.000</p>
              <p className="text-sm mb-1">
                Status: <span className="text-green-600 font-semibold">Aberta</span>
              </p>
              <p className="text-xs mt-2 text-gray-600">Setup Cost com KYC obrigatório</p>
            </div>

            <div className="bg-gray-50 border rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-1">Seed</h3>
              <p className="text-sm mb-1">Preço: 0.036 USDT</p>
              <p className="text-sm mb-1">Tokens: 14.500.000</p>
              <p className="text-sm mb-1">
                Status: <span className="text-yellow-500 font-semibold">Em breve</span>
              </p>
              <p className="text-xs mt-2 text-gray-600">Lâmina disponível (M.O.U. assinado)</p>
            </div>

            <div className="bg-gray-50 border rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-1">Rounds</h3>
              <p className="text-sm mb-1">Preço: 0.040 USDT</p>
              <p className="text-sm mb-1">Tokens: Variável</p>
              <p className="text-sm mb-1">
                Status: <span className="text-gray-500 font-semibold">Pausada</span>
              </p>
              <p className="text-xs mt-2 text-gray-600">Ativadas por contratos fechados com investidas</p>
            </div>
          </div>

          <div className="mb-6">
            <a
              href="/LaminaExample1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-medium text-sm"
            >
              📄 Baixar Lâmina da Whitelist (PDF)
            </a>
          </div>

          <p className="text-xs text-gray-500">
            Todas as compras exigem KYC/AML. Tokens não vendidos ficam bloqueados na tesouraria. Preço fixo por fase. Vendas somente via DApp oficial.
          </p>
        </section>
      </main>
    </>
  );
}
