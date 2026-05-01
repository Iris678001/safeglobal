"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Shield,
  ChevronRight,
  Users,
  TrendingUp,
  Globe,
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Comprehensive safety solutions for manufacturing environments, from assembly lines to chemical processing plants. Our AI monitors equipment, environment, and worker behavior in real-time.",
    risks: [
      "Machine-related injuries",
      "Chemical exposure",
      "Ergonomic hazards",
      "Noise-induced hearing loss",
    ],
    solutions: [
      "Real-time machine guarding",
      "Chemical spill detection",
      "Posture monitoring & alerts",
      "Automated lockout/tagout",
    ],
    stat: "68%",
    statLabel: "incident reduction",
    color: "from-safeglobal/20 to-emerald-600/5",
    accent: "text-safeglobal",
    border: "border-safeglobal/20 hover:border-safeglobal/40",
    gradientBg: "from-safeglobal to-emerald-600",
    riskBadge: "bg-red-500/10 text-red-400 border-red-500/20",
    solutionBadge: "bg-safeglobal/10 text-safeglobal border-safeglobal/20",
  },
  {
    icon: HardHat,
    title: "Construction",
    description:
      "End-to-end safety monitoring for construction sites of any scale. From high-rise builds to infrastructure projects, we prevent the most common and catastrophic incidents.",
    risks: [
      "Fall hazards",
      "Struck-by incidents",
      "Trenching accidents",
      "Electrical contact",
    ],
    solutions: [
      "Height safety monitoring",
      "Proximity warning systems",
      "Ground stability analysis",
      "Electrical isolation alerts",
    ],
    stat: "82%",
    statLabel: "near-miss prevention",
    color: "from-amber-500/20 to-amber-600/5",
    accent: "text-amber-400",
    border: "border-amber-500/20 hover:border-amber-500/40",
    gradientBg: "from-amber-500 to-amber-600",
    riskBadge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    solutionBadge: "bg-safeglobal/10 text-safeglobal border-safeglobal/20",
  },
  {
    icon: Flame,
    title: "Oil & Gas",
    description:
      "Critical safety infrastructure for the world's most hazardous industrial environments. Our platform provides continuous monitoring of explosive atmospheres and toxic gas exposure.",
    risks: [
      "Explosion risks",
      "Toxic gas leaks",
      "Confined space entry",
      "Hot work hazards",
    ],
    solutions: [
      "Gas detection networks",
      "Hot work monitoring",
      "Confined space tracking",
      "Permit-to-work automation",
    ],
    stat: "91%",
    statLabel: "compliance improvement",
    color: "from-red-500/20 to-red-600/5",
    accent: "text-red-400",
    border: "border-red-500/20 hover:border-red-500/40",
    gradientBg: "from-red-500 to-red-600",
    riskBadge: "bg-red-500/10 text-red-400 border-red-500/20",
    solutionBadge: "bg-safeglobal/10 text-safeglobal border-safeglobal/20",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description:
      "Intelligent safety systems for logistics and warehousing operations. Reduce accidents, improve compliance, and protect your workforce in high-traffic distribution environments.",
    risks: [
      "Forklift accidents",
      "Manual handling injuries",
      "Slips, trips & falls",
      "Racking collapses",
    ],
    solutions: [
      "Forklift collision avoidance",
      "Load monitoring AI",
      "Floor hazard detection",
      "Structural integrity alerts",
    ],
    stat: "74%",
    statLabel: "injury reduction",
    color: "from-cyan-500/20 to-cyan-600/5",
    accent: "text-cyan-400",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    gradientBg: "from-cyan-500 to-cyan-600",
    riskBadge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    solutionBadge: "bg-safeglobal/10 text-safeglobal border-safeglobal/20",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Advanced safety and compliance solutions for healthcare facilities. Protect staff and patients with AI-powered monitoring of workplace violence, biohazards, and patient handling risks.",
    risks: [
      "Workplace violence",
      "Sharps & biohazards",
      "Patient handling injuries",
      "Radiation exposure",
    ],
    solutions: [
      "Behavioral threat detection",
      "Biohazard zone monitoring",
      "Safe lift compliance AI",
      "Radiation boundary alerts",
    ],
    stat: "56%",
    statLabel: "claim reduction",
    color: "from-pink-500/20 to-pink-600/5",
    accent: "text-pink-400",
    border: "border-pink-500/20 hover:border-pink-500/40",
    gradientBg: "from-pink-500 to-pink-600",
    riskBadge: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    solutionBadge: "bg-safeglobal/10 text-safeglobal border-safeglobal/20",
  },
];

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const activeIndustry = industries[activeTab];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Industry-specific metrics for the floating stat cards
  const industryMetrics = [
    { icon: Users, label: "Workers Protected", value: "2.4M+", color: "text-safeglobal" },
    { icon: TrendingUp, label: "Avg Risk Reduction", value: "73%", color: "text-cyan-400" },
    { icon: Globe, label: "Countries Active", value: "42+", color: "text-amber-400" },
  ];

  return (
    <section id="industries" ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute top-1/3 -right-32 w-72 h-72 bg-safeglobal/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-cyan-500/3 rounded-full blur-[100px]" />
      {/* New: Ambient animated gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-safeglobal/5 via-cyan-500/5 to-amber-500/5 rounded-full blur-[100px] animate-breathe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Tab Bar - Scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex gap-1 overflow-x-auto scrollbar-thin pb-2 border-b border-border">
            {industries.map((industry, idx) => (
              <button
                key={industry.title}
                onClick={() => setActiveTab(idx)}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-t-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                  activeTab === idx
                    ? "text-safeglobal bg-safeglobal/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <industry.icon className="w-4 h-4 flex-shrink-0" />
                <span>{industry.title}</span>
                {/* Active tab underline indicator */}
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-safeglobal rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Industry Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 grid grid-cols-3 gap-4"
        >
          {industryMetrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50"
            >
              <div className="w-10 h-10 rounded-lg bg-safeglobal/10 flex items-center justify-center">
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
              </div>
              <div>
                <div className={`text-xl font-bold ${metric.color}`}>{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tab Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative"
          >
            {/* Animated background glow matching active industry */}
            <div className={`absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br ${activeIndustry.gradientBg} rounded-full blur-[100px] opacity-20 transition-opacity duration-500`} />
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Left: Icon & Description */}
              <div className="lg:col-span-2 space-y-6">
                {/* Large icon with gradient background */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${activeIndustry.gradientBg} flex items-center justify-center shadow-lg`}
                >
                  <activeIndustry.icon className="w-10 h-10 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                    {activeIndustry.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {activeIndustry.description}
                  </p>
                </div>

                {/* Key Stat - Prominent with animated border */}
                <div className="relative p-[1px] rounded-xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${activeIndustry.gradientBg} opacity-50`} />
                  <div className="relative flex items-center gap-4 p-5 rounded-xl bg-card/90 backdrop-blur-sm border border-border">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activeIndustry.color} flex items-center justify-center shadow-lg`}
                    >
                    <Shield className={`w-7 h-7 ${activeIndustry.accent}`} />
                  </div>
                  <div>
                    <div className={`text-3xl font-bold ${activeIndustry.accent}`}>
                      {activeIndustry.stat}
                    </div>
                    <div className="text-sm text-muted-foreground capitalize">
                      {activeIndustry.statLabel}
                    </div>
                  </div>
                </div>
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className={`bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/20 hover:shadow-safeglobal/30 transition-all gap-2 px-6 group`}
                  onClick={() => handleScrollTo("contact")}
                >
                  Explore Solutions
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>

                {/* Industry comparison mini-chart */}
                <div className="p-4 rounded-xl border border-border/50 bg-card/30">
                  <div className="text-xs text-muted-foreground mb-3 font-medium">Risk Reduction Comparison</div>
                  <div className="flex items-end gap-2 h-20">
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: isVisible ? "40%" : "0%" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full bg-red-500/30 rounded-t-md"
                      />
                      <span className="text-[10px] text-muted-foreground">Before</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: isVisible ? "90%" : "0%" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full bg-gradient-to-t from-safeglobal/50 to-safeglobal/80 rounded-t-md"
                      />
                      <span className="text-[10px] text-safeglobal font-medium">After</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Risks & Solutions */}
              <div className="lg:col-span-3 space-y-6">
                {/* Key Risks Section - enhanced with severity indicator */}
                <div className="p-6 rounded-2xl border border-border bg-card/50 hover:border-red-500/20 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                      <h4 className="text-lg font-semibold">Key Risks</h4>
                    </div>
                    <Badge variant="outline" className="text-[10px] bg-red-500/10 text-red-400 border-red-500/20">
                      HIGH PRIORITY
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeIndustry.risks.map((risk, idx) => (
                      <motion.div
                        key={risk}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05, duration: 0.2 }}
                      >
                        <Badge
                          variant="outline"
                          className={`px-3 py-1.5 text-sm border ${activeIndustry.riskBadge} hover:scale-105 transition-transform cursor-default`}
                        >
                          <AlertTriangle className="w-3 h-3 mr-1.5" />
                          {risk}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Our Solutions Section - enhanced with checkmark animation */}
                <div className="p-6 rounded-2xl border border-border bg-card/50 hover:border-safeglobal/20 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-safeglobal" />
                      <h4 className="text-lg font-semibold">Our Solutions</h4>
                    </div>
                    <Badge variant="outline" className="text-[10px] bg-safeglobal/10 text-safeglobal border-safeglobal/20">
                      AI-POWERED
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeIndustry.solutions.map((solution, idx) => (
                      <motion.div
                        key={solution}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 + 0.1, duration: 0.2 }}
                      >
                        <Badge
                          variant="outline"
                          className={`px-3 py-1.5 text-sm border ${activeIndustry.solutionBadge} hover:scale-105 transition-transform cursor-default`}
                        >
                          <CheckCircle2 className="w-3 h-3 mr-1.5" />
                          {solution}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Detailed comparison grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeIndustry.risks.map((risk, idx) => (
                    <div
                      key={risk}
                      className="group p-4 rounded-xl border border-border bg-card/30 hover:bg-card/60 hover:border-safeglobal/15 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="w-3 h-3 text-red-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-red-400 mb-1">
                            {risk}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <ArrowRight className="w-3 h-3 text-safeglobal" />
                            <span className="text-safeglobal">
                              {activeIndustry.solutions[idx]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
