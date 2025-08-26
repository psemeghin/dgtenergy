// src/components/DashboardSection.tsx
export default function DashboardSection() {
  return (
    <section className="bg-white py-24 px-6 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Protocol Dashboard
        </h2>
        <p className="text-lg text-gray-600 font-sans mb-12 max-w-3xl mx-auto">
          Transparent and real-time data from our energy-backed operations and on-chain performance.
        </p>

        <div className="grid md:grid-cols-4 gap-6 text-left">
          {/* Metric 1 */}
          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 hover:shadow transition">
            <h3 className="text-2xl font-bold text-energy-blue mb-1">$4.2M</h3>
            <p className="text-sm text-gray-500 font-sans">
              Real-World Assets Under Management
            </p>
          </div>

          {/* Metric 2 */}
          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 hover:shadow transition">
            <h3 className="text-2xl font-bold text-energy-blue mb-1">11,111,111</h3>
            <p className="text-sm text-gray-500 font-sans">
              DGTE Tokens in Seed Round
            </p>
          </div>

          {/* Metric 3 */}
          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 hover:shadow transition">
            <h3 className="text-2xl font-bold text-energy-blue mb-1">15–30% APY</h3>
            <p className="text-sm text-gray-500 font-sans">
              Target Staking Yield (USDT)
            </p>
          </div>

          {/* Metric 4 */}
          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 hover:shadow transition">
            <h3 className="text-2xl font-bold text-energy-blue mb-1">100%</h3>
            <p className="text-sm text-gray-500 font-sans">
              On-Chain Transparency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
