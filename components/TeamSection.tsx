"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const carouselImages = [
  { src: "/assets/images/attorneys/geraldasante.jpg", alt: "HON. GERALD ASANTE", name: "HON. GERALD ASANTE" },
  { src:  "/assets/images/attorneys/abena.jpg", alt: "MS. ABENA SEFAH", name: "MS. ABENA SEFAH" },
  { src: "/assets/images/attorneys/denzel.jpg", alt: "DENZEL AARONS", name: "DENZEL AARONS" },
  { src: "/assets/images/attorneys/ian.jpg" , alt: "IAN J. ASANTE", name: "IAN J. ASANTE" },
];

const TeamSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for previous, 1 for next

  // Handle navigation
  const handleNext = () => {
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentImage((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between h-screen py-12 bg-white">
      {/* Carousel Section */}
      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col items-center justify-center">
        <div className="relative w-full h-3/4 overflow-hidden">
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentImage}
              className="absolute w-full h-full"
              initial={{ x: direction > 0 ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: direction > 0 ? "-100%" : "100%" }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={carouselImages[currentImage].src}
                alt={carouselImages[currentImage].alt}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Team Member Name */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {carouselImages[currentImage].name}
          </h3>
        </div>

        {/* Navigation Buttons */}
        <div className="flex mt-4 gap-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gold text-white rounded hover:bg-gold transition"
          >
            {'<'}
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gold text-white rounded hover:bg-gold transition"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center px-8 lg:px-16 text-center lg:text-left">
        <h2 className="text-lg text-gray-500 uppercase mb-2">Meet Our Attorneys</h2>
        <h1 className="text-4xl font-serif text-gray-800 mb-8">
          Team Performance Is A Priority
        </h1>

        <div className="space-y-4">
          {carouselImages.map((member, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-300 pb-2"
            >
              <span className="text-lg font-medium">{member.name}</span>
              <span className="text-sm text-gray-500">
                {index === 0
                  ? "CEO"
                  : index === 1
                  ? "SNR. ASSOCIATE PARTNER"
                  : index === 2
                  ? "ATTORNEY"
                  : "INTERN"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
