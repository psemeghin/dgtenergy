'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function ConnectWallet() {
  return (
    <div className="flex justify-center my-6">
      <ConnectButton showBalance={false} />
    </div>
  );
}