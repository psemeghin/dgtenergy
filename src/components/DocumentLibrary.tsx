export default function DocumentLibrary() {
  return (
    <section className="max-w-4xl mx-auto text-neutral-800">
      <h2 className="text-2xl font-bold mb-6 text-center">Document Library</h2>
      <ul className="space-y-4">
        <li>
          <a href="/docs/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
            📄 Whitepaper (PDF) — Full protocol description: tokenomics, governance, compliance and roadmap.
          </a>
        </li>
        <li>
          <a href="/docs/product1_factsheet.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
            📄 Product 1 Factsheet (PDF) — Energy receivables anticipation: structure, projected 21% yield, legal wrappers.
          </a>
        </li>
        <li>
          <a href="/docs/legal_terms.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
            📄 Legal Structure & Terms (PDF) — Utility token classification, disclaimers, jurisdictional scope.
          </a>
        </li>
        <li>
          <a href="/docs/audits.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
            📄 Smart Contract Audits (PDF) — Third-party security reviews of DGTEnergy’s smart contracts.
          </a>
        </li>
        <li>
          <a href="/docs/governance_framework.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
            📄 DAO Governance Framework (PDF) — Hybrid DAO rules, proposal lifecycle, treasury controls.
          </a>
        </li>
      </ul>
    </section>
  );
}
