import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${
      scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/home" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="DGT-Energy" className="h-8 w-8" />
          <span className={`font-bold text-white transition-all ${
            scrolled ? "opacity-0 scale-90" : "opacity-100 scale-100"
          }`}>
            DGT-Energy
          </span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6 text-white font-medium">
          <Link href="/home">Home</Link>
          <Link href="/rounds">Rounds</Link>
          <Link href="/desk">Desk</Link>
          <Link href="/data">Docs</Link>
          <Link href="/governance">Governance</Link>
          <Link href="/connect">Connect</Link>
        </nav>
      </div>
    </header>
  );
}
