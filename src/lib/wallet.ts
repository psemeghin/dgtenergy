// src/lib/wallet.ts
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { bsc, bscTestnet } from 'wagmi/chains';

export const { chains, publicClient } = configureChains(
  [bsc, bscTestnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'DGTEnergy',
  projectId: 'YOUR_PROJECT_ID', // opcional com WalletConnect v2
  chains,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
