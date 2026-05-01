"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Zap,
} from "lucide-react";

type BillingCycle = "monthly" | "annual";

interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  icon: React.ElementType;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    description:
      "For growing teams that need core AI safety monitoring and essential compliance tools to get started.",
    monthlyPrice: 499,
    annualPrice: 399,
    icon: Zap,
    features: [
      "Up to 5 zones",
      "Basic AI monitoring",
      "Email alerts",
      "Monthly compliance reports",
      "50 workers",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    description:
      "For organizations that demand advanced AI analytics, real-time monitoring, and full regulatory automation.",
    monthlyPrice: 1299,
    annualPrice: 999,
    icon: Sparkles,
    features: [
      "Up to 25 zones",
      "Advanced AI + Predictive Analytics",
      "Real-time multi-channel alerts",
      "Automated compliance",
      "250 workers",
      "Priority support",
      "API access",
      "Custom dashboards",
    ],
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    description:
      "For large-scale operations requiring unlimited scale, dedicated support, custom integrations, and on-premise deployment.",
    monthlyPrice: null,
    annualPrice: null,
    icon: Building2,
    features: [
      "Unlimited zones",
      "Full AI suite",
      "24/7 dedicated monitoring",
      "White-glove compliance",
      "Unlimited workers",
      "Dedicated success manager",
      "Custom integrations",
      "On-premise deployment",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PricingSection() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const isAnnual = billing === "annual";

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background decorations */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-safeglobal/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            PRICING
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your safety needs. All plans include a
            14-day free trial with no credit card required.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <span
            className={`text-sm font-medium transition-colors ${
              !isAnnual ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Monthly
          </span>

          {/* Custom toggle switch */}
          <button
            onClick={() => setBilling(isAnnual ? "monthly" : "annual")}
            className="relative inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border border-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safeglobal/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              backgroundColor: isAnnual
                ? "rgba(16, 185, 129, 0.25)"
                : "rgba(255, 255, 255, 0.05)",
            }}
            role="switch"
            aria-checked={isAnnual}
            aria-label="Toggle annual billing"
          >
            <span
              className={`pointer-events-none block h-5 w-5 rounded-full shadow-lg transition-transform duration-200 ease-in-out ${
                isAnnual
                  ? "translate-x-8 bg-safeglobal"
                  : "translate-x-1 bg-muted-foreground"
              }`}
            />
          </button>

          <span
            className={`text-sm font-medium transition-colors ${
              isAnnual ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Annual
          </span>

          {isAnnual && (
            <Badge className="bg-safeglobal/15 text-safeglobal border border-safeglobal/30 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide">
              Save 20%
            </Badge>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {tiers.map((tier) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

            return (
              <motion.div key={tier.name} variants={item} className="flex">
                <div
                  className={`group relative flex flex-col w-full rounded-2xl border p-6 lg:p-8 transition-all duration-300 ${
                    tier.highlighted
                      ? "border-safeglobal/40 bg-gradient-to-b from-safeglobal/10 via-card/80 to-card/50 shadow-[0_0_40px_rgba(16,185,129,0.12)] hover:shadow-[0_0_60px_rgba(16,185,129,0.2)] hover:border-safeglobal/60 hover:-translate-y-2"
                      : "border-border bg-card/50 hover:border-safeglobal/25 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
                  }`}
                >
                  {/* Popular badge */}
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <Badge className="bg-safeglobal text-white border-none px-4 py-1 text-[11px] font-bold tracking-wider uppercase shadow-lg shadow-safeglobal/25">
                        {tier.badge}
                      </Badge>
                    </div>
                  )}

                  {/* Tier icon + name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                        tier.highlighted
                          ? "bg-safeglobal/15 border-safeglobal/30"
                          : "bg-muted/50 border-border"
                      }`}
                    >
                      <tier.icon
                        className={`w-5 h-5 ${
                          tier.highlighted ? "text-safeglobal" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{tier.name}</h3>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    {price !== null ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl lg:text-5xl font-bold tracking-tight">
                          ${price.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground text-sm font-medium">
                          /mo
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl lg:text-5xl font-bold tracking-tight text-gradient">
                          Custom
                        </span>
                      </div>
                    )}
                    {isAnnual && price !== null && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Billed annually (${(price * 12).toLocaleString()}/yr)
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-border mb-6" />

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            tier.highlighted
                              ? "text-safeglobal"
                              : "text-safeglobal/70"
                          }`}
                        />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={`w-full gap-2 font-semibold transition-all duration-300 ${
                      tier.highlighted
                        ? "bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/25 hover:shadow-safeglobal/40"
                        : "bg-card border border-border hover:border-safeglobal/40 hover:bg-safeglobal/5 text-foreground"
                    }`}
                    variant={tier.highlighted ? "default" : "outline"}
                    size="lg"
                    onClick={() => handleScrollTo("contact")}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            All plans include a{" "}
            <span className="text-safeglobal font-medium">
              14-day free trial
            </span>{" "}
            · No credit card required · Cancel anytime
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Need a custom plan?{" "}
            <button
              onClick={() => handleScrollTo("contact")}
              className="text-safeglobal hover:underline underline-offset-2 transition-all"
            >
              Talk to our team
            </button>{" "}
            for volume discounts and tailored solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
