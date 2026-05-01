"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Brain,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Assess & Detect",
    description:
      "Our AI sensors and computer vision scan your entire facility in real-time, identifying hazards, compliance gaps, and risk patterns that human inspections miss.",
    details: [
      "IoT sensor deployment & calibration",
      "Computer vision zone monitoring",
      "Baseline risk assessment",
      "Historical data ingestion",
    ],
    color: "from-safeglobal/20 to-emerald-600/5",
    accentColor: "text-safeglobal",
    borderColor: "border-safeglobal/20",
  },
  {
    step: "02",
    icon: Brain,
    title: "Analyze & Predict",
    description:
      "Machine learning models process millions of data points to predict risks before they materialize. Our AI learns your facility's unique patterns and risk vectors.",
    details: [
      "ML model training on your data",
      "Pattern recognition & anomaly detection",
      "Risk scoring & prioritization",
      "Predictive alert generation",
    ],
    color: "from-cyan-500/20 to-cyan-600/5",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
  },
  {
    step: "03",
    icon: Zap,
    title: "Alert & Prevent",
    description:
      "Sub-second alerts reach the right people at the right time. Automated safety protocols activate instantly to prevent incidents before they happen.",
    details: [
      "Real-time multi-channel alerts",
      "Automated safety protocols",
      "Zone lockdown procedures",
      "Emergency response coordination",
    ],
    color: "from-amber-500/20 to-amber-600/5",
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/20",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Comply & Improve",
    description:
      "Continuous compliance monitoring ensures audit-readiness 365 days a year. AI-driven insights drive ongoing safety improvements and culture transformation.",
    details: [
      "Automated compliance reporting",
      "Audit-ready documentation",
      "Continuous improvement insights",
      "Safety culture score tracking",
    ],
    color: "from-violet-500/20 to-violet-600/5",
    accentColor: "text-violet-400",
    borderColor: "border-violet-500/20",
  },
];

export default function HowItWorks() {
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

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-safeglobal/30 via-cyan-500/30 via-amber-500/30 to-violet-500/30 -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative"
              >
                <div
                  className={`group p-6 rounded-2xl border bg-card/50 ${step.borderColor} hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300`}
                >
                  {/* Step Number */}
                  <div
                    className={`text-5xl font-black ${step.accentColor} opacity-15 absolute top-3 right-4`}
                  >
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div
                    className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 border ${step.borderColor} group-hover:scale-110 transition-transform`}
                  >
                    <step.icon
                      className={`w-7 h-7 ${step.accentColor}`}
                    />
                    {/* Step circle for connecting line */}
                    <div className="hidden lg:block absolute -bottom-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-safeglobal border-2 border-background" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-safeglobal transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="space-y-1.5">
                    {step.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <div
                          className={`w-1 h-1 rounded-full ${step.accentColor === "text-safeglobal" ? "bg-safeglobal" : step.accentColor === "text-cyan-400" ? "bg-cyan-400" : step.accentColor === "text-amber-400" ? "bg-amber-400" : "bg-violet-400"}`}
                        />
                        {detail}
                      </div>
                    ))}
                  </div>

                  {/* Arrow to next (except last) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden sm:flex items-center justify-center mt-4">
                      <ArrowRight
                        className={`w-4 h-4 ${step.accentColor} opacity-50`}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Average deployment time: <span className="text-safeglobal font-semibold">4-6 weeks</span> ·
            First insights in: <span className="text-safeglobal font-semibold">48 hours</span> ·
            Full ROI in: <span className="text-safeglobal font-semibold">90 days</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
