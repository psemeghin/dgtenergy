// src/pages/_app.tsx
'use client';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@rainbow-me/rainbowkit/styles.css';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  darkTheme,
  lightTheme
} from '@rainbow-me/rainbowkit';

import { config, chains } from '../wagmi.config';
import Header from '../components/Header';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DGT-Energy Token Sale</title>
      </Head>

      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            chains={chains}
            theme={lightTheme({
              accentColor: '#facc15', // amarelo padrão DGT (tailwind yellow-400)
              accentColorForeground: 'black',
              borderRadius: 'medium',
            })}
            modalSize="compact"
            showRecentTransactions={true}
          >
            <Header />
            <Component {...pageProps} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}
