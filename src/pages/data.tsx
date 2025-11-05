// src/pages/data.tsx

import MetaHead from "../components/MetaHead";
import TokenomicsSection from "../components/TokenomicsSection";
import DataRoadmap from "../components/DataRoadmap";
import TransparencyNotes from "../components/TransparencyNotes";
import DocumentLibrary from "../components/DocumentLibrary";

export default function DataPage() {
  return (
    <>
      <MetaHead />
      <main className="flex flex-col items-center justify-center scroll-smooth bg-[#FAFAFA] text-neutral-900">
        <section id="tokenomics" className="w-full bg-white py-20 px-6">
          <TokenomicsSection />
        </section>
        <section id="roadmap" className="w-full bg-[#F5F5F5] py-20 px-6">
          <DataRoadmap />
        </section>
        <section id="transparency" className="w-full bg-white py-20 px-6">
          <TransparencyNotes />
        </section>
        <section id="library" className="w-full bg-[#F5F5F5] py-20 px-6">
          <DocumentLibrary />
        </section>
      </main>
    </>
  );
}
