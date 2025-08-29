// src/pages/connect.tsx
import Head from 'next/head';
import ConnectButton from '../components/ConnectButton';
import WalletOverview from '../components/WalletOverview';

export default function Connect() {
  return (
    <>
      <Head>
        <title>Connect Wallet | DGTEnergy</title>
      </Head>
      <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-energy-blue mb-6 text-center">
          Connect Your Wallet
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-xl text-center">
          Secure access to your DGTEnergy balance and tools.
        </p>
        <ConnectButton />
        <WalletOverview />
        <div className="mt-8 text-sm text-center text-gray-500 max-w-md">
          For your security, always verify you are on the official DGTEnergy domain
          (<strong>dgte.energy</strong>). Never share your private keys or seed phrase.
        </div>
      </main>
    </>
  );
}
