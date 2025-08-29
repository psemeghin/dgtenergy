// src/components/ConnectButton.tsx
'use client';

import { ConnectButton as RKConnectButton } from '@rainbow-me/rainbowkit';

export default function ConnectButton() {
  return (
    <div className="flex justify-center items-center py-6">
      <RKConnectButton
        showBalance={false}
        accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }}
        chainStatus="icon"
      />
    </div>
  );
}
