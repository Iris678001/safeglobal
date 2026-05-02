"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Zap,
  Shield,
  Headphones,
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

  // Calculate savings for Professional tier
  const professionalSavings = isAnnual
    ? (1299 - 999) * 12
    : 0;

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
          className="flex flex-col items-center gap-3 mb-14"
        >
          <div className="flex items-center justify-center gap-4">
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
          </div>

          {/* 30-Day Money-Back Guarantee Badge */}
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-1.5 mt-1"
          >
            <Shield className="w-3.5 h-3.5 text-safeglobal/70" />
            <span className="text-xs text-muted-foreground font-medium">
              30-Day Money-Back Guarantee
            </span>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {tiers.map((tier, tierIndex) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
            const isEnterprise = tier.name === "Enterprise";

            return (
              <motion.div key={tier.name} variants={item} className="flex">
                {/* Enterprise card with animated gradient border wrapper */}
                {isEnterprise ? (
                  <div className="w-full rounded-2xl p-[2px] bg-gradient-to-r from-safeglobal via-emerald-400 to-cyan-400 bg-[length:200%_100%] animate-[gradient-shift_4s_ease_infinite]">
                    <div className="relative flex flex-col w-full rounded-[14px] border border-border bg-card/80 backdrop-blur-sm p-6 lg:p-8 transition-all duration-300 group hover:-translate-y-1">
                      {/* Enterprise shimmer overlay */}
                      <div className="absolute inset-0 rounded-[14px] shimmer pointer-events-none" />

                      {/* Tier icon + name */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-safeglobal/15 border-safeglobal/30">
                          <tier.icon className="w-5 h-5 text-safeglobal" />
                        </div>
                        <h3 className="text-lg font-semibold">{tier.name}</h3>
                      </div>

                      {/* Price */}
                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl lg:text-5xl font-bold tracking-tight text-gradient">
                            Custom
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {tier.description}
                      </p>

                      {/* Divider */}
                      <div className="h-px bg-border mb-6" />

                      {/* Features with staggered animation on hover */}
                      <ul className="space-y-3 mb-8 flex-1">
                        {tier.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            className="flex items-start gap-2.5"
                            initial={{ opacity: 0.5, x: -4 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: tierIndex * 0.15 + featureIndex * 0.05,
                            }}
                          >
                            <motion.div
                              className="flex-shrink-0 mt-0.5"
                              whileHover={{ scale: 1.3 }}
                              transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            >
                              <CheckCircle2 className="w-4 h-4 text-safeglobal" />
                            </motion.div>
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Contact Sales CTA with Headphones icon */}
                      <Button
                        className="w-full gap-2 font-semibold transition-all duration-300 bg-card border border-border hover:border-safeglobal/40 hover:bg-safeglobal/5 text-foreground"
                        variant="outline"
                        size="lg"
                        onClick={() => handleScrollTo("contact")}
                      >
                        <Headphones className="w-4 h-4" />
                        Contact Sales
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`group relative flex flex-col w-full rounded-2xl border p-6 lg:p-8 transition-all duration-300 ${
                      tier.highlighted
                        ? "border-safeglobal/40 bg-gradient-to-b from-safeglobal/10 via-card/80 to-card/50 shadow-[0_0_40px_rgba(16,185,129,0.12)] hover:shadow-[0_0_60px_rgba(16,185,129,0.2)] hover:border-safeglobal/60 hover:-translate-y-2"
                        : "border-border bg-card/50 hover:border-safeglobal/25 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
                    }`}
                  >
                    {/* Popular badge with pulsing glow */}
                    {tier.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <Badge className="bg-safeglobal text-white border-none px-4 py-1 text-[11px] font-bold tracking-wider uppercase shadow-lg shadow-safeglobal/25 badge-pulse">
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

                    {/* Features with staggered animation on hover */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          className="flex items-start gap-2.5"
                          initial={{ opacity: 0.5, x: -4 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: tierIndex * 0.15 + featureIndex * 0.05,
                          }}
                        >
                          <motion.div
                            className="flex-shrink-0 mt-0.5"
                            whileHover={{ scale: 1.3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            <CheckCircle2
                              className={`w-4 h-4 ${
                                tier.highlighted
                                  ? "text-safeglobal"
                                  : "text-safeglobal/70"
                              }`}
                            />
                          </motion.div>
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </motion.li>
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
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Savings callout on annual - slides in above Professional card */}
        <AnimatePresence>
          {isAnnual && professionalSavings > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex justify-center mt-8"
            >
              <div className="inline-flex items-center gap-2 bg-safeglobal/10 border border-safeglobal/30 rounded-full px-5 py-2.5 shadow-lg shadow-safeglobal/10">
                <Sparkles className="w-4 h-4 text-safeglobal" />
                <span className="text-sm font-semibold text-safeglobal">
                  You save ${professionalSavings.toLocaleString()}/year!
                </span>
                <span className="text-xs text-muted-foreground">
                  on Professional annual billing
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
