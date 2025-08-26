export default function FAQSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-6 text-center font-display">FAQ — Frequently Asked Questions</h2>
      <ul className="text-gray-300 space-y-4 font-sans">
        <li><strong>Is DGTEnergy a share?</strong> No. It is a utility token without equity or debt nature.</li>
        <li><strong>Is KYC mandatory?</strong> Only for institutional rounds. Open access otherwise.</li>
        <li><strong>Which chains are supported?</strong> Ethereum, BNB Chain, Polygon, Solana.</li>
        <li><strong>How are rewards received?</strong> Via staking in USDT, based on performance.</li>
      </ul>
    </section>
  );
}