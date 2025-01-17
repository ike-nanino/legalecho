'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen (right side)
  animate: { x: 0, opacity: 1 },      // Slide into view
  exit: { x: "-100%", opacity: 0 },   // Slide out (left side)
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full min-h-screen overflow-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
