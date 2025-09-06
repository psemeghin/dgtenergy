// src/wagmi.config.ts

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { bsc } from 'wagmi/chains';
import { createConfig } from 'wagmi';
import { publicClient, webSocketPublicClient } from 'wagmi/clients';

export const chains = [bsc];

export const config = createConfig(
  getDefaultConfig({
    appName: 'DGT-Energy Token Sale',
    projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // ← Troque pelo seu ID da WalletConnect
    chains,
    ssr: false,
  })
);
