// src/components/WalletOverview.tsx
'use client';

import { useAccount } from 'wagmi/hooks';

export default function WalletOverview() {
  const { address, isConnected } = useAccount();

  return (
    <div className="mt-6 text-center text-gray-800 bg-gray-100 rounded-lg p-6 shadow-md max-w-md mx-auto">
      {isConnected ? (
        <>
          <h2 className="text-lg font-bold mb-2">Wallet Connected</h2>
          <p className="text-sm break-all text-gray-600">Address:</p>
          <p className="text-xs font-mono break-words text-gray-800">{address}</p>
        </>
      ) : (
        <p className="text-sm text-gray-600">No wallet connected.</p>
      )}
    </div>
  );
}
