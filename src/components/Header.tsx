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
    <header className="sticky top-0 z-50 bg-black bg-opacity-70 backdrop-blur-md px-4 py-3 shadow-sm flex justify-between items-center transition-all duration-300">
      <div className="flex items-center space-x-2">
        <Link href="/home">
          <a className="flex items-center space-x-2">
            {/* Ícone da logomarca */}
            <img
              src="/logo/logo_icon.svg"
              alt="DGT Icon"
              className="w-8 h-8"
            />
            {/* Marca escrita (logotipo completo) */}
            <img
              src="/logo/logo_full.svg"
              alt="DGT Energy Logo"
              className="hidden md:inline-block h-6"
            />
          </a>
        </Link>
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
