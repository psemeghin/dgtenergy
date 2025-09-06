'use client';

import { useAccount } from 'wagmi/hooks';

export default function WalletOverview() {
  const { address, isConnected } = useAccount();

  if (!isConnected) return null;

  return (
    <div className="text-sm text-gray-600 mt-4">
      Conectado: <span className="font-mono">{address}</span>
    </div>
  );
}
