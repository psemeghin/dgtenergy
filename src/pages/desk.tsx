// src/pages/desk.tsx
import MetaHead from "../components/MetaHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DeskIntro from "../components/DeskIntro";
import DeskTabs from "../components/DeskTabs";

export default function DeskPage() {
  return (
    <>
      <MetaHead />
      <Header />
      <main className="flex flex-col items-center justify-center bg-[#FAFAFA] text-gray-900 scroll-smooth">
        <section className="w-full">
          <DeskIntro />
        </section>
        <section className="w-full py-12 px-6">
          <DeskTabs />
        </section>
      </main>
      <Footer />
    </>
  );
}
