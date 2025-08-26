// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg font-display font-semibold text-white mb-3">DGTEnergy</h3>
          <p className="text-sm">
            A decentralized gateway to real-world energy investment. Transparent, secure, and anchored in performance.
          </p>
          <div className="flex space-x-4 mt-4 text-sm text-energy-blue">
            <a href="https://t.me/DGTEnergy" target="_blank">Telegram</a>
            <a href="https://discord.gg/DGTEnergy" target="_blank">Discord</a>
            <a href="https://x.com/DGTEnergy" target="_blank">Twitter/X</a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-2">Institutional</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/docs/whitepaper.pdf" className="hover:underline">Whitepaper</a></li>
            <li><a href="/docs/tokenomics.pdf" className="hover:underline">Tokenomics</a></li>
            <li><a href="/docs/legal_terms.pdf" className="hover:underline">Legal Terms</a></li>
            <li><a href="mailto:info@dgte.energy" className="hover:underline">info@dgte.energy</a></li>
          </ul>
        </div>
      </div>

      <div className="text-xs text-center mt-10 text-gray-500">
        &copy; {new Date().getFullYear()} DGTEnergy. All rights reserved.
      </div>
    </footer>
  );
}
