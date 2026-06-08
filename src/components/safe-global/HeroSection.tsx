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
      <span className="animate-pulse text-safeglobal">|</span>
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
      ctx.strokeStyle = "rgba(45, 122, 111, 0.03)";
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
            gradient.addColorStop(0, `rgba(45, 122, 111, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(91, 138, 114, ${alpha * 1.2})`);
            gradient.addColorStop(1, `rgba(45, 122, 111, ${alpha})`);

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
        ctx.shadowColor = `rgba(45, 122, 111, ${p.opacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45, 122, 111, ${p.opacity})`;
        ctx.fill();
        ctx.restore();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 211, 153, ${p.opacity * 0.8})`;
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
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
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
          sizes="100vw"
        />
      ))}

      {/* Sliding image layer */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ x: "100%", opacity: 0.6 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0.6 }}
          transition={{
            x: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
            opacity: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 4, ease: "easeOut" }}
          >
            <Image
              src={HERO_IMAGES[currentIndex]}
              alt="SafeGlobal workplace environment"
              fill
              priority
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-background/30" />
      <div className="absolute inset-0 bg-safeglobal/5 mix-blend-overlay" />
    </div>
  );
}

// Trusted by industry leaders logos
const trustedLogos = [
  { initials: "3M", name: "3M", src: "/logos/3m.png", color: "from-red-500 to-red-600" },
  { initials: "GE", name: "GE", src: "/logos/ge.png", color: "from-blue-500 to-blue-600" },
  { initials: "SI", name: "Siemens", src: "/logos/siemens.png", color: "from-teal-500 to-teal-500" },
  { initials: "BA", name: "BASF", src: "/logos/basf.png", color: "from-amber-500 to-orange-500" },
];

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background Image Slideshow */}
      <HeroBgSlideshow />

      <motion.div
        className="absolute inset-0 z-0 bg-grid-pattern opacity-70"
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-[8%] top-[18%] z-0 h-64 w-64 rounded-full border border-safeglobal/20"
        animate={{ scale: [0.88, 1.18, 0.88], opacity: [0.22, 0.06, 0.22] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ marginTop: scrollY * 0.06 }}
      />
      <motion.div
        className="absolute right-[10%] top-[10%] z-0 h-80 w-80 rounded-full border border-safeglobal/20"
        animate={{ scale: [1.08, 0.86, 1.08], opacity: [0.08, 0.2, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        style={{ marginTop: scrollY * 0.1 }}
      />

      {/* Gradient Overlays - softened to let hero slideshow images show through */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/15 to-background/40 z-[1]" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-safeglobal/5 rounded-full blur-[120px] z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-safeglobal/5 rounded-full blur-[100px] z-[1]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safeglobal/3 rounded-full blur-[150px] z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="flex justify-center">
          {/* Text Content - Centered */}
          <div className="space-y-8 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <Badge
                variant="outline"
                className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide"
              >
                <Activity className="w-3 h-3 mr-1.5" />
                NEXT-GEN AI SAFETY PLATFORM
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="text-gradient">Customised</span>{" "}
                Intelligence,
                <br />
                Total Digital{" "}
                <span className="text-gradient-animated">Transformation</span>
              </h1>
              <div className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed min-h-[3.5rem]">
                Enterprise-grade AI that{" "}
                <TypingText
                  words={["monitors hazards in real-time", "predicts risks before they occur", "prevents incidents automatically", "automates compliance 24/7"]}
                  className="text-safeglobal font-semibold"
                />
              </div>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                Protecting{" "}
                <span className="text-safeglobal font-semibold">500,000+</span>{" "}
                workers across{" "}
                <span className="text-safeglobal font-semibold">30+</span>{" "}
                countries.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MagneticButton strength={0.3} distance={150}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative"
                >
                  <div className="absolute inset-0 rounded-md bg-safeglobal/0 group-hover:bg-safeglobal/10 transition-all duration-300 -m-2" />
                  <Button
                    size="lg"
                    asChild
                    className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-xl shadow-safeglobal/25 hover:shadow-[0_0_30px_rgba(45,122,111,0.35)] transition-all text-base px-8 h-13 gap-2 relative"
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
                className="border-border hover:border-safeglobal/50 hover:bg-safeglobal/5 text-base px-8 h-13 gap-2 hover-ring"
              >
                <Link href="/blog">
                  <Play className="w-4 h-4" />
                  See How It Works
                </Link>
              </Button>
            </motion.div>

            {/* Trusted by industry leaders */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="pt-6"
            >
              <div className="inline-flex items-center justify-center gap-4 mb-5">
                <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-safeglobal/60" />
                <p className="text-xs sm:text-sm text-foreground/90 uppercase tracking-[0.25em] font-bold drop-shadow-md">
                  Trusted by industry leaders
                </p>
                <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-safeglobal/60" />
              </div>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-6 justify-center">
                {trustedLogos.map((logo) => (
                  <div
                    key={logo.initials}
                    className="group relative flex items-center justify-center transition-all duration-300"
                    title={logo.name}
                  >
                    <div className="absolute inset-0 bg-safeglobal/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      className="relative z-10 max-h-8 sm:max-h-10 max-w-[100px] object-contain invert grayscale mix-blend-screen opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement | null;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div
                      className={`relative z-10 w-10 h-10 rounded-full bg-gradient-to-br ${logo.color} items-center justify-center text-white text-[13px] font-bold transition-all duration-500 group-hover:scale-110 shadow-lg`}
                      style={{ display: 'none' }}
                    >
                      {logo.initials}
                    </div>
                  </div>
                ))}
                <span className="text-xs sm:text-sm text-foreground/80 ml-2 font-bold tracking-widest uppercase drop-shadow-md">+200 more</span>
              </div>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-8 pt-4 justify-center"
            >
              {[
                { icon: Shield, value: 99.7, suffix: "%", label: "Detection Rate" },
                { icon: BarChart3, value: 73, suffix: "%", label: "Risk Reduction" },
                { icon: Globe, value: 30, suffix: "+", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="flex items-center gap-1.5 justify-center">
                    <stat.icon className="w-4 h-4 text-safeglobal/60" />
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-safeglobal opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-safeglobal" />
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-safeglobal">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2000} />
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
          Explore
        </span>
        <button
          onClick={() => handleScrollTo("trust")}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5 hover:border-safeglobal/50 transition-colors cursor-pointer"
        >
          <div className="w-1 h-2.5 bg-safeglobal rounded-full animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
