// src/components/desk/StakingTab.tsx
export default function StakingTab() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 font-display">Stake Your DGTEnergy</h2>
      <p className="text-sm text-gray-600 mb-6 font-sans">
        Earn USDT rewards based on protocol performance. Your tokens remain liquid — no lock-up required.
      </p>
      <div className="text-center text-gray-400 font-mono">
        {/* Future: wagmi integration */}
        [ Connect your wallet to access staking features ]
      </div>
    </div>
  );
}
