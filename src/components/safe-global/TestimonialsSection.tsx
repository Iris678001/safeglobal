"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Operations",
    company: "GlobalMfg Corp",
    content:
      "SafeGlobal didn't just reduce our incidents — it fundamentally changed how we think about safety. The AI predictions have been remarkably accurate, giving us time to act before hazards become incidents.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "HSE Director",
    company: "PetroChem Industries",
    content:
      "The ROI was undeniable from month one. But the real value? Knowing our people go home safe every single day. SafeGlobal's IoT integration with our existing systems was seamless.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Chief Safety Officer",
    company: "BuildRight Construction",
    content:
      "We went from industry average to best-in-class safety in under 18 months. The AI catches what humans miss — it's like having a tireless safety inspector on every site, 24/7.",
    rating: 5,
    avatar: "AP",
  },
  {
    name: "James Mitchell",
    role: "Director of EHS",
    company: "Apex Logistics",
    content:
      "The compliance automation alone saved us 200+ hours per quarter. But the predictive analytics? That's what makes SafeGlobal a game-changer. We prevent incidents now, not just report them.",
    rating: 5,
    avatar: "JM",
  },
  {
    name: "Lisa Yamamoto",
    role: "Plant Manager",
    company: "TechForge Manufacturing",
    content:
      "Implementation was smooth, the team is incredibly responsive, and the platform just works. Our safety score went from 67 to 96 in the first year. The data speaks for itself.",
    rating: 5,
    avatar: "LY",
  },
  {
    name: "Robert Klein",
    role: "COO",
    company: "SafeWork Healthcare",
    content:
      "In healthcare, safety isn't just about compliance — it's about patient and staff wellbeing. SafeGlobal's behavioral analysis has helped us reduce workplace violence by 62%.",
    rating: 5,
    avatar: "RK",
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
          className="text-center mb-16"
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-safeglobal/30 hover:shadow-xl hover:shadow-safeglobal/5 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-safeglobal/20 mb-4" />

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
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-safeglobal/20 to-cyan-500/20 flex items-center justify-center border border-safeglobal/20">
                  <span className="text-xs font-bold text-safeglobal">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
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
