// src/pages/home.tsx

import Head from "next/head";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import UtilitySection from "../components/UtilitySection";
import DashboardSection from "../components/DashboardSection";
import GovernanceSection from "../components/GovernanceSection";
import RoadmapSection from "../components/RoadmapSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>DGT-Energy — Real-World Energy Token</title>
        <meta
          name="description"
          content="A utility token anchored in real-world energy receivables. Transparent. Multichain. Institutional-grade."
        />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center">
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

      <Footer />
    </>
  );
}
