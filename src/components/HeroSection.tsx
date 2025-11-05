export default function HeroSection() {
  return (
    <section className="h-screen text-center flex items-center justify-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src="/media/earth-moon-v2.mp4" type="video/mp4" />
        <source src="/media/earth-moon-v2.webm" type="video/webm" />
        Seu navegador não suporta vídeo HTML5.
      </video>
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white">
          A New Gateway to Energy Finance
        </h1>
        <p className="text-lg text-neutral-200 mt-4 font-sans">
          Utility Token for Real-World Energy Assets
        </p>
        <a
          href="/rounds"
          className="inline-block mt-6 bg-petroleum-900 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Join the Seed
        </a>
      </div>
    </section>
  );
}
