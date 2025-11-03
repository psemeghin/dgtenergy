// src/components/GovernanceSections.tsx

export default function GovernanceSections() {
  return (
    <section className="py-16 px-6 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Snapshot & Voting */}
        <div className="bg-white p-8 shadow border border-gray-200 rounded-lg">
          <h2 className="text-2xl font-bold text-energy-blue mb-2">Proposal & Voting</h2>
          <p className="text-gray-700 font-sans mb-4">
            Proposals are created by the community, discussed in forum, and voted on Snapshot. One token equals one vote.
          </p>
          <a
            href="https://snapshot.org/#/dgte.eth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-energy-blue hover:bg-energy-blue/90 px-5 py-2 rounded font-semibold transition"
          >
            Go to Snapshot
          </a>
        </div>

        {/* Governance Framework */}
        <div className="bg-white p-8 shadow border border-gray-200 rounded-lg">
          <h2 className="text-2xl font-bold text-energy-blue mb-4">Governance Framework</h2>
          <ul className="list-disc list-inside text-gray-700 font-sans space-y-2">
            <li>Proposal Lifecycle → Forum → Draft → Voting (5 days) → Execution</li>
            <li>Voting Mechanics → One-token-one-vote, delegation supported</li>
            <li>Treasury Control → Hybrid multisig + DAO oversight</li>
            <li>Safeguards → Minimum quorum, delays, contributor reputation</li>
          </ul>
        </div>

        {/* Compliance & Legal Notes */}
        <div className="bg-white p-8 shadow border border-gray-200 rounded-lg">
          <h2 className="text-2xl font-bold text-energy-blue mb-2">Compliance & Legal Notes</h2>
          <p className="text-gray-700 font-sans leading-relaxed">
            DGTEnergy is a utility token, not equity, debt or profit-sharing. Governance is consultative and progressively decentralized. 
            DAO activities are conducted under compliant legal wrappers in crypto-friendly jurisdictions.
          </p>
          <div className="mt-4 space-x-4">
            <a href="/docs/whitepaper.pdf" target="_blank" className="text-energy-blue underline">Whitepaper</a>
            <a href="/docs/legal_terms.pdf" target="_blank" className="text-energy-blue underline">Legal Terms</a>
          </div>
        </div>

      </div>
    </section>
  );
}
