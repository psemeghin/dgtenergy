export default function UtilitySection() {
  return (
    <section className="bg-gray-900 py-20 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center font-display">Token Utility</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 border rounded text-center font-sans">Staking — Rewards in USDT</div>
        <div className="p-6 border rounded text-center font-sans">Governance — Vote in DAO</div>
        <div className="p-6 border rounded text-center font-sans">Access — Secure P2P Trading</div>
      </div>
    </section>
  );
}