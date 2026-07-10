"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Shield,
  Activity,
  AlertTriangle,
  CheckCircle2,
  TrendingDown,
  Users,
  Zap,
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

const riskData = [
  { hour: "00:00", risk: 12, predicted: 14 },
  { hour: "01:00", risk: 10, predicted: 11 },
  { hour: "02:00", risk: 8, predicted: 9 },
  { hour: "03:00", risk: 7, predicted: 8 },
  { hour: "04:00", risk: 9, predicted: 10 },
  { hour: "05:00", risk: 14, predicted: 16 },
  { hour: "06:00", risk: 22, predicted: 25 },
  { hour: "07:00", risk: 35, predicted: 38 },
  { hour: "08:00", risk: 48, predicted: 52 },
  { hour: "09:00", risk: 55, predicted: 58 },
  { hour: "10:00", risk: 62, predicted: 65 },
  { hour: "11:00", risk: 58, predicted: 61 },
  { hour: "12:00", risk: 45, predicted: 48 },
  { hour: "13:00", risk: 52, predicted: 56 },
  { hour: "14:00", risk: 68, predicted: 72 },
  { hour: "15:00", risk: 72, predicted: 78 },
  { hour: "16:00", risk: 58, predicted: 62 },
  { hour: "17:00", risk: 42, predicted: 45 },
  { hour: "18:00", risk: 28, predicted: 30 },
  { hour: "19:00", risk: 18, predicted: 20 },
  { hour: "20:00", risk: 15, predicted: 17 },
  { hour: "21:00", risk: 12, predicted: 14 },
  { hour: "22:00", risk: 10, predicted: 12 },
  { hour: "23:00", risk: 9, predicted: 11 },
];

const zoneRiskData: Record<string, typeof riskData> = {
  "Assembly Line A": riskData.map((d) => ({ ...d, risk: Math.max(5, d.risk - 20), predicted: Math.max(5, d.predicted - 18) })),
  "Chemical Storage B": riskData.map((d) => ({ ...d, risk: d.risk + 5, predicted: d.predicted + 8 })),
  "Loading Dock C": riskData.map((d) => ({ ...d, risk: d.risk + 15, predicted: d.predicted + 20 })),
  "Office Block D": riskData.map((d) => ({ ...d, risk: Math.max(2, d.risk - 40), predicted: Math.max(2, d.predicted - 38) })),
};

const zonePredictions: Record<string, string> = {
  "Assembly Line A": "All systems nominal. Next scheduled maintenance window at 22:00. No elevated risk predicted in the next 8 hours.",
  "Chemical Storage B": "Slight risk elevation predicted at 14:00-15:00 due to scheduled chemical transfer. Recommended: Activate additional ventilation monitoring.",
  "Loading Dock C": "Elevated risk predicted 14:00-16:00 due to scheduled heavy machinery operation. Recommended: Deploy additional spotters and activate proximity sensors.",
  "Office Block D": "Minimal risk environment. All access control systems functioning normally. Next fire drill scheduled for Thursday.",
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string; color: string }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload) return null;
  return (
    <div className="bg-card border border-border rounded-lg p-3 shadow-xl text-xs">
      <p className="font-medium mb-1">{label}</p>
      {payload.map((entry, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-muted-foreground capitalize">
            {entry.dataKey}:
          </span>
          <span className="font-medium">{entry.value}%</span>
        </div>
      ))}
    </div>
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
    }, 4000);
    return () => clearInterval(interval);
  }, [zones.length]);

  const currentZone = zones[activeZone];
  const currentChartData = zoneRiskData[currentZone.name] || riskData;

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
            Experience how Safeglobal detects, predicts, and prevents workplace
            hazards.
          </p>
        </motion.div>

        {/* Interactive Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl border border-border bg-card/80 backdrop-blur-sm shadow-2xl shadow-black/20 overflow-hidden glow-emerald"
        >
          {/* Dashboard Top Bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-card/50">
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-safeglobal" />
              <span className="text-sm font-semibold">
                Safeglobal Command Center
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

                {/* Overall Stats */}
                <div className="p-4 rounded-xl border border-border bg-background/50 space-y-3">
                  <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Facility Overview
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-lg font-bold text-safeglobal">235</div>
                      <div className="text-[10px] text-muted-foreground">Total Workers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-amber-400">4</div>
                      <div className="text-[10px] text-muted-foreground">Open Alerts</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-teal-400">92%</div>
                      <div className="text-[10px] text-muted-foreground">Compliance</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-safeglobal">4/4</div>
                      <div className="text-[10px] text-muted-foreground">Zones Online</div>
                    </div>
                  </div>
                </div>
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
                        stroke="rgba(45,122,111,0.1)"
                        strokeWidth="6"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke={
                          currentZone.safetyScore >= 90
                            ? "#2d7a6f"
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
                          color: "text-teal-400",
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

                {/* Risk Analysis Chart with Recharts */}
                <div className="p-6 rounded-xl border border-border bg-background/50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                      Risk Analysis Timeline (24h)
                    </h4>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-safeglobal" />
                        <span className="text-[10px] text-muted-foreground">Actual</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="text-[10px] text-muted-foreground">AI Predicted</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={currentChartData}>
                        <defs>
                          <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2d7a6f" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#2d7a6f" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.15} />
                            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="hour"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 10, fill: "rgba(255,255,255,0.4)" }}
                          interval={3}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 10, fill: "rgba(255,255,255,0.4)" }}
                          domain={[0, 100]}
                          tickCount={5}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                          type="monotone"
                          dataKey="predicted"
                          stroke="#f59e0b"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          fill="url(#predictedGradient)"
                        />
                        <Area
                          type="monotone"
                          dataKey="risk"
                          stroke="#2d7a6f"
                          strokeWidth={2}
                          fill="url(#riskGradient)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
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
                        {zonePredictions[currentZone.name]}
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
