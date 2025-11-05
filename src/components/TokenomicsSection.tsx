export default function TokenomicsSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-center">Tokenomics</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-white p-6 rounded shadow-md">
          <ul className="text-neutral-700 space-y-2">
            <li><strong>Total Supply:</strong> 1,000,000,000 DGT (fixed at genesis)</li>
            <li><strong>Seed Round:</strong> 11,666,667 tokens (420k USDT at 0.036 USDT/DGTE)</li>
            <li><strong>Progressive Rounds:</strong> Step-up model (+0.5–0.8% per round)</li>
            <li><strong>Treasury:</strong> Unsold tokens remain locked, no burn/mint</li>
            <li><strong>Utility:</strong> Staking in USDT, governance via Snapshot, gated dashboards</li>
            <li><strong>Note:</strong> DGTEnergy is a utility token; it does not confer equity, debt or profit-sharing rights.</li>
          </ul>
          <a
            href="/docs/tokenomics.pdf"
            className="inline-block mt-4 text-blue-600 underline hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Download Tokenomics (PDF)
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src="/icons/icon-doc-tokenomics.svg"
            alt="Tokenomics Icon"
            className="h-40 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
