// src/components/Header.tsx
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/home">
          <span className="text-2xl font-display font-bold text-energy-blue cursor-pointer transition-transform duration-300 hover:scale-105">
            DGT<span className="text-energy-green">Energy</span>
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm font-sans font-medium text-gray-800">
          <Link href="/rounds"><span className="hover:text-energy-blue cursor-pointer">Rounds</span></Link>
          <Link href="/desk"><span className="hover:text-energy-blue cursor-pointer">Desk</span></Link>
          <Link href="/data"><span className="hover:text-energy-blue cursor-pointer">Data</span></Link>
          <Link href="/governance"><span className="hover:text-energy-blue cursor-pointer">Governance</span></Link>
          <Link href="/connect"><span className="hover:text-energy-blue cursor-pointer">Connect</span></Link>
        </nav>
      </div>
    </header>
  );
}
