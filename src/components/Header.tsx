return (
  <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md px-4 py-3 shadow-sm flex justify-between items-center transition-all duration-300">
    <div className="flex items-center space-x-2">
      {/* Ícone da logomarca */}
      <Link href="/home">
        <a>
          <img
            src="/icons/icon-dgt-logo.svg"
            alt="DGT Logo"
            className="w-8 h-8"
          />
        </a>
      </Link>

      {/* Texto que some com scroll */}
      <span className="hidden md:inline-block font-display text-xl text-[#FAFAFA] transition-opacity duration-300 opacity-100">
        DGTEnergy
      </span>
    </div>

    {/* Menu desktop */}
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
