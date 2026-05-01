"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, TrendingDown, BarChart3 } from "lucide-react";

const caseStudies = [
  {
    company: "GlobalMfg Corp",
    industry: "Manufacturing",
    image: "/images/smart-factory.png",
    challenge:
      "680+ recordable incidents annually across 12 facilities with aging safety infrastructure and manual compliance tracking.",
    solution:
      "Deployed AI Safety Monitoring + Predictive Risk Analytics across all facilities with IoT sensor integration and automated compliance reporting.",
    results: {
      incidents: { before: 680, after: 142, label: "Recordable Incidents/Year" },
      compliance: { before: 67, after: 98, label: "Compliance Rate (%)" },
      costSavings: "$14.2M",
      roi: "340%",
    },
    quote:
      "SafeGlobal transformed our safety culture. What used to take weeks of manual audits now happens in real-time with AI precision.",
    quoteAuthor: "VP of Operations",
    color: "from-safeglobal/10",
  },
  {
    company: "PetroChem Industries",
    industry: "Oil & Gas",
    image: "/images/ai-safety.png",
    challenge:
      "High-risk confined space operations with legacy gas detection systems that failed to provide real-time alerts across remote sites.",
    solution:
      "Implemented IoT-enabled gas detection network with AI-powered predictive leak detection and automated emergency response protocols.",
    results: {
      incidents: { before: 45, after: 3, label: "Near-Miss Events/Quarter" },
      compliance: { before: 78, after: 99, label: "Compliance Rate (%)" },
      costSavings: "$8.7M",
      roi: "520%",
    },
    quote:
      "The ROI was undeniable, but the real value is knowing our people go home safe every single day.",
    quoteAuthor: "HSE Director",
    color: "from-cyan-500/10",
  },
  {
    company: "BuildRight Construction",
    industry: "Construction",
    image: "/images/hero-dashboard.png",
    challenge:
      "Multiple fall-from-height incidents and struck-by events across 40+ active construction sites with inconsistent safety oversight.",
    solution:
      "Rolled out computer vision fall detection, proximity warning systems, and AI-powered daily safety briefings customized per site.",
    results: {
      incidents: { before: 234, after: 28, label: "OSHA Recordables/Year" },
      compliance: { before: 54, after: 96, label: "Compliance Rate (%)" },
      costSavings: "$6.3M",
      roi: "280%",
    },
    quote:
      "We went from the industry average to best-in-class safety in under 18 months. The AI catches what humans miss.",
    quoteAuthor: "Chief Safety Officer",
    color: "from-amber-500/10",
  },
];

export default function CaseStudiesSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="case-studies" className="relative py-20 lg:py-28">
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
            PROVEN RESULTS
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Real Impact.{" "}
            <span className="text-gradient">Measurable ROI.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how leading enterprises have transformed their safety outcomes
            with SafeGlobal&apos;s AI-powered platform.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-safeglobal/20 transition-all"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${study.color} to-transparent opacity-50`}
              />

              <div className="relative grid lg:grid-cols-2 gap-0">
                {/* Left - Image / Visual */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 z-10 lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 lg:hidden" />
                  <img
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-safeglobal/90 text-white border-0">
                      {study.industry}
                    </Badge>
                  </div>
                </div>

                {/* Right - Content */}
                <div className="p-6 lg:p-8 space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold">{study.company}</h3>
                  </div>

                  {/* Challenge / Solution */}
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-medium text-red-400 uppercase tracking-wider">
                        Challenge
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-safeglobal uppercase tracking-wider">
                        SafeGlobal Solution
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Before / After Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg border border-red-500/20 bg-red-500/5">
                      <div className="flex items-center gap-1 mb-1">
                        <TrendingDown className="w-3 h-3 text-red-400" />
                        <span className="text-[10px] text-red-400 uppercase tracking-wider">
                          Before
                        </span>
                      </div>
                      <div className="text-xl font-bold text-red-400">
                        {study.results.incidents.before}
                      </div>
                      <div className="text-[10px] text-muted-foreground">
                        {study.results.incidents.label}
                      </div>
                    </div>
                    <div className="p-3 rounded-lg border border-safeglobal/20 bg-safeglobal/5">
                      <div className="flex items-center gap-1 mb-1">
                        <TrendingUp className="w-3 h-3 text-safeglobal" />
                        <span className="text-[10px] text-safeglobal uppercase tracking-wider">
                          After
                        </span>
                      </div>
                      <div className="text-xl font-bold text-safeglobal">
                        {study.results.incidents.after}
                      </div>
                      <div className="text-[10px] text-muted-foreground">
                        {study.results.incidents.label}
                      </div>
                    </div>
                  </div>

                  {/* ROI Bar */}
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-background/50 border border-border">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-safeglobal" />
                      <div>
                        <div className="text-sm font-semibold">
                          {study.results.roi} ROI
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          {study.results.costSavings} saved annually
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm italic text-muted-foreground border-l-2 border-safeglobal/30 pl-4">
                    &ldquo;{study.quote}&rdquo;
                    <span className="block text-xs mt-1 not-italic text-safeglobal">
                      — {study.quoteAuthor}, {study.company}
                    </span>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-safeglobal/30 hover:border-safeglobal/60 hover:bg-safeglobal/5 gap-2"
            onClick={() => handleScrollTo("contact")}
          >
            Get Your Free Safety Audit
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
