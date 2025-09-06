// src/wagmi.ts
import { configureChains, createConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { bsc } from 'wagmi/chains';

const { chains, publicClient } = configureChains(
  [bsc],
  [publicProvider()],
);

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  chains,
});
