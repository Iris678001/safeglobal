"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Shield,
  Zap,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    id: "01",
    title: "Safety Without Compromise",
    description:
      "Every decision, every algorithm, every product is built with one principle: zero tolerance for preventable harm. We believe safety is a fundamental human right in the workplace.",
  },
  {
    id: "02",
    title: "Innovation at Speed",
    description:
      "We push the boundaries of AI and IoT to deliver breakthrough capabilities faster than the risks evolve. Our engineering moves at the speed of modern industry.",
  },
  {
    id: "03",
    title: "Human-Centered Design",
    description:
      "Technology should empower people, not overwhelm them. Our solutions are designed by safety professionals for real workers operating in real, challenging conditions.",
  },
  {
    id: "04",
    title: "Measurable Impact",
    description:
      "Every feature ties back to quantifiable safety improvements. We measure our ultimate success not in lines of code, but in lives protected and incidents prevented.",
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
];

export default function AboutSection() {
  return (
    <section id="about" className="relative pb-24 overflow-hidden">
      
      {/* ─── Editorial Hero Section ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 mb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-sky-500" />
                <span className="text-sm font-semibold tracking-widest text-sky-500 uppercase">Our Story</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                Redefining <br className="hidden lg:block" />
                Workplace <br className="hidden lg:block" />
                <span className="text-sky-500">Safety.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Founded on the belief that every worker deserves to go home safely. We aren't just building software; we are building the future infrastructure of industrial risk management.
              </p>
            </motion.div>
          </div>

          {/* Right Image Container (Asymmetrical) */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/about_hero.png"
                alt="AI Command Center"
                className="w-full h-full object-cover"
              />
              {/* Subtle inner shadow, no heavy glowing neon */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </motion.div>
            
            {/* Minimalist accent block breaking the grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 bg-background p-6 lg:p-8 rounded-xl border border-border shadow-xl max-w-xs hidden md:block"
            >
              <p className="text-sm font-medium leading-relaxed">
                "Our technology processes millions of data points per second, but our metric for success is singular: zero preventable incidents."
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Minimalist Mission & Vision ─── */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-sky-500" />
                The Mission
              </h2>
              <div className="h-0.5 w-12 bg-sky-500 mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                To eliminate preventable workplace injuries and fatalities
                worldwide by deploying AI-driven safety intelligence that
                anticipates risks, automates compliance, and empowers every
                organization to achieve zero-harm operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-sky-500" />
                The Vision
              </h2>
              <div className="h-0.5 w-12 bg-sky-500 mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                A world where AI-powered safety systems are as fundamental as fire
                alarms — where every workplace, from construction sites to
                hospitals, benefits from intelligent risk prevention that makes
                zero-harm not just a goal, but a reality.
              </p>
            </motion.div>
          </div>
        </div>



        {/* ─── Clean Values List ─── */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Our Core <br /> Principles.
            </h2>
            <p className="text-muted-foreground text-lg">
              The foundational beliefs that guide our product development, engineering, and company culture.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {values.map((value, idx) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="flex flex-col md:flex-row md:gap-8 items-start">
                  <div className="text-4xl font-light text-muted-foreground/30 font-mono mb-4 md:mb-0 md:w-20 shrink-0 absolute left-0 md:relative md:-top-1">
                    {value.id}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
                {idx !== values.length - 1 && (
                  <div className="h-px w-full bg-border mt-12 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── Grounded "Why Us" Section ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-border pt-20"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why SafeGlobal?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                We aren't just another safety software wrapper. We provide a comprehensive, AI-native infrastructure designed to protect lives at scale.
              </p>
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 gap-2 h-12 px-8"
                asChild
              >
                <Link href="/contact">
                  See the Difference
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            
            <div className="space-y-8">
              {differentiators.map((d) => (
                <div key={d.label} className="flex gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">{d.label}</h4>
                    <p className="text-muted-foreground leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
