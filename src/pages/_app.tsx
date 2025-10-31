// src/pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

import { getDefaultConfig, RainbowKitProvider, lightTheme, darkTheme } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { bsc } from 'wagmi/chains';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const queryClient = new QueryClient();

const WALLETCONNECT_PROJECT_ID =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'a6bc7e0b017a6a0765d022bf838de533';

const config = getDefaultConfig({
  appName: 'DGTEnergy',
  projectId: WALLETCONNECT_PROJECT_ID,
  chains: [bsc],
});

function GlobalGuards() {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);
  return null;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#005F73" />
        <meta
          name="description"
          content="DGTEnergy is a utility-token protocol that provides verifiable access to staking, governance, and data visibility utilities anchored to audited energy operations."
        />
        <meta property="og:site_name" content="DGTEnergy" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>DGTEnergy — Protocol DApp</title>
      </Head>

      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={{ lightMode: lightTheme(), darkMode: darkTheme() } as any}>
            <GlobalGuards />
            <Header />
            {/* Só Header fixo no topo → compensação menor */}
            <div className="pt-20 min-h-screen bg-basewhite">
              <Component {...pageProps} />
              <Footer />
            </div>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}