"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mic, BookOpen, Monitor, Calendar, ArrowRight } from "lucide-react";

/* ──────────────────── Countdown Logic ──────────────────── */

const EVENT_DATE = new Date("2026-03-15T10:00:00Z").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = EVENT_DATE - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

/* ──────────────────── Feature Cards ──────────────────── */

const featureCards = [
  {
    title: "Keynote: AI & The Future of Safety",
    description: "Dr. Elena Vasquez, CEO",
    icon: Mic,
    accentClass: "text-amber-400",
    bgClass: "bg-amber-400/15",
    ringClass: "ring-amber-400/30",
    borderHoverClass: "hover:border-amber-400/30",
    glowClass: "group-hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]",
  },
  {
    title: "Workshop: Compliance Automation",
    description: "Hands-on labs with our platform",
    icon: BookOpen,
    accentClass: "text-teal-400",
    bgClass: "bg-teal-400/15",
    ringClass: "ring-teal-400/30",
    borderHoverClass: "hover:border-teal-400/30",
    glowClass: "group-hover:shadow-[0_0_30px_rgba(91,138,114,0.1)]",
  },
  {
    title: "Live Demo: Real-Time Monitoring",
    description: "See Safeglobal in action",
    icon: Monitor,
    accentClass: "text-safeglobal",
    bgClass: "bg-safeglobal/15",
    ringClass: "ring-safeglobal/30",
    borderHoverClass: "hover:border-safeglobal/30",
    glowClass: "group-hover:shadow-[0_0_30px_rgba(45,122,111,0.1)]",
  },
];

/* ──────────────────── Main Component ──────────────────── */

const emptySubscribe = () => () => {};

export default function EventCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const countdownBoxes = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section id="event" className="section-divider relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="absolute inset-0 bg-noise" />

      {/* Ambient amber glow orbs */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <Badge
            variant="outline"
            className="border-amber-500/30 text-amber-400 bg-amber-500/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
          >
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            UPCOMING EVENT
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Live Safety Intelligence{" "}
            <span className="text-gradient-gold">Summit 2025</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Join 5,000+ safety professionals for our annual virtual summit featuring
            AI safety innovations, compliance workshops, and live demos.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-5 mb-14"
        >
          {countdownBoxes.map((box, idx) => (
            <div key={box.label} className="flex items-center gap-3 sm:gap-4">
              <div className="glass-card rounded-xl p-4 sm:p-5 lg:p-6 text-center min-w-[70px] sm:min-w-[85px] lg:min-w-[100px] relative overflow-hidden">
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/50 via-amber-400/80 to-amber-500/50" />

                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400 leading-none mb-1.5 tabular-nums">
                  {mounted ? pad(box.value) : "--"}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  {box.label}
                </div>
              </div>
              {/* Separator colon (not after last item) */}
              {idx < countdownBoxes.length - 1 && (
                <span className="text-2xl sm:text-3xl font-bold text-amber-400/50 -mx-1 sm:-mx-2">
                  :
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-12">
          {featureCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              className={`group glass-card rounded-xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${card.borderHoverClass} ${card.glowClass} cursor-default`}
            >
              <div className="flex items-start gap-3.5">
                <span
                  className={`w-10 h-10 rounded-lg ${card.bgClass} ring-1 ${card.ringClass} flex items-center justify-center flex-shrink-0`}
                >
                  <card.icon className={`w-5 h-5 ${card.accentClass}`} />
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-foreground leading-snug mb-1">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-amber-950 font-semibold px-8 rounded-xl h-12 text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Reserve Your Spot
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:border-amber-400/30 hover:text-amber-400 font-semibold px-8 rounded-xl h-12 text-sm transition-all duration-300"
          >
            View Full Agenda
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
