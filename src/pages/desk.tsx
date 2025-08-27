// src/pages/desk.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnalyticsTab from "../components/desk/AnalyticsTab";
import P2PTab from "../components/desk/P2PTab";
import StakingTab from "../components/desk/StakingTab";

export default function DeskPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center scroll-smooth bg-[#FAFAFA] text-gray-900 py-16 px-4">
        <section className="max-w-6xl w-full space-y-12">
          <StakingTab />
          <P2PTab />
          <AnalyticsTab />
        </section>
      </main>
      <Footer />
    </>
  );
}
