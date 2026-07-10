"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Award, Globe, Users, Activity, TrendingUp, BarChart3, Zap } from "lucide-react";

const clients = [
  { name: "IMG", src: "/logos/partners/img.png" },
  { name: "ABB", src: "/logos/partners/ABB.png" },
  { name: "DuPont", src: "/logos/partners/DuPont.png" },
  { name: "Bosch", src: "/logos/partners/Bosch.png" },
  { name: "Honeywell", src: "/logos/partners/Honeywell.png" },
];

const certifications = [
  { icon: Shield, label: "ISO 45001", desc: "Certified" },
  { icon: Award, label: "ISO 27001", desc: "Security" },
  { icon: Globe, label: "IEC 61508", desc: "Functional Safety" },
  { icon: Users, label: "SOC 2", desc: "Type II Compliant" },
];

const stats = [
  { value: 500000, suffix: "+", label: "Workers Protected", icon: Shield, color: "text-safeglobal" },
  { value: 30, suffix: "+", label: "Countries", icon: Globe, color: "text-teal-400" },
  { value: 99.7, suffix: "%", label: "Detection Accuracy", icon: Activity, color: "text-safeglobal" },
  { value: 73, suffix: "%", label: "Risk Reduction", icon: TrendingUp, color: "text-amber-400" },
  { value: 2.1, prefix: "$", suffix: "B", label: "Client Savings", icon: BarChart3, color: "text-teal-400" },
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-safeglobal/50" />
            <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-semibold">
              Our Technology Alliances
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-safeglobal/50" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-24 gap-y-12">
            {clients.map((client, idx) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex items-center justify-center relative"
                title={client.name}
              >
                <div className="absolute inset-0 bg-safeglobal/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={client.src}
                  alt={`${client.name} logo`}
                  className={`relative z-10 max-h-16 md:max-h-20 max-w-[200px] object-contain invert grayscale mix-blend-screen opacity-70 transition-all duration-500 group-hover:opacity-100 ${['Bosch', 'Honeywell'].includes(client.name) ? 'scale-[1.35] md:scale-[1.45] group-hover:scale-[1.45] md:group-hover:scale-[1.55]' : 'group-hover:scale-110'}`}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <span
                  className="relative z-10 text-muted-foreground/60 text-lg md:text-xl font-bold tracking-widest uppercase transition-all duration-500 group-hover:text-foreground group-hover:scale-110"
                  style={{ display: 'none' }}
                >
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>




      </div>
    </section>
  );
}
