"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ClipboardCheck,
  CheckCircle2,
  Circle,
  Shield,
  HardHat,
  AlertTriangle,
  Building2,
  ArrowRight,
  Trophy,
  Target,
  TrendingUp,
} from "lucide-react";

interface ChecklistItem {
  id: string;
  label: string;
}

interface ChecklistCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  colorLight: string;
  items: ChecklistItem[];
}

const categories: ChecklistCategory[] = [
  {
    id: "ppe",
    title: "PPE & Equipment",
    icon: <HardHat className="w-5 h-5" />,
    color: "#10b981",
    colorLight: "rgba(16, 185, 129, 0.15)",
    items: [
      { id: "ppe-1", label: "Hard hat inspection & certification" },
      { id: "ppe-2", label: "Safety goggles compliance" },
      { id: "ppe-3", label: "Steel-toe boots condition check" },
      { id: "ppe-4", label: "Hearing protection availability" },
    ],
  },
  {
    id: "emergency",
    title: "Emergency Procedures",
    icon: <AlertTriangle className="w-5 h-5" />,
    color: "#06b6d4",
    colorLight: "rgba(6, 182, 212, 0.15)",
    items: [
      { id: "em-1", label: "Fire exits clearly marked & unobstructed" },
      { id: "em-2", label: "First aid kits stocked & accessible" },
      { id: "em-3", label: "Emergency drills conducted quarterly" },
      { id: "em-4", label: "Evacuation plan posted & updated" },
    ],
  },
  {
    id: "workplace",
    title: "Workplace Environment",
    icon: <Building2 className="w-5 h-5" />,
    color: "#8b5cf6",
    colorLight: "rgba(139, 92, 246, 0.15)",
    items: [
      { id: "wp-1", label: "Ventilation systems operational" },
      { id: "wp-2", label: "Lighting meets safety standards" },
      { id: "wp-3", label: "Noise levels within OSHA limits" },
      { id: "wp-4", label: "Chemical storage properly segregated" },
    ],
  },
];

function getScoreColor(percentage: number): string {
  if (percentage >= 70) return "#10b981";
  if (percentage >= 40) return "#f59e0b";
  return "#ef4444";
}

function getScoreTier(percentage: number): { label: string; icon: React.ReactNode } {
  if (percentage >= 70) {
    return {
      label: "Safety Champion",
      icon: <Trophy className="w-4 h-4" />,
    };
  }
  if (percentage >= 40) {
    return {
      label: "Getting There",
      icon: <Target className="w-4 h-4" />,
    };
  }
  return {
    label: "Needs Improvement",
    icon: <TrendingUp className="w-4 h-4" />,
  };
}

export default function SafetyChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const totalItems = useMemo(
    () => categories.reduce((sum, cat) => sum + cat.items.length, 0),
    []
  );

  const checkedCount = checkedItems.size;
  const percentage = Math.round((checkedCount / totalItems) * 100);
  const scoreColor = getScoreColor(percentage);
  const tier = getScoreTier(percentage);

  const circumference = 2 * Math.PI * 54;
  const scoreOffset = circumference - (percentage / 100) * circumference;

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const getCategoryProgress = (category: ChecklistCategory) => {
    const checked = category.items.filter((item) =>
      checkedItems.has(item.id)
    ).length;
    return { checked, total: category.items.length };
  };

  return (
    <section
      id="safety-checklist"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="absolute inset-0 bg-noise" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-safeglobal/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 -right-32 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute top-2/3 left-1/3 w-60 h-60 bg-violet-500/3 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge
            variant="outline"
            className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
          >
            <ClipboardCheck className="w-3.5 h-3.5 mr-1" />
            COMPLIANCE CHECK
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Interactive{" "}
            <span className="text-gradient">Safety Checklist</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how your facility measures up against industry safety standards.
          </p>
        </motion.div>

        {/* Live Compliance Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14"
        >
          <div className="relative inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mx-auto p-6 sm:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-safeglobal/5 via-transparent to-cyan-500/5" />

            {/* Circle Progress Indicator */}
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex-shrink-0">
              <svg
                className="w-full h-full -rotate-90"
                viewBox="0 0 120 120"
              >
                {/* Background circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="8"
                />
                {/* Progress circle */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke={scoreColor}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  animate={{ strokeDashoffset: scoreOffset }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  key={percentage}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl sm:text-5xl font-black"
                  style={{ color: scoreColor }}
                >
                  {percentage}%
                </motion.span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                  Compliance
                </span>
              </div>
            </div>

            {/* Score Details */}
            <div className="relative text-center sm:text-left space-y-3">
              <div>
                <p className="text-xl font-semibold text-foreground">
                  {checkedCount} of {totalItems} items checked
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Complete all items to achieve full compliance
                </p>
              </div>

              {/* Tier Label */}
              <motion.div
                key={tier.label}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: `${scoreColor}15`,
                  color: scoreColor,
                  border: `1px solid ${scoreColor}30`,
                }}
              >
                {tier.icon}
                {tier.label}
              </motion.div>

              {/* Mini progress hint */}
              <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Below 40%
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  40–70%
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  70%+
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Checklist Category Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, catIdx) => {
            const progress = getCategoryProgress(category);
            const catPercentage = Math.round(
              (progress.checked / progress.total) * 100
            );

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.12 }}
                className="group relative rounded-2xl border border-border bg-card/50 overflow-hidden transition-all duration-300 hover:border-safeglobal/20"
              >
                {/* Card gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(ellipse at top, ${category.colorLight}, transparent 70%)`,
                  }}
                />

                <div className="relative p-6">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: category.colorLight,
                          color: category.color,
                        }}
                      >
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-semibold">
                        {category.title}
                      </h3>
                    </div>
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded-md"
                      style={{
                        backgroundColor: category.colorLight,
                        color: category.color,
                      }}
                    >
                      {progress.checked}/{progress.total}
                    </span>
                  </div>

                  {/* Mini Progress Bar */}
                  <div className="mb-5">
                    <div className="h-1.5 rounded-full bg-muted/50 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: category.color }}
                        initial={{ width: 0 }}
                        animate={{
                          width: `${catPercentage}%`,
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* Checklist Items */}
                  <div className="space-y-2">
                    {category.items.map((item, itemIdx) => {
                      const isChecked = checkedItems.has(item.id);

                      return (
                        <motion.button
                          key={item.id}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: catIdx * 0.12 + itemIdx * 0.06,
                          }}
                          onClick={() => toggleItem(item.id)}
                          className={`
                            flex items-center gap-3 w-full text-left p-3 rounded-xl
                            transition-all duration-200 cursor-pointer
                            ${
                              isChecked
                                ? "bg-safeglobal/5"
                                : "bg-transparent hover:bg-muted/50"
                            }
                          `}
                          aria-pressed={isChecked}
                          aria-label={`${item.label} - ${isChecked ? "checked" : "unchecked"}`}
                        >
                          <motion.div
                            whileTap={{ scale: 0.85 }}
                            transition={{ duration: 0.15 }}
                          >
                            {isChecked ? (
                              <CheckCircle2
                                className="w-5 h-5 flex-shrink-0"
                                style={{ color: category.color }}
                              />
                            ) : (
                              <Circle className="w-5 h-5 flex-shrink-0 text-muted-foreground/40" />
                            )}
                          </motion.div>
                          <span
                            className={`
                              text-sm transition-all duration-300
                              ${
                                isChecked
                                  ? "line-through text-muted-foreground/50"
                                  : "text-foreground"
                              }
                            `}
                          >
                            {item.label}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <div className="relative inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-border bg-card/50">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-safeglobal/5 via-transparent to-cyan-500/5" />

            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-safeglobal/10 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-safeglobal" />
              </div>
              <p className="text-lg font-semibold mb-1">
                Get a detailed compliance report
              </p>
              <p className="text-muted-foreground text-sm mb-4 max-w-md">
                Our AI-powered platform analyzes your facility&apos;s compliance
                data and generates actionable recommendations tailored to your
                industry.
              </p>
              <Button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/25 gap-2"
              >
                Get Compliance Report
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
