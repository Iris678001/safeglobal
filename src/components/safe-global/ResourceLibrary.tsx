"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  BookOpen,
  Calculator,
  ClipboardCheck,
  Download,
  Cpu,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface Resource {
  title: string;
  icon: React.ElementType;
  metadata: string;
  description: string;
  cta: string;
  featured?: boolean;
  iconGradient: string;
  iconColor: string;
}

const resources: Resource[] = [
  {
    title: "2024 Global Safety Report",
    icon: FileText,
    metadata: "45 pages",
    description:
      "Comprehensive analysis of workplace safety trends across 30+ countries",
    cta: "Download PDF",
    featured: true,
    iconGradient: "from-teal-600/20 to-teal-500/20",
    iconColor: "text-teal-500",
  },
  {
    title: "AI in Safety: The Complete Guide",
    icon: BookOpen,
    metadata: "78 pages",
    description:
      "Deep dive into AI-powered safety monitoring, predictive analytics, and compliance automation",
    cta: "Download PDF",
    iconGradient: "from-teal-500/20 to-blue-500/20",
    iconColor: "text-teal-400",
  },
  {
    title: "ROI Calculator Template",
    icon: Calculator,
    metadata: "Excel template",
    description:
      "Calculate your potential safety ROI with our interactive spreadsheet tool",
    cta: "Download Template",
    iconGradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
  {
    title: "Compliance Checklist: OSHA 2024",
    icon: ClipboardCheck,
    metadata: "12 sections",
    description:
      "Complete OSHA compliance checklist with automated gap analysis",
    cta: "Download Checklist",
    iconGradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
  },
  {
    title: "Case Study: 73% Risk Reduction",
    icon: FileText,
    metadata: "8 pages",
    description:
      "How GlobalMfg Corp achieved 73% risk reduction in 12 months with Safeglobal",
    cta: "Download Case Study",
    iconGradient: "from-teal-600/20 to-teal-500/20",
    iconColor: "text-teal-400",
  },
  {
    title: "IoT Integration Playbook",
    icon: Cpu,
    metadata: "32 pages",
    description:
      "Step-by-step guide to integrating industrial sensors, wearables, and edge devices",
    cta: "Download Playbook",
    iconGradient: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
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
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ResourceLibrary() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="resources" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-safeglobal/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-teal-500/3 rounded-full blur-[120px] pointer-events-none" />

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
            RESOURCES
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Safety Intelligence{" "}
            <span className="text-gradient">Library</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download our latest research, whitepapers, and industry reports to
            stay ahead of safety trends.
          </p>
        </motion.div>

        {/* Resource Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <motion.div key={resource.title} variants={item} className="flex">
                <div
                  className={`group relative flex flex-col w-full rounded-2xl border p-6 transition-all duration-300 ${
                    resource.featured
                      ? "border-safeglobal/40 bg-gradient-to-b from-safeglobal/10 via-card/80 to-card/50 shadow-[0_0_40px_rgba(45,122,111,0.12)] hover:shadow-[0_0_60px_rgba(45,122,111,0.2)] hover:border-safeglobal/60 hover:-translate-y-2"
                      : "border-border bg-card/50 hover:border-safeglobal/25 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
                  }`}
                >
                  {/* Featured badge */}
                  {resource.featured && (
                    <div className="absolute -top-3 right-4">
                      <Badge className="bg-safeglobal text-white border-none px-3 py-0.5 text-[10px] font-bold tracking-wider uppercase shadow-lg shadow-safeglobal/25 gap-1">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </Badge>
                    </div>
                  )}

                  {/* Icon in colored circle */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${resource.iconGradient} border border-white/5 mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${resource.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-1 leading-snug">
                    {resource.title}
                  </h3>

                  {/* Metadata */}
                  <p className="text-xs text-muted-foreground mb-3 font-medium">
                    {resource.metadata}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {resource.description}
                  </p>

                  {/* Download button */}
                  <Button
                    variant="outline"
                    className={`w-full gap-2 font-medium transition-all duration-300 ${
                      resource.featured
                        ? "border-safeglobal/40 bg-safeglobal/10 text-safeglobal hover:bg-safeglobal hover:text-white hover:border-safeglobal shadow-sm"
                        : "border-border hover:border-safeglobal/40 hover:bg-safeglobal/5 text-foreground"
                    }`}
                    size="sm"
                  >
                    <Download className="w-4 h-4" />
                    {resource.cta}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl border border-border bg-card/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-safeglobal/10 border border-safeglobal/20">
                <BookOpen className="w-5 h-5 text-safeglobal" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Need custom research?</p>
                <p className="text-xs text-muted-foreground">
                  Our team can create tailored reports for your industry
                </p>
              </div>
            </div>
            <Button
              className="gap-2 font-semibold bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/25 hover:shadow-safeglobal/40 transition-all duration-300"
              size="sm"
              onClick={() => handleScrollTo("contact")}
            >
              Contact Our Research Team
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
