"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Shield,
  Info,
  MapPin,
  Clock,
  Activity,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/* ─────────────────────── Severity Config ─────────────────────── */

type Severity = "CRITICAL" | "WARNING" | "INFO";
type Status = "RESOLVED" | "ACTIVE" | "MONITORING";

interface AlertCard {
  severity: Severity;
  description: string;
  location: string;
  time: string;
  status: Status;
}

const severityConfig: Record<
  Severity,
  {
    icon: typeof AlertTriangle;
    label: string;
    badgeClass: string;
    borderGlow: string;
    dotColor: string;
  }
> = {
  CRITICAL: {
    icon: AlertTriangle,
    label: "CRITICAL",
    badgeClass:
      "bg-red-500/15 text-red-400 border-red-500/30",
    borderGlow:
      "hover:shadow-[0_0_24px_rgba(239,68,68,0.2)] hover:border-red-500/30",
    dotColor: "bg-red-400",
  },
  WARNING: {
    icon: Shield,
    label: "WARNING",
    badgeClass:
      "bg-amber-500/15 text-amber-400 border-amber-500/30",
    borderGlow:
      "hover:shadow-[0_0_24px_rgba(245,158,11,0.2)] hover:border-amber-500/30",
    dotColor: "bg-amber-400",
  },
  INFO: {
    icon: Info,
    label: "INFO",
    badgeClass:
      "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    borderGlow:
      "hover:shadow-[0_0_24px_rgba(6,182,212,0.2)] hover:border-cyan-500/30",
    dotColor: "bg-cyan-400",
  },
};

const statusConfig: Record<
  Status,
  {
    label: string;
    dotColor: string;
    badgeClass: string;
    pingClass: string;
  }
> = {
  RESOLVED: {
    label: "Resolved",
    dotColor: "bg-emerald-400",
    badgeClass: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    pingClass: "bg-emerald-400",
  },
  ACTIVE: {
    label: "Active",
    dotColor: "bg-amber-400",
    badgeClass: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    pingClass: "bg-amber-400",
  },
  MONITORING: {
    label: "Monitoring",
    dotColor: "bg-red-400",
    badgeClass: "bg-red-500/15 text-red-400 border-red-500/30",
    pingClass: "bg-red-400",
  },
};

/* ─────────────────────── Alert Data ─────────────────────── */

const alerts: AlertCard[] = [
  {
    severity: "CRITICAL",
    description: "Chemical spill detected in Storage Unit B7",
    location: "PetroChem Industries, Houston",
    time: "2 minutes ago",
    status: "RESOLVED",
  },
  {
    severity: "WARNING",
    description: "Elevated noise levels beyond 85dB threshold",
    location: "TechForge Manufacturing, Detroit",
    time: "8 minutes ago",
    status: "ACTIVE",
  },
  {
    severity: "INFO",
    description: "Scheduled safety drill completed successfully",
    location: "BuildRight Construction, NYC",
    time: "15 minutes ago",
    status: "RESOLVED",
  },
  {
    severity: "WARNING",
    description: "PPE compliance rate dropped to 87% in Zone C",
    location: "GlobalMfg Corp, Chicago",
    time: "22 minutes ago",
    status: "MONITORING",
  },
  {
    severity: "INFO",
    description: "Air quality index normal across all zones",
    location: "SafeWork Healthcare, Boston",
    time: "35 minutes ago",
    status: "RESOLVED",
  },
  {
    severity: "CRITICAL",
    description: "Equipment temperature exceeding safe limits",
    location: "Apex Logistics, Seattle",
    time: "41 minutes ago",
    status: "ACTIVE",
  },
];

/* ─────────────── Ticker Data (10+ items) ─────────────── */

const tickerItems = [
  { text: "Zone A-12: Fire suppression system inspected ✓", color: "green" },
  { text: "Houston: Chemical storage temperature stabilized", color: "green" },
  { text: "Detroit: Noise monitoring recalibration in progress", color: "amber" },
  { text: "NYC: Emergency evacuation drill scheduled for 14:00", color: "cyan" },
  { text: "Chicago: PPE compliance improvement plan activated", color: "amber" },
  { text: "Boston: Air filtration units operating at 99.8% capacity", color: "green" },
  { text: "Seattle: Equipment shutdown protocol initiated", color: "red" },
  { text: "Miami: New worker onboarding safety training at 10:00", color: "cyan" },
  { text: "Denver: Structural integrity scan completed — all clear", color: "green" },
  { text: "LA: Forklift proximity sensor firmware updated ✓", color: "green" },
  { text: "Portland: Hazardous waste disposal compliance confirmed", color: "green" },
  { text: "Atlanta: Fall protection harnesses inspected — pass rate 100%", color: "green" },
  { text: "Phoenix: Heat stress warning issued for outdoor workers", color: "amber" },
  { text: "Dallas: Machine guard inspection completed in Zone B", color: "cyan" },
];

const tickerDotColors: Record<string, string> = {
  green: "bg-emerald-400",
  amber: "bg-amber-400",
  red: "bg-red-400",
  cyan: "bg-cyan-400",
};

/* ─────────────── Framer Motion Variants ─────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ─────────────────────── Main Component ─────────────────────── */

export default function SafetyNewsTicker() {
  return (
    <section
      id="safety-news"
      className="section-divider relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute inset-0 bg-noise" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-[10%] w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-safeglobal/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 lg:mb-18"
        >
          {/* Badge */}
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-xs font-semibold tracking-widest border-safeglobal/30 text-safeglobal bg-safeglobal/10"
          >
            <Activity className="w-3 h-3 mr-1.5" />
            LIVE INTELLIGENCE
          </Badge>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Safety{" "}
            <span className="text-gradient">Intelligence Feed</span>
          </h2>

          {/* Subtitle */}
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Real-time safety events and alerts from our global monitoring
            network.
          </p>

          {/* Live indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
            </span>
            <span className="text-sm font-semibold text-emerald-400 tracking-wide">
              MONITORING 500K+ WORKERS
            </span>
          </div>
        </motion.div>

        {/* ── Alert Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-14"
        >
          {alerts.map((alert, idx) => {
            const sevCfg = severityConfig[alert.severity];
            const statCfg = statusConfig[alert.status];
            const SeverityIcon = sevCfg.icon;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`group relative glass-card rounded-2xl p-5 lg:p-6 transition-all duration-300 hover:-translate-y-1 cursor-default ${sevCfg.borderGlow}`}
              >
                {/* Top row: severity badge + status badge */}
                <div className="flex items-center justify-between mb-4">
                  <Badge
                    variant="outline"
                    className={`gap-1.5 px-2.5 py-0.5 text-[11px] font-semibold border ${sevCfg.badgeClass}`}
                  >
                    <SeverityIcon className="w-3 h-3" />
                    {sevCfg.label}
                  </Badge>

                  <div className="flex items-center gap-1.5">
                    {/* Pulsing status dot */}
                    <span className="relative flex h-2 w-2">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statCfg.pingClass} opacity-50`}
                      />
                      <span
                        className={`relative inline-flex rounded-full h-2 w-2 ${statCfg.dotColor}`}
                      />
                    </span>
                    <Badge
                      variant="outline"
                      className={`px-2 py-0.5 text-[10px] font-medium border ${statCfg.badgeClass}`}
                    >
                      {statCfg.label}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base font-medium text-foreground leading-snug mb-3">
                  {alert.description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-muted-foreground/60" />
                  <span className="text-xs sm:text-sm truncate">
                    {alert.location}
                  </span>
                </div>

                {/* Time */}
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 flex-shrink-0 text-muted-foreground/60" />
                  <span className="text-xs sm:text-sm">{alert.time}</span>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Horizontal Scrolling Ticker ── */}
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
              Safety Updates
            </span>
          </div>

          <div className="relative glass-card rounded-xl overflow-hidden py-3">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card/80 to-transparent z-10 pointer-events-none" />

            {/* Marquee container — pauses on hover */}
            <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
              {/* Duplicate for seamless loop */}
              {[0, 1].map((set) =>
                tickerItems.map((item, i) => (
                  <div
                    key={`${set}-${i}`}
                    className="flex items-center gap-2.5 px-5 sm:px-6"
                  >
                    {/* Colored bullet point */}
                    <span
                      className={`relative flex h-2 w-2 flex-shrink-0 rounded-full ${tickerDotColors[item.color]} shadow-[0_0_6px_rgba(52,211,153,0.4)]`}
                    />
                    <span className="text-sm text-foreground/80">
                      {item.text}
                    </span>
                    {/* Separator */}
                    <span className="w-1 h-1 rounded-full bg-border ml-4 flex-shrink-0" />
                  </div>
                ))
              )}
            </div>
          </div>
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            Get instant alerts for your facilities — powered by 24/7 AI monitoring.
          </p>
          <Button
            variant="outline"
            className="border-safeglobal/30 text-safeglobal hover:bg-safeglobal/10 hover:text-safeglobal-light transition-colors"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Shield className="w-4 h-4 mr-2" />
            Request Live Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
