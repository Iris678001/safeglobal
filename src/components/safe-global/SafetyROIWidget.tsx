"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Shield,
  ArrowRight,
  Users,
  AlertTriangle,
  Percent,
  Clock,
  HeartPulse,
  Scale,
  FileCheck,
  Umbrella,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animated Counter                                                   */
/* ------------------------------------------------------------------ */

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const spring = useSpring(0, { stiffness: 100, damping: 30 });
  const display = useTransform(spring, (latest) =>
    latest.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => setDisplayValue(v));
    return unsubscribe;
  }, [display]);

  return (
    <span>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  ROI Calculation Logic                                              */
/* ------------------------------------------------------------------ */

interface ROIResult {
  annualIncidentCostCurrent: number;
  annualIncidentCostProjected: number;
  riskReduction: number;
  annualSavings: number;
  threeYearROI: number;
  implementationCost: number;
  paybackMonths: number;
  directSavings: number;
  indirectSavings: number;
  complianceSavings: number;
  insuranceSavings: number;
}

function calculateROI(
  employees: number,
  incidentRate: number,
  avgCostPerIncident: number,
  complianceLevel: number
): ROIResult {
  const totalIncidents = (employees / 100) * incidentRate;
  const annualIncidentCostCurrent = totalIncidents * avgCostPerIncident;

  const riskReduction = 0.73; // Based on case study data
  const annualIncidentCostProjected =
    annualIncidentCostCurrent * (1 - riskReduction);

  const annualSavings = annualIncidentCostCurrent - annualIncidentCostProjected;

  // Implementation cost based on employee count tier
  let implementationCost: number;
  if (employees <= 100) {
    implementationCost = 25000;
  } else if (employees <= 500) {
    implementationCost = 75000;
  } else if (employees <= 1000) {
    implementationCost = 150000;
  } else if (employees <= 3000) {
    implementationCost = 300000;
  } else if (employees <= 5000) {
    implementationCost = 500000;
  } else {
    implementationCost = 800000;
  }

  // Compliance bonus savings
  const complianceGap = 100 - complianceLevel;
  const complianceSavings =
    annualIncidentCostCurrent * (complianceGap / 100) * 0.15;

  // Breakdown of savings
  const directSavings = annualSavings * 0.4; // medical, compensation
  const indirectSavings = annualSavings * 0.3; // downtime, legal
  const insuranceSavings = annualSavings * 0.12; // insurance premium reduction

  const totalSavings = annualSavings + complianceSavings + insuranceSavings;

  const threeYearROI =
    implementationCost > 0
      ? ((totalSavings * 3 - implementationCost) / implementationCost) * 100
      : 0;

  const paybackMonths =
    totalSavings > 0 ? (implementationCost / totalSavings) * 12 : 0;

  return {
    annualIncidentCostCurrent,
    annualIncidentCostProjected,
    riskReduction,
    annualSavings,
    threeYearROI: Math.round(threeYearROI),
    implementationCost,
    paybackMonths: Math.round(paybackMonths * 10) / 10,
    directSavings,
    indirectSavings,
    complianceSavings,
    insuranceSavings,
  };
}

/* ------------------------------------------------------------------ */
/*  Slider Input Component                                             */
/* ------------------------------------------------------------------ */

function SliderInput({
  label,
  icon: Icon,
  value,
  onChange,
  min,
  max,
  step,
  formatValue,
  minLabel,
  maxLabel,
  color = "safeglobal",
}: {
  label: string;
  icon: React.ElementType;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  formatValue: (v: number) => string;
  minLabel: string;
  maxLabel: string;
  color?: string;
}) {
  const colorClasses: Record<string, { text: string; border: string; bg: string }> = {
    safeglobal: {
      text: "text-safeglobal",
      border: "border-safeglobal/30",
      bg: "bg-safeglobal/10",
    },
    amber: {
      text: "text-amber-400",
      border: "border-amber-400/30",
      bg: "bg-amber-400/10",
    },
    cyan: {
      text: "text-cyan-400",
      border: "border-cyan-400/30",
      bg: "bg-cyan-400/10",
    },
    rose: {
      text: "text-rose-400",
      border: "border-rose-400/30",
      bg: "bg-rose-400/10",
    },
  };

  const colors = colorClasses[color] || colorClasses.safeglobal;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium flex items-center gap-2">
          <Icon className={`w-4 h-4 ${colors.text}`} />
          {label}
        </label>
        <span
          className={`text-sm font-semibold px-2.5 py-0.5 rounded-md ${colors.bg} ${colors.text} ${colors.border} border`}
        >
          {formatValue(value)}
        </span>
      </div>
      <Slider
        value={[value]}
        onValueChange={(v) => onChange(v[0])}
        min={min}
        max={max}
        step={step}
        className="py-2"
      />
      <div className="flex justify-between text-[10px] text-muted-foreground">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Breakdown Bar Component                                            */
/* ------------------------------------------------------------------ */

function BreakdownBar({
  label,
  amount,
  percentage,
  icon: Icon,
  color,
}: {
  label: string;
  amount: number;
  percentage: number;
  icon: React.ElementType;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className={`w-3.5 h-3.5 ${color}`} />
          <span className="text-sm font-medium">{label}</span>
        </div>
        <span className={`text-sm font-bold ${color}`}>
          ${amount.toLocaleString("en-US", { maximumFractionDigits: 0 })}
        </span>
      </div>
      <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${Math.min(percentage, 100)}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className={`h-full rounded-full ${color.replace("text-", "bg-")}`}
        />
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function SafetyROIWidget() {
  const [employees, setEmployees] = useState(500);
  const [incidentRate, setIncidentRate] = useState(8);
  const [avgCostPerIncident, setAvgCostPerIncident] = useState(50000);
  const [complianceLevel, setComplianceLevel] = useState(60);

  const result = calculateROI(
    employees,
    incidentRate,
    avgCostPerIncident,
    complianceLevel
  );

  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  const handleInView = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = handleInView();
    return () => cleanup?.();
  }, [handleInView]);

  /* Bar chart heights */
  const maxCost = Math.max(
    result.annualIncidentCostCurrent,
    result.annualIncidentCostProjected,
    1
  );
  const currentBarH = (result.annualIncidentCostCurrent / maxCost) * 100;
  const projectedBarH = (result.annualIncidentCostProjected / maxCost) * 100;

  /* Breakdown percentages (relative to total annual savings) */
  const totalBreakdown =
    result.directSavings +
    result.indirectSavings +
    result.complianceSavings +
    result.insuranceSavings;

  return (
    <section
      id="roi-calculator"
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background decorations */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-safeglobal/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            <Calculator className="w-3.5 h-3.5 mr-1.5" />
            ROI CALCULATOR
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Calculate Your Safety{" "}
            <span className="text-gradient">ROI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quantify the return on your safety investment. See how SafeGlobal
            can reduce incidents, lower costs, and deliver measurable ROI for
            your organization.
          </p>
        </motion.div>

        {/* Main Grid: Inputs + Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Left - Slider Inputs */}
          <div className="glass-card p-6 lg:p-8 rounded-2xl border border-border space-y-7">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Calculator className="w-5 h-5 text-safeglobal" />
              Customize Your Scenario
            </h3>

            <SliderInput
              label="Number of Employees"
              icon={Users}
              value={employees}
              onChange={setEmployees}
              min={50}
              max={10000}
              step={50}
              formatValue={(v) => v.toLocaleString()}
              minLabel="50"
              maxLabel="10,000"
              color="safeglobal"
            />

            <SliderInput
              label="Incident Rate per 100 Workers"
              icon={AlertTriangle}
              value={incidentRate}
              onChange={setIncidentRate}
              min={1}
              max={25}
              step={1}
              formatValue={(v) => `${v}`}
              minLabel="1 (Excellent)"
              maxLabel="25 (Critical)"
              color="rose"
            />

            <SliderInput
              label="Average Cost per Incident"
              icon={DollarSign}
              value={avgCostPerIncident}
              onChange={setAvgCostPerIncident}
              min={5000}
              max={500000}
              step={5000}
              formatValue={(v) =>
                v >= 1000 ? `$${(v / 1000).toFixed(0)}K` : `$${v}`
              }
              minLabel="$5K"
              maxLabel="$500K"
              color="amber"
            />

            <SliderInput
              label="Current Compliance Level"
              icon={Shield}
              value={complianceLevel}
              onChange={setComplianceLevel}
              min={10}
              max={100}
              step={5}
              formatValue={(v) => `${v}%`}
              minLabel="10%"
              maxLabel="100%"
              color="cyan"
            />
          </div>

          {/* Right - Results */}
          <div className="glass-card p-6 lg:p-8 rounded-2xl border border-border">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-safeglobal" />
              Projected Results
            </h3>

            <div className="space-y-4">
              {/* Annual Incident Cost */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5">
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">
                    Current Annual Cost
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-rose-400">
                    <AnimatedCounter
                      value={result.annualIncidentCostCurrent}
                      prefix="$"
                      decimals={0}
                    />
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-safeglobal/20 bg-safeglobal/5">
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">
                    With SafeGlobal
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-safeglobal">
                    <AnimatedCounter
                      value={result.annualIncidentCostProjected}
                      prefix="$"
                      decimals={0}
                    />
                  </div>
                </div>
              </div>

              {/* Key Metrics Row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl border border-border bg-card/50 text-center">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                    Risk Reduction
                  </div>
                  <div className="text-lg font-bold text-safeglobal">
                    <AnimatedCounter
                      value={result.riskReduction * 100}
                      suffix="%"
                      decimals={0}
                    />
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-border bg-card/50 text-center">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                    3-Year ROI
                  </div>
                  <div className="text-lg font-bold text-emerald-400">
                    <AnimatedCounter
                      value={result.threeYearROI}
                      suffix="%"
                      decimals={0}
                    />
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-border bg-card/50 text-center">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                    Payback Period
                  </div>
                  <div className="text-lg font-bold text-cyan-400">
                    <AnimatedCounter
                      value={result.paybackMonths}
                      suffix=" mo"
                      decimals={1}
                    />
                  </div>
                </div>
              </div>

              {/* Annual Savings Highlight */}
              <div className="p-5 rounded-xl border border-safeglobal/30 bg-gradient-to-r from-safeglobal/10 to-emerald-500/5 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-safeglobal" />
                  <span className="text-sm font-medium text-safeglobal">
                    Annual Savings
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-safeglobal">
                  <AnimatedCounter
                    value={result.annualSavings}
                    prefix="$"
                    decimals={0}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Based on 73% risk reduction from case study data
                </p>
              </div>

              {/* Implementation Cost */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-amber-500/20 bg-amber-500/5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium">
                    Implementation Cost Estimate
                  </span>
                </div>
                <span className="text-lg font-bold text-amber-400">
                  ${result.implementationCost.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bar Chart Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 lg:p-8 rounded-2xl border border-border mb-12"
        >
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-8">
            <Percent className="w-5 h-5 text-safeglobal" />
            Cost Comparison
          </h3>

          <div className="flex items-end justify-center gap-8 sm:gap-16 h-64 sm:h-80">
            {/* Current Cost Bar */}
            <div className="flex flex-col items-center gap-3 flex-1 max-w-[200px]">
              <motion.div
                className="w-full rounded-t-xl bg-gradient-to-t from-rose-600 to-rose-400 relative overflow-hidden"
                initial={{ height: 0 }}
                animate={inView ? { height: `${currentBarH}%` } : { height: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                style={{ maxHeight: "100%" }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] animate-[shimmer_3s_infinite]" />
              </motion.div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-rose-400">
                  $
                  {result.annualIncidentCostCurrent >= 1000000
                    ? `${(result.annualIncidentCostCurrent / 1000000).toFixed(1)}M`
                    : result.annualIncidentCostCurrent >= 1000
                      ? `${(result.annualIncidentCostCurrent / 1000).toFixed(0)}K`
                      : result.annualIncidentCostCurrent}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Current Cost
                </div>
              </div>
            </div>

            {/* With SafeGlobal Bar */}
            <div className="flex flex-col items-center gap-3 flex-1 max-w-[200px]">
              <motion.div
                className="w-full rounded-t-xl bg-gradient-to-t from-emerald-600 to-safeglobal relative overflow-hidden"
                initial={{ height: 0 }}
                animate={inView ? { height: `${projectedBarH}%` } : { height: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                style={{ maxHeight: "100%" }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] animate-[shimmer_3s_infinite_0.5s]" />
                {/* Savings badge */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 bg-safeglobal/20 border border-safeglobal/30 text-safeglobal text-xs font-bold px-2 py-0.5 rounded-full">
                    <TrendingUp className="w-3 h-3" />-73%
                  </span>
                </div>
              </motion.div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-safeglobal">
                  $
                  {result.annualIncidentCostProjected >= 1000000
                    ? `${(result.annualIncidentCostProjected / 1000000).toFixed(1)}M`
                    : result.annualIncidentCostProjected >= 1000
                      ? `${(result.annualIncidentCostProjected / 1000).toFixed(0)}K`
                      : result.annualIncidentCostProjected}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  With SafeGlobal
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Breakdown Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-6 lg:p-8 rounded-2xl border border-border mb-12"
        >
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-6">
            <DollarSign className="w-5 h-5 text-safeglobal" />
            Savings Breakdown by Category
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-5">
              <BreakdownBar
                label="Direct Cost Savings (Medical, Compensation)"
                amount={result.directSavings}
                percentage={
                  totalBreakdown > 0
                    ? (result.directSavings / totalBreakdown) * 100
                    : 0
                }
                icon={HeartPulse}
                color="text-rose-400"
              />
              <BreakdownBar
                label="Indirect Cost Savings (Downtime, Legal)"
                amount={result.indirectSavings}
                percentage={
                  totalBreakdown > 0
                    ? (result.indirectSavings / totalBreakdown) * 100
                    : 0
                }
                icon={Scale}
                color="text-amber-400"
              />
            </div>
            <div className="space-y-5">
              <BreakdownBar
                label="Compliance Penalty Avoidance"
                amount={result.complianceSavings}
                percentage={
                  totalBreakdown > 0
                    ? (result.complianceSavings / totalBreakdown) * 100
                    : 0
                }
                icon={FileCheck}
                color="text-cyan-400"
              />
              <BreakdownBar
                label="Insurance Premium Reduction"
                amount={result.insuranceSavings}
                percentage={
                  totalBreakdown > 0
                    ? (result.insuranceSavings / totalBreakdown) * 100
                    : 0
                }
                icon={Umbrella}
                color="text-violet-400"
              />
            </div>
          </div>

          {/* Total */}
          <div className="mt-6 pt-5 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-muted-foreground">
                Estimated Total Annual Savings
              </span>
              <span className="text-2xl font-black text-safeglobal">
                $
                {totalBreakdown.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/25 hover:shadow-safeglobal/40 gap-2 text-base px-8 h-13 font-semibold transition-all duration-300"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Your Custom ROI Report
            <ArrowRight className="w-4 h-4" />
          </Button>
          <p className="text-xs text-muted-foreground mt-3">
            Our team will prepare a detailed analysis tailored to your
            organization&apos;s specific needs and industry requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
