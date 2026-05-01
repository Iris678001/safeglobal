"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  BarChart3,
  FileCheck,
  GraduationCap,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "AI Safety Monitoring",
    badge: "Core Platform",
    description:
      "Real-time computer vision and sensor-based monitoring that detects hazards before they become incidents. 24/7 automated surveillance across all zones.",
    features: [
      "Computer vision hazard detection",
      "PPE compliance verification",
      "Zone-based safety alerts",
      "Real-time dashboard & reporting",
    ],
    color: "from-safeglobal/20 to-emerald-600/5",
    accentColor: "text-safeglobal",
    borderColor: "border-safeglobal/20",
    hoverBorder: "hover:border-safeglobal/40",
  },
  {
    icon: BarChart3,
    title: "Predictive Risk Analytics",
    badge: "AI Intelligence",
    description:
      "Machine learning models that predict potential risks before they manifest. Transform historical data into actionable safety intelligence.",
    features: [
      "ML-powered risk prediction",
      "Trend analysis & forecasting",
      "Automated risk scoring",
      "Preventive action recommendations",
    ],
    color: "from-cyan-500/20 to-cyan-600/5",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/40",
  },
  {
    icon: FileCheck,
    title: "Compliance Automation",
    badge: "Regulatory",
    description:
      "Automated compliance tracking and reporting that keeps you ahead of regulatory requirements across all jurisdictions and standards.",
    features: [
      "Multi-standard compliance engine",
      "Automated audit documentation",
      "Regulatory update tracking",
      "Gap analysis & remediation",
    ],
    color: "from-violet-500/20 to-violet-600/5",
    accentColor: "text-violet-400",
    borderColor: "border-violet-500/20",
    hoverBorder: "hover:border-violet-500/40",
  },
  {
    icon: GraduationCap,
    title: "Safety Training Programs",
    badge: "Enablement",
    description:
      "AI-personalized training modules that adapt to each worker's role, risk profile, and learning pace for maximum retention and engagement.",
    features: [
      "AI-personalized learning paths",
      "VR/AR safety simulations",
      "Certification management",
      "Progress tracking & analytics",
    ],
    color: "from-amber-500/20 to-amber-600/5",
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    hoverBorder: "hover:border-amber-500/40",
  },
  {
    icon: Cpu,
    title: "Hardware + IoT Integration",
    badge: "Infrastructure",
    description:
      "Seamless integration with industrial sensors, wearables, and safety hardware creating a unified intelligent safety ecosystem.",
    features: [
      "Sensor network integration",
      "Wearable device connectivity",
      "Edge computing deployment",
      "Custom hardware solutions",
    ],
    color: "from-rose-500/20 to-rose-600/5",
    accentColor: "text-rose-400",
    borderColor: "border-rose-500/20",
    hoverBorder: "hover:border-rose-500/40",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative py-20 lg:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

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
            OUR SOLUTIONS
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Enterprise Safety,{" "}
            <span className="text-gradient">Intelligent</span> by Design
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Five integrated modules that work together to create a
            comprehensive, AI-powered safety ecosystem for your enterprise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Card
                className={`group relative overflow-hidden bg-card/50 ${service.borderColor} ${service.hoverBorder} transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 h-full`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <CardContent className="relative p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center border ${service.borderColor}`}
                    >
                      <service.icon className={`w-6 h-6 ${service.accentColor}`} />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-[10px] tracking-wider bg-muted/50"
                    >
                      {service.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold group-hover:text-safeglobal transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-safeglobal flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className={`p-0 h-auto ${service.accentColor} hover:bg-transparent gap-1 text-sm font-medium group/btn`}
                    onClick={() => handleScrollTo("contact")}
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-safeglobal/30 hover:border-safeglobal/60 hover:bg-safeglobal/5 gap-2"
            onClick={() => handleScrollTo("contact")}
          >
            Schedule a Platform Walkthrough
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
