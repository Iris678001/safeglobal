"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP Safety",
    company: "GlobalMfg Corp",
    initials: "SC",
    companyColor: "from-safeglobal/30 to-emerald-500/20",
    content:
      "SafeGlobal transformed our safety culture. We've seen a 78% reduction in workplace incidents in just 18 months.",
  },
  {
    name: "Marcus Rodriguez",
    role: "COO",
    company: "PetroChem Industries",
    initials: "MR",
    companyColor: "from-cyan-500/30 to-cyan-400/20",
    content:
      "The predictive analytics alone saved us $4.2M in potential incident costs last year.",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Chief Safety Officer",
    company: "BuildRight",
    initials: "AP",
    companyColor: "from-violet-500/30 to-violet-400/20",
    content:
      "Best safety investment we've ever made. The AI predictions are incredibly accurate.",
  },
  {
    name: "James Mitchell",
    role: "Director of Operations",
    company: "Apex Logistics",
    initials: "JM",
    companyColor: "from-amber-500/30 to-amber-400/20",
    content:
      "Real-time monitoring gives us peace of mind. Response times dropped from hours to minutes.",
  },
  {
    name: "Lisa Yamamoto",
    role: "VP Compliance",
    company: "SafeWork Healthcare",
    initials: "LY",
    companyColor: "from-rose-500/30 to-rose-400/20",
    content:
      "Compliance automation freed up 40% of our team's time for higher-value safety work.",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
  }),
};

const slideTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  duration: 0.5,
};

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  const testimonial = testimonials[current];

  return (
    <section
      id="testimonial-slider"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-dot-pattern" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safeglobal/30 to-transparent" />

      {/* Gradient orbs for depth */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-safeglobal/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-safeglobal/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge
            variant="outline"
            className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
          >
            <MessageSquare className="w-3 h-3 mr-1.5" />
            CUSTOMER STORIES
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Industry Leaders{" "}
            <span className="text-gradient">Say About Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how SafeGlobal is transforming workplace safety for
            organizations worldwide.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 lg:-translate-x-12 z-20 w-11 h-11 rounded-full border border-border bg-card/80 backdrop-blur-md flex items-center justify-center text-muted-foreground hover:text-safeglobal hover:border-safeglobal/40 hover:bg-safeglobal/10 transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 lg:translate-x-12 z-20 w-11 h-11 rounded-full border border-border bg-card/80 backdrop-blur-md flex items-center justify-center text-muted-foreground hover:text-safeglobal hover:border-safeglobal/40 hover:bg-safeglobal/10 transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Quote Card */}
          <div className="mx-auto max-w-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="relative p-8 sm:p-10 lg:p-12 rounded-2xl border border-border glass-card backdrop-blur-md overflow-hidden group"
              >
                {/* Subtle inner glow at top */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safeglobal/20 to-transparent" />

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      boxShadow:
                        "inset 0 0 0 1px rgba(16, 185, 129, 0.15), 0 0 40px rgba(16, 185, 129, 0.08)",
                    }}
                  />
                </div>

                {/* Large Quote Mark */}
                <div className="mb-6">
                  <Quote className="w-14 h-14 text-safeglobal/15" />
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-safeglobal text-safeglobal"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 font-medium">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  {/* Avatar with initials */}
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.companyColor} flex items-center justify-center border border-safeglobal/20 flex-shrink-0`}
                  >
                    <span className="text-sm font-bold text-safeglobal tracking-tight">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Paused indicator */}
                {isPaused && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] text-muted-foreground/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                    Paused
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`relative transition-all duration-300 rounded-full ${
                  idx === current
                    ? "w-8 h-3 bg-safeglobal"
                    : "w-3 h-3 bg-border hover:bg-muted-foreground/40"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <span className="text-xs text-muted-foreground/60 font-mono">
              {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
