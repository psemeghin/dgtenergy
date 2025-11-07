import Seo from "../components/Seo";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import UtilitySection from "../components/UtilitySection";
import DashboardSection from "../components/DashboardSection";
import GovernanceSections from "../components/GovernanceSections";
import RoadmapSection from "../components/RoadmapSection";
import FAQSection from "../components/FAQSection";

export default function HomePage() {
  return (
    <>
      <Seo
        title="DGTEnergy — A transparent utility gateway to energy operations"
        description="Utility-token access to staking, governance, and verifiable performance data. Built for transparency, compliance, and on-chain auditability."
      />
      <main className="flex flex-col items-center scroll-smooth text-graphite-900">
        <section id="hero" className="w-full -translate-y-10">
          <HeroSection />
        </section>
        <section id="about" className="w-full lg:pt-10 -mt-4 lg:mt-0 pb-20">
          <AboutSection />
        </section>
        <section id="utility" className="w-full bg-energy-gray py-20">
          <UtilitySection />
        </section>
        <section id="dashboard" className="w-full bg-neutral-100 py-20">
          <DashboardSection />
        </section>
        <section id="governance" className="w-full bg-white py-20">
          <GovernanceSections />
        </section>
        <section id="roadmap" className="w-full py-20">
          <RoadmapSection />
        </section>
        <section id="faq" className="w-full py-20">
          <FAQSection />
        </section>
      </main>
    </>
  );
}