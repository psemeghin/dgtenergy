// src/components/WalletOptions.tsx
'use client';

import { useAccount } from 'wagmi';

export default function WalletOptions() {
  const { address, isConnected } = useAccount();

  if (!isConnected) return null;

  return (
    <div className="text-sm text-neutral-600 mt-4">
      Conectado: <span className="font-mono">{address}</span>
    </div>
  );
}