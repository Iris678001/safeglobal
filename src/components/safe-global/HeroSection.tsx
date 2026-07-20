"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MagneticButton from "@/components/safe-global/MagneticButton";
import {
  ChevronRight,
  Play,
  Shield,
  Activity,
  AlertTriangle,
  Globe,
  Users,
  BarChart3,
  Sparkles,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

function TypingText({ words, className }: { words: string[]; className?: string }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(word.substring(0, displayText.length + 1));
          if (displayText.length === word.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(word.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-sky-600 dark:text-sky-400">|</span>
    </span>
  );
}

function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      baseOpacity: number;
      pulseOffset: number;
    }[] = [];

    // Increased from 60 to 80 particles for richer visual
    for (let i = 0; i < 80; i++) {
      const baseOpacity = Math.random() * 0.5 + 0.15;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2.5 + 1,
        opacity: baseOpacity,
        baseOpacity,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = "rgba(14, 165, 233, 0.03)";
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (
        let x = (time * 10) % gridSize;
        x < canvas.width;
        x += gridSize
      ) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (
        let y = (time * 10) % gridSize;
        y < canvas.height;
        y += gridSize
      ) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw constellation lines between nearby particles with gradient colors
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const alpha = 0.12 * (1 - dist / 150);

            const gradient = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
            gradient.addColorStop(0, `rgba(14, 165, 233, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(2, 132, 199, ${alpha * 1.2})`);
            gradient.addColorStop(1, `rgba(14, 165, 233, ${alpha})`);

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw particles with glow and pulse effect
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const pulse = Math.sin(time * 4 + p.pulseOffset) * 0.3 + 0.7;
        p.opacity = p.baseOpacity * pulse;

        ctx.save();
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(14, 165, 233, ${p.opacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${p.opacity})`;
        ctx.fill();
        ctx.restore();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.opacity * 0.8})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return (
    <div ref={ref}>
      {prefix}
      {current.toLocaleString()}
      {suffix}
    </div>
  );
}

// Floating CSS Particles component - small dots rising upward
// Uses hardcoded values to avoid SSR/client hydration mismatch
const PARTICLE_DATA = [
  { left: 12, size: 2.5, dur: 8, delay: 0.5 },
  { left: 28, size: 1.8, dur: 10, delay: 2.1 },
  { left: 45, size: 3.2, dur: 7, delay: 1.3 },
  { left: 63, size: 2.1, dur: 9, delay: 3.7 },
  { left: 78, size: 2.8, dur: 11, delay: 0.8 },
  { left: 91, size: 1.6, dur: 8, delay: 4.2 },
  { left: 5, size: 3.5, dur: 12, delay: 2.5 },
  { left: 35, size: 2.3, dur: 7, delay: 5.1 },
  { left: 52, size: 1.9, dur: 10, delay: 1.7 },
  { left: 68, size: 2.7, dur: 9, delay: 3.3 },
  { left: 82, size: 3.1, dur: 8, delay: 0.2 },
  { left: 18, size: 2.0, dur: 11, delay: 4.8 },
  { left: 41, size: 2.6, dur: 7, delay: 6.2 },
  { left: 57, size: 1.7, dur: 13, delay: 1.1 },
  { left: 74, size: 3.3, dur: 9, delay: 2.9 },
  { left: 88, size: 2.2, dur: 10, delay: 5.5 },
  { left: 9, size: 2.9, dur: 8, delay: 3.6 },
  { left: 23, size: 1.5, dur: 12, delay: 0.7 },
  { left: 48, size: 3.0, dur: 7, delay: 4.4 },
  { left: 95, size: 2.4, dur: 11, delay: 1.9 },
];

function FloatingParticles() {
  return (
    <div className="particles-container">
      {PARTICLE_DATA.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function DynamicNewsBanner() {
  return (
    <Link 
      href="/uae-e-invoicing" 
      className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-sky-200 dark:border-sky-700/50 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md text-sky-900 dark:text-sky-50 text-base font-medium shadow-xl transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:-translate-y-0.5"
    >
      <div className="flex items-center gap-2">
        <AlertCircle className="w-5 h-5 text-sky-600 dark:text-sky-400" />
        <span className="font-bold tracking-widest text-xs uppercase border-r border-sky-300 dark:border-sky-600 pr-3 mr-1 text-sky-700 dark:text-sky-300">
          Update
        </span>
        <span className="font-semibold">
          Phase 1 UAE E-Invoicing Mandate Approaching. Ensure compliance today.
        </span>
        <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform text-sky-600 dark:text-sky-400" />
      </div>
    </Link>
  );
}

// ─── Dynamic Hero Background Slideshow ──────────────────────────────────────
const HERO_IMAGES = [
  "/images/hero/1dyn.jpg",
  "/images/hero/2dyn.jpg",
  "/images/hero/3dyn.jpg",
];

function HeroBgSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full z-0 overflow-hidden">
      {/* Preload all images so transitions are instant */}
      {HERO_IMAGES.map((src) => (
        <Image
          key={`preload-${src}`}
          src={src}
          alt=""
          fill
          priority
          className="opacity-0 pointer-events-none"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ))}

      {/* Cross-fade image layer */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut" },
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 7, ease: "easeOut" }}
          >
            <Image
              src={HERO_IMAGES[currentIndex]}
              alt="Safeglobal workplace environment"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-sky-900/10 mix-blend-overlay" />
    </div>
  );
}

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left space-y-8 lg:pr-16 xl:pr-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6 w-full"
            >
              <DynamicNewsBanner />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair)' }}>
                  <span className="text-gradient">Customized</span>{" "}
                  <span className="text-gray-500 dark:text-gray-400 font-extrabold drop-shadow-sm whitespace-nowrap">AI Solutions,</span>
                </span>
                <br />
                <span className="text-[#0073CF] dark:text-[#3B82F6]" style={{ fontFamily: 'var(--font-playfair)' }}>Total Digital Transformation</span>
              </h1>
              <div className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed min-h-[3.5rem]">
                Enterprise-grade AI that{" "}
                <TypingText
                  words={["monitors hazards in real-time", "predicts risks before they occur", "prevents incidents automatically", "automates compliance 24/7"]}
                  className="text-sky-600 dark:text-sky-400 font-semibold"
                />
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-start w-full"
            >
              <MagneticButton strength={0.3} distance={150}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-block w-full sm:w-auto"
                >
                  <div className="absolute inset-0 rounded-md bg-sky-600/0 group-hover:bg-sky-600/10 transition-all duration-300 -m-2" />
                  <Button
                    size="lg"
                    asChild
                    className="bg-sky-600 hover:bg-sky-700 text-white shadow-xl shadow-sky-600/25 hover:shadow-[0_0_30px_rgba(2,132,199,0.35)] transition-all text-base px-8 h-13 gap-2 relative w-full"
                  >
                    <Link href="/contact">
                      Request Demo
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              </MagneticButton>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-border hover:border-sky-500/50 hover:bg-sky-500/5 text-base px-8 h-13 gap-2 hover-ring w-full sm:w-auto"
              >
                <Link href="/blog">
                  <Play className="w-4 h-4" />
                  See How It Works
                </Link>
              </Button>
            </motion.div>
          </div>

        </div>
      </div>



    </section>
  );
}
