export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        {/* Links âncora */}
        <div className="space-x-4">
          <a href="#hero" className="hover:text-white">Top</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#utility" className="hover:text-white">Utility</a>
          <a href="#dashboard" className="hover:text-white">Dashboard</a>
          <a href="#governance" className="hover:text-white">Governance</a>
        </div>

        {/* Redes sociais */}
        <div className="flex space-x-4 justify-end">
          <a href="https://t.me/dgte" target="_blank"><img src="/social/telegram.svg" className="h-5"/></a>
          <a href="https://discord.gg/dgte" target="_blank"><img src="/social/discord.svg" className="h-5"/></a>
          <a href="https://twitter.com/dgte" target="_blank"><img src="/social/twitter.svg" className="h-5"/></a>
        </div>
      </div>

      <div className="text-center text-xs mt-6">
        © {new Date().getFullYear()} DGT-Energy · info@dgte.energy
      </div>
    </footer>
  );
}
