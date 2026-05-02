"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Twitter,
  Globe,
  Shield,
  Cpu,
  Award,
  HeartPulse,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Elena Vasquez",
    title: "CEO & Co-Founder",
    bio: "Former VP of Safety at Honeywell, 20+ years in industrial safety. Ph.D. in Risk Engineering from MIT.",
    initials: "EV",
    icon: Shield,
    isCoFounder: true,
    gradient: "from-safeglobal/40 to-emerald-700/40",
    ringColor: "group-hover:ring-safeglobal/50",
  },
  {
    name: "Marcus Chen",
    title: "CTO & Co-Founder",
    bio: "Ex-Google AI researcher. Built safety ML systems serving 100M+ users. Stanford CS Ph.D.",
    initials: "MC",
    icon: Cpu,
    isCoFounder: true,
    gradient: "from-cyan-500/40 to-safeglobal/40",
    ringColor: "group-hover:ring-cyan-500/50",
  },
  {
    name: "Sarah Okonkwo",
    title: "VP of Product",
    bio: "Previously led product at Salesforce Safety Cloud. Expert in enterprise UX for high-stakes environments.",
    initials: "SO",
    icon: TrendingUp,
    isCoFounder: false,
    gradient: "from-amber-500/40 to-orange-500/40",
    ringColor: "group-hover:ring-amber-500/50",
  },
  {
    name: "James Park",
    title: "VP of Engineering",
    bio: "Former principal engineer at Tesla Autopilot. Specialist in real-time ML inference at scale.",
    initials: "JP",
    icon: Globe,
    isCoFounder: false,
    gradient: "from-violet-500/40 to-purple-500/40",
    ringColor: "group-hover:ring-violet-500/50",
  },
  {
    name: "Dr. Priya Sharma",
    title: "Chief Safety Scientist",
    bio: "Published 40+ peer-reviewed papers on occupational safety AI. Former WHO safety advisor.",
    initials: "PS",
    icon: HeartPulse,
    isCoFounder: false,
    gradient: "from-rose-500/40 to-pink-500/40",
    ringColor: "group-hover:ring-rose-500/50",
  },
  {
    name: "David Mitchell",
    title: "VP of Compliance",
    bio: "Ex-OSHA regulator with 15 years of compliance expertise across 30+ jurisdictions.",
    initials: "DM",
    icon: Award,
    isCoFounder: false,
    gradient: "from-sky-500/40 to-blue-500/40",
    ringColor: "group-hover:ring-sky-500/50",
  },
];

export default function TeamSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="team" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {/* Background glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-safeglobal/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/3 rounded-full blur-[140px]" />

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
            LEADERSHIP
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            The People Behind
            <br />
            <span className="text-gradient">SafeGlobal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A world-class team of safety scientists, AI engineers, and industry
            veterans united by one mission — making every workplace safe.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-safeglobal/30 hover:shadow-xl hover:shadow-safeglobal/5 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-safeglobal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Top row: Avatar + Info */}
              <div className="relative flex items-start gap-4 mb-4">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center ring-2 ring-transparent ${member.ringColor} transition-all duration-300`}
                  >
                    <span className="text-sm font-bold text-foreground/90">
                      {member.initials}
                    </span>
                  </div>
                  {/* Status indicator dot */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-safeglobal border-2 border-card flex items-center justify-center">
                    <member.icon className="w-2.5 h-2.5 text-safeglobal-foreground" />
                  </div>
                </div>

                {/* Name & Title */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-semibold group-hover:text-safeglobal transition-colors truncate">
                      {member.name}
                    </h3>
                    {member.isCoFounder && (
                      <Badge className="bg-safeglobal/15 text-safeglobal border-safeglobal/30 text-[10px] px-2 py-0 h-5 font-medium">
                        Co-Founder
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-safeglobal/80 font-medium mt-0.5">
                    {member.title}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="relative text-sm text-muted-foreground leading-relaxed mb-5">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="relative flex items-center gap-3">
                <a
                  href="#"
                  aria-label={`${member.name} LinkedIn profile`}
                  className="w-8 h-8 rounded-lg bg-secondary/50 hover:bg-safeglobal/10 flex items-center justify-center text-muted-foreground hover:text-safeglobal transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label={`${member.name} Twitter profile`}
                  className="w-8 h-8 rounded-lg bg-secondary/50 hover:bg-safeglobal/10 flex items-center justify-center text-muted-foreground hover:text-safeglobal transition-all duration-200"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl border border-border bg-card/30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-safeglobal/40 to-transparent" />
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Want to shape the future of safety?
              </h3>
              <p className="text-sm text-muted-foreground">
                We&apos;re always looking for exceptional people to join our mission.
              </p>
            </div>
            <Button
              onClick={() => handleScrollTo("contact")}
              className="bg-safeglobal hover:bg-safeglobal-dark text-safeglobal-foreground font-semibold gap-2 px-6 flex-shrink-0"
            >
              Join Our Mission
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
