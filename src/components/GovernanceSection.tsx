// src/components/GovernanceSection.tsx
export default function GovernanceSection() {
  return (
    <section className="bg-energy-gray py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Governance & Protocol Control
        </h2>
        <p className="text-lg text-gray-300 font-sans mb-12 max-w-2xl mx-auto">
          DGT-Energy is governed by transparent rules, partially controlled by tokenholders and anchored in real-world energy finance.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* Governance Card 1 */}
          <div className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-energy-blue transition">
            <h3 className="text-xl font-semibold font-display mb-2">Protocol Treasury</h3>
            <p className="text-sm text-gray-300">
              Managed by smart contracts and subject to public audits. Funds are allocated based on predefined rules and tokenholder voting.
            </p>
          </div>

          {/* Governance Card 2 */}
          <div className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-energy-blue transition">
            <h3 className="text-xl font-semibold font-display mb-2">DAO Participation</h3>
            <p className="text-sm text-gray-300">
              Tokenholders vote on proposals related to new deals, treasury allocation and protocol evolution. Voting is transparent and open.
            </p>
          </div>

          {/* Governance Card 3 */}
          <div className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-energy-blue transition">
            <h3 className="text-xl font-semibold font-display mb-2">Audits & Compliance</h3>
            <p className="text-sm text-gray-300">
              Regular external audits and public dashboards ensure credibility and alignment with global standards.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/docs/governance_framework.pdf"
            target="_blank"
            className="inline-block bg-energy-sand text-white font-medium px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            View Governance Framework
          </a>
        </div>
      </div>
    </section>
  );
}
