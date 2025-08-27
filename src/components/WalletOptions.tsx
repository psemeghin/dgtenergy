// src/components/WalletOptions.tsx

export default function WalletOptions() {
  return (
    <section className="bg-white text-center">
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-6">Choose your wallet</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          <div>
            <img src="/icons/icon-wallet-metamask.svg" alt="MetaMask" className="mx-auto h-12 mb-2" />
            <p className="text-sm">MetaMask</p>
          </div>
          <div>
            <img src="/icons/icon-wallet-walletconnect.svg" alt="WalletConnect" className="mx-auto h-12 mb-2" />
            <p className="text-sm">WalletConnect</p>
          </div>
          <div>
            <img src="/icons/icon-wallet-trust.svg" alt="Trust Wallet" className="mx-auto h-12 mb-2" />
            <p className="text-sm">Trust Wallet</p>
          </div>
          <div>
            <img src="/icons/icon-wallet-coinbase.svg" alt="Coinbase Wallet" className="mx-auto h-12 mb-2" />
            <p className="text-sm">Coinbase</p>
          </div>
        </div>
      </div>
    </section>
  );
}
