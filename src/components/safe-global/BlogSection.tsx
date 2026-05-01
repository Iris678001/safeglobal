"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User, TrendingUp } from "lucide-react";

const blogPosts = [
  {
    title: "How Predictive AI Reduced Workplace Incidents by 73% in 2024",
    excerpt:
      "A comprehensive analysis of how machine learning models are outperforming traditional safety methods across manufacturing, construction, and energy sectors.",
    category: "AI & Analytics",
    readTime: "8 min read",
    author: "Dr. Sarah Chen",
    featured: true,
  },
  {
    title: "The Complete Guide to ISO 45001 Compliance Automation",
    excerpt:
      "Everything you need to know about automating your compliance workflows and maintaining audit-readiness 365 days a year.",
    category: "Compliance",
    readTime: "6 min read",
    author: "Marcus Rodriguez",
    featured: false,
  },
  {
    title: "IoT Sensor Networks: Building the Foundation for Smart Safety",
    excerpt:
      "How edge computing and IoT sensors are creating real-time safety ecosystems that detect hazards in milliseconds.",
    category: "IoT & Hardware",
    readTime: "10 min read",
    author: "Lisa Yamamoto",
    featured: false,
  },
  {
    title: "5 Workplace Safety Trends Every EHS Leader Must Watch in 2025",
    excerpt:
      "From AI-powered behavioral analysis to digital twins, these are the trends reshaping enterprise safety strategy.",
    category: "Industry Trends",
    readTime: "5 min read",
    author: "Robert Klein",
    featured: false,
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-20 lg:py-28">
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
            INSIGHTS & RESEARCH
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Safety Intelligence{" "}
            <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert analysis, research findings, and industry trends from our AI
            safety research team.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl border border-border bg-card/50 hover:border-safeglobal/30 overflow-hidden transition-all duration-300 lg:row-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-safeglobal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-safeglobal/20 text-safeglobal border-safeglobal/30">
                  Featured
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {blogPosts[0].category}
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-safeglobal transition-colors leading-tight">
                {blogPosts[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  className="text-safeglobal hover:bg-safeglobal/5 gap-1 p-0 h-auto"
                >
                  Read More
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Other Posts */}
          {blogPosts.slice(1).map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
              className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-safeglobal/20 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-safeglobal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-safeglobal transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </span>
                  <Button
                    variant="ghost"
                    className="text-safeglobal hover:bg-safeglobal/5 gap-1 p-0 h-auto text-sm"
                  >
                    Read
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Report CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl border border-safeglobal/20 bg-gradient-to-r from-safeglobal/5 to-cyan-500/5 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-safeglobal/10 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-safeglobal" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                2025 State of AI in Workplace Safety Report
              </h3>
              <p className="text-sm text-muted-foreground">
                50+ pages of research, data, and actionable insights from 1,000+
                EHS professionals.
              </p>
            </div>
          </div>
          <Button className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/25 gap-2 flex-shrink-0">
            Download Free Report
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
