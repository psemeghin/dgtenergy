import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-60 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/home" className="flex items-center space-x-2">
          <img src="/icons/logo-icon.svg" alt="Logo" className="h-8 w-8" />
          <span className="hidden md:inline-block font-display text-lg font-semibold text-energy-blue">
            DGTEnergy
          </span>
        </Link>

        {/* Navigation (sempre visível) */}
        <nav className="flex flex-wrap gap-4 text-sm md:text-base font-sans text-energy-gray">
          <Link href="/home" className="hover:text-energy-blue transition">Home</Link>
          <Link href="/rounds" className="hover:text-energy-blue transition">Rounds</Link>
          <Link href="/desk" className="hover:text-energy-blue transition">Desk</Link>
          <Link href="/data" className="hover:text-energy-blue transition">Data</Link>
          <Link href="/governance" className="hover:text-energy-blue transition">Governance</Link>
          <Link href="/connect" className="hover:text-energy-blue transition">Connect</Link>
        </nav>
      </div>
    </header>
  );
}
