// src/components/WalletOptions.tsx

export default function WalletOptions() {
  const wallets = [
    { name: "MetaMask", icon: "/icons/metamask.svg" },
    { name: "WalletConnect", icon: "/icons/walletconnect.svg" },
    { name: "Trust Wallet", icon: "/icons/trustwallet.svg" },
    { name: "Coinbase Wallet", icon: "/icons/coinbasewallet.svg" },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Choose a Wallet</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col items-center justify-center hover:shadow-md transition"
            >
              <img src={wallet.icon} alt={wallet.name} className="h-10 mb-3" />
              <span className="font-semibold">{wallet.name}</span>
            </button>
          ))}
        </div>
        <p className="text-center text-sm text-gray-600 mt-6">
          Your wallet remains under your control. DGTEnergy never stores private keys.
        </p>
      </div>
    </section>
  );
}
