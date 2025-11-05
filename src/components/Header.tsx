// src/components/Header.tsx
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';

import icon from '@/assets/logo-icon.svg'
import logo from '@/assets/logo-full.svg'

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
          ? 'bg-neutral-50/60 backdrop-blur-lg supports-[backdrop-filter]:bg-neutral-50/60 shadow-sm'
          : 'bg-neutral-50/60'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Link href="/" aria-label="DGTEnergy — Home" className="flex items-center gap-2">
            <Image src={icon} alt="DGTEnergy symbol" className="size-12" />
            <Image
              src={logo}
              alt="DGTEnergy"
              className={`hidden lg:block h-10 w-auto transition-all duration-300 ${
                scrolled ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            />
          </Link>
        </div>

        {/* Navigation + Status (ConnectButton no canto direito) */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-5 text-sm font-sans text-graphite-900">
            <Link href="/rounds" className="hover:text-petroleum-900 hover:opacity-90 transition">Rounds</Link>
            <Link href="/desk" className="hover:text-petroleum-900 hover:opacity-90 transition">Desk</Link>
            <Link href="/data" className="hover:text-petroleum-900 hover:opacity-90 transition">Data</Link>
            <Link href="/governance" className="hover:text-petroleum-900 hover:opacity-90 transition">Governance</Link>
            <Link href="/connect" className="hover:text-petroleum-900 hover:opacity-90 transition">Connect</Link>
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