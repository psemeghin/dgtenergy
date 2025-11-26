// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Brand / About */}
        <div>
          <h3 className="text-lg font-display font-semibold text-graphite-900 mb-3">DGTEnergy</h3>
          <p className="text-sm text-graphite-900/80">
            A decentralized gateway to utility-based participation in real energy operations — transparent,
            compliant, and anchored in verifiable performance disclosures.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm">
            <a
              href="https://t.me/DgtEnergy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-petroleum-900 hover:opacity-80 underline underline-offset-2"
              aria-label="DGTEnergy on Telegram"
            >
              Telegram
            </a>
            <a
              href="https://discord.gg/K7bPtQhn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-petroleum-900 hover:opacity-80 underline underline-offset-2"
              aria-label="DGTEnergy on Discord"
            >
              Discord
            </a>
            <a
              href="https://x.com/DgtEnergy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-petroleum-900 hover:opacity-80 underline underline-offset-2"
              aria-label="DGTEnergy on X"
            >
              X (Twitter)
            </a>
            <a
              href="https://www.instagram.com/dgt.energy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-petroleum-900 hover:opacity-80 underline underline-offset-2"
              aria-label="DGTEnergy on Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61583193533557"
              target="_blank"
              rel="noopener noreferrer"
              className="text-petroleum-900 hover:opacity-80 underline underline-offset-2"
              aria-label="DGTEnergy on Facebook"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/dgt-energy-6a8293395/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-petroleum-900 hover:opacity-80 underline underline-offset-2"
              aria-label="DGTEnergy on LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Institutional */}
        <div>
          <h4 className="text-sm font-semibold text-graphite-900 mb-2">Institutional</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/data" className="text-graphite-900/80 hover:underline underline-offset-2">
                /rounds — whitelist
              </a>
            </li>
            <li>
              <a href="/data" className="text-graphite-900/80 hover:underline underline-offset-2">
                /data — transparency &amp; disclosures
              </a>
            </li>
            <li>
              <a href="/governance" className="text-graphite-900/80 hover:underline underline-offset-2">
                /governance — framework &amp; records
              </a>
            </li>
            <li>
              <a href="/connect" className="text-graphite-900/80 hover:underline underline-offset-2">
                /connect — wallet &amp; KYC onboarding
              </a>
            </li>
            <li>
              <a href="mailto:dgtenergy.setup@gmail.com" className="text-graphite-900/80 hover:underline underline-offset-2">
                dgtenergy.setup@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Compliance Disclaimer (mandatory) */}
      <div className="mx-auto max-w-7xl px-6 pb-8">
        <p className="text-xs leading-relaxed text-graphite-900/80">
          DGTEnergy is a utility-token protocol. Participation grants access to protocol utilities only — staking,
          governance, and data visibility — and does not represent equity, debt, or financial instruments. All
          allocations are performance-based, discretionary, and fully transparent on-chain.
        </p>
      </div>

      {/* Copyright */}
      <div className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-graphite-900/60 text-center">
          © {new Date().getFullYear()} DGTEnergy — All rights reserved.
        </div>
      </div>
    </footer>
  );
}