"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Award,
  Lock,
  FileCheck,
  Globe,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const certifications = [
  {
    icon: Shield,
    standard: "ISO 45001",
    category: "Occupational Health & Safety",
    status: "Certified",
    colorTheme: "green",
    iconBg: "bg-teal-600/10",
    iconColor: "text-teal-500",
    borderHover: "hover:border-teal-600/40",
    statusBg: "bg-teal-600/15",
    statusColor: "text-teal-500",
    glowColor: "rgba(45,122,111,0.15)",
  },
  {
    icon: Lock,
    standard: "ISO 27001",
    category: "Information Security",
    status: "Certified",
    colorTheme: "cyan",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-400",
    borderHover: "hover:border-teal-500/40",
    statusBg: "bg-teal-500/15",
    statusColor: "text-teal-400",
    glowColor: "rgba(91,138,114,0.15)",
  },
  {
    icon: Award,
    standard: "SOC 2 Type II",
    category: "Service Organization Control",
    status: "Compliant",
    colorTheme: "amber",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    borderHover: "hover:border-amber-500/40",
    statusBg: "bg-amber-500/15",
    statusColor: "text-amber-400",
    glowColor: "rgba(245,158,11,0.15)",
  },
  {
    icon: FileCheck,
    standard: "IEC 61508",
    category: "Functional Safety",
    status: "Certified",
    colorTheme: "violet",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    borderHover: "hover:border-violet-500/40",
    statusBg: "bg-violet-500/15",
    statusColor: "text-violet-400",
    glowColor: "rgba(139,92,246,0.15)",
  },
  {
    icon: Globe,
    standard: "GDPR",
    category: "Data Protection",
    status: "Compliant",
    colorTheme: "green",
    iconBg: "bg-teal-600/10",
    iconColor: "text-teal-500",
    borderHover: "hover:border-teal-600/40",
    statusBg: "bg-teal-600/15",
    statusColor: "text-teal-500",
    glowColor: "rgba(45,122,111,0.15)",
  },
  {
    icon: Shield,
    standard: "OSHA",
    category: "Workplace Safety Standards",
    status: "Compliant",
    colorTheme: "cyan",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-400",
    borderHover: "hover:border-teal-500/40",
    statusBg: "bg-teal-500/15",
    statusColor: "text-teal-400",
    glowColor: "rgba(91,138,114,0.15)",
  },
  {
    icon: Lock,
    standard: "CCPA",
    category: "Consumer Privacy",
    status: "Compliant",
    colorTheme: "amber",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    borderHover: "hover:border-amber-500/40",
    statusBg: "bg-amber-500/15",
    statusColor: "text-amber-400",
    glowColor: "rgba(245,158,11,0.15)",
  },
  {
    icon: FileCheck,
    standard: "HIPAA",
    category: "Health Data Protection",
    status: "Ready",
    colorTheme: "violet",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    borderHover: "hover:border-violet-500/40",
    statusBg: "bg-violet-500/15",
    statusColor: "text-violet-400",
    glowColor: "rgba(139,92,246,0.15)",
  },
];

const keyStats = [
  {
    value: "200+",
    label: "Standards Tracked",
    description: "Global safety & privacy regulations continuously monitored",
    icon: Shield,
  },
  {
    value: "24/7",
    label: "Compliance Monitoring",
    description: "Real-time automated compliance status across all frameworks",
    icon: CheckCircle2,
  },
  {
    value: "Auto",
    label: "Updated Regulations",
    description: "Regulatory changes detected and policies auto-adjusted",
    icon: Globe,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

function CertificationCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[0];
  index: number;
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative"
    >
      <div
        className={`relative h-full p-5 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-500 ${cert.borderHover} hover:bg-card/80 overflow-hidden`}
      >
        {/* Animated border glow on hover */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 0 1px ${cert.glowColor}, 0 0 30px ${cert.glowColor}`,
          }}
        />

        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-transparent group-hover:from-white/[0.02] group-hover:to-transparent transition-all duration-500 pointer-events-none" />

        {/* Shimmer line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/10 transition-all duration-700" />

        <div className="relative z-10">
          {/* Icon & Status */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={`w-11 h-11 rounded-lg ${cert.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
            >
              <cert.icon className={`w-5 h-5 ${cert.iconColor}`} />
            </div>
            <Badge
              variant="outline"
              className={`${cert.statusBg} ${cert.statusColor} border-transparent text-[10px] font-semibold tracking-wide px-2.5 py-0.5`}
            >
              {cert.status === "Certified" && (
                <CheckCircle2 className="w-3 h-3 mr-1" />
              )}
              {cert.status}
            </Badge>
          </div>

          {/* Standard Name */}
          <h4 className="text-base font-bold mb-1 group-hover:text-safeglobal transition-colors duration-300">
            {cert.standard}
          </h4>

          {/* Category */}
          <p className="text-xs text-muted-foreground leading-relaxed">
            {cert.category}
          </p>

          {/* Decorative corner accent */}
          <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div
              className="absolute bottom-2 right-2 w-8 h-8 rounded-tl-lg"
              style={{
                background: `linear-gradient(135deg, transparent, ${cert.glowColor})`,
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SecurityCompliance() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="security"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safeglobal/30 to-transparent" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-safeglobal/5 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/[0.02] rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
          >
            <Shield className="w-3 h-3 mr-1.5" />
            SECURITY &amp; COMPLIANCE
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Enterprise-Grade{" "}
            <span className="text-gradient">Trust</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our platform meets the highest international standards for security,
            safety, and data protection. Every certification is a commitment to
            safeguarding what matters most.
          </p>
        </motion.div>

        {/* Center Shield with Pulsing Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center mb-16"
        >
          <div className="relative mb-6">
            {/* Outer pulse rings */}
            <div className="absolute inset-0 -m-8 rounded-full border border-safeglobal/10 animate-ping [animation-duration:3s]" />
            <div className="absolute inset-0 -m-5 rounded-full border border-safeglobal/15 animate-ping [animation-duration:2.5s] [animation-delay:0.5s]" />
            <div className="absolute inset-0 -m-3 rounded-full border border-safeglobal/20 animate-pulse" />

            {/* Glow backdrop */}
            <div className="absolute inset-0 -m-10 bg-safeglobal/5 rounded-full blur-2xl animate-pulse-glow" />

            {/* Shield container */}
            <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-safeglobal/20 to-safeglobal/5 border border-safeglobal/30 flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-12 h-12 text-safeglobal" />
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-safeglobal/10 to-transparent" />
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-center">
            Enterprise-Grade Security
            <br />
            <span className="text-gradient">&amp; Compliance</span>
          </h3>
          <p className="text-sm text-muted-foreground mt-2 text-center max-w-md">
            Independently verified, continuously audited, and always up to date
            with the latest regulatory requirements.
          </p>
        </motion.div>

        {/* Certification Grid — Trust Wall */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.standard} cert={cert} index={index} />
          ))}
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          {keyStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              className="group relative p-6 rounded-xl border border-border bg-card/50 hover:border-safeglobal/30 transition-all duration-300 text-center overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-safeglobal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-safeglobal/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-safeglobal/20 transition-colors">
                  <stat.icon className="w-5 h-5 text-safeglobal" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-safeglobal mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold mb-1">{stat.label}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-safeglobal/30 hover:border-safeglobal/60 hover:bg-safeglobal/5 text-base px-8 h-12 gap-2 transition-all duration-300"
            onClick={() => handleScrollTo("contact")}
          >
            Request Compliance Report
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
