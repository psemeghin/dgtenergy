import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { mainnet, bsc } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

export const config = getDefaultConfig({
  appName: 'DGT–Energy Token Sale',
  projectId: 'a6bc7e0b017a6a0765d022bf838de533',
  chains: [bsc],
  ssr: false,
});