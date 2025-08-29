// src/pages/connect.tsx
import { useAccount, useBalance } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function ConnectPage() {
  const { address, isConnected } = useAccount();
  const { data: balanceData } = useBalance({
    address,
    watch: true,
  });

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
            {balanceData ? `${balanceData.formatted} ${balanceData.symbol}` : 'Loading...'}
          </p>
        </div>
      )}
    </div>
  );
}
