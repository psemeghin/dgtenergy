import Image from "next/image";

import karine from "@/assets/team/karine.jpg";
import pedro from "@/assets/team/pedro.jpg";
import walter from "@/assets/team/walter.jpg";
import guilherme from "@/assets/team/guilherme.jpg";
import henry from "@/assets/team/henry.jpg";

export const WhoWeAre = () => {
  return (
    <section className="relative flex flex-col items-center py-8 bg-neutral-100 text-energy-gray">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-energy-blue">
        Who We Are
      </h2>
      <div className="flex items-start 2xl:justify-center gap-8 w-full px-12 overflow-auto py-8">
        <div className="flex flex-col items-center justify-center gap-2 min-w-80">
          <Image
            src={karine}
            alt="Karine Casali"
            className="rounded-full size-64"
          />
          <h2 className="lg:text-3xl text-2xl font-display font-bold text-petroleum-900">
            Karine Casali
          </h2>
          <h3 className="text-base font-display text-center text-graphite-900 font-semibold min-w-80">
            Co-Founder & Chief Revenue Officer
          </h3>
          <p className="text-sm text-center font-sans text-graphite-900">
            R$ 700M+ P&L generated <br />
            10 years energy origination <br />
            Shell, BOCOM BBM, Matrix (DXT Duferco) veteran
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 min-w-80">
          <Image
            src={pedro}
            alt="Pedro Semeghini"
            className="rounded-full size-64"
          />
          <h2 className="lg:text-3xl text-2xl font-display font-bold text-petroleum-900">
            Pedro Semeghini
          </h2>
          <h3 className="text-base font-display text-center text-graphite-900 font-semibold">
            Co-Founder & Chief Strategy Officer
          </h3>
          <p className="text-sm text-center font-sans text-graphite-900">
            Protocol architect & ideator <br />
            Digital assets operator <br />
            Multi-vertical entrepreneur
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 min-w-80">
          <Image
            src={henry}
            alt="Henry Hazan"
            className="rounded-full size-64"
          />
          <h2 className="lg:text-3xl text-2xl font-display font-bold text-petroleum-900">
            Henry Hazan
          </h2>
          <h3 className="text-base font-display text-center text-graphite-900 font-semibold">
            Chief Blockchain Architect
          </h3>
          <p className="text-sm text-center font-sans text-graphite-900">
            Formal verification specialist <br />
            Multilingual: EN, HE, IT, PT, ES <br />
            15+ years engineering
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 min-w-80">
          <Image
            src={walter}
            alt="Walter Corcione"
            className="rounded-full size-64"
          />
          <h2 className="lg:text-3xl text-2xl font-display font-bold text-petroleum-900">
            Walter Corcione
          </h2>
          <h3 className="text-base font-display text-center text-graphite-900 font-semibold min-w-80">
            Board Member
          </h3>
          <p className="text-sm text-center font-sans text-graphite-900">
            40+ years capital markets <br />
            CGA/CGE certified <br />
            Structured funds specialist
          </p>
        </div>
      </div>
    </section>
  );
};
