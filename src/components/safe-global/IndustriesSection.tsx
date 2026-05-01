"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Factory,
  HardHat,
  Flame,
  Warehouse,
  HeartPulse,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    risks: [
      "Machine-related injuries",
      "Chemical exposure",
      "Ergonomic hazards",
    ],
    solutions: [
      "Real-time machine guarding",
      "Chemical spill detection",
      "Posture monitoring & alerts",
    ],
    stat: "68%",
    statLabel: "incident reduction",
    color: "from-safeglobal/20 to-emerald-600/5",
    accent: "text-safeglobal",
    border: "border-safeglobal/20 hover:border-safeglobal/40",
  },
  {
    icon: HardHat,
    title: "Construction",
    risks: [
      "Fall hazards",
      "Struck-by incidents",
      "Trenching accidents",
    ],
    solutions: [
      "Height safety monitoring",
      "Proximity warning systems",
      "Ground stability analysis",
    ],
    stat: "82%",
    statLabel: "near-miss prevention",
    color: "from-amber-500/20 to-amber-600/5",
    accent: "text-amber-400",
    border: "border-amber-500/20 hover:border-amber-500/40",
  },
  {
    icon: Flame,
    title: "Oil & Gas",
    risks: [
      "Explosion risks",
      "Toxic gas leaks",
      "Confined space entry",
    ],
    solutions: [
      "Gas detection networks",
      "Hot work monitoring",
      "Confined space tracking",
    ],
    stat: "91%",
    statLabel: "compliance improvement",
    color: "from-red-500/20 to-red-600/5",
    accent: "text-red-400",
    border: "border-red-500/20 hover:border-red-500/40",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    risks: [
      "Forklift accidents",
      "Manual handling injuries",
      "Slips, trips & falls",
    ],
    solutions: [
      "Forklift collision avoidance",
      "Load monitoring AI",
      "Floor hazard detection",
    ],
    stat: "74%",
    statLabel: "injury reduction",
    color: "from-cyan-500/20 to-cyan-600/5",
    accent: "text-cyan-400",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    risks: [
      "Workplace violence",
      "Sharps & biohazards",
      "Patient handling injuries",
    ],
    solutions: [
      "Behavioral threat detection",
      "Biohazard zone monitoring",
      "Safe lift compliance AI",
    ],
    stat: "56%",
    statLabel: "claim reduction",
    color: "from-pink-500/20 to-pink-600/5",
    accent: "text-pink-400",
    border: "border-pink-500/20 hover:border-pink-500/40",
  },
];

export default function IndustriesSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="industries" className="relative py-20 lg:py-28">
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
            INDUSTRIES WE SERVE
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Purpose-Built for{" "}
            <span className="text-gradient">High-Risk</span> Industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep domain expertise combined with AI intelligence, tailored to the
            unique risks and regulations of each industry.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative p-6 rounded-2xl border bg-card/50 ${industry.border} transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1`}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center border border-current/10`}
                    >
                      <industry.icon className={`w-5 h-5 ${industry.accent}`} />
                    </div>
                    <h3 className="text-lg font-semibold">{industry.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-bold ${industry.accent}`}>
                      {industry.stat}
                    </div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      {industry.statLabel}
                    </div>
                  </div>
                </div>

                {/* Risks */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Key Risks
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {industry.risks.map((risk) => (
                      <div
                        key={risk}
                        className="text-sm text-muted-foreground pl-5"
                      >
                        {risk}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-safeglobal" />
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      SafeGlobal Solutions
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {industry.solutions.map((solution) => (
                      <div
                        key={solution}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1 h-1 rounded-full bg-safeglobal" />
                        <span>{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className={`p-0 h-auto ${industry.accent} hover:bg-transparent gap-1 text-sm font-medium`}
                  onClick={() => handleScrollTo("contact")}
                >
                  Explore Solutions
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
