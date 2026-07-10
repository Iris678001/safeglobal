"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Activity,
  Shield,
  ArrowRight,
} from "lucide-react";

/* ───────────────────────── Timeline Data ───────────────────────── */

type TimelineType = "detect" | "analyze" | "alert" | "action" | "resolve" | "complete";

interface TimelineEntry {
  timestamp: string;
  description: string;
  type: TimelineType;
  colorScheme: "cyan" | "violet" | "amber" | "safeglobal";
}

const timelineEntries: TimelineEntry[] = [
  {
    timestamp: "00:00:00",
    description: "Chemical sensor detects VOC spike",
    type: "detect",
    colorScheme: "cyan",
  },
  {
    timestamp: "00:00:03",
    description: "AI classifies risk level: HIGH",
    type: "analyze",
    colorScheme: "violet",
  },
  {
    timestamp: "00:00:05",
    description: "Alert dispatched to Zone Supervisor",
    type: "alert",
    colorScheme: "amber",
  },
  {
    timestamp: "00:00:08",
    description: "Automated ventilation activated",
    type: "action",
    colorScheme: "safeglobal",
  },
  {
    timestamp: "00:00:15",
    description: "Workers evacuated from affected area",
    type: "action",
    colorScheme: "safeglobal",
  },
  {
    timestamp: "00:02:30",
    description: "Chemical levels returning to normal",
    type: "resolve",
    colorScheme: "cyan",
  },
  {
    timestamp: "00:05:00",
    description: "All-clear signal issued",
    type: "resolve",
    colorScheme: "safeglobal",
  },
  {
    timestamp: "00:05:15",
    description: "Incident report auto-generated",
    type: "complete",
    colorScheme: "safeglobal",
  },
];

/* ─────────────── Type label mapping ─────────────── */

const typeLabels: Record<TimelineType, string> = {
  detect: "DETECT",
  analyze: "ANALYZE",
  alert: "ALERT",
  action: "ACTION",
  resolve: "RESOLVE",
  complete: "COMPLETE",
};

const typeIcons: Record<TimelineType, React.ElementType> = {
  detect: Activity,
  analyze: Zap,
  alert: AlertTriangle,
  action: Shield,
  resolve: CheckCircle2,
  complete: CheckCircle2,
};

/* ─────────────── Color scheme mapping ─────────────── */

const colorConfig: Record<
  string,
  {
    dotColor: string;
    dotBg: string;
    dotRing: string;
    badgeBg: string;
    badgeBorder: string;
    badgeText: string;
    glowColor: string;
  }
> = {
  cyan: {
    dotColor: "bg-teal-400",
    dotBg: "bg-teal-400/20",
    dotRing: "ring-teal-400/40",
    badgeBg: "bg-teal-400/10",
    badgeBorder: "border-teal-400/30",
    badgeText: "text-teal-400",
    glowColor: "shadow-[0_0_12px_rgba(91,138,114,0.5)]",
  },
  violet: {
    dotColor: "bg-violet-400",
    dotBg: "bg-violet-400/20",
    dotRing: "ring-violet-400/40",
    badgeBg: "bg-violet-400/10",
    badgeBorder: "border-violet-400/30",
    badgeText: "text-violet-400",
    glowColor: "shadow-[0_0_12px_rgba(167,139,250,0.5)]",
  },
  amber: {
    dotColor: "bg-amber-400",
    dotBg: "bg-amber-400/20",
    dotRing: "ring-amber-400/40",
    badgeBg: "bg-amber-400/10",
    badgeBorder: "border-amber-400/30",
    badgeText: "text-amber-400",
    glowColor: "shadow-[0_0_12px_rgba(251,191,36,0.5)]",
  },
  safeglobal: {
    dotColor: "bg-safeglobal",
    dotBg: "bg-safeglobal/20",
    dotRing: "ring-safeglobal/40",
    badgeBg: "bg-safeglobal/10",
    badgeBorder: "border-safeglobal/30",
    badgeText: "text-safeglobal",
    glowColor: "shadow-[0_0_12px_rgba(45,122,111,0.5)]",
  },
};

/* ────────────────── Count-Up Animation Component ────────────────── */

function CountUpText({
  target,
  duration = 2000,
  suffix = "",
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
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
      const eased = 1 - Math.pow(1 - progress, 4);
      setCurrent(eased * target);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return (
    <div ref={ref}>
      {Math.floor(current)}
      {suffix}
    </div>
  );
}

/* ───────────────────── Timeline Entry Card ───────────────────── */

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  const colors = colorConfig[entry.colorScheme];
  const label = typeLabels[entry.type];
  const Icon = typeIcons[entry.type];

  return (
    <div className="glass-card rounded-xl p-4 sm:p-5 border border-border hover:border-border/80 transition-all duration-300 max-w-sm">
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span className="font-mono text-xs text-muted-foreground">
          {entry.timestamp}
        </span>
        <Badge
          variant="outline"
          className={`${colors.badgeBg} ${colors.badgeBorder} ${colors.badgeText} text-[10px] tracking-wider font-semibold`}
        >
          <Icon className="w-3 h-3 mr-0.5" />
          {label}
        </Badge>
      </div>
      <p className="text-sm sm:text-base text-foreground leading-relaxed">
        {entry.description}
      </p>
    </div>
  );
}

/* ───────────────────── Main Component ───────────────────── */

export default function SafetyTimeline() {
  return (
    <section
      id="safety-timeline"
      className="section-divider relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Dark gradient background with patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/80 to-background" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute inset-0 bg-noise" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-[10%] w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-[10%] w-[400px] h-[400px] bg-safeglobal/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 lg:mb-18"
        >
          <Badge
            variant="outline"
            className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
          >
            <Clock className="w-3.5 h-3.5 mr-1" />
            SAFETY TIMELINE
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            AI Incident{" "}
            <span className="text-gradient">Response Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            See how Safeglobal&apos;s AI detects, alerts, and resolves safety
            incidents in real-time.
          </p>
        </motion.div>

        {/* ── Vertical Timeline ── */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central vertical line with gradient - desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block">
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(to bottom, #5b8a72, #2d7a6f 50%, #2d7a6f)",
              }}
            />
          </div>

          {/* Mobile left-aligned line */}
          <div className="absolute left-5 top-0 bottom-0 w-px md:hidden">
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(to bottom, #5b8a72, #2d7a6f 50%, #2d7a6f)",
              }}
            />
          </div>

          {/* Timeline entries */}
          <div className="space-y-8 md:space-y-12">
            {timelineEntries.map((entry, idx) => {
              const colors = colorConfig[entry.colorScheme];
              const isLeft = idx % 2 === 0;
              const isAction = entry.type === "action";

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Desktop: alternating layout */}
                  <div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] md:gap-4 items-center">
                    {/* Left side */}
                    <div className={isLeft ? "flex justify-end" : ""}>
                      {isLeft && <TimelineCard entry={entry} />}
                    </div>

                    {/* Center dot column */}
                    <div className="flex flex-col items-center">
                      <div className="relative flex items-center justify-center">
                        {/* Pulse ring for action types */}
                        {isAction && (
                          <span
                            className={`absolute w-10 h-10 rounded-full ${colors.dotBg} animate-ping opacity-40`}
                          />
                        )}
                        <span
                          className={`relative w-5 h-5 rounded-full ${colors.dotColor} ring-4 ${colors.dotRing} ${colors.glowColor} z-10`}
                        />
                      </div>
                    </div>

                    {/* Right side */}
                    <div className={!isLeft ? "flex justify-start" : ""}>
                      {!isLeft && <TimelineCard entry={entry} />}
                    </div>
                  </div>

                  {/* Mobile: left-aligned layout */}
                  <div className="md:hidden flex gap-4 items-start">
                    {/* Dot */}
                    <div className="flex flex-col items-center flex-shrink-0 pt-1.5 ml-2">
                      <div className="relative flex items-center justify-center">
                        {isAction && (
                          <span
                            className={`absolute w-8 h-8 rounded-full ${colors.dotBg} animate-ping opacity-40`}
                          />
                        )}
                        <span
                          className={`relative w-4 h-4 rounded-full ${colors.dotColor} ring-3 ${colors.dotRing} ${colors.glowColor} z-10`}
                        />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 min-w-0">
                      <TimelineCard entry={entry} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Summary Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="relative rounded-2xl border border-safeglobal/20 bg-gradient-to-b from-safeglobal/10 via-safeglobal/5 to-transparent p-8 sm:p-10 text-center overflow-hidden">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-safeglobal/5 to-safeglobal/10 pointer-events-none" />

            <div className="relative z-10">
              {/* Large response time */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-6 h-6 text-safeglobal" />
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-safeglobal leading-none">
                  5{" "}
                  <span className="text-2xl sm:text-3xl lg:text-4xl">
                    min
                  </span>{" "}
                  15{" "}
                  <span className="text-2xl sm:text-3xl lg:text-4xl">
                    sec
                  </span>
                </span>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base mb-5">
                From detection to resolution
              </p>

              {/* Comparison badge */}
              <Badge
                variant="outline"
                className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-2 text-sm font-semibold tracking-wide"
              >
                <Shield className="w-4 h-4 mr-1.5" />
                99.2% faster than industry average
              </Badge>

              {/* Count-up visualization */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-teal-400">
                    <CountUpText target={5} suffix="s" />
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                    Detection
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-safeglobal">
                    <CountUpText target={8} suffix="s" />
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                    Response
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-violet-400">
                    <CountUpText target={315} suffix="s" />
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                    Full Resolution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-safeglobal text-white font-semibold text-sm sm:text-base hover:bg-safeglobal-dark transition-colors duration-300 shadow-lg shadow-safeglobal/20 hover:shadow-safeglobal/30 group"
          >
            See it in action
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
