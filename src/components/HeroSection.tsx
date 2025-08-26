// src/components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="relative h-screen text-center flex items-center justify-center overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/media/earth-moon.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Sobreposição escura para contraste */}
      <div className="absolute inset-0 bg-[#000000] opacity-50 z-10" />

      {/* Conteúdo sobreposto */}
      <div className="relative z-20 max-w-3xl px-6 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold">
          A New Gateway to Energy Finance
        </h1>
        <p className="text-lg text-gray-300 mt-4 font-sans">
          Utility Token for Real-World Energy Assets
        </p>
        <a
          href="/rounds"
          className="inline-block mt-6 bg-energy-green text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Join the Seed
        </a>
      </div>
    </section>
  );
}
