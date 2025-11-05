// src/components/RoadmapSection.tsx
export default function RoadmapSection() {
  return (
    <section className="bg-neutral-50 py-24 px-6 text-neutral-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          DGT-Energy Roadmap
        </h2>
        <p className="text-lg text-neutral-600 font-sans mb-12 max-w-2xl mx-auto">
          Structured milestones to build the most transparent and profitable real-world asset protocol in energy.
        </p>

        <div className="relative border-l-2 border-energy-blue pl-6 space-y-12 text-left">
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute -left-4 top-1 w-6 h-6 bg-energy-blue rounded-full border-4 border-white"></div>
            <h3 className="font-semibold text-xl mb-1">Q3 2025 — Genesis & Seed Round</h3>
            <p className="text-sm text-neutral-600 font-sans">
              Project launch, brand definition, whitepaper release, tokenomics finalization. Seed round opens.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="absolute -left-4 top-1 w-6 h-6 bg-energy-sand rounded-full border-4 border-white"></div>
            <h3 className="font-semibold text-xl mb-1">Q4 2025 — First Deals + Private Round</h3>
            <p className="text-sm text-neutral-600 font-sans">
              Initial operations with RWA energy receivables. Private round allocation with selected partners.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="absolute -left-4 top-1 w-6 h-6 bg-energy-gray rounded-full border-4 border-white"></div>
            <h3 className="font-semibold text-xl mb-1">Q1 2026 — Public Pre-Sale</h3>
            <p className="text-sm text-neutral-600 font-sans">
              Pre-sale round with public access. Token listing, staking module and first performance dashboard.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="absolute -left-4 top-1 w-6 h-6 bg-energy-green rounded-full border-4 border-white"></div>
            <h3 className="font-semibold text-xl mb-1">Q2–Q3 2026 — Scale & DAO Formation</h3>
            <p className="text-sm text-neutral-600 font-sans">
              DAO framework activation, expansion of token utility, cross-chain bridge and expansion of energy deals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
