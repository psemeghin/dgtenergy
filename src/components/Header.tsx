// src/components/Header.tsx
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/home" passHref legacyBehavior>
            <a>
              <img
                src="/icons/logo-icon.svg"
                alt="DGT Logo Icon"
                className="h-[23%] max-h-10 w-auto"
              />
            </a>
          </Link>
          <img
            src="/icons/logo-full.svg"
            alt="DGT Logo Full"
            className={`hidden md:inline-block h-6 transition-all duration-300 ${
              scrolled ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          />
        </div>

        {/* Menu de navegação */}
        <nav className="flex space-x-4 text-white font-sans text-sm">
          <Link href="/rounds" passHref legacyBehavior><a className="hover:text-yellow-400">Rounds</a></Link>
          <Link href="/desk" passHref legacyBehavior><a className="hover:text-yellow-400">Desk</a></Link>
          <Link href="/data" passHref legacyBehavior><a className="hover:text-yellow-400">Data</a></Link>
          <Link href="/governance" passHref legacyBehavior><a className="hover:text-yellow-400">Governance</a></Link>
          <Link href="/connect" passHref legacyBehavior><a className="hover:text-yellow-400">Connect</a></Link>
        </nav>
      </div>
    </header>
  );
}
