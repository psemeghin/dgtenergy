// src/pages/_app.tsx

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit';

import { wagmiConfig, chains } from '../lib/wallet';
import '@rainbow-me/rainbowkit/styles.css';

import Header from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DGT-Energy Token Sale</title>
      </Head>

      <WagmiConfig config={wagmiConfig}>
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
      </WagmiConfig>
    </>
  );
}
