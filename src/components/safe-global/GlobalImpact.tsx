"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Map, Activity, Server, Shield } from "lucide-react";

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

/* ───────────────────────── Location Data ───────────────────────── */

interface Location {
  name: string;
  x: number;
  y: number;
  size: "large" | "medium" | "small";
  color: "green" | "cyan";
  workers: string;
  isHQ?: boolean;
}

const locations: Location[] = [
  { name: "San Francisco", x: 105, y: 168, size: "large", color: "green", workers: "125,000+", isHQ: true },
  { name: "New York", x: 215, y: 165, size: "medium", color: "green", workers: "82,000+" },
  { name: "London", x: 445, y: 130, size: "medium", color: "green", workers: "67,000+" },
  { name: "Frankfurt", x: 470, y: 140, size: "small", color: "green", workers: "34,000+" },
  { name: "Dubai", x: 530, y: 190, size: "small", color: "cyan", workers: "28,000+" },
  { name: "Singapore", x: 650, y: 225, size: "medium", color: "cyan", workers: "56,000+" },
  { name: "Tokyo", x: 720, y: 165, size: "small", color: "cyan", workers: "41,000+" },
  { name: "Sydney", x: 710, y: 285, size: "small", color: "green", workers: "22,000+" },
];

/* Arc connections from HQ to 3 key offices */
const arcConnections = [
  { from: locations[0], to: locations[2], label: "SF → London" },
  { from: locations[0], to: locations[5], label: "SF → Singapore" },
  { from: locations[0], to: locations[6], label: "SF → Tokyo" },
];

/* ───────────────────── Stat Card Definitions ────────────────────── */

const statCards = [
  {
    value: 30,
    suffix: "+",
    label: "Countries",
    icon: Globe,
    colorClass: "text-safeglobal",
    bgClass: "bg-safeglobal/15",
    ringClass: "ring-safeglobal/30",
  },
  {
    value: 500,
    suffix: "K+",
    label: "Workers Protected",
    icon: Users,
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-400/15",
    ringClass: "ring-emerald-400/30",
  },
  {
    value: 6,
    suffix: "",
    label: "Continents",
    icon: Map,
    colorClass: "text-cyan-400",
    bgClass: "bg-cyan-400/15",
    ringClass: "ring-cyan-400/30",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Monitoring",
    icon: Activity,
    colorClass: "text-safeglobal",
    bgClass: "bg-safeglobal/15",
    ringClass: "ring-safeglobal/30",
  },
  {
    value: 15,
    suffix: "",
    label: "Data Centers",
    icon: Server,
    colorClass: "text-violet-400",
    bgClass: "bg-violet-400/15",
    ringClass: "ring-violet-400/30",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime SLA",
    icon: Shield,
    colorClass: "text-amber-400",
    bgClass: "bg-amber-400/15",
    ringClass: "ring-amber-400/30",
    decimals: 1,
  },
];

/* ───────────────────── Simplified World Map SVG ───────────────────── */

function WorldMap() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const dotSize = (size: string) => {
    switch (size) {
      case "large": return 5;
      case "medium": return 4;
      case "small": return 3;
      default: return 3;
    }
  };

  const dotColor = (color: string, isHovered: boolean) => {
    if (color === "cyan") {
      return isHovered ? "#22d3ee" : "#06b6d4";
    }
    return isHovered ? "#34d399" : "#10b981";
  };

  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Grid pattern */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-safeglobal/10"
          />
        </pattern>
        {/* Glow filter for dots */}
        <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Radial glow for dots */}
        <radialGradient id="dotGlow-green" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="dotGlow-cyan" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>
        {/* HQ glow - stronger */}
        <radialGradient id="hqGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Grid overlay */}
      <rect width="800" height="400" fill="url(#grid)" opacity="0.5" />

      {/* Continent outlines - simplified paths */}
      <g className="text-foreground/8" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2">
        {/* North America */}
        <path d="M60,80 L80,60 L130,55 L170,50 L210,55 L230,70 L240,90 L235,110 L250,120 L245,140 L230,155 L220,170 L210,180 L200,195 L185,210 L175,220 L160,230 L140,235 L120,230 L100,220 L90,200 L80,180 L75,160 L70,140 L60,120 L55,100 Z" opacity="0.6" />
        {/* Greenland */}
        <path d="M260,40 L290,35 L310,40 L320,55 L315,70 L300,80 L280,75 L265,65 L258,50 Z" opacity="0.6" />
        {/* South America */}
        <path d="M155,240 L170,235 L185,240 L195,260 L200,280 L195,310 L185,340 L175,360 L165,370 L155,365 L145,350 L138,330 L135,310 L130,290 L128,270 L130,255 L140,245 Z" opacity="0.6" />
        {/* Europe */}
        <path d="M420,60 L440,55 L460,60 L480,55 L500,60 L510,75 L505,90 L500,100 L490,110 L480,120 L470,125 L455,130 L445,135 L435,130 L430,120 L425,110 L420,95 L418,80 Z" opacity="0.6" />
        {/* Africa */}
        <path d="M440,145 L460,140 L480,145 L500,155 L510,170 L515,190 L510,210 L505,230 L495,250 L485,270 L470,285 L455,290 L445,280 L440,260 L435,240 L430,220 L425,200 L420,180 L425,165 L430,155 Z" opacity="0.6" />
        {/* Asia */}
        <path d="M520,50 L550,45 L580,50 L610,45 L640,50 L670,55 L700,60 L730,70 L745,85 L740,100 L730,115 L720,130 L710,140 L690,150 L670,155 L650,160 L630,155 L610,150 L590,145 L570,135 L550,120 L535,110 L525,95 L520,80 Z" opacity="0.6" />
        {/* Middle East / India */}
        <path d="M530,140 L550,135 L570,145 L580,160 L575,180 L570,200 L560,215 L545,220 L535,210 L530,195 L525,175 L525,160 Z" opacity="0.6" />
        {/* Southeast Asia */}
        <path d="M640,160 L660,155 L680,160 L695,175 L700,195 L695,210 L680,225 L665,230 L650,225 L640,210 L635,195 L635,175 Z" opacity="0.6" />
        {/* Australia */}
        <path d="M660,265 L690,260 L720,265 L740,280 L745,300 L735,320 L720,330 L700,335 L680,330 L665,320 L655,305 L650,285 Z" opacity="0.6" />
        {/* Japan */}
        <path d="M730,130 L735,120 L740,125 L742,135 L738,145 L732,140 Z" opacity="0.6" />
        {/* UK/Ireland */}
        <path d="M425,105 L432,100 L438,105 L436,115 L430,118 L425,113 Z" opacity="0.6" />
      </g>

      {/* Arc connections from SF to key offices */}
      {arcConnections.map((arc) => {
        const midX = (arc.from.x + arc.to.x) / 2;
        const midY = Math.min(arc.from.y, arc.to.y) - 60;
        return (
          <g key={arc.label}>
            <path
              d={`M ${arc.from.x} ${arc.from.y} Q ${midX} ${midY} ${arc.to.x} ${arc.to.y}`}
              fill="none"
              stroke="#10b981"
              strokeWidth="1"
              strokeOpacity="0.3"
              strokeDasharray="6 4"
              className="animate-[dash-flow_3s_linear_infinite]"
            />
            {/* Animated dot traveling along the arc */}
            <circle r="2" fill="#10b981" opacity="0.7">
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                path={`M ${arc.from.x} ${arc.from.y} Q ${midX} ${midY} ${arc.to.x} ${arc.to.y}`}
              />
            </circle>
          </g>
        );
      })}

      {/* Location dots */}
      {locations.map((loc) => {
        const isHovered = hoveredLocation === loc.name;
        const r = dotSize(loc.size);
        const color = dotColor(loc.color, isHovered);
        const glowId = loc.isHQ ? "hqGlow" : loc.color === "cyan" ? "dotGlow-cyan" : "dotGlow-green";

        return (
          <g
            key={loc.name}
            onMouseEnter={() => setHoveredLocation(loc.name)}
            onMouseLeave={() => setHoveredLocation(null)}
            className="cursor-pointer"
          >
            {/* Glow backdrop */}
            <circle
              cx={loc.x}
              cy={loc.y}
              r={loc.isHQ ? 25 : 18}
              fill={`url(#${glowId})`}
              opacity={isHovered ? 1 : 0.7}
            />
            {/* Pulse ring for HQ */}
            {loc.isHQ && (
              <>
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r={r + 4}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1"
                  opacity="0.4"
                >
                  <animate
                    attributeName="r"
                    from={r + 4}
                    to={r + 14}
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.4"
                    to="0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r={r + 4}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="0.8"
                  opacity="0.3"
                >
                  <animate
                    attributeName="r"
                    from={r + 4}
                    to={r + 20}
                    dur="2s"
                    begin="0.7s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.3"
                    to="0"
                    dur="2s"
                    begin="0.7s"
                    repeatCount="indefinite"
                  />
                </circle>
              </>
            )}
            {/* Main dot */}
            <circle
              cx={loc.x}
              cy={loc.y}
              r={isHovered ? r + 1.5 : r}
              fill={color}
              filter="url(#glow)"
              className="transition-all duration-300"
            />
            {/* HQ label */}
            {loc.isHQ && (
              <text
                x={loc.x}
                y={loc.y - r - 8}
                textAnchor="middle"
                className="fill-safeglobal text-[9px] font-bold tracking-wider"
              >
                HQ
              </text>
            )}
            {/* Tooltip on hover */}
            {isHovered && (
              <g>
                <rect
                  x={loc.x - 55}
                  y={loc.y - (loc.isHQ ? 40 : 32)}
                  width="110"
                  height="28"
                  rx="6"
                  fill="rgba(0,0,0,0.85)"
                  stroke={color}
                  strokeWidth="0.5"
                  strokeOpacity="0.4"
                />
                <text
                  x={loc.x}
                  y={loc.y - (loc.isHQ ? 27 : 19)}
                  textAnchor="middle"
                  className="fill-foreground text-[8px] font-semibold"
                >
                  {loc.name}
                </text>
                <text
                  x={loc.x}
                  y={loc.y - (loc.isHQ ? 17 : 9)}
                  textAnchor="middle"
                  className="fill-muted-foreground text-[7px]"
                >
                  {loc.workers} workers
                </text>
              </g>
            )}
            {/* City name (always visible for larger dots) */}
            {!isHovered && (loc.size === "large" || loc.size === "medium") && !loc.isHQ && (
              <text
                x={loc.x}
                y={loc.y - r - 5}
                textAnchor="middle"
                className="fill-muted-foreground text-[7px]"
                opacity="0.6"
              >
                {loc.name}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/* ─────────────────────── Main Component ─────────────────────── */

export default function GlobalImpact() {
  return (
    <section id="global-impact" className="section-divider relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="absolute inset-0 bg-noise" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-safeglobal/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

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
            className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
          >
            GLOBAL PRESENCE
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Protecting Workers{" "}
            <span className="text-gradient">Worldwide</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Our AI safety intelligence spans 6 continents, 30+ countries, and 500,000+ workers.
          </p>
        </motion.div>

        {/* Main Content: Map + Stats */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-center">
          {/* World Map - takes 3/5 on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 glass-card rounded-2xl p-4 sm:p-6 relative overflow-hidden"
          >
            {/* Subtle inner glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safeglobal/20 to-transparent" />

            <WorldMap />

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-safeglobal" />
                Americas &amp; Europe
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                Asia-Pacific &amp; Middle East
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-px border-t border-dashed border-safeglobal/50" />
                Data Connection
              </div>
            </div>
          </motion.div>

          {/* Stats Panel - takes 2/5 on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {statCards.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
                  className="group glass-card rounded-xl p-4 sm:p-5 text-center transition-all duration-300 hover:scale-[1.04] cursor-default"
                >
                  {/* Icon */}
                  <div className="relative mx-auto mb-3 w-10 h-10 flex items-center justify-center">
                    <span
                      className={`absolute inset-0 rounded-full ${stat.bgClass} animate-ping opacity-20`}
                    />
                    <span
                      className={`relative w-10 h-10 rounded-full ${stat.bgClass} flex items-center justify-center ring-1 ${stat.ringClass}`}
                    >
                      <stat.icon className={`w-4.5 h-4.5 ${stat.colorClass}`} />
                    </span>
                  </div>

                  {/* Animated counter */}
                  <div
                    className={`text-2xl sm:text-3xl font-bold ${stat.colorClass} leading-tight mb-1`}
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
                  <p className="text-xs text-muted-foreground leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center text-xs text-muted-foreground mt-5 flex items-center justify-center gap-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              All data centers connected with real-time redundancy
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
