import React from "react";
import ServicesGrid from "./ServicesGrid";

function Services() {
  return (
    <section className="bg-white">
      <div className="flex flex-col justify-center items-center py-10">
        <div className="px-4 text-center w-full md:max-w-[600px]">
          <h1 className="mb-8 font-semibold text-sm text-gold">
            Practice Areas
          </h1>

          <h1 className="mb-8 font-trajanPro text-xl md:text-3xl font-medium text-gray-500">
            Broad Range of Law Services
          </h1>

          <p className="text-gray-500">
            We provide our customers with first-rate legal services. Our
            knowledgeable, efficient, and creative legal staff works arduously
            to offer excellent legal assistance and strategic recommendations.
          </p>
        </div>
      </div>


      <ServicesGrid />
    </section>
  );
}

export default Services;
