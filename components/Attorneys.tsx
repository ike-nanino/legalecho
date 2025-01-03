'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const attorneys = [
    {
        img: "/assets/images/attorneys/geraldasante.jpg",
        name: "HON. GERALD ASANTE",
        role: "CEO",
    },
    {
        img: "/assets/images/attorneys/abena.jpg",
        name: "MS. ABENA SEFAH",
        role: "SNR. ASSOCIATE PARTNER",
    },
    {
        img: "/assets/images/attorneys/denzel.jpg",
        name: "DENZEL AARONS",
        role: "ATTORNEY",
    },
    {
        img: "/assets/images/attorneys/ian.jpg",
        name: "IAN J. ASANTE",
        role: "INTERN",
    },
];

function Attorneys() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState(3);

    // Adjust visible images based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleImages(1); // 1 image on small screens
            } else if (window.innerWidth < 1024) {
                setVisibleImages(2); // 2 images on medium screens
            } else {
                setVisibleImages(3); // 3 images on large screens
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Auto-slide logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % attorneys.length
            );
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    // Duplicate images to create seamless looping effect
    const extendedAttorneys = [...attorneys, ...attorneys];

    const handleTransitionEnd = () => {
        if (currentIndex >= attorneys.length) {
            setCurrentIndex(0); // Reset back to start
        }
    };

    return (
        <section className="bg-white py-16 text-center">
            <h2 className="text-xl text-gold font-semibold mb-5 font-secondary">OUR</h2>
            <h2 className="text-4xl mb-5 font-secondary">ATTORNEYS</h2>

            <div className="relative mx-auto overflow-hidden">
                <motion.div
                    className="flex"
                    initial={{ x: 0 }}
                    animate={{ x: `-${(currentIndex * 100) / visibleImages}%` }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {extendedAttorneys.map((attorney, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0"
                            style={{ width: `${100 / visibleImages}%` }}
                        >
                            <Image
                                src={attorney.img}
                                alt={attorney.name}
                                width={800}
                                height={500}
                                className="h-[500px] w-full object-cover"
                                priority={index < visibleImages}
                            />
                            {/* Overlay */}
                            <motion.div
                                className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-end items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
                                initial={{ y: "100%" }}
                                whileHover={{ y: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <h3 className="text-lg font-bold">{attorney.name}</h3>
                                <p className="text-sm">{attorney.role}</p>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Attorneys;
