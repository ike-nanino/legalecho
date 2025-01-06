'use client'
import Attorneys from "@/components/Attorneys";
import Image from "next/image";
import React, { useState } from "react";

function AboutUs() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const definition = [
    {
      objectives: "Vision",
      details:
        "“We aim to be the standard of excellence And reliability in every field of the law in Ghana and beyond”",
    },
    {
      objectives: "Mission",
      details:
        "At Legal Echo, we deliver premier legal services to our clients. Our experienced and passionate team of lawyers work hard to provide highly skilled, effective and innovative legal counsel and strategic advice. We empower our clients by understanding their objectives and meeting or exceeding their expectations in the best possible way.",
    },
    {
      objectives: "Core Values",
      details:
        "Excellence, Reliability, Integrity, Respect, Innovation",
    }
]

  const toggleDif = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <main>
      <section
        className="relative bg-cover bg-center h-[500px] md:h-[750px] lg:h-screen"
        style={{ backgroundImage: `url('/assets/images/court.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 left-6 md:left-[80px] right-0  lg:right-[686px] top-40 bottom-[120px] flex items-center">
          <div className="text-white text-start">
            <h1 className="text-sm font-nespressoMed text-gold mb-4">
              Who we are
            </h1>
            <h1 className="text-xl lg:text-4xl font-normal font-trajanPro mb-4">
              Legal Echo, is one of <br />
              the leading law firms in Ghana.
            </h1>
            <p className="text-xs mb-8 font-nespresso">
              One of Ghana's prominent legal firms is Eisen & Co. Since 2003,
              the only purpose of our existence has been to provide high-quality
              legal services to clients all over the world. Eisen & Co. is
              committed to providing business clients, including both people and
              governmental organizations, with thoughtful legal solutions that
              cut across disciplines, industries, and sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center mt-10 lg:mt-0 gap-8 lg:gap-0">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-1/2 relative h-[600px]">
          <Image
            src="/assets/images/attorney02.jpg"
            alt="Tailored Protection"
            className="object-cover"
            fill
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2  md:text-left">
          <h1 className="text-sm font-semibold text-center mb-6">Eisen & Co</h1>
          <h2 className="text-4xl font-light font-secondary mb-4 text-center">
            What defines us.
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 px-8">
          {definition.map((dif, index) => (
            <div key={index} className="border border-gray-300 rounded-sm py-5">
              <button
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50"
                onClick={() => toggleDif(index)}
              >
                <span className="text-lg">{dif.objectives}</span>
              </button>
              <div
                className="px-4 overflow-hidden transition-all duration-200"
                style={{
                  maxHeight: openIndex === index ? "200px" : "0",
                  opacity: openIndex === index ? 1 : 0,
                  padding: openIndex === index ? "0 1rem 1rem 1rem" : "0 1rem",
                }}
              >
                <p className="text-gray-600">{dif.details}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      <Attorneys />
    </main>
  );
}

export default AboutUs;
