"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Zap,
  Shield,
  TrendingDown,
  Clock,
  ArrowRight,
  Trophy,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const metrics = [
  {
    id: "detection-time",
    name: "Incident Detection Time",
    before: "4-8 hours",
    after: "45ms",
    improvement: "99.9% improvement",
    improvementPrefix: "+",
    icon: Zap,
    color: "safeglobal",
    colorClasses: {
      iconBg: "bg-safeglobal/15",
      iconText: "text-safeglobal",
      afterText: "text-safeglobal",
      badgeBg: "bg-safeglobal/10 text-safeglobal border-safeglobal/20",
      progressBg: "bg-safeglobal/20",
      progressFill: "bg-safeglobal",
      glowShadow: "group-hover:shadow-safeglobal/10",
    },
    progressPercent: 99.9,
  },
  {
    id: "compliance-accuracy",
    name: "Compliance Accuracy",
    before: "72%",
    after: "98.5%",
    improvement: "36.8% improvement",
    improvementPrefix: "+",
    icon: Shield,
    color: "cyan",
    colorClasses: {
      iconBg: "bg-teal-500/15",
      iconText: "text-teal-400",
      afterText: "text-teal-400",
      badgeBg: "bg-teal-500/10 text-teal-400 border-teal-500/20",
      progressBg: "bg-teal-500/20",
      progressFill: "bg-teal-500",
      glowShadow: "group-hover:shadow-teal-500/10",
    },
    progressPercent: 36.8,
  },
  {
    id: "incident-rate",
    name: "Annual Incident Rate",
    before: "12.4 per 100",
    after: "3.1 per 100",
    improvement: "75% reduction",
    improvementPrefix: "-",
    icon: TrendingDown,
    color: "emerald",
    colorClasses: {
      iconBg: "bg-teal-600/15",
      iconText: "text-teal-500",
      afterText: "text-teal-500",
      badgeBg: "bg-teal-600/10 text-teal-500 border-teal-600/20",
      progressBg: "bg-teal-600/20",
      progressFill: "bg-teal-600",
      glowShadow: "group-hover:shadow-teal-600/10",
    },
    progressPercent: 75,
  },
  {
    id: "audit-time",
    name: "Safety Audit Time",
    before: "3-6 weeks",
    after: "2 hours",
    improvement: "98% faster",
    improvementPrefix: "",
    icon: Clock,
    color: "amber",
    colorClasses: {
      iconBg: "bg-amber-500/15",
      iconText: "text-amber-400",
      afterText: "text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      progressBg: "bg-amber-500/20",
      progressFill: "bg-amber-500",
      glowShadow: "group-hover:shadow-amber-500/10",
    },
    progressPercent: 98,
  },
  {
    id: "safety-score",
    name: "Worker Safety Score",
    before: "62/100",
    after: "94/100",
    improvement: "51.6% improvement",
    improvementPrefix: "+",
    icon: BarChart3,
    color: "violet",
    colorClasses: {
      iconBg: "bg-violet-500/15",
      iconText: "text-violet-400",
      afterText: "text-violet-400",
      badgeBg: "bg-violet-500/10 text-violet-400 border-violet-500/20",
      progressBg: "bg-violet-500/20",
      progressFill: "bg-violet-500",
      glowShadow: "group-hover:shadow-violet-500/10",
    },
    progressPercent: 51.6,
  },
];

// Feature comparison data for the comparison table
const comparisonFeatures = [
  { feature: "AI-Powered Hazard Detection", safeglobal: true, competitors: false },
  { feature: "Real-Time Monitoring", safeglobal: true, competitors: false },
  { feature: "Predictive Risk Analytics", safeglobal: true, competitors: false },
  { feature: "Automated Compliance Reports", safeglobal: true, competitors: false },
  { feature: "24/7 Dedicated Support", safeglobal: true, competitors: false },
  { feature: "On-Premise Deployment", safeglobal: true, competitors: false },
  { feature: "Custom Integrations", safeglobal: true, competitors: false },
  { feature: "Sub-Second Alert Latency", safeglobal: true, competitors: false },
  { feature: "SLA Guarantees", safeglobal: true, competitors: false },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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

function AnimatedBar({
  percent,
  colorClass,
  delay = 0,
}: {
  percent: number;
  colorClass: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={`w-full h-2 rounded-full bg-muted/50 overflow-hidden`}
    >
      <motion.div
        className={`h-full rounded-full ${colorClass}`}
        initial={{ width: 0 }}
        animate={isVisible ? { width: `${percent}%` } : { width: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          delay,
        }}
      />
    </div>
  );
}

export default function ComparisonSection() {
  const [showSafeGlobal, setShowSafeGlobal] = useState(true);
  const [tableVisible, setTableVisible] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tableVisible) {
          setTableVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (tableRef.current) observer.observe(tableRef.current);
    return () => observer.disconnect();
  }, [tableVisible]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="comparison"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-background via-card/30 to-background"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-safeglobal/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge
            variant="outline"
            className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
          >
            <BarChart3 className="w-3.5 h-3.5 mr-1" />
            THE DIFFERENCE
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Before vs After{" "}
            <span className="text-gradient">SafeGlobal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable impact across every safety metric that matters.
          </p>
        </motion.div>

        {/* Interactive Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <span
            className={`text-sm font-medium transition-colors duration-300 ${
              !showSafeGlobal
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
          >
            Traditional Safety
          </span>
          <button
            onClick={() => setShowSafeGlobal((prev) => !prev)}
            className="relative w-14 h-7 rounded-full transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safeglobal/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{
              backgroundColor: showSafeGlobal
                ? "rgb(16, 185, 129)"
                : "rgb(100, 116, 139)",
            }}
            aria-label={`Toggle to ${showSafeGlobal ? "Traditional Safety" : "With SafeGlobal"} view`}
          >
            <motion.div
              className="absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md"
              animate={{
                left: showSafeGlobal ? "calc(100% - 26px)" : "2px",
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors duration-300 ${
              showSafeGlobal
                ? "text-safeglobal"
                : "text-muted-foreground"
            }`}
          >
            With SafeGlobal
          </span>
        </motion.div>

        {/* Metrics Grid with Animated Bars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.id}
              variants={cardVariants}
              className={`group relative p-6 rounded-2xl border border-border bg-card/50 transition-all duration-300 hover:border-safeglobal/20 hover:-translate-y-1 ${metric.colorClasses.glowShadow}`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${metric.colorClasses.iconBg} flex items-center justify-center mb-4`}
              >
                <metric.icon
                  className={`w-6 h-6 ${metric.colorClasses.iconText}`}
                />
              </div>

              {/* Metric Name */}
              <h3 className="text-base font-semibold mb-3">
                {metric.name}
              </h3>

              {/* Before / After Values */}
              <div className="space-y-2 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Before:
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    {metric.before}
                  </span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={showSafeGlobal ? "after" : "before-value"}
                    initial={{ opacity: 0, x: showSafeGlobal ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: showSafeGlobal ? -20 : 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex items-baseline gap-2"
                  >
                    <span className="text-xs text-safeglobal uppercase tracking-wider">
                      After:
                    </span>
                    <span
                      className={`text-2xl font-bold ${metric.colorClasses.afterText}`}
                    >
                      {metric.after}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Improvement Badge */}
              <Badge
                variant="outline"
                className={`px-3 py-1 text-xs font-medium border ${metric.colorClasses.badgeBg} mb-4`}
              >
                {metric.improvementPrefix}
                {metric.improvement}
              </Badge>

              {/* Animated Progress Bar using IntersectionObserver */}
              <AnimatedBar
                percent={metric.progressPercent}
                colorClass={metric.colorClasses.progressFill}
                delay={0.3}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Comparison Table */}
        <motion.div
          ref={tableRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">
            Feature <span className="text-gradient">Comparison</span>
          </h3>
          <div className="rounded-2xl border border-border overflow-hidden bg-card/50">
            {/* Table Header */}
            <div className="grid grid-cols-3 border-b border-border bg-muted/30">
              <div className="p-4 sm:p-5 text-sm font-semibold text-foreground">
                Feature
              </div>
              <div className="p-4 sm:p-5 text-sm font-semibold text-center relative">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-safeglobal">SafeGlobal</span>
                    {/* Winner badge */}
                    <Badge className="bg-safeglobal/15 text-safeglobal border border-safeglobal/30 text-[9px] px-1.5 py-0.5 font-bold tracking-wider gap-0.5">
                      <Trophy className="w-2.5 h-2.5" />
                      BEST
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-5 text-sm font-semibold text-center text-muted-foreground">
                Competitors
              </div>
            </div>

            {/* Table Rows */}
            {comparisonFeatures.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -10 }}
                animate={
                  tableVisible
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -10 }
                }
                transition={{
                  duration: 0.3,
                  delay: index * 0.06,
                }}
                className={`grid grid-cols-3 border-b border-border/50 last:border-b-0 hover:bg-safeglobal/5 transition-colors duration-200 ${
                  index % 2 === 0 ? "bg-transparent" : "bg-muted/10"
                }`}
              >
                <div className="p-3 sm:p-4 text-sm text-muted-foreground">
                  {row.feature}
                </div>
                <div className="p-3 sm:p-4 flex items-center justify-center">
                  {row.safeglobal ? (
                    <CheckCircle2 className="w-5 h-5 text-safeglobal" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400/60" />
                  )}
                </div>
                <div className="p-3 sm:p-4 flex items-center justify-center">
                  {row.competitors ? (
                    <CheckCircle2 className="w-5 h-5 text-safeglobal" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400/60" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Summary - ROI Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 gap-6 mb-12"
        >
          {/* ROI Card */}
          <div className="relative p-6 rounded-2xl border border-border overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-safeglobal/10 via-transparent to-teal-700/5 pointer-events-none" />
            <div className="relative flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-safeglobal/15 flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-7 h-7 text-safeglobal" />
              </div>
              <div>
                <div className="text-3xl font-bold text-safeglobal">
                  340%
                </div>
                <div className="text-sm text-muted-foreground">
                  Average ROI in first year
                </div>
              </div>
            </div>
          </div>

          {/* Payback Period Card */}
          <div className="relative p-6 rounded-2xl border border-border overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-teal-600/5 pointer-events-none" />
            <div className="relative flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-teal-500/15 flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-teal-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400">
                  3-6 months
                </div>
                <div className="text-sm text-muted-foreground">
                  Payback period
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/20 hover:shadow-safeglobal/30 transition-all gap-2 px-8"
            onClick={() => handleScrollTo("safety-score")}
          >
            Calculate Your ROI
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
