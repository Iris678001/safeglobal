"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Activity,
  Users,
  Globe,
  Zap,
  AlertTriangle,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const metrics = [
  { icon: Shield, value: "500,000+", label: "Workers Protected" },
  { icon: Activity, value: "99.7%", label: "Detection Rate" },
  { icon: TrendingUp, value: "73%", label: "Risk Reduction" },
  { icon: Globe, value: "30+", label: "Countries" },
  { icon: Zap, value: "24/7", label: "AI Monitoring" },
  { icon: CheckCircle2, value: "$2.1B", label: "Client Savings" },
  { icon: AlertTriangle, value: "4,200+", label: "Hazards Prevented Today" },
  { icon: Users, value: "0.3s", label: "Alert Response Time" },
];

function MetricItem({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 px-6 whitespace-nowrap">
      <Icon className="w-4 h-4 text-safeglobal/70 flex-shrink-0" />
      <span className="text-emerald-400 font-bold text-sm tracking-tight">
        {value}
      </span>
      <span className="text-muted-foreground text-sm">{label}</span>
      <div className="w-1 h-1 rounded-full bg-safeglobal/30 ml-4" />
    </div>
  );
}

export default function LiveMetricsBanner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-3 bg-card/80 border-y border-border backdrop-blur-sm overflow-hidden group"
    >
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling container - uses CSS class from globals.css */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {metrics.map((metric) => (
            <MetricItem key={`a-${metric.label}`} {...metric} />
          ))}
          {metrics.map((metric) => (
            <MetricItem key={`b-${metric.label}`} {...metric} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
