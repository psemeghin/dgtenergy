export default function WalletOptions() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Choose your wallet</h2>
      <div className="flex justify-center space-x-6">
        <img src="/icons/metamask.svg" alt="Metamask" className="h-10" />
        <img src="/icons/walletconnect.svg" alt="WalletConnect" className="h-10" />
        <img src="/icons/trustwallet.svg" alt="TrustWallet" className="h-10" />
        <img src="/icons/coinbasewallet.svg" alt="CoinbaseWallet" className="h-10" />
      </div>
    </section>
  );
}
