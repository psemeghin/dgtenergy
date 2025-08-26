// src/pages/home.tsx

import MetaHead from "../components/MetaHead";
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

      <main className="flex flex-col items-center justify-center scroll-smooth">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="utility">
          <UtilitySection />
        </section>

        <section id="dashboard">
          <DashboardSection />
        </section>

        <section id="governance">
          <GovernanceSection />
        </section>

        <section id="roadmap">
          <RoadmapSection />
        </section>

        <section id="faq">
          <FAQSection />
        </section>
      </main>
    </>
  );
}
