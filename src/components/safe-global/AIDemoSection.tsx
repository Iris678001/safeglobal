"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Activity,
  AlertTriangle,
  CheckCircle2,
  TrendingDown,
  Users,
  Zap,
  BarChart3,
} from "lucide-react";

function AnimatedCounter({
  target,
  duration = 2000,
  suffix = "",
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return (
    <span>
      {current}
      {suffix}
    </span>
  );
}

export default function AIDemoSection() {
  const [activeZone, setActiveZone] = useState(0);

  const zones = [
    {
      name: "Assembly Line A",
      safetyScore: 96,
      status: "Optimal",
      incidents: 0,
      workers: 45,
      riskLevel: "Low",
    },
    {
      name: "Chemical Storage B",
      safetyScore: 88,
      status: "Caution",
      incidents: 1,
      workers: 12,
      riskLevel: "Medium",
    },
    {
      name: "Loading Dock C",
      safetyScore: 71,
      status: "Alert",
      incidents: 3,
      workers: 28,
      riskLevel: "High",
    },
    {
      name: "Office Block D",
      safetyScore: 99,
      status: "Optimal",
      incidents: 0,
      workers: 150,
      riskLevel: "Minimal",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveZone((prev) => (prev + 1) % zones.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [zones.length]);

  const currentZone = zones[activeZone];

  return (
    <section id="ai-demo" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
          >
            LIVE DEMO
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            See the AI{" "}
            <span className="text-gradient">Safety Intelligence</span> in
            Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An interactive preview of our real-time monitoring dashboard.
            Experience how SafeGlobal detects, predicts, and prevents workplace
            hazards.
          </p>
        </motion.div>

        {/* Interactive Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl border border-border bg-card/80 backdrop-blur-sm shadow-2xl shadow-black/20 overflow-hidden"
        >
          {/* Dashboard Top Bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-card/50">
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-safeglobal" />
              <span className="text-sm font-semibold">
                SafeGlobal Command Center
              </span>
              <Badge className="bg-safeglobal/20 text-safeglobal text-[10px] border-safeglobal/30">
                LIVE
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-safeglobal animate-pulse" />
              <span className="text-xs text-muted-foreground">
                Last updated: just now
              </span>
            </div>
          </div>

          <div className="p-6 lg:p-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left - Zone Selector */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Monitored Zones
                </h4>
                {zones.map((zone, idx) => (
                  <button
                    key={zone.name}
                    onClick={() => setActiveZone(idx)}
                    className={`w-full p-4 rounded-xl border transition-all text-left cursor-pointer ${
                      activeZone === idx
                        ? "border-safeglobal/40 bg-safeglobal/10 shadow-lg shadow-safeglobal/10"
                        : "border-border bg-card/30 hover:border-border hover:bg-card/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{zone.name}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          zone.status === "Optimal"
                            ? "bg-safeglobal/20 text-safeglobal"
                            : zone.status === "Caution"
                              ? "bg-amber-500/20 text-amber-400"
                              : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {zone.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {zone.workers}
                      </span>
                      <span className="flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {zone.incidents}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Center - Main Display */}
              <div className="lg:col-span-2 space-y-6">
                {/* Safety Score Circle */}
                <div className="flex items-center gap-8 p-6 rounded-xl border border-border bg-background/50">
                  <div className="relative w-36 h-36 flex-shrink-0">
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
                        strokeWidth="6"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke={
                          currentZone.safetyScore >= 90
                            ? "#10b981"
                            : currentZone.safetyScore >= 75
                              ? "#f59e0b"
                              : "#ef4444"
                        }
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${(currentZone.safetyScore / 100) * 2 * Math.PI * 42} ${2 * Math.PI * 42}`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold">
                        <AnimatedCounter target={currentZone.safetyScore} />
                      </span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        Safety Score
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {currentZone.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Real-time safety monitoring and risk assessment
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {[
                        {
                          icon: CheckCircle2,
                          label: "Compliance",
                          value: `${currentZone.safetyScore - 2}%`,
                          color: "text-safeglobal",
                        },
                        {
                          icon: TrendingDown,
                          label: "Risk Level",
                          value: currentZone.riskLevel,
                          color:
                            currentZone.riskLevel === "Low" ||
                            currentZone.riskLevel === "Minimal"
                              ? "text-safeglobal"
                              : currentZone.riskLevel === "Medium"
                                ? "text-amber-400"
                                : "text-red-400",
                        },
                        {
                          icon: Activity,
                          label: "Active Workers",
                          value: currentZone.workers.toString(),
                          color: "text-cyan-400",
                        },
                      ].map((metric) => (
                        <div
                          key={metric.label}
                          className="p-3 rounded-lg border border-border bg-card/30"
                        >
                          <metric.icon
                            className={`w-4 h-4 ${metric.color} mb-1`}
                          />
                          <div className="text-lg font-semibold">
                            {metric.value}
                          </div>
                          <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Risk Analysis Timeline */}
                <div className="p-6 rounded-xl border border-border bg-background/50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                      Risk Analysis Timeline (24h)
                    </h4>
                    <Badge
                      variant="secondary"
                      className="text-[10px] bg-safeglobal/10 text-safeglobal"
                    >
                      AI Predicted
                    </Badge>
                  </div>
                  <div className="h-24 flex items-end gap-1">
                    {Array.from({ length: 24 }, (_, i) => {
                      const height = Math.max(
                        10,
                        Math.random() * 60 + (i > 8 && i < 17 ? 30 : 0)
                      );
                      const isHigh = height > 60;
                      return (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm transition-all duration-500"
                          style={{
                            height: `${height}%`,
                            backgroundColor: isHigh
                              ? "rgba(239, 68, 68, 0.6)"
                              : "rgba(16, 185, 129, 0.4)",
                          }}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
                    <span>00:00</span>
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>24:00</span>
                  </div>
                </div>

                {/* AI Predictions */}
                <div className="p-4 rounded-xl border border-safeglobal/20 bg-safeglobal/5">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-safeglobal flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-safeglobal mb-1">
                        AI Safety Prediction
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Based on current trends, Zone C may experience elevated
                        risk levels between 14:00-16:00 due to scheduled heavy
                        machinery operation. Recommended: Deploy additional
                        spotters and activate proximity sensors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
