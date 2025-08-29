// src/pages/connect.tsx
'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function ConnectPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Connect Your Wallet</h1>
      <p className="text-gray-500 text-center max-w-xl mb-6">
        Secure access to your DGTEnergy balance and tools.
      </p>

      <div className="mb-6">
        <ConnectButton />
      </div>

      <p className="text-sm text-gray-400 mt-6 text-center max-w-xl">
        For your security, always verify you are on the official DGTEnergy domain <strong>(dgte.energy)</strong>.
        Never share your private keys or seed phrases. Smart contracts are audited and interactions are on-chain.
      </p>
    </div>
  );
}
