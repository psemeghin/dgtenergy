// src/components/SecurityNotes.tsx

export default function SecurityNotes() {
  return (
    <section className="py-16 px-6 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Security Notes</h2>
        <p className="mb-4">
          For your security, always verify you are on the official DGTEnergy domain: <strong>dgte.energy</strong>.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Never share your private keys or seed phrase.</li>
          <li>Only interact with verified smart contracts.</li>
          <li>Always use secure connections and devices.</li>
          <li>Smart contracts are audited and interactions are on-chain.</li>
        </ul>
      </div>
    </section>
  );
}
