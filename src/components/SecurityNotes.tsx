export default function SecurityNotes() {
  return (
    <section className="py-16 px-6 bg-white text-graphite-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Security Notes</h2>
        <ul className="list-disc list-inside text-sm text-neutral-700">
          <li>Always verify you are on the official DGTEnergy domain.</li>
          <li>Never share your private keys or seed phrases.</li>
          <li>Only interact with verified smart contracts.</li>
          <li>All contracts are audited and interactions are on-chain.</li>
        </ul>
      </div>
    </section>
  );
}
