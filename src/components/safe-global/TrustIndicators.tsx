"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Award, Globe, Users, Activity, TrendingUp, BarChart3, Zap } from "lucide-react";

const clients = [
  "Siemens",
  "Bosch",
  "Honeywell",
  "ABB",
  "Schneider Electric",
  "3M",
  "DuPont",
  "GE Digital",
];

const certifications = [
  { icon: Shield, label: "ISO 45001", desc: "Certified" },
  { icon: Award, label: "ISO 27001", desc: "Security" },
  { icon: Globe, label: "IEC 61508", desc: "Functional Safety" },
  { icon: Users, label: "SOC 2", desc: "Type II Compliant" },
];

const stats = [
  { value: 500000, suffix: "+", label: "Workers Protected", icon: Shield, color: "text-safeglobal" },
  { value: 30, suffix: "+", label: "Countries", icon: Globe, color: "text-cyan-400" },
  { value: 99.7, suffix: "%", label: "Detection Accuracy", icon: Activity, color: "text-safeglobal" },
  { value: 73, suffix: "%", label: "Risk Reduction", icon: TrendingUp, color: "text-amber-400" },
  { value: 2.1, prefix: "$", suffix: "B", label: "Client Savings", icon: BarChart3, color: "text-cyan-400" },
  { value: 24, suffix: "/7", label: "AI Monitoring", icon: Zap, color: "text-safeglobal" },
];

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}) {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCurrent(eased * target);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  const displayValue = decimals > 0
    ? current.toFixed(decimals)
    : Math.floor(current).toLocaleString();

  return (
    <div ref={ref}>
      {prefix}{displayValue}{suffix}
    </div>
  );
}

export default function TrustIndicators() {
  return (
    <section id="trust" className="relative py-20 lg:py-28">
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safeglobal/30 to-transparent" />
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-safeglobal/3 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-widest">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {clients.map((client, idx) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="text-muted-foreground/40 hover:text-muted-foreground/80 transition-all text-lg font-semibold tracking-wide cursor-default hover:scale-105"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          {certifications.map((cert) => (
            <div
              key={cert.label}
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border bg-card/50 hover:border-safeglobal/30 hover:bg-safeglobal/5 transition-all duration-300"
            >
              <cert.icon className="w-4 h-4 text-safeglobal group-hover:scale-110 transition-transform" />
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium">{cert.label}</span>
                <span className="text-xs text-muted-foreground">
                  {cert.desc}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Stats Grid with Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
              className="group relative p-5 rounded-xl border border-border bg-card/50 hover:border-safeglobal/30 hover:bg-safeglobal/5 transition-all duration-300 text-center overflow-hidden"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-safeglobal/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-safeglobal/20 group-hover:scale-110 transition-all duration-300">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>

              {/* Animated Value */}
              <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1`}>
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix || ""}
                  duration={2500}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
              </div>

              {/* Label */}
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-safeglobal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
