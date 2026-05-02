"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User, TrendingUp, Flame, Tag } from "lucide-react";

// Author data with avatar colors
const authorData: Record<string, { initials: string; color: string }> = {
  "Dr. Sarah Chen": { initials: "SC", color: "from-emerald-400 to-cyan-400" },
  "Marcus Rodriguez": { initials: "MR", color: "from-violet-400 to-purple-400" },
  "Lisa Yamamoto": { initials: "LY", color: "from-amber-400 to-orange-400" },
  "Robert Klein": { initials: "RK", color: "from-blue-400 to-cyan-400" },
};

const blogPosts = [
  {
    title: "How Predictive AI Reduced Workplace Incidents by 73% in 2024",
    excerpt:
      "A comprehensive analysis of how machine learning models are outperforming traditional safety methods across manufacturing, construction, and energy sectors.",
    category: "AI & Analytics",
    tags: ["AI Safety", "Predictive Analytics", "ROI"],
    readTime: "8 min read",
    author: "Dr. Sarah Chen",
    featured: true,
    trending: true,
  },
  {
    title: "The Complete Guide to ISO 45001 Compliance Automation",
    excerpt:
      "Everything you need to know about automating your compliance workflows and maintaining audit-readiness 365 days a year.",
    category: "Compliance",
    tags: ["Compliance", "ISO 45001", "Automation"],
    readTime: "6 min read",
    author: "Marcus Rodriguez",
    featured: false,
    trending: false,
  },
  {
    title: "IoT Sensor Networks: Building the Foundation for Smart Safety",
    excerpt:
      "How edge computing and IoT sensors are creating real-time safety ecosystems that detect hazards in milliseconds.",
    category: "IoT & Hardware",
    tags: ["IoT", "Edge Computing", "Industry"],
    readTime: "10 min read",
    author: "Lisa Yamamoto",
    featured: false,
    trending: false,
  },
  {
    title: "5 Workplace Safety Trends Every EHS Leader Must Watch in 2025",
    excerpt:
      "From AI-powered behavioral analysis to digital twins, these are the trends reshaping enterprise safety strategy.",
    category: "Industry Trends",
    tags: ["Industry", "Trends", "EHS"],
    readTime: "5 min read",
    author: "Robert Klein",
    featured: false,
    trending: true,
  },
];

// Tag color mapping
const tagColors: Record<string, string> = {
  "AI Safety": "bg-safeglobal/15 text-safeglobal border-safeglobal/20",
  "Predictive Analytics": "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  "ROI": "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  "Compliance": "bg-violet-500/15 text-violet-400 border-violet-500/20",
  "ISO 45001": "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "Automation": "bg-amber-500/15 text-amber-400 border-amber-500/20",
  "IoT": "bg-teal-500/15 text-teal-400 border-teal-500/20",
  "Edge Computing": "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  "Industry": "bg-orange-500/15 text-orange-400 border-orange-500/20",
  "Trends": "bg-rose-500/15 text-rose-400 border-rose-500/20",
  "EHS": "bg-safeglobal/15 text-safeglobal border-safeglobal/20",
};

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
          {/* Featured Post - with gradient border animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="gradient-border-always group relative rounded-2xl overflow-hidden transition-all duration-300 lg:row-span-2"
          >
            <div className="relative rounded-2xl border border-border bg-card/50 hover:border-safeglobal/30 overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-safeglobal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Image placeholder with hover shift animation */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-safeglobal/20 via-cyan-500/10 to-safeglobal/5 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center transform transition-transform duration-700 ease-out group-hover:scale-105 group-hover:translate-x-1">
                    <TrendingUp className="w-12 h-12 text-safeglobal/40 mx-auto mb-2" />
                    <span className="text-xs text-safeglobal/50 font-medium tracking-wider">FEATURED ARTICLE</span>
                  </div>
                </div>
              </div>

              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <Badge className="bg-safeglobal/20 text-safeglobal border-safeglobal/30">
                    Featured
                  </Badge>
                  {blogPosts[0].trending && (
                    <Badge className="bg-orange-500/15 text-orange-400 border-orange-500/20 gap-1">
                      <Flame className="w-3 h-3" />
                      Trending
                    </Badge>
                  )}
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

                {/* Category Tags */}
                <div className="flex items-center gap-2 mt-4 flex-wrap">
                  <Tag className="w-3 h-3 text-muted-foreground/40" />
                  {blogPosts[0].tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={`text-[10px] px-2 py-0.5 border font-medium ${tagColors[tag] || "bg-muted/30 text-muted-foreground border-border"}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    {/* Author Avatar */}
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${authorData[blogPosts[0].author]?.color || "from-gray-400 to-gray-500"} flex items-center justify-center text-white text-[10px] font-bold`}>
                      {authorData[blogPosts[0].author]?.initials || "?"}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {blogPosts[0].author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {blogPosts[0].readTime}
                      </span>
                    </div>
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
              className="group relative rounded-2xl border border-border bg-card/50 hover:border-safeglobal/20 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-safeglobal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Image placeholder with hover shift animation */}
              <div className="relative h-32 bg-gradient-to-br from-safeglobal/10 via-background to-cyan-500/5 overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-700 ease-out group-hover:scale-105 group-hover:translate-x-1">
                  <TrendingUp className="w-8 h-8 text-safeglobal/20" />
                </div>
              </div>

              <div className="relative p-6">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  {post.trending && (
                    <Badge className="bg-orange-500/15 text-orange-400 border-orange-500/20 gap-1 text-[10px]">
                      <Flame className="w-2.5 h-2.5" />
                      Trending
                    </Badge>
                  )}
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

                {/* Category Tags */}
                <div className="flex items-center gap-1.5 mt-3 flex-wrap">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={`text-[9px] px-1.5 py-0 border font-medium ${tagColors[tag] || "bg-muted/30 text-muted-foreground border-border"}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    {/* Author Avatar */}
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${authorData[post.author]?.color || "from-gray-400 to-gray-500"} flex items-center justify-center text-white text-[8px] font-bold`}>
                      {authorData[post.author]?.initials || "?"}
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">
                      {post.author}
                    </span>
                  </div>
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
