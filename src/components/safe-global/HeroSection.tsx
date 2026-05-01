"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Play,
  Shield,
  Activity,
  AlertTriangle,
  Globe,
  Users,
  BarChart3,
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
        size: Math.random() * 2.5 + 1, // Slightly larger particles
        opacity: baseOpacity,
        baseOpacity,
        pulseOffset: Math.random() * Math.PI * 2, // Random offset for pulse
      });
    }

    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = "rgba(16, 185, 129, 0.03)";
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

            // Create gradient line from safeglobal to cyan
            const gradient = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
            gradient.addColorStop(0, `rgba(16, 185, 129, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(6, 182, 212, ${alpha * 1.2})`);
            gradient.addColorStop(1, `rgba(16, 185, 129, ${alpha})`);

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

        // Pulse effect: periodically brighten
        const pulse = Math.sin(time * 4 + p.pulseOffset) * 0.3 + 0.7; // oscillates between 0.4 and 1.0
        p.opacity = p.baseOpacity * pulse;

        // Glow effect using shadowBlur
        ctx.save();
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(16, 185, 129, ${p.opacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${p.opacity})`;
        ctx.fill();
        ctx.restore();

        // Inner bright core
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

export default function HeroSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalized position from -1 to 1
    const normalizedX = (e.clientX - centerX) / (rect.width / 2);
    const normalizedY = (e.clientY - centerY) / (rect.height / 2);

    // Max rotation: 8 degrees
    const maxRotation = 8;
    const rotateY = normalizedX * maxRotation;
    const rotateX = -normalizedY * maxRotation; // Inverted for natural tilt feel

    setTilt({ rotateX, rotateY });

    // Glare position (0-100% for CSS)
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePos({ x: glareX, y: glareY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlarePos({ x: 50, y: 50 });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
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
      {/* Animated Grid Background */}
      <AnimatedGrid />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-[1]" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-safeglobal/5 rounded-full blur-[120px] z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] z-[1]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safeglobal/3 rounded-full blur-[150px] z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="space-y-8">
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
                AI-Powered
                <br />
                Safety.{" "}
                <span className="text-gradient">Zero</span>
                <br />
                Compromise.
              </h1>
              <div className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed min-h-[3.5rem]">
                Enterprise-grade AI that{" "}
                <TypingText
                  words={["monitors hazards in real-time", "predicts risks before they occur", "prevents incidents automatically", "automates compliance 24/7"]}
                  className="text-safeglobal font-semibold"
                />
              </div>
              <p className="text-sm text-muted-foreground max-w-lg">
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
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-xl shadow-safeglobal/25 hover:shadow-safeglobal/40 transition-all text-base px-8 h-13 gap-2"
                onClick={() => handleScrollTo("contact")}
              >
                Request Demo
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:border-safeglobal/50 hover:bg-safeglobal/5 text-base px-8 h-13 gap-2"
                onClick={() => handleScrollTo("services")}
              >
                <Play className="w-4 h-4" />
                See How It Works
              </Button>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-8 pt-4"
            >
              {[
                {
                  icon: Shield,
                  value: 99.7,
                  suffix: "%",
                  label: "Detection Rate",
                },
                {
                  icon: BarChart3,
                  value: 73,
                  suffix: "%",
                  label: "Risk Reduction",
                },
                {
                  icon: Globe,
                  value: 30,
                  suffix: "+",
                  label: "Countries",
                },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <stat.icon className="w-4 h-4 text-safeglobal/60 mb-1" />
                  <div className="text-2xl sm:text-3xl font-bold text-safeglobal">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Dashboard Preview with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:ml-8 perspective-[1000px]"
          >
            <div className="relative">
              {/* Main Dashboard Card - 3D Tilt */}
              <div
                ref={cardRef}
                className="relative rounded-2xl overflow-hidden border border-border bg-card/80 backdrop-blur-sm shadow-2xl shadow-black/30 glow-emerald"
                style={{
                  transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                  transformStyle: "preserve-3d",
                  transition: isHovering
                    ? "transform 0.1s ease-out"
                    : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
              >
                {/* Holographic Shine/Glare Overlay */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
                  style={{
                    background: isHovering
                      ? `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 20%, transparent 60%)`
                      : "transparent",
                    transition: isHovering ? "background 0.1s ease-out" : "background 0.6s ease-out",
                    mixBlendMode: "overlay",
                  }}
                />

                {/* Secondary rainbow/holographic glare layer */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
                  style={{
                    background: isHovering
                      ? `radial-gradient(ellipse at ${glarePos.x}% ${glarePos.y}%, rgba(16,185,129,0.08) 0%, rgba(6,182,212,0.06) 25%, transparent 55%)`
                      : "transparent",
                    transition: isHovering ? "background 0.1s ease-out" : "background 0.6s ease-out",
                  }}
                />

                <div className="bg-gradient-to-br from-safeglobal/10 to-cyan-500/5 p-6">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-safeglobal" />
                      <span className="text-sm font-semibold">
                        SafeGlobal Command Center
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-safeglobal animate-pulse" />
                      <span className="text-xs text-safeglobal">LIVE</span>
                    </div>
                  </div>

                  {/* Safety Score */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="relative w-28 h-28">
                      <svg
                        className="w-full h-full -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          fill="none"
                          stroke="rgba(16,185,129,0.1)"
                          strokeWidth="8"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray={`${0.94 * 2 * Math.PI * 42} ${2 * Math.PI * 42}`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold text-safeglobal">
                          94
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          SAFETY SCORE
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3 flex-1">
                      {[
                        {
                          label: "Compliance",
                          value: 98,
                          color: "bg-safeglobal",
                        },
                        {
                          label: "Risk Level",
                          value: 12,
                          color: "bg-cyan-500",
                        },
                        {
                          label: "Incidents",
                          value: 3,
                          color: "bg-amber-500",
                        },
                      ].map((item) => (
                        <div key={item.label} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">
                              {item.label}
                            </span>
                            <span className="font-medium">
                              {item.value}
                              {item.label === "Risk Level" ? "%" : ""}
                            </span>
                          </div>
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                              style={{
                                width:
                                  item.label === "Risk Level"
                                    ? `${item.value}%`
                                    : `${item.value}%`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Alert Feed */}
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-muted-foreground mb-2">
                      RECENT ALERTS
                    </div>
                    {[
                      {
                        icon: AlertTriangle,
                        text: "Zone B-7: Temperature threshold exceeded",
                        time: "2m ago",
                        type: "warning",
                      },
                      {
                        icon: Shield,
                        text: "PPE compliance verified - Floor 3",
                        time: "5m ago",
                        type: "success",
                      },
                      {
                        icon: Activity,
                        text: "Risk prediction updated for Assembly Line",
                        time: "8m ago",
                        type: "info",
                      },
                    ].map((alert, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2.5 rounded-lg bg-background/50 border border-border/50"
                      >
                        <alert.icon
                          className={`w-4 h-4 flex-shrink-0 ${
                            alert.type === "warning"
                              ? "text-amber-500"
                              : alert.type === "success"
                                ? "text-safeglobal"
                                : "text-cyan-500"
                          }`}
                        />
                        <span className="text-xs flex-1 truncate">
                          {alert.text}
                        </span>
                        <span className="text-[10px] text-muted-foreground flex-shrink-0">
                          {alert.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-safeglobal/10 border border-safeglobal/20 rounded-xl p-3 backdrop-blur-sm animate-float shadow-lg shadow-safeglobal/10">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-safeglobal" />
                  <span className="text-xs font-medium text-safeglobal">
                    0 Incidents Today
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-card border border-border rounded-xl p-3 shadow-xl animate-float [animation-delay:1s]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-safeglobal animate-pulse" />
                  <span className="text-xs font-medium">
                    AI Model v4.2 Active
                  </span>
                </div>
              </div>
              <div className="absolute top-1/2 -right-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-2.5 backdrop-blur-sm animate-float [animation-delay:2s] shadow-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[11px] font-medium text-cyan-400">
                    285 Workers Online
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
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
