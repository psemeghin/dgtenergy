export default function RoadmapSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-center">Roadmap</h2>
      <div className="max-w-4xl mx-auto space-y-4 text-gray-800">
        <div>
          <h3 className="font-semibold">Phase 0 – Foundation</h3>
          <ul className="list-disc list-inside">
            <li>Finalize tokenomics, governance & legal scope</li>
            <li>Build core staking, treasury, governance contracts</li>
            <li>Launch seed round</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Phase 1 – Protocol Launch (Q3 2025)</h3>
          <ul className="list-disc list-inside">
            <li>DApp v1 with staking & dashboard</li>
            <li>DAO portal and public sale</li>
            <li>First real-world capital deployment</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Phase 2 – Ecosystem Expansion (Q4 2025 – Q1 2026)</h3>
          <ul className="list-disc list-inside">
            <li>Multichain deployment</li>
            <li>Energy partnerships in LATAM, Africa, Southern Europe</li>
            <li>Launch grant fund and expand utilities</li>
            <li>Yield and impact dashboards</li>
            <li>Open-source documentation</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Phase 3 – DAO Maturity (2026)</h3>
          <ul className="list-disc list-inside">
            <li>Full DAO governance</li>
            <li>Institutional tools (APIs, dashboards)</li>
            <li>Advanced utility integrations</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Ongoing</h3>
          <ul className="list-disc list-inside">
            <li>Regular audits</li>
            <li>Legal reviews</li>
            <li>Community and education programs</li>
          </ul>
        </div>
        <a
          href="/docs/roadmap.pdf"
          className="inline-block mt-4 text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          📄 Download Full Roadmap (PDF)
        </a>
      </div>
    </section>
  );
}
