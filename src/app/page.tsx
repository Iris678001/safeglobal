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
  type LucideIcon,
} from "lucide-react";

import HeroSection from "@/components/safe-global/HeroSection";
import TrustIndicators from "@/components/safe-global/TrustIndicators";
import PartnersSection from "@/components/safe-global/PartnersSection";
import ClientMarquee from "@/components/safe-global/ClientMarquee";

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
          className="relative p-10 sm:p-14 rounded-3xl border border-safeglobal/20 bg-card/80 backdrop-blur-sm overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <motion.div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-safeglobal to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-safeglobal/20"
            animate={{ scale: [0.9, 1.12, 0.9], opacity: [0.25, 0.08, 0.25] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 left-10 h-56 w-56 rounded-full border border-cyan-500/20"
            animate={{ scale: [1.1, 0.88, 1.1], opacity: [0.08, 0.22, 0.08] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
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

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientMarquee />
      <TrustIndicators />
      <PartnersSection />
      <CTASection />
    </>
  );
}

