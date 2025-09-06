'use client';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { bsc } from 'wagmi/chains';
import { createConfig } from 'wagmi';

export const config = createConfig(
  getDefaultConfig({
    appName: 'DGT-Energy Token Sale',
    projectId: 'a6b7ce0b017aa06765d022bf838de533',
    chains: [bsc],
    ssr: false,
  })
);