"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  id?: string;
}

export default function ParallaxSection({
  children,
  speed = 0.1,
  className = "",
  id,
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // IntersectionObserver to only animate when section is in viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "100px 0px",
        threshold: 0,
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: containerRef,
    offset: ["start end", "end start"],
  });

  // Clamp the parallax shift to a max of ~30px for subtlety
  // speed controls the intensity; at default 0.1, max shift is 30px
  const maxShift = 30;
  const range = maxShift * Math.min(speed / 0.1, 1);

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-range, range]
  );

  return (
    <div ref={containerRef} className="relative">
      <section ref={sectionRef} id={id} className={`relative overflow-hidden ${className}`}>
        {isInView ? (
          <motion.div style={{ y }} className="relative">
            {children}
          </motion.div>
        ) : (
          <div className="relative">{children}</div>
        )}
      </section>
    </div>
  );
}
