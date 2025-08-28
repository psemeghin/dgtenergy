
export default function AboutSection() {
  return (
    <section className="relative py-24 bg-white text-energy-gray px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-energy-blue">
          What is DGTEnergy?
        </h2>
        <p className="text-lg text-gray-600 font-sans mb-8 max-w-3xl mx-auto leading-relaxed">
          DGTEnergy is a decentralized gateway to real-world energy investments.
          Our utility token is economically anchored in receivables from clean energy operations, enabling global access to yield, transparency, and tokenized infrastructure.
        </p>
      </div>

      {/* Blocos informativos */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        <div className="bg-[#FAFAFA] rounded-lg shadow-md p-6 border border-gray-200">
          <img
            src="/icons/icon-treasury.svg"
            alt="Treasury"
            className="w-10 h-10 mb-4"
          />
          <h3 className="text-xl font-display font-semibold text-energy-blue mb-2">
            Treasury Anchored
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Backed by actual energy receivables, locked in a transparent treasury with programmable rules.
          </p>
        </div>

        <div className="bg-[#FAFAFA] rounded-lg shadow-md p-6 border border-gray-200">
          <img
            src="/icons/icon-staking.svg"
            alt="Staking"
            className="w-10 h-10 mb-4"
          />
          <h3 className="text-xl font-display font-semibold text-energy-blue mb-2">
            Yield via Staking
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Token holders can stake to receive performance-based rewards in stablecoins, directly from protocol results.
          </p>
        </div>

        <div className="bg-[#FAFAFA] rounded-lg shadow-md p-6 border border-gray-200">
          <img
            src="/icons/icon-security.svg"
            alt="Audited"
            className="w-10 h-10 mb-4"
          />
          <h3 className="text-xl font-display font-semibold text-energy-blue mb-2">
            Audited & Transparent
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Audited protocol, public treasury dashboard, and full legal compliance across jurisdictions.
          </p>
        </div>
      </div>
    </section>
  );
}
