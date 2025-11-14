// src/components/DashboardSection.tsx
export default function DashboardSection() {
  return (
    <section className="bg-neutral-100 py-24 px-6 text-graphite-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Protocol Dashboard
        </h2>
        <p className="text-lg text-neutral-600 font-sans mb-12 max-w-3xl mx-auto">
          Transparent and real-time data from our energy-backed operations and on-chain performance.
        </p>

        <div className="grid md:grid-cols-4 gap-6 text-left">
          <div className="p-6 border border-neutral-200 rounded-lg bg-neutral-50 hover:shadow transition flex flex-col">
            <img
              src="/icons/icon-treasury.svg"
              alt="Treasury"
              className="w-8 h-8 mb-3"
            />
            <h3 className="text-2xl font-bold text-petroleum-900 font-display">$0</h3>
            <p className="text-sm text-graphite-900 font-sans font-semibold">
              Real-World Assets Under Management
            </p>
            <small className="text-xs text-petroleum-900 mt-auto">Target (2026): $35M+ (Rounds 1-70)</small>
          </div>

          {/* Metric 2 */}
          <div className="p-6 border border-neutral-200 rounded-lg bg-neutral-50 hover:shadow transition flex flex-col">
            <img
              src="/icons/icon-seed.svg"
              alt="Seed Round"
              className="w-8 h-8 mb-3"
            />
            <h3 className="text-2xl font-bold text-petroleum-900 font-display">0 DGT3</h3>
            <p className="text-sm text-graphite-900 font-sans font-semibold">
              Tokens in Staking
            </p>
            <small className="text-xs text-petroleum-900 mt-auto">Whitelist Target: 33.3M (3.3% supply)</small>
          </div>

          {/* Metric 3 */}
          <div className="p-6 border border-neutral-200 rounded-lg bg-neutral-50 hover:shadow transition flex flex-col">
            <img
              src="/icons/icon-staking.svg"
              alt="Staking"
              className="w-8 h-8 mb-3"
            />
            <h3 className="text-2xl font-bold text-petroleum-900 font-display">15–22% APY</h3>
            <p className="text-sm text-graphite-900 font-sans font-semibold">
              Target Staking Yield (USDT)
            </p>
            <small className="text-xs text-petroleum-900 mt-auto">Variable, performance-based (net)</small>
          </div>

          {/* Metric 4 */}
          <div className="p-6 border border-neutral-200 rounded-lg bg-neutral-50 hover:shadow transition flex flex-col">
            <img
              src="/icons/icon-security.svg"
              alt="Transparency"
              className="w-8 h-8 mb-3"
            />
            <h3 className="text-2xl font-bold text-petroleum-900 font-display">100%</h3>
            <p className="text-sm text-graphite-900 font-sans font-semibold">
              On-Chain Transparency
            </p>
            <small className="text-xs text-petroleum-900 mt-auto">All allocations verifiable</small>
          </div>
        </div>
      </div>
    </section>
  );
}
