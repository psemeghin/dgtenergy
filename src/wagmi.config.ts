// src/wagmi.config.ts

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { bsc } from 'wagmi/chains';
import { createConfig } from 'wagmi';
import { publicClient, webSocketPublicClient } from 'wagmi/clients';

export const chains = [bsc];

export const config = createConfig(
  getDefaultConfig({
    appName: 'DGT-Energy Token Sale',
    projectId: 'a6bc7e0b017a6a0765d022bf838de533', // ← Troque pelo seu ID da WalletConnect
    chains,
    ssr: false,
  })
);
