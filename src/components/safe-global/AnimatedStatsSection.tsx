"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Eye,
  TrendingDown,
  FileCheck,
  Database,
  Zap,
  ShieldCheck,
  DollarSign,
} from "lucide-react";

/* ───────────────────────── Animated Counter ───────────────────────── */

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2200,
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}) {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = Date.now();
    let raf: number;
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out quart for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 4);
      setCurrent(eased * target);
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  const displayValue =
    decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toLocaleString();

  return (
    <div ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </div>
  );
}

/* ───────────────────────── Stat Definitions ───────────────────────── */

const stats = [
  {
    value: 500000,
    suffix: "+",
    label: "Workers Protected",
    icon: Users,
    colorClass: "text-safeglobal",
    bgClass: "bg-safeglobal/15",
    ringClass: "ring-safeglobal/30",
    glowClass: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
  {
    value: 99.7,
    suffix: "%",
    label: "Hazard Detection Rate",
    icon: Eye,
    colorClass: "text-cyan-400",
    bgClass: "bg-cyan-400/15",
    ringClass: "ring-cyan-400/30",
    glowClass: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    decimals: 1,
  },
  {
    value: 73,
    suffix: "%",
    label: "Average Risk Reduction",
    icon: TrendingDown,
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-400/15",
    ringClass: "ring-emerald-400/30",
    glowClass: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]",
  },
  {
    value: 200,
    suffix: "+",
    label: "Standards Tracked",
    icon: FileCheck,
    colorClass: "text-violet-400",
    bgClass: "bg-violet-400/15",
    ringClass: "ring-violet-400/30",
    glowClass: "group-hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]",
  },
  {
    value: 2.1,
    suffix: "B",
    label: "Data Points Processed Daily",
    icon: Database,
    colorClass: "text-amber-400",
    bgClass: "bg-amber-400/15",
    ringClass: "ring-amber-400/30",
    glowClass: "group-hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]",
    decimals: 1,
  },
  {
    value: 45,
    suffix: "ms",
    label: "Average Alert Response",
    icon: Zap,
    colorClass: "text-safeglobal",
    bgClass: "bg-safeglobal/15",
    ringClass: "ring-safeglobal/30",
    glowClass: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
  {
    value: 98.5,
    suffix: "%",
    label: "Compliance Score Average",
    icon: ShieldCheck,
    colorClass: "text-cyan-400",
    bgClass: "bg-cyan-400/15",
    ringClass: "ring-cyan-400/30",
    glowClass: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    decimals: 1,
  },
  {
    value: 2.1,
    prefix: "$",
    suffix: "B",
    label: "Client Savings Delivered",
    icon: DollarSign,
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-400/15",
    ringClass: "ring-emerald-400/30",
    glowClass: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]",
    decimals: 1,
  },
];

/* ────────────────────── Live Data Feed Events ────────────────────── */

const liveEvents = [
  {
    text: "Zone A-7: PPE compliance verified ✓",
    time: "2s ago",
    status: "green" as const,
  },
  {
    text: "Chemical Storage: Temperature normal",
    time: "5s ago",
    status: "cyan" as const,
  },
  {
    text: "Loading Dock: Vehicle movement detected",
    time: "8s ago",
    status: "amber" as const,
  },
  {
    text: "Floor 3: Air quality optimal",
    time: "12s ago",
    status: "green" as const,
  },
  {
    text: "Assembly Line: Equipment check complete ✓",
    time: "15s ago",
    status: "green" as const,
  },
  {
    text: "Office Wing: Emergency exit clear",
    time: "18s ago",
    status: "cyan" as const,
  },
];

const statusColors: Record<string, string> = {
  green: "bg-emerald-400",
  cyan: "bg-cyan-400",
  amber: "bg-amber-400",
};

const statusRingColors: Record<string, string> = {
  green: "shadow-[0_0_6px_rgba(52,211,153,0.6)]",
  cyan: "shadow-[0_0_6px_rgba(6,182,212,0.6)]",
  amber: "shadow-[0_0_6px_rgba(251,191,36,0.6)]",
};

/* ─────────────────────── Main Component ─────────────────────── */

export default function AnimatedStatsSection() {
  return (
    <section id="stats" className="section-divider relative py-20 lg:py-28 overflow-hidden">
      {/* ── Dark gradient background with subtle pattern ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute inset-0 bg-noise" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-safeglobal/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 lg:mb-18"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Real-Time Safety{" "}
            <span className="text-gradient">Intelligence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Live safety data streaming from facilities worldwide — powered by AI that
            never sleeps, protecting what matters most.
          </p>
        </motion.div>

        {/* ── Stats Grid (4×2) ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-14">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group relative glass-card rounded-2xl p-5 lg:p-6 text-center transition-all duration-300 hover:scale-[1.04] ${stat.glowClass} cursor-default`}
            >
              {/* Icon with pulse */}
              <div className="relative mx-auto mb-4 w-11 h-11 flex items-center justify-center">
                <span
                  className={`absolute inset-0 rounded-full ${stat.bgClass} animate-ping opacity-30`}
                />
                <span
                  className={`relative w-11 h-11 rounded-full ${stat.bgClass} flex items-center justify-center ring-1 ${stat.ringClass}`}
                >
                  <stat.icon className={`w-5 h-5 ${stat.colorClass}`} />
                </span>
              </div>

              {/* Animated counter */}
              <div
                className={`text-2xl sm:text-3xl lg:text-[2rem] font-bold ${stat.colorClass} leading-tight mb-1.5`}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix || ""}
                  duration={2400}
                  decimals={stat.decimals || 0}
                />
              </div>

              {/* Label */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-snug">
                {stat.label}
              </p>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* ── Live Data Feed ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
              Live Data Feed
            </span>
          </div>

          <div className="relative glass-card rounded-xl overflow-hidden py-3">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/[0.03] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/[0.03] to-transparent z-10 pointer-events-none" />

            {/* Marquee container — pauses on hover */}
            <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
              {/* Duplicate the list for seamless loop */}
              {[0, 1].map((set) =>
                liveEvents.map((event, i) => (
                  <div
                    key={`${set}-${i}`}
                    className="flex items-center gap-2.5 px-5 sm:px-6"
                  >
                    {/* Pulsing dot */}
                    <span
                      className={`relative flex h-2 w-2 flex-shrink-0 ${statusRingColors[event.status]}`}
                    >
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusColors[event.status]} opacity-50`}
                      />
                      <span
                        className={`relative inline-flex rounded-full h-2 w-2 ${statusColors[event.status]}`}
                      />
                    </span>
                    <span className="text-sm text-foreground/80">
                      {event.text}
                    </span>
                    <span className="text-xs text-muted-foreground flex-shrink-0">
                      {event.time}
                    </span>
                    {/* Separator */}
                    <span className="w-1 h-1 rounded-full bg-border ml-4 flex-shrink-0" />
                  </div>
                ))
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
