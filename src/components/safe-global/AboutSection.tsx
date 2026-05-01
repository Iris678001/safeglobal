"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Zap,
  Shield,
  Users,
  TrendingUp,
  ArrowRight,
  Rocket,
  Globe2,
  Award,
  Star,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Safety Without Compromise",
    description:
      "Every decision, every algorithm, every product is built with one principle: zero tolerance for preventable harm.",
  },
  {
    icon: Zap,
    title: "Innovation at Speed",
    description:
      "We push the boundaries of AI and IoT to deliver breakthrough safety capabilities faster than the risks evolve.",
  },
  {
    icon: Users,
    title: "Human-Centered Design",
    description:
      "Technology should empower people, not overwhelm them. Our solutions are designed for real workers in real conditions.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    description:
      "Every feature ties back to quantifiable safety improvements. We measure success in lives protected and incidents prevented.",
  },
];

const differentiators = [
  {
    label: "AI-First Architecture",
    desc: "Not bolted-on AI — built from the ground up with machine learning at the core of every safety decision.",
  },
  {
    label: "Real-Time at Scale",
    desc: "Process millions of data points per second across thousands of zones with sub-second alert latency.",
  },
  {
    label: "Regulatory Intelligence",
    desc: "Built-in compliance engine that tracks 200+ global safety standards and auto-updates as regulations change.",
  },
  {
    label: "Enterprise Integration",
    desc: "Native integrations with SAP, Oracle, ServiceNow, and 50+ enterprise platforms for seamless deployment.",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Founded in San Francisco",
    desc: "SafeGlobal was born from a vision to use AI to prevent workplace injuries.",
    icon: Rocket,
    color: "text-safeglobal",
    bg: "bg-safeglobal/10",
    border: "border-safeglobal/30",
  },
  {
    year: "2020",
    title: "First Enterprise Deployment",
    desc: "Launched AI Safety Monitoring with our first Fortune 500 manufacturing client.",
    icon: Star,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
  },
  {
    year: "2022",
    title: "Global Expansion",
    desc: "Expanded to 15+ countries, reached 100,000 workers protected worldwide.",
    icon: Globe2,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
  },
  {
    year: "2024",
    title: "Industry Leadership",
    desc: "500K+ workers protected, 30+ countries, $2.1B in client savings, ISO 45001 certified.",
    icon: Award,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
  },
];

export default function AboutSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-safeglobal/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/3 rounded-full blur-[120px]" />

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
            ABOUT SAFEGLOBAL
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Redefining Workplace Safety
            <br />
            <span className="text-gradient">with AI Intelligence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Founded on the belief that every worker deserves to go home safely,
            SafeGlobal is building the future of industrial risk management.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-2xl border border-border bg-card/50 hover:border-safeglobal/30 transition-all group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-safeglobal to-cyan-500 rounded-l-2xl" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-safeglobal/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-safeglobal" />
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To eliminate preventable workplace injuries and fatalities
              worldwide by deploying AI-driven safety intelligence that
              anticipates risks, automates compliance, and empowers every
              organization to achieve zero-harm operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-2xl border border-border bg-card/50 hover:border-cyan-500/30 transition-all group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-safeglobal rounded-l-2xl" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A world where AI-powered safety systems are as fundamental as fire
              alarms — where every workplace, from construction sites to
              hospitals, benefits from intelligent risk prevention that makes
              zero-harm not just a goal, but a reality.
            </p>
          </motion.div>
        </div>

        {/* Company Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-10">
            Our <span className="text-gradient">Journey</span>
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-safeglobal/30 via-cyan-500/30 via-amber-500/30 to-violet-500/30 -translate-y-1/2" />

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative"
                >
                  <div className={`group p-6 rounded-2xl border bg-card/50 ${milestone.border} hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300`}>
                    {/* Year badge */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${milestone.bg} ${milestone.color} text-xs font-bold mb-3`}>
                      <milestone.icon className="w-3.5 h-3.5" />
                      {milestone.year}
                    </div>
                    <h4 className="text-base font-semibold mb-2 group-hover:text-safeglobal transition-colors">
                      {milestone.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {milestone.desc}
                    </p>
                    {/* Dot on timeline */}
                    <div className="hidden md:block absolute -bottom-3 left-1/2 -translate-x-1/2">
                      <div className={`w-3 h-3 rounded-full ${milestone.bg} border-2 border-background`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            What Drives Us
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={value.title}
                className="group relative p-6 rounded-xl border border-border bg-card/30 hover:border-safeglobal/30 hover:bg-safeglobal/5 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient line at top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-safeglobal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 rounded-xl bg-safeglobal/10 flex items-center justify-center mb-4 group-hover:bg-safeglobal/20 group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-6 h-6 text-safeglobal" />
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-safeglobal transition-colors">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Different */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-8 lg:p-12 rounded-2xl border border-safeglobal/20 bg-gradient-to-br from-safeglobal/5 to-transparent"
        >
          <div className="absolute top-4 right-4">
            <Badge className="bg-safeglobal/20 text-safeglobal border-safeglobal/30">
              Why SafeGlobal
            </Badge>
          </div>
          <h3 className="text-2xl font-bold mb-8">
            Why We&apos;re Different
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {differentiators.map((d) => (
              <div key={d.label} className="flex gap-4 group">
                <div className="w-2 h-2 rounded-full bg-safeglobal mt-2.5 flex-shrink-0 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-safeglobal/30 transition-all duration-300" />
                <div>
                  <h4 className="font-semibold mb-1 group-hover:text-safeglobal transition-colors">{d.label}</h4>
                  <p className="text-sm text-muted-foreground">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button
              variant="outline"
              className="border-safeglobal/30 hover:border-safeglobal/60 hover:bg-safeglobal/5 gap-2"
              onClick={() => handleScrollTo("contact")}
            >
              See the Difference
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
