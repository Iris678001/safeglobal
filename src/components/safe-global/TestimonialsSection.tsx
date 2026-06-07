"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Play } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Operations",
    company: "GlobalMfg Corp",
    companyInitials: "GM",
    companyColor: "from-safeglobal/30 to-teal-600/20",
    content:
      "SafeGlobal didn't just reduce our incidents — it fundamentally changed how we think about safety. The AI predictions have been remarkably accurate, giving us time to act before hazards become incidents. We've seen a 78% reduction in workplace incidents and our safety culture has completely transformed.",
    rating: 5,
    avatar: "SC",
    isVideo: true,
    duration: "Using SafeGlobal for 3+ years",
  },
  {
    name: "Marcus Rodriguez",
    role: "HSE Director",
    company: "PetroChem Industries",
    companyInitials: "PC",
    companyColor: "from-teal-500/30 to-teal-400/20",
    content:
      "The ROI was undeniable from month one. But the real value? Knowing our people go home safe every single day. SafeGlobal's IoT integration with our existing systems was seamless.",
    rating: 5,
    avatar: "MR",
    isVideo: true,
    duration: "Using SafeGlobal for 2+ years",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Chief Safety Officer",
    company: "BuildRight Construction",
    companyInitials: "BR",
    companyColor: "from-violet-500/30 to-violet-400/20",
    content:
      "We went from industry average to best-in-class safety in under 18 months. The AI catches what humans miss — it's like having a tireless safety inspector on every site, 24/7.",
    rating: 5,
    avatar: "AP",
    isVideo: false,
    duration: "Using SafeGlobal for 2+ years",
  },
  {
    name: "James Mitchell",
    role: "Director of EHS",
    company: "Apex Logistics",
    companyInitials: "AL",
    companyColor: "from-amber-500/30 to-amber-400/20",
    content:
      "The compliance automation alone saved us 200+ hours per quarter. But the predictive analytics? That's what makes SafeGlobal a game-changer. We prevent incidents now, not just report them.",
    rating: 5,
    avatar: "JM",
    isVideo: false,
    duration: "Using SafeGlobal for 1.5+ years",
  },
  {
    name: "Lisa Yamamoto",
    role: "Plant Manager",
    company: "TechForge Manufacturing",
    companyInitials: "TF",
    companyColor: "from-rose-500/30 to-rose-400/20",
    content:
      "Implementation was smooth, the team is incredibly responsive, and the platform just works. Our safety score went from 67 to 96 in the first year. The data speaks for itself.",
    rating: 5,
    avatar: "LY",
    isVideo: false,
    duration: "Using SafeGlobal for 2+ years",
  },
  {
    name: "Robert Klein",
    role: "COO",
    company: "SafeWork Healthcare",
    companyInitials: "SW",
    companyColor: "from-safeglobal/30 to-teal-400/20",
    content:
      "In healthcare, safety isn't just about compliance — it's about patient and staff wellbeing. SafeGlobal's behavioral analysis has helped us reduce workplace violence by 62%.",
    rating: 5,
    avatar: "RK",
    isVideo: false,
    duration: "Using SafeGlobal for 1+ year",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 lg:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Badge
            variant="outline"
            className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
          >
            CLIENT STORIES
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Trusted by Safety Leaders
            <br />
            <span className="text-gradient">Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear directly from the executives and safety professionals who
            transformed their organizations with SafeGlobal.
          </p>
        </motion.div>

        {/* Social Proof Count */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-safeglobal text-safeglobal"
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">
            4.9/5
          </span>
          <span className="text-sm text-muted-foreground">
            from 200+ enterprise reviews
          </span>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-safeglobal/30 hover:ring-1 hover:ring-safeglobal/20 hover:shadow-xl hover:shadow-safeglobal/5 transition-all duration-300 ${
                idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Video Testimonial Badge */}
              {testimonial.isVideo && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-safeglobal/10 border border-safeglobal/20 text-safeglobal text-[10px] font-semibold tracking-wide">
                    <Play className="w-3 h-3 fill-safeglobal" />
                    Video Testimonial
                  </span>
                </div>
              )}

              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-safeglobal/15 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-safeglobal text-safeglobal"
                  />
                ))}
              </div>

              {/* Content */}
              <p
                className={`text-muted-foreground leading-relaxed mb-6 ${
                  idx === 0 ? "text-base" : "text-sm"
                }`}
              >
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 rounded-b-2xl bg-gradient-to-t from-card/80 to-transparent pointer-events-none" />

              {/* Author */}
              <div className="relative z-10 flex items-center gap-3">
                {/* Company logo placeholder */}
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.companyColor} flex items-center justify-center border border-safeglobal/20 flex-shrink-0`}
                >
                  <span className="text-[9px] font-bold text-safeglobal tracking-tight">
                    {testimonial.companyInitials}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                  <div className="text-[10px] text-muted-foreground/50 mt-0.5">
                    {testimonial.duration}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
