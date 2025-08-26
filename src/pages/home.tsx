// src/pages/home.tsx
import MetaHead from "../components/MetaHead";
import Header from "../components/Header";
import Footer from "../components/Footer";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import UtilitySection from "../components/UtilitySection";
import DashboardSection from "../components/DashboardSection";
import GovernanceSection from "../components/GovernanceSection";
import RoadmapSection from "../components/RoadmapSection";
import FAQSection from "../components/FAQSection";

export default function HomePage() {
  return (
    <>
      <MetaHead />
      <Header />
      <main className="flex flex-col items-center justify-center scroll-smooth bg-[#FAFAFA] text-gray-900">
        <section id="hero" className="w-full">
          <HeroSection />
        </section>
        <section id="about" className="w-full bg-white py-20 px-6">
          <AboutSection />
        </section>
        <section id="utility" className="w-full bg-[#F5F5F5] py-20 px-6">
          <UtilitySection />
        </section>
        <section id="dashboard" className="w-full bg-white py-20 px-6">
          <DashboardSection />
        </section>
        <section id="governance" className="w-full bg-[#F5F5F5] py-20 px-6">
          <GovernanceSection />
        </section>
        <section id="roadmap" className="w-full bg-white py-20 px-6">
          <RoadmapSection />
        </section>
        <section id="faq" className="w-full bg-[#F5F5F5] py-20 px-6">
          <FAQSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
