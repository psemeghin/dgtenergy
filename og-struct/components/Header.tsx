// src/components/Header.tsx
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[90] border-b border-black/5 ${
        scrolled
          ? 'bg-basewhite/90 backdrop-blur supports-[backdrop-filter]:bg-basewhite/80 shadow-sm'
          : 'bg-basewhite/95'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Link href="/home" aria-label="DGTEnergy — Home" className="flex items-center gap-2">
            <img src="/icons/logo-icon.svg" alt="DGTEnergy symbol" className="h-8 w-auto" />
            <img
              src="/icons/logo-full.svg"
              alt="DGTEnergy"
              className={`hidden md:block h-6 transition-all duration-300 ${
                scrolled ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            />
          </Link>
        </div>

        {/* Navigation + Status (ConnectButton no canto direito) */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-5 text-sm font-sans text-graphite">
            <Link href="/rounds" className="hover:text-petroleum hover:opacity-90 transition">Rounds</Link>
            <Link href="/desk" className="hover:text-petroleum hover:opacity-90 transition">Desk</Link>
            <Link href="/data" className="hover:text-petroleum hover:opacity-90 transition">Data</Link>
            <Link href="/governance" className="hover:text-petroleum hover:opacity-90 transition">Governance</Link>
            <Link href="/connect" className="hover:text-petroleum hover:opacity-90 transition">Connect</Link>
          </nav>

          {/* Único ícone/botão de status */}
          <div className="relative z-[100]">
            <ConnectButton
              label="Connect Wallet"
              accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }}
              showBalance={false}
              chainStatus="icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
}