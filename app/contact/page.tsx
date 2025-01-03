import ContactSection from "@/components/ContactSection";
import React from "react";

function Contact() {
  return (
    <main>
      <section
        className="relative bg-cover bg-center h-[500px] md:h-[750px] lg:h-screen"
        style={{ backgroundImage: `url('/assets/images/attorney01.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/80" />
        {/* <div className="absolute inset-0 bg-dark right-[680px] hidden lg:flex"></div> */}
        <div className="absolute inset-0 left-6 md:left-[80px] right-0  lg:right-[686px] top-40 bottom-[120px] flex items-center">
          <div className="text-white text-start">
            <h1 className="text-sm font-nespressoMed text-gold mb-4">
              Contact Us
            </h1>
            <h1 className="text-xl lg:text-4xl font-normal font-trajanPro mb-4">
              Get In Touch
            </h1>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}

export default Contact;
