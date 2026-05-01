"use client";

import { motion } from "framer-motion";
import { Shield, Award, Globe, Users } from "lucide-react";

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
  { value: "500K+", label: "Workers Protected", icon: "🛡️" },
  { value: "30+", label: "Countries", icon: "🌍" },
  { value: "99.7%", label: "Detection Accuracy", icon: "🎯" },
  { value: "73%", label: "Risk Reduction", icon: "📉" },
  { value: "$2.1B", label: "Client Savings", icon: "💰" },
  { value: "24/7", label: "AI Monitoring", icon: "⚡" },
];

export default function TrustIndicators() {
  return (
    <section id="trust" className="relative py-20 lg:py-28">
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safeglobal/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {clients.map((client) => (
              <div
                key={client}
                className="text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors text-lg font-semibold tracking-wide cursor-default"
              >
                {client}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-16"
        >
          {certifications.map((cert) => (
            <div
              key={cert.label}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-card/50"
            >
              <cert.icon className="w-4 h-4 text-safeglobal" />
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium">{cert.label}</span>
                <span className="text-xs text-muted-foreground">
                  {cert.desc}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative p-5 rounded-xl border border-border bg-card/50 hover:border-safeglobal/30 hover:bg-safeglobal/5 transition-all duration-300 text-center"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-safeglobal mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.label}
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-safeglobal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
