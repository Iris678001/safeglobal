"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Search,
  Brain,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Play,
  Clock,
  Database,
  BarChart3,
  Shield,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Assess & Detect",
    description:
      "Our AI sensors and computer vision scan your entire facility in real-time, identifying hazards, compliance gaps, and risk patterns that human inspections miss.",
    longDescription:
      "We deploy a comprehensive sensor network across your facility, paired with advanced computer vision systems that monitor every zone 24/7. Our AI learns your facility's baseline patterns within the first 48 hours, establishing what 'normal' looks like so anomalies are instantly flagged.",
    details: [
      "IoT sensor deployment & calibration across all zones",
      "Computer vision zone monitoring with real-time alerts",
      "Baseline risk assessment within first 48 hours",
      "Historical data ingestion from existing systems",
    ],
    color: "from-safeglobal/20 to-emerald-600/5",
    gradientBg: "from-safeglobal to-emerald-600",
    accentColor: "text-safeglobal",
    bgColor: "bg-safeglobal/10",
    borderColor: "border-safeglobal/20",
    dotColor: "bg-safeglobal",
    phase: "Week 1-2",
  },
  {
    step: "02",
    icon: Brain,
    title: "Analyze & Predict",
    description:
      "Machine learning models process millions of data points to predict risks before they materialize. Our AI learns your facility's unique patterns and risk vectors.",
    longDescription:
      "Our predictive AI engine processes over 2 million data points daily, using deep learning models trained on billions of safety incidents globally. The system identifies subtle correlations and emerging risk patterns weeks before they become incidents, giving you unprecedented foresight.",
    details: [
      "ML model training customized on your facility data",
      "Pattern recognition & anomaly detection in real-time",
      "Risk scoring & prioritization for every zone",
      "Predictive alert generation with confidence scores",
    ],
    color: "from-cyan-500/20 to-cyan-600/5",
    gradientBg: "from-cyan-500 to-cyan-600",
    accentColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    dotColor: "bg-cyan-400",
    phase: "Week 2-3",
  },
  {
    step: "03",
    icon: Zap,
    title: "Alert & Prevent",
    description:
      "Sub-second alerts reach the right people at the right time. Automated safety protocols activate instantly to prevent incidents before they happen.",
    longDescription:
      "When a risk is detected, our multi-channel alert system delivers warnings to the right personnel in under 45 milliseconds. Automated safety protocols can be configured to trigger instantly — from zone lockdowns to equipment shutdowns — preventing incidents before they occur.",
    details: [
      "Real-time multi-channel alerts (mobile, SMS, wearable)",
      "Automated safety protocols with 45ms response time",
      "Zone lockdown procedures for critical situations",
      "Emergency response coordination with local services",
    ],
    color: "from-amber-500/20 to-amber-600/5",
    gradientBg: "from-amber-500 to-amber-600",
    accentColor: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    dotColor: "bg-amber-400",
    phase: "Week 3-4",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Comply & Improve",
    description:
      "Continuous compliance monitoring ensures audit-readiness 365 days a year. AI-driven insights drive ongoing safety improvements and culture transformation.",
    longDescription:
      "Our compliance engine monitors over 200 international safety standards in real-time, automatically generating audit-ready documentation. But we go beyond compliance — our AI identifies opportunities for continuous improvement, tracking safety culture metrics and driving measurable improvements month over month.",
    details: [
      "Automated compliance reporting across 200+ standards",
      "Audit-ready documentation generated in real-time",
      "Continuous improvement insights with AI recommendations",
      "Safety culture score tracking with team benchmarks",
    ],
    color: "from-violet-500/20 to-violet-600/5",
    gradientBg: "from-violet-500 to-violet-600",
    accentColor: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    dotColor: "bg-violet-400",
    phase: "Week 4-6",
  },
];

const deploymentPhases = [
  { label: "Assessment", width: "25%", color: "bg-safeglobal" },
  { label: "Integration", width: "25%", color: "bg-cyan-500" },
  { label: "Deployment", width: "25%", color: "bg-amber-500" },
  { label: "Optimization", width: "25%", color: "bg-violet-500" },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            THE PROCESS
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            How <span className="text-gradient">SafeGlobal</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four powerful steps from hazard detection to safety culture
            transformation. Deploy in weeks, see impact from day one.
          </p>
        </motion.div>

        {/* Interactive Step Tabs */}
        <div className="relative mb-8">
          {/* Connecting Line - animated gradient that fills as you progress */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-1 rounded-full bg-muted/50 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-safeglobal via-cyan-500 via-amber-500 to-violet-500"
              initial={{ width: "0%" }}
              animate={{
                width: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          {/* Step Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <motion.button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`group relative flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? `${step.borderColor} bg-card shadow-lg`
                      : "border-transparent bg-transparent hover:bg-card/30"
                  }`}
                >
                  {/* Step Number - larger and prominent */}
                  <div
                    className={`relative w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-br ${step.gradientBg} text-white shadow-lg`
                        : "bg-muted/50 text-muted-foreground group-hover:bg-muted"
                    }`}
                  >
                    <span>{step.step}</span>
                    {/* Animated icon overlay when active */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-white/30"
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </div>

                  {/* Icon with animation when active */}
                  <div
                    className={`relative w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center border ${step.borderColor} transition-all duration-300 ${
                      isActive ? "scale-110" : "group-hover:scale-105"
                    }`}
                  >
                    <motion.div
                      animate={
                        isActive
                          ? {
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.1, 1],
                            }
                          : {}
                      }
                      transition={
                        isActive
                          ? {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }
                          : {}
                      }
                    >
                      <Icon className={`w-5 h-5 ${step.accentColor}`} />
                    </motion.div>
                    {/* Pulse ring when active */}
                    {isActive && (
                      <motion.div
                        className={`absolute inset-0 rounded-xl ${step.bgColor}`}
                        animate={{
                          scale: [1, 1.4],
                          opacity: [0.4, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <span
                    className={`text-sm font-semibold text-center transition-colors ${
                      isActive ? step.accentColor : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {step.title}
                  </span>

                  {/* Phase indicator */}
                  <span className="text-[10px] text-muted-foreground/60 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {step.phase}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Step Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative rounded-2xl border bg-card/50 p-6 lg:p-8 overflow-hidden"
          >
            {/* Background gradient accent */}
            <div
              className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${steps[activeStep].color} rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3 pointer-events-none`}
            />

            <div className="relative z-10 flex flex-col lg:flex-row gap-8">
              {/* Left: Large icon with gradient */}
              <div className="flex-shrink-0 flex flex-col items-center gap-4">
                <div
                  className={`w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br ${steps[activeStep].gradientBg} flex items-center justify-center shadow-xl`}
                >
                  {(() => {
                    const Icon = steps[activeStep].icon;
                    return <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />;
                  })()}
                </div>
                <div
                  className={`text-center px-4 py-1.5 rounded-full ${steps[activeStep].bgColor} ${steps[activeStep].borderColor} border text-xs font-semibold ${steps[activeStep].accentColor}`}
                >
                  Step {steps[activeStep].step}
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                  {steps[activeStep].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {steps[activeStep].longDescription}
                </p>

                {/* Bullet points with CheckCircle2 */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {steps[activeStep].details.map((detail, idx) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${steps[activeStep].accentColor}`}
                      />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {detail}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* See it in action button */}
                <Button
                  onClick={() => {
                    const el = document.querySelector("#ai-demo");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`gap-2 bg-gradient-to-r ${steps[activeStep].gradientBg} text-white hover:opacity-90 shadow-lg`}
                >
                  <Play className="w-4 h-4" />
                  See it in action
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Deployment Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl border bg-card/30 p-6"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-safeglobal" />
              <h4 className="text-sm font-semibold">
                Average deployment:{" "}
                <span className="text-safeglobal">4-6 weeks</span>
              </h4>
            </div>
            <p className="text-xs text-muted-foreground">
              First insights in{" "}
              <span className="text-safeglobal font-semibold">48 hours</span> ·
              Full ROI in{" "}
              <span className="text-safeglobal font-semibold">90 days</span>
            </p>
          </div>

          {/* Progress bar with phases */}
          <div className="flex rounded-full overflow-hidden h-3 bg-muted/50">
            {deploymentPhases.map((phase, idx) => (
              <motion.div
                key={phase.label}
                className={`${phase.color} relative group cursor-pointer`}
                style={{ width: phase.width }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Phase label on hover */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card border border-border rounded-md px-2 py-1 text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                  {phase.label}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-card border-r border-b border-border rotate-45" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Phase labels */}
          <div className="flex mt-2">
            {deploymentPhases.map((phase, idx) => (
              <div
                key={phase.label}
                className="text-center"
                style={{ width: phase.width }}
              >
                <span className="text-[10px] text-muted-foreground/60 hidden sm:inline">
                  {phase.label}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom stats row */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-border/50">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-safeglobal/60" />
              <span className="text-xs text-muted-foreground">
                <span className="text-foreground font-semibold">2M+</span> data
                points/day
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-cyan-500/60" />
              <span className="text-xs text-muted-foreground">
                <span className="text-foreground font-semibold">73%</span> avg
                risk reduction
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-violet-500/60" />
              <span className="text-xs text-muted-foreground">
                <span className="text-foreground font-semibold">200+</span>{" "}
                standards tracked
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
