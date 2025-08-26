// src/components/UtilitySection.tsx
export default function UtilitySection() {
  return (
    <section className="bg-energy-gray text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Token Utility
        </h2>
        <p className="text-lg font-sans text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          DGTEnergy is not just a token — it's a real asset access key.
          Every DGT token unlocks functions connected to the performance of clean energy assets, treasury growth, and user governance.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 1. Governance */}
          <div className="bg-[#2F3E46] border border-gray-600 rounded-lg p-6 text-left hover:shadow-lg transition">
            <img
              src="/icons/icon-dao.svg"
              alt="DAO Governance"
              className="w-10 h-10 mb-4"
            />
            <h3 className="text-xl font-display font-semibold mb-2">
              DAO Governance
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Token holders vote on proposals and treasury management decisions via smart contracts.
            </p>
          </div>

          {/* 2. Access to Yield */}
          <div className="bg-[#2F3E46] border border-gray-600 rounded-lg p-6 text-left hover:shadow-lg transition">
            <img
              src="/icons/icon-yield.svg"
              alt="Yield Access"
              className="w-10 h-10 mb-4"
            />
            <h3 className="text-xl font-display font-semibold mb-2">
              Yield Access
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Staking rewards distributed in USDT, linked to real revenue of energy operations.
            </p>
          </div>

          {/* 3. Treasury Access */}
          <div className="bg-[#2F3E46] border border-gray-600 rounded-lg p-6 text-left hover:shadow-lg transition">
            <img
              src="/icons/icon-treasury.svg"
              alt="Treasury"
              className="w-10 h-10 mb-4"
            />
            <h3 className="text-xl font-display font-semibold mb-2">
              Treasury Transparency
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              The treasury holds real-world assets and is visible via public dashboards, including staking pools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
