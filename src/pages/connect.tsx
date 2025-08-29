// src/pages/connect.tsx
import Head from 'next/head'
import WalletOverview from '../components/WalletOverview'

export default function ConnectPage() {
  return (
    <>
      <Head>
        <title>Connect Wallet – DGTEnergy</title>
      </Head>

      <main className="min-h-screen bg-white text-energy-gray px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Connect Your Wallet
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 font-sans">
            Secure access to your DGTEnergy balance and tools.
          </p>

          {/* Botões de conexão (modo placeholder MVP) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mb-12">
            <button className="p-3 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition">
              MetaMask
            </button>
            <button className="p-3 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition">
              WalletConnect
            </button>
            <button className="p-3 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition">
              Trust Wallet
            </button>
            <button className="p-3 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition">
              Coinbase Wallet
            </button>
          </div>

          {/* Overview simulado */}
          <WalletOverview />

          {/* Notas de segurança */}
          <div className="mt-16 text-sm text-gray-500 text-left max-w-xl mx-auto">
            <p>
              For your security, always verify you are on the official DGTEnergy
              domain (<strong>dgte.energy</strong>).
            </p>
            <p className="mt-1">
              Never share your private keys or seed phrase. Smart contracts are
              audited and interactions are on-chain.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
