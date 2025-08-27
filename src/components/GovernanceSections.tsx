// src/components/GovernanceSections.tsx

export default function GovernanceSections() {
  return (
    <section className="py-16 px-6 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-3xl font-display font-bold mb-6">Governance Details</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold">Proposal Lifecycle</h3>
            <p>Forum → Draft → Voting (5 days) → Execution.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Voting Mechanics</h3>
            <p>One-token-one-vote, delegation supported.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Treasury Control</h3>
            <p>Hybrid multisig + DAO oversight.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Safeguards</h3>
            <p>Minimum quorum, delays, contributor reputation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
