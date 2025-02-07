import PracticeAreas from "@/components/PracticeAreas";
import PracticeAreasMobile from "@/components/PracticeAreasMobile";
import React from "react";

function Practice() {
  return (
    <main>
      <section
        className="relative bg-cover bg-center h-[500px] md:h-[750px] lg:h-screen"
        style={{ backgroundImage: `url('/assets/images/practiceareas.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-dark right-[680px] hidden lg:flex"></div>
        <div className="absolute inset-0 left-6 md:left-[80px] right-0  lg:right-[686px] top-40 bottom-[120px] flex items-center">
          <div className="text-white text-start">
            <h1 className="text-sm font-nespressoMed text-gold mb-4">
              SERVICES
            </h1>
            <h1 className="text-xl lg:text-4xl font-normal font-trajanPro mb-4">
            Practice Areas
            </h1>
            <p className="text-xs mb-8 font-nespresso">
            We are devoted to providing solutions and are driven by a genuine desire for excellence. We have experience in a number of important professional areas, including litigation, arbitration, corporate, commercial, real estate, property and conveyance, family law, debt recovery, banking, and insurance.
            </p>
          </div>
        </div>
      </section>

      <div className="hidden lg:block">
        <PracticeAreas />
      </div>

      <div className="lg:hidden bg-white py-12">
        <PracticeAreasMobile />
      </div>
    </main>
  );
}

export default Practice;
