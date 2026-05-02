"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { servicesData } from "@/data/services";
import { colorMap } from "@/components/safe-global/navConfig";
import {
  ArrowRight,
  Factory,
  HardHat,
  Building2,
  Stethoscope,
  FlaskConical,
  Truck,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import HeroSection from "@/components/safe-global/HeroSection";
import LiveMetricsBanner from "@/components/safe-global/LiveMetricsBanner";
import TrustIndicators from "@/components/safe-global/TrustIndicators";
import PartnersSection from "@/components/safe-global/PartnersSection";

const TestimonialsSection = dynamic(
  () => import("@/components/safe-global/TestimonialsSection"),
  { ssr: true }
);

const IndustriesSection = dynamic(
  () => import("@/components/safe-global/IndustriesSection"),
  { ssr: true }
);

// ─── Industries Overview Data ────────────────────────────────────────────────
const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    href: "/industries/manufacturing",
    stat: "68%",
    statLabel: "incident reduction",
    color: "safeglobal",
  },
  {
    icon: HardHat,
    title: "Construction",
    href: "/industries/construction",
    stat: "82%",
    statLabel: "near-miss prevention",
    color: "amber",
  },
  {
    icon: Building2,
    title: "Oil & Gas",
    href: "/industries/oil-gas",
    stat: "91%",
    statLabel: "compliance improvement",
    color: "rose",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    href: "/industries/healthcare",
    stat: "56%",
    statLabel: "claim reduction",
    color: "cyan",
  },
  {
    icon: FlaskConical,
    title: "Chemical",
    href: "/industries/manufacturing",
    stat: "94%",
    statLabel: "hazard detection",
    color: "violet",
  },
  {
    icon: Truck,
    title: "Logistics",
    href: "/industries/logistics-warehousing",
    stat: "74%",
    statLabel: "injury reduction",
    color: "safeglobal",
  },
];

// ─── Skeleton for dynamic sections ──────────────────────────────────────────
function SectionSkeleton() {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="animate-pulse rounded-2xl bg-muted/50 h-96 p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-3 w-20 rounded-full bg-muted-foreground/15" />
            <div className="h-6 w-48 rounded-full bg-muted-foreground/10" />
          </div>
          <div className="space-y-3">
            <div className="h-4 w-3/4 rounded-full bg-muted-foreground/10" />
            <div className="h-4 w-1/2 rounded-full bg-muted-foreground/8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            <div className="h-40 rounded-xl bg-muted-foreground/8" />
            <div className="h-40 rounded-xl bg-muted-foreground/8" />
            <div className="h-40 rounded-xl bg-muted-foreground/8" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Services Overview Section ───────────────────────────────────────────────
function ServicesOverview() {
  const topServices = Object.values(servicesData).slice(0, 6);

  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-safeglobal/3 rounded-full blur-[120px]" />

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
            OUR SOLUTIONS
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            AI-Powered <span className="text-gradient">EHS Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive safety intelligence platform with 12 specialized AI modules
            designed to protect your workforce and ensure compliance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topServices.map((service, idx) => {
            const colors = colorMap[service.color] || colorMap.safeglobal;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link href={`/ehs-ai/${service.slug}`} className="block group">
                  <Card className="h-full border-border bg-card/50 hover:border-safeglobal/30 hover:shadow-xl hover:shadow-safeglobal/5 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        {service.badge && (
                          <Badge
                            variant="outline"
                            className={`text-[10px] px-2 py-0.5 ${colors.bg} ${colors.text} ${colors.border}`}
                          >
                            {service.badge}
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-safeglobal transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {service.subtitle}
                      </p>
                      <div className="flex items-center gap-1 text-safeglobal text-sm font-medium">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-border hover:border-safeglobal/50 hover:bg-safeglobal/5 gap-2"
          >
            <Link href="/ehs-ai">
              View All 12 Solutions
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Industries Overview Section ─────────────────────────────────────────────
function IndustriesOverview() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-[120px]" />

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, idx) => {
            const colors = colorMap[industry.color] || colorMap.safeglobal;
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link href={industry.href} className="block group">
                  <Card className="h-full border-border bg-card/50 hover:border-safeglobal/30 hover:shadow-xl hover:shadow-safeglobal/5 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-safeglobal transition-colors">
                        {industry.title}
                      </h3>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className={`text-2xl font-bold ${colors.text}`}>
                          {industry.stat}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {industry.statLabel}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-safeglobal text-sm font-medium">
                        Explore solutions
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-border hover:border-safeglobal/50 hover:bg-safeglobal/5 gap-2"
          >
            <Link href="/industries">
              View All Industries
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA Section ─────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safeglobal/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative p-10 sm:p-14 rounded-3xl border border-safeglobal/20 bg-gradient-to-br from-safeglobal/10 via-card/80 to-cyan-500/5 backdrop-blur-sm overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-safeglobal/10 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <Badge
              variant="outline"
              className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-6"
            >
              <Sparkles className="w-3 h-3 mr-1.5" />
              GET STARTED TODAY
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Ready to Make Your Workplace{" "}
              <span className="text-gradient">Safer</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Join 500,000+ workers already protected by SafeGlobal. Get a
              customized demo and see the platform in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-xl shadow-safeglobal/25 hover:shadow-safeglobal/35 transition-all text-base px-8 h-13 gap-2"
              >
                <Link href="/contact">
                  Request Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-border hover:border-safeglobal/50 hover:bg-safeglobal/5 text-base px-8 h-13 gap-2"
              >
                <Link href="/ehs-ai">
                  Explore Solutions
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Homepage ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <HeroSection />
      <LiveMetricsBanner />
      <TrustIndicators />
      <ServicesOverview />
      <IndustriesOverview />
      <PartnersSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
