// src/pages/connect.tsx
import { useAccount, useBalance, useContractRead } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { formatUnits } from 'viem';

const DGT_TOKEN_ADDRESS = '0xYourTokenAddressHere'; // ✅ Substitua aqui
const DGT_ABI = [
  {
    constant: true,
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    type: 'function',
    stateMutability: 'view',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    type: 'function',
    stateMutability: 'view',
  },
];

export default function ConnectPage() {
  const { address, isConnected } = useAccount();
  const { data: ethBalance } = useBalance({ address, watch: true });

  const { data: dgtBalanceRaw } = useContractRead({
    address: DGT_TOKEN_ADDRESS,
    abi: DGT_ABI,
    functionName: 'balanceOf',
    args: [address!],
    watch: true,
  });

  const { data: dgtSymbol } = useContractRead({
    address: DGT_TOKEN_ADDRESS,
    abi: DGT_ABI,
    functionName: 'symbol',
  });

  const dgtBalance =
    dgtBalanceRaw && typeof dgtBalanceRaw === 'bigint'
      ? formatUnits(dgtBalanceRaw, 18)
      : null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 bg-white">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Connect Your Wallet</h1>
      <p className="text-gray-500 mb-6 text-center max-w-md">
        Secure access to your DGTEnergy balance and tools.
      </p>

      <ConnectButton />

      {isConnected && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-1">
            <strong>Connected Wallet:</strong>
          </p>
          <p className="text-gray-800 text-sm break-all">{address}</p>
          <p className="text-gray-800 text-sm mt-2">
            <strong>ETH Balance:</strong>{' '}
            {ethBalance ? `${ethBalance.formatted} ${ethBalance.symbol}` : 'Loading...'}
          </p>
          <p className="text-gray-800 text-sm mt-2">
            <strong>DGT Balance:</strong>{' '}
            {dgtBalance ? `${dgtBalance} ${dgtSymbol || 'DGT'}` : 'Loading...'}
          </p>
        </div>
      )}
    </div>
  );
}
