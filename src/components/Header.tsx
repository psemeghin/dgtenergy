import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md px-4 py-3 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-y-4">
        {/* Logo e texto */}
        <div className="flex items-center space-x-2 justify-center md:justify-start">
          <Link href="/home">
            <a>
              <img
                src="/icons/logo-icon.svg"
                alt="DGT Logo Icon"
                className="w-8 h-8"
              />
            </a>
          </Link>
          <img
            src="/icons/logo-full.svg"
            alt="DGT Logo Full"
            className={`h-6 transition-all duration-300 ${
              scrolled ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          />
        </div>

        {/* Menu responsivo corrigido */}
        <nav className="flex flex-col items-center md:flex-row md:space-x-6 text-white font-sans text-sm space-y-2 md:space-y-0">
          <Link href="/rounds"><a>Rounds</a></Link>
          <Link href="/desk"><a>Desk</a></Link>
          <Link href="/data"><a>Data</a></Link>
          <Link href="/governance"><a>Governance</a></Link>
          <Link href="/connect"><a>Connect</a></Link>
        </nav>
      </div>
    </header>
  );
}
