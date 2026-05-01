"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqItems = [
  {
    question: "How does SafeGlobal's AI safety monitoring work?",
    answer:
      "SafeGlobal combines advanced computer vision with an extensive sensor network to deliver real-time hazard detection across your entire operation. Our AI models continuously analyze video feeds and IoT sensor data to identify unsafe conditions, PPE violations, proximity risks, and environmental hazards — all before incidents occur. The system learns from your site's unique patterns, reducing false alarms by over 90% compared to traditional monitoring, and delivers instant alerts to the right personnel through automated escalation workflows.",
  },
  {
    question: "How long does deployment take?",
    answer:
      "A typical full deployment takes 4–6 weeks, including site assessment, hardware installation, system configuration, and team training. However, you'll see your first actionable insights within 48 hours of initial sensor activation. Our rapid-deployment methodology ensures minimal disruption to ongoing operations, and a dedicated onboarding specialist guides your team through every step — from integration to certification.",
  },
  {
    question: "Is SafeGlobal compatible with our existing systems?",
    answer:
      "Absolutely. SafeGlobal integrates natively with 50+ enterprise platforms including SAP, Oracle, ServiceNow, Microsoft Dynamics, and all major SCADA and MES systems. Our open REST API and custom connector framework allow seamless data exchange with virtually any system in your technology stack. Our integration team works alongside your IT department to ensure a smooth, secure connection with zero disruption to existing workflows.",
  },
  {
    question: "What compliance standards does SafeGlobal support?",
    answer:
      "SafeGlobal's built-in compliance engine supports 200+ global safety and data standards, including ISO 45001, OSHA regulations, ISO 27001, IEC 61508, SOC 2 Type II, and GDPR. The platform automatically tracks regulatory updates across jurisdictions and maps your safety data to required compliance frameworks. Automated audit-ready documentation and gap analysis reports are generated on demand, reducing compliance overhead by up to 70%.",
  },
  {
    question: "How accurate is the AI prediction system?",
    answer:
      "Our AI prediction system achieves 99.7% detection accuracy across all hazard categories, validated through independent third-party audits and peer-reviewed research. The system operates with sub-second alert latency, meaning hazards are identified and notifications dispatched in under one second. Continuous learning from millions of data points across our global deployment base ensures accuracy improves over time, with model updates deployed automatically without downtime.",
  },
  {
    question: "What kind of ROI can we expect?",
    answer:
      "Our enterprise clients see an average 340% ROI within the first 18 months. Cost savings come from three primary areas: incident prevention (average 73% reduction in recordable incidents), compliance automation (up to 70% reduction in compliance labor), and insurance premium optimization (clients report 15–25% insurance cost reductions). Additionally, improved safety scores often unlock preferential contract terms with major clients and partners.",
  },
  {
    question: "Do you offer on-premise deployment?",
    answer:
      "Yes, on-premise deployment is available for our Enterprise tier customers who require full data sovereignty and air-gapped environments. On-premise installations include the complete SafeGlobal platform — AI models, monitoring dashboards, compliance engine, and analytics — running entirely within your infrastructure. We also support hybrid configurations where sensitive data processing stays on-premise while leveraging cloud resources for model training and updates.",
  },
  {
    question: "How is worker privacy protected?",
    answer:
      "Privacy-by-design is foundational to SafeGlobal's architecture. All personal data undergoes automated anonymization at the edge before transmission, ensuring individual workers cannot be identified in dashboards or reports unless explicitly required by your safety protocols. Our system is fully GDPR and CCPA compliant, with configurable data retention policies, right-to-erasure capabilities, and role-based access controls. Regular third-party privacy audits and transparent data processing records provide ongoing assurance.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {/* Background glows */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-safeglobal/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-500/3 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <HelpCircle className="w-3.5 h-3.5 mr-1" />
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about SafeGlobal&apos;s AI safety
            platform. Can&apos;t find what you&apos;re looking for? Our team is
            here to help.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`
                  group rounded-xl border transition-all duration-300
                  ${
                    isOpen
                      ? "border-safeglobal/40 bg-safeglobal/5 shadow-lg shadow-safeglobal/5"
                      : "border-border bg-card/50 hover:border-safeglobal/20 hover:bg-card/80"
                  }
                `}
              >
                {/* Question Row */}
                <button
                  onClick={() => handleToggle(index)}
                  className="flex items-center justify-between w-full text-left p-5 sm:p-6 gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safeglobal/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`
                        flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold transition-colors duration-300
                        ${
                          isOpen
                            ? "bg-safeglobal/20 text-safeglobal"
                            : "bg-muted text-muted-foreground group-hover:bg-safeglobal/10 group-hover:text-safeglobal"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={`
                        text-base sm:text-lg font-semibold transition-colors duration-300
                        ${
                          isOpen
                            ? "text-safeglobal"
                            : "text-foreground group-hover:text-safeglobal/90"
                        }
                      `}
                    >
                      {item.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`
                      flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300
                      ${
                        isOpen
                          ? "bg-safeglobal/20 text-safeglobal"
                          : "bg-muted/50 text-muted-foreground group-hover:bg-safeglobal/10 group-hover:text-safeglobal"
                      }
                    `}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.25, ease: "easeInOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                        <div className="pl-11 border-l-2 border-safeglobal/20 ml-1">
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div className="relative inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-border bg-card/50">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-safeglobal/5 via-transparent to-cyan-500/5" />
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-safeglobal/10 flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-safeglobal" />
              </div>
              <p className="text-lg font-semibold mb-1">
                Still have questions?
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                Talk to our team and get personalized answers for your
                organization.
              </p>
              <Button
                onClick={() => handleScrollTo("contact")}
                className="bg-safeglobal hover:bg-safeglobal/90 text-white gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Contact Our Team
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
