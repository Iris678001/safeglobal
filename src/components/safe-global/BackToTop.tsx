"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center border border-safeglobal/30 bg-card/70 backdrop-blur-md shadow-lg shadow-safeglobal/10 hover:bg-safeglobal/20 hover:border-safeglobal/50 hover:shadow-safeglobal/20 transition-all cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4 text-safeglobal" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
