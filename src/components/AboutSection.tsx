
export default function AboutSection() {
  return (
    <section className="relative py-24 bg-neutral-50 text-energy-gray px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-energy-blue">
          What is DGTEnergy?
        </h2>
        <p className="text-lg text-neutral-600 font-sans mb-8 max-w-3xl mx-auto leading-relaxed">
          DGTEnergy is a decentralized gateway to verified energy receivables.
          Our utility token provides transparent access to staking, governance, and protocol data, anchored in real-world energy operations.
        </p>
      </div>

      {/* Blocos informativos */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        <div className="bg-neutral-50 rounded-lg shadow-md p-6 border border-neutral-200">
          <img
            src="/icons/icon-treasury.svg"
            alt="Treasury"
            className="w-10 h-10 mb-4"
          />
          <h3 className="text-xl font-display font-semibold text-energy-blue mb-2">
            Treasury Anchored
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed">
            100% of net capital allocated to verified energy receivables, locked in transparent treasury with programmable rules and multisig controls.
          </p>
        </div>

        <div className="bg-neutral-50 rounded-lg shadow-md p-6 border border-neutral-200">
          <img
            src="/icons/icon-staking.svg"
            alt="Staking"
            className="w-10 h-10 mb-4"
          />
          <h3 className="text-xl font-display font-semibold text-energy-blue mb-2">
            Performance Allocations
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Token holders access performance-based USDT distributions via staking, derived from verified energy operations, net of administrative fees.
          </p>
        </div>

        <div className="bg-neutral-50 rounded-lg shadow-md p-6 border border-neutral-200">
          <img
            src="/icons/icon-security.svg"
            alt="Audited"
            className="w-10 h-10 mb-4"
          />
          <h3 className="text-xl font-display font-semibold text-energy-blue mb-2">
            Audited & Transparent
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Audited protocol, public treasury dashboards, and full legal compliance across jurisdictions. Every allocation is verifiable on-chain.
          </p>
        </div>
      </div>
    </section>
  );
}
