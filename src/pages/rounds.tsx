import { useEffect, useState } from "react";
import Head from "next/head";
import {
  useAccount,
  useContractWrite,
  useNetwork,
  useSwitchNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { parseUnits } from "viem";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers"; // ← adicionado aqui

const USDT_ADDRESS = "0x55d398326f99059fF775485246999027B3197955";
const TOKEN_SALE_ADDRESS = "0x6a9b64d39cf2543f80c752a9670a8477c1a6db5c";

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
  const [approvalHash, setApprovalHash] = useState<string | null>(null); // ← novo estado

  const usdtParsed = parseUnits(usdtAmount, 6); // USDT na BNB usa 6 decimais

  const { config: approveConfig } = usePrepareContractWrite({
    address: USDT_ADDRESS,
    abi: USDT_ABI,
    functionName: "approve",
    args: [TOKEN_SALE_ADDRESS, usdtParsed],
    enabled: isConnected,
  });

  // ← uso da hash para esperar
  const { isSuccess: approvalSuccess } = useWaitForTransaction({
    hash: approvalHash,
    enabled: !!approvalHash,
  });

  useEffect(() => {
    if (approvalSuccess) {
      console.log("✅ Aprovação confirmada on-chain");
      setIsApproved(true);
    }
  }, [approvalSuccess]);

  const { write: approve, isLoading: approving } = useContractWrite({
    ...approveConfig,
    onSuccess(data) {
      console.log("🚀 Transação de approve enviada:", data.hash);
      setApprovalHash(data.hash);
    },
  });

  const { config: buyConfig } = usePrepareContractWrite({
    address: TOKEN_SALE_ADDRESS,
    abi: SALE_ABI,
    functionName: "buyTokens",
    args: [usdtParsed],
    enabled: isApproved && isConnected,
  });

  const { write: buy, isLoading: buying } = useContractWrite(buyConfig);

  return (
    <>
      <Head>
        <title>DGTEnergy — Token Sale Portal</title>
      </Head>

      {/* restante do layout permanece igual */}
      {/* ... */}
    </>
  );
}
