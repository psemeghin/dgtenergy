// src/pages/_app.tsx
'use client';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { bsc } from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';

import Header from '../components/Header';

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: 'DGTEnergy',
  projectId: 'a6bc7e0b017a6a0765d022bf838de533',
  chains: [bsc],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DGT-Energy Token Sale</title>
      </Head>

      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider coolMode>
            <Header />
            <Component {...pageProps} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}