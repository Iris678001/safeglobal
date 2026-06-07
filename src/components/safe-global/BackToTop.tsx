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
          className="fixed bottom-28 right-8 z-40 w-12 h-12 rounded-full flex items-center justify-center border border-safeglobal/20 bg-card/80 backdrop-blur-lg shadow-lg shadow-black/20 hover:bg-safeglobal/15 hover:border-safeglobal/40 hover:shadow-safeglobal/10 transition-all duration-300 cursor-pointer group"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 text-safeglobal/70 group-hover:text-safeglobal transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
