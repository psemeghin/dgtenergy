// src/components/Header.tsx
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md px-4 py-3 shadow-sm flex justify-between items-center transition-all duration-300">
      <div className="flex items-center space-x-2">
        {/* Ícone da logo (sempre visível) */}
        <Link href="/home">
          <a>
            <img
              src="/icons/logo-icon.svg"
              alt="DGT Logo Icon"
              className="w-8 h-8"
            />
          </a>
        </Link>

        {/* Texto da logo (visível apenas em md+, some ao rolar) */}
        <img
          src="/icons/logo-full.svg"
          alt="DGT Logo Full"
          className={`hidden md:inline-block h-6 transition-all duration-300 ${
            scrolled ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        />
      </div>

      {/* Navegação desktop */}
      <nav className="space-x-4 hidden md:flex text-white font-sans text-sm">
        <Link href="/rounds"><a>Rounds</a></Link>
        <Link href="/desk"><a>Desk</a></Link>
        <Link href="/data"><a>Data</a></Link>
        <Link href="/governance"><a>Governance</a></Link>
        <Link href="/connect"><a>Connect</a></Link>
      </nav>

      {/* Menu mobile */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}
