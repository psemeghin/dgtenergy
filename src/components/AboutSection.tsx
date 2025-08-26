// src/components/AboutSection.tsx
export default function AboutSection() {
  return (
    <section className="py-20 bg-[#FAFAFA] text-gray-800 px-6" id="about">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Real-World Energy Meets Web3
        </h2>
        <p className="max-w-2xl mx-auto text-lg font-sans text-gray-600 mb-12">
          DGT-Energy connects institutional-grade energy receivables with decentralized Web3 technology. Our utility token unlocks access, rewards, and transparency in the energy investment ecosystem.
        </p>

        {/* Grid de 3 ícones explicativos */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* 1. Real Asset Backing */}
          <div className="flex flex-col items-center">
            <img
              src="/icons/energy-projects.svg"
              alt="Real Assets"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Real Asset Backing</h3>
            <p className="text-sm text-gray-600">
              Powered by verified energy receivables and revenue-generating operations.
            </p>
          </div>

          {/* 2. Decentralized Governance */}
          <div className="flex flex-col items-center">
            <img
              src="/icons/dao.svg"
              alt="Governance"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Decentralized Governance</h3>
            <p className="text-sm text-gray-600">
              DAO-based participation lets holders contribute to protocol decisions.
            </p>
          </div>

          {/* 3. Transparent Performance */}
          <div className="flex flex-col items-center">
            <img
              src="/icons/performance.svg"
              alt="Performance"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Transparent Performance</h3>
            <p className="text-sm text-gray-600">
              Access to on-chain metrics, audited results, and real-world reports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
