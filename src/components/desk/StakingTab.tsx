export default function StakingTab() {
  return (
    <div className="p-6 bg-white rounded-lg shadow border border-gray-200">
      <h2 className="text-xl font-bold mb-2">Staking Dashboard</h2>
      <p className="text-gray-600 text-sm mb-4">
        Rewards in USDT are proportional to protocol performance. Non-guaranteed, delivered periodically via smart contract.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded shadow text-center">
          <div className="text-lg font-semibold">Total Staked</div>
          <div className="text-energy-blue font-bold text-2xl">—</div>
        </div>
        <div className="p-4 bg-gray-50 rounded shadow text-center">
          <div className="text-lg font-semibold">Rewards Distributed</div>
          <div className="text-energy-blue font-bold text-2xl">—</div>
        </div>
        <div className="p-4 bg-gray-50 rounded shadow text-center">
          <div className="text-lg font-semibold">Active Participants</div>
          <div className="text-energy-blue font-bold text-2xl">—</div>
        </div>
      </div>
    </div>
  );
}
