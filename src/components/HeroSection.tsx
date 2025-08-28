// src/components/HeroSection.tsx

export default function HeroSection() {
  return (
    <section className="relative text-center text-white h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
        autoPlay
        loop
        muted
        playsInline
        poster="/media/fallback.jpg"
      >
        <source src="/media/earth-lights.webm" type="video/webm" />
        Seu navegador não suporta vídeo HTML5.
      </video>

      <div className="flex flex-col justify-center items-center h-full px-4 space-y-6">
        <h1 className="text-4xl md:text-6xl font-display">
          A New Gateway to Energy Finance
        </h1>
        <p className="text-lg md:text-xl text-gray-200 font-sans">
          Utility Token for Real-World Energy Assets
        </p>

        <div className="bg-energy-sand text-white p-4 rounded-md shadow-md max-w-md mx-auto space-y-1 text-sm">
          <div className="font-semibold">💰 Seed Round Open</div>
          <div>Target: 420k USDT · Price: 0.036 USDT/DGTE</div>
          <div className="w-full bg-white rounded-full h-2 overflow-hidden">
            <div className="bg-energy-green h-full transition-all duration-500" style={{ width: "48%" }} />
          </div>
          <div className="text-right text-xs text-gray-200">48% Raised</div>
        </div>

        <a
          href="/rounds"
          className="inline-block bg-energy-green text-black font-semibold px-6 py-3 rounded-md hover:scale-105 hover:opacity-90 transition-transform duration-300 ease-in-out"
        >
          Join the Seed
        </a>
      </div>
    </section>
  );
}
