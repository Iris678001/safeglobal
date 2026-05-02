"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Award,
  Star,
  Rocket,
  Lightbulb,
  Crown,
  Shield,
} from "lucide-react";

const awards = [
  {
    icon: Trophy,
    name: "Gartner Magic Quadrant",
    subtitle: "Leader in EH&S Technology 2024",
    year: "2024",
    accentColor: "gold",
    iconBg: "bg-gradient-to-br from-amber-500/20 to-yellow-600/20",
    iconColor: "text-amber-400",
    borderHover: "hover:border-amber-500/40",
    glowColor: "rgba(245,158,11,0.15)",
    yearBg: "bg-amber-500/10",
    yearColor: "text-amber-400",
  },
  {
    icon: Award,
    name: "Forbes Tech 50",
    subtitle: "Most Innovative Safety Tech Company",
    year: "2024",
    accentColor: "amber",
    iconBg: "bg-gradient-to-br from-orange-500/20 to-amber-600/20",
    iconColor: "text-orange-400",
    borderHover: "hover:border-orange-500/40",
    glowColor: "rgba(249,115,22,0.15)",
    yearBg: "bg-orange-500/10",
    yearColor: "text-orange-400",
  },
  {
    icon: Star,
    name: "ISO Excellence Award",
    subtitle: "Best Workplace Safety Innovation 2023",
    year: "2023",
    accentColor: "safeglobal",
    iconBg: "bg-gradient-to-br from-safeglobal/20 to-emerald-600/20",
    iconColor: "text-safeglobal",
    borderHover: "hover:border-safeglobal/40",
    glowColor: "rgba(16,185,129,0.15)",
    yearBg: "bg-safeglobal/10",
    yearColor: "text-safeglobal",
  },
  {
    icon: Rocket,
    name: "Deloitte Fast 500",
    subtitle: "Fastest Growing Safety Tech Company",
    year: "2024",
    accentColor: "cyan",
    iconBg: "bg-gradient-to-br from-cyan-500/20 to-blue-600/20",
    iconColor: "text-cyan-400",
    borderHover: "hover:border-cyan-500/40",
    glowColor: "rgba(6,182,212,0.15)",
    yearBg: "bg-cyan-500/10",
    yearColor: "text-cyan-400",
  },
  {
    icon: Lightbulb,
    name: "Safety Innovation Award",
    subtitle: "NSC Congress & Expo 2024",
    year: "2024",
    accentColor: "violet",
    iconBg: "bg-gradient-to-br from-violet-500/20 to-purple-600/20",
    iconColor: "text-violet-400",
    borderHover: "hover:border-violet-500/40",
    glowColor: "rgba(139,92,246,0.15)",
    yearBg: "bg-violet-500/10",
    yearColor: "text-violet-400",
  },
  {
    icon: Crown,
    name: "Best SaaS Platform",
    subtitle: "Safety Technology Awards 2024",
    year: "2024",
    accentColor: "rose",
    iconBg: "bg-gradient-to-br from-rose-500/20 to-pink-600/20",
    iconColor: "text-rose-400",
    borderHover: "hover:border-rose-500/40",
    glowColor: "rgba(244,63,94,0.15)",
    yearBg: "bg-rose-500/10",
    yearColor: "text-rose-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

function AwardCard({
  award,
}: {
  award: (typeof awards)[0];
}) {
  return (
    <motion.div variants={cardVariants} className="group relative">
      <div
        className={`relative h-full p-6 rounded-2xl border border-border glass-card backdrop-blur-md transition-all duration-500 ${award.borderHover} hover:-translate-y-1 overflow-hidden`}
      >
        {/* Animated glow on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 0 1px ${award.glowColor}, 0 0 40px ${award.glowColor}`,
          }}
        />

        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-transparent group-hover:from-white/[0.02] group-hover:to-transparent transition-all duration-500 pointer-events-none" />

        {/* Shimmer line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/10 transition-all duration-700" />

        <div className="relative z-10">
          {/* Icon in large gradient circle */}
          <div className="flex items-start justify-between mb-5">
            <div
              className={`w-16 h-16 rounded-full ${award.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/5`}
            >
              <award.icon className={`w-8 h-8 ${award.iconColor}`} />
            </div>
            <Badge
              variant="outline"
              className={`${award.yearBg} ${award.yearColor} border-transparent text-[10px] font-semibold tracking-wide px-2.5 py-0.5`}
            >
              {award.year}
            </Badge>
          </div>

          {/* Award Name */}
          <h4 className="text-lg font-bold mb-1.5 group-hover:text-foreground transition-colors duration-300">
            {award.name}
          </h4>

          {/* Subtitle */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {award.subtitle}
          </p>

          {/* Decorative corner accent */}
          <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div
              className="absolute bottom-2 right-2 w-10 h-10 rounded-tl-lg"
              style={{
                background: `linear-gradient(135deg, transparent, ${award.glowColor})`,
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AwardsSection() {
  return (
    <section
      id="awards"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-dot-pattern" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safeglobal/30 to-transparent" />

      {/* Decorative rotating shield in background */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 pointer-events-none opacity-[0.03]">
        <div className="animate-rotate-slow">
          <Shield className="w-80 h-80 text-safeglobal" />
        </div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-safeglobal/5 rounded-full blur-[100px] animate-pulse-glow" />

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
            <Trophy className="w-3 h-3 mr-1.5" />
            RECOGNITION
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Industry{" "}
            <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Awarded and recognized by leading safety and technology organizations
            worldwide.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {awards.map((award) => (
            <AwardCard key={award.name} award={award} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
