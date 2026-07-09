"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Search,
  ThumbsUp,
  ThumbsDown,
  Expand,
  Shrink,
} from "lucide-react";

type Category = "All" | "Pricing" | "Technical" | "Security" | "Compliance";

interface FAQItem {
  question: string;
  answer: string;
  category: Category;
}

const categoryTabs: { label: Category; value: Category }[] = [
  { label: "All", value: "All" },
  { label: "Pricing", value: "Pricing" },
  { label: "Technical", value: "Technical" },
  { label: "Security", value: "Security" },
  { label: "Compliance", value: "Compliance" },
];

const faqItems: FAQItem[] = [
  {
    question: "How does SafeGlobal's AI safety monitoring work?",
    answer:
      "SafeGlobal combines advanced computer vision with an extensive sensor network to deliver real-time hazard detection across your entire operation. Our AI models continuously analyze video feeds and IoT sensor data to identify unsafe conditions, PPE violations, proximity risks, and environmental hazards — all before incidents occur. The system learns from your site's unique patterns, reducing false alarms by over 90% compared to traditional monitoring, and delivers instant alerts to the right personnel through automated escalation workflows.",
    category: "Technical",
  },
  {
    question: "How long does deployment take?",
    answer:
      "A typical full deployment takes 4–6 weeks, including site assessment, hardware installation, system configuration, and team training. However, you'll see your first actionable insights within 48 hours of initial sensor activation. Our rapid-deployment methodology ensures minimal disruption to ongoing operations, and a dedicated onboarding specialist guides your team through every step — from integration to certification.",
    category: "Technical",
  },
  {
    question: "Is SafeGlobal compatible with our existing systems?",
    answer:
      "Absolutely. SafeGlobal integrates natively with 50+ enterprise platforms including SAP, Oracle, ServiceNow, Microsoft Dynamics, and all major SCADA and MES systems. Our open REST API and custom connector framework allow seamless data exchange with virtually any system in your technology stack. Our integration team works alongside your IT department to ensure a smooth, secure connection with zero disruption to existing workflows.",
    category: "Technical",
  },
  {
    question: "What compliance standards does SafeGlobal support?",
    answer:
      "SafeGlobal's built-in compliance engine supports 200+ global safety and data standards, including ISO 45001, OSHA regulations, ISO 27001, IEC 61508, SOC 2 Type II, and GDPR. The platform automatically tracks regulatory updates across jurisdictions and maps your safety data to required compliance frameworks. Automated audit-ready documentation and gap analysis reports are generated on demand, reducing compliance overhead by up to 70%.",
    category: "Compliance",
  },
  {
    question: "How accurate is the AI prediction system?",
    answer:
      "Our AI prediction system achieves 99.7% detection accuracy across all hazard categories, validated through independent third-party audits and peer-reviewed research. The system operates with sub-second alert latency, meaning hazards are identified and notifications dispatched in under one second. Continuous learning from millions of data points across our global deployment base ensures accuracy improves over time, with model updates deployed automatically without downtime.",
    category: "Technical",
  },
  {
    question: "What kind of ROI can we expect?",
    answer:
      "Our enterprise clients see an average 340% ROI within the first 18 months. Cost savings come from three primary areas: incident prevention (average 73% reduction in recordable incidents), compliance automation (up to 70% reduction in compliance labor), and insurance premium optimization (clients report 15–25% insurance cost reductions). Additionally, improved safety scores often unlock preferential contract terms with major clients and partners.",
    category: "Pricing",
  },
  {
    question: "Do you offer on-premise deployment?",
    answer:
      "Yes, on-premise deployment is available for our Enterprise tier customers who require full data sovereignty and air-gapped environments. On-premise installations include the complete SafeGlobal platform — AI models, monitoring dashboards, compliance engine, and analytics — running entirely within your infrastructure. We also support hybrid configurations where sensitive data processing stays on-premise while leveraging cloud resources for model training and updates.",
    category: "Security",
  },
  {
    question: "How is worker privacy protected?",
    answer:
      "Privacy-by-design is foundational to SafeGlobal's architecture. All personal data undergoes automated anonymization at the edge before transmission, ensuring individual workers cannot be identified in dashboards or reports unless explicitly required by your safety protocols. Our system is fully GDPR and CCPA compliant, with configurable data retention policies, right-to-erasure capabilities, and role-based access controls. Regular third-party privacy audits and transparent data processing records provide ongoing assurance.",
    category: "Security",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [helpfulVotes, setHelpfulVotes] = useState<Record<number, "up" | "down" | null>>({});
  const [allExpanded, setAllExpanded] = useState(false);

  const filteredItems = useMemo(() => {
    return faqItems
      .map((item, originalIndex) => ({ ...item, originalIndex }))
      .filter((item) => {
        const matchesCategory =
          activeCategory === "All" || item.category === activeCategory;
        const matchesSearch =
          searchQuery === "" ||
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
  }, [activeCategory, searchQuery]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleExpandAll = () => {
    if (allExpanded) {
      setOpenIndex(null);
      setAllExpanded(false);
    } else {
      // Open the first filtered item
      if (filteredItems.length > 0) {
        setOpenIndex(filteredItems[0].originalIndex);
      }
      setAllExpanded(true);
    }
  };

  const handleVote = (index: number, vote: "up" | "down") => {
    setHelpfulVotes((prev) => ({
      ...prev,
      [index]: prev[index] === vote ? null : vote,
    }));
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
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-teal-500/3 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <Badge
            variant="outline"
            className="border-sky-500/30 text-sky-500 bg-sky-500/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 mr-1" />
            FAQ
          </Badge>
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about SafeGlobal&apos;s AI safety
            platform. Can&apos;t find what you&apos;re looking for? Our team is
            here to help.
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-6"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11 h-12 rounded-xl border-border bg-card/50 focus:border-safeglobal/50 focus:ring-safeglobal/20 text-base"
          />
        </motion.div>

        {/* Category tabs + Expand/Collapse all */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {categoryTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => {
                  setActiveCategory(tab.value);
                  setOpenIndex(null);
                }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === tab.value
                    ? "bg-safeglobal/15 text-sky-500 border border-sky-500/30"
                    : "bg-card/50 text-muted-foreground border border-border hover:border-sky-500/20 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button
            onClick={handleExpandAll}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-sky-500 transition-colors"
          >
            {allExpanded ? (
              <>
                <Shrink className="w-3.5 h-3.5" />
                Collapse All
              </>
            ) : (
              <>
                <Expand className="w-3.5 h-3.5" />
                Expand All
              </>
            )}
          </button>
        </motion.div>

        {/* FAQ Accordion */}
        <AnimatePresence mode="wait">
          <div className="space-y-3">
            {filteredItems.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <HelpCircle className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground text-sm">
                  No questions found matching &ldquo;{searchQuery}&rdquo;
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="text-sky-500 text-sm mt-2 hover:underline underline-offset-2"
                >
                  Clear filters
                </button>
              </motion.div>
            ) : (
              filteredItems.map((item, displayIndex) => {
                const isOpen = allExpanded || openIndex === item.originalIndex;
                return (
                  <motion.div
                    key={item.originalIndex}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: displayIndex * 0.06,
                    }}
                    className={`
                      group rounded-xl border transition-all duration-300
                      ${
                        isOpen
                          ? "border-safeglobal/40 bg-safeglobal/5 shadow-lg shadow-safeglobal/5"
                          : "border-border bg-card/50 hover:border-sky-500/20 hover:bg-card/80"
                      }
                    `}
                  >
                    {/* Question Row */}
                    <button
                      onClick={() => handleToggle(item.originalIndex)}
                      className="flex items-center justify-between w-full text-left p-5 sm:p-6 gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safeglobal/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.originalIndex}`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`
                            flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold transition-colors duration-300
                            ${
                              isOpen
                                ? "bg-sky-500/20 text-sky-500"
                                : "bg-muted text-muted-foreground group-hover:bg-sky-500/10 group-hover:text-sky-500"
                            }
                          `}
                        >
                          {String(displayIndex + 1).padStart(2, "0")}
                        </span>
                        <h3
                          className={`
                            text-base sm:text-lg font-semibold transition-colors duration-300
                            ${
                              isOpen
                                ? "text-sky-500"
                                : "text-foreground group-hover:text-sky-500/90"
                            }
                          `}
                        >
                          {item.question}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Badge
                          variant="outline"
                          className="hidden sm:inline-flex text-[10px] px-2 py-0.5 border-border text-muted-foreground"
                        >
                          {item.category}
                        </Badge>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className={`
                            w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300
                            ${
                              isOpen
                                ? "bg-sky-500/20 text-sky-500"
                                : "bg-muted/50 text-muted-foreground group-hover:bg-sky-500/10 group-hover:text-sky-500"
                            }
                          `}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${item.originalIndex}`}
                          role="region"
                          aria-labelledby={`faq-question-${item.originalIndex}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: {
                              duration: 0.35,
                              ease: [0.4, 0, 0.2, 1],
                            },
                            opacity: {
                              duration: 0.25,
                              ease: "easeInOut",
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                            <div className="pl-11 border-l-2 border-sky-500/20 ml-1">
                              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                {item.answer}
                              </p>

                              {/* Helpful vote micro-interaction */}
                              <div className="flex items-center gap-3 mt-4 pt-3 border-t border-border/50">
                                <span className="text-xs text-muted-foreground">
                                  Was this helpful?
                                </span>
                                <button
                                  onClick={() =>
                                    handleVote(item.originalIndex, "up")
                                  }
                                  className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs transition-all duration-200 ${
                                    helpfulVotes[item.originalIndex] === "up"
                                      ? "bg-safeglobal/15 text-sky-500"
                                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                                  }`}
                                  aria-label="Mark as helpful"
                                >
                                  <ThumbsUp className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() =>
                                    handleVote(item.originalIndex, "down")
                                  }
                                  className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs transition-all duration-200 ${
                                    helpfulVotes[item.originalIndex] === "down"
                                      ? "bg-red-500/10 text-red-400"
                                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                                  }`}
                                  aria-label="Mark as not helpful"
                                >
                                  <ThumbsDown className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div className="relative inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-border bg-card/50">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-safeglobal/5 via-transparent to-teal-500/5" />
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-sky-500" />
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

