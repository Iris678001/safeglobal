import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Breadcrumb from "@/components/safe-global/Breadcrumb";
import { blogPosts } from "@/data/blog";
import { blogImages } from "@/data/real-images";
import { Clock, User, ArrowRight, Mail, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Safety Intelligence Blog — SafeGlobal",
  description:
    "Expert analysis, research findings, and industry trends from the SafeGlobal AI safety research team. Stay informed on workplace safety innovation.",
  openGraph: {
    title: "Safety Intelligence Blog — SafeGlobal",
    description:
      "Expert analysis, research findings, and industry trends from the SafeGlobal AI safety research team.",
  },
};

const categoryColors: Record<string, string> = {
  "AI Safety": "bg-safeglobal/15 text-safeglobal border-safeglobal/20",
  Compliance: "bg-violet-500/15 text-violet-400 border-violet-500/20",
  "Industry Trends": "bg-amber-500/15 text-amber-400 border-amber-500/20",
  Technology: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
};

const authorData: Record<string, { initials: string; color: string }> = {
  "Dr. Sarah Chen": { initials: "SC", color: "from-emerald-400 to-cyan-400" },
  "Marcus Rodriguez": { initials: "MR", color: "from-violet-400 to-purple-400" },
  "Lisa Yamamoto": { initials: "LY", color: "from-amber-400 to-orange-400" },
  "Robert Klein": { initials: "RK", color: "from-blue-400 to-cyan-400" },
};

const categories = ["All", "AI Safety", "Compliance", "Industry Trends", "Technology"] as const;

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-safeglobal/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Blog" }]} />

          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-6"
            >
              INSIGHTS & RESEARCH
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Safety Intelligence{" "}
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert analysis, research findings, and industry trends from our
              AI safety research team. Stay ahead of the curve.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={cat === "All" ? "default" : "outline"}
                className={`cursor-pointer transition-all text-sm px-4 py-1.5 ${
                  cat === "All"
                    ? "bg-safeglobal text-white hover:bg-safeglobal-dark border-0"
                    : "hover:border-safeglobal/30 hover:bg-safeglobal/5"
                }`}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-grid">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                {(() => {
                  const image = blogImages[post.slug];
                  return (
                <article className="relative h-full rounded-2xl border border-border bg-card/50 hover:border-safeglobal/30 transition-all duration-300 overflow-hidden card-hover-premium">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-safeglobal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Article image */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${post.image} overflow-hidden`}
                  >
                    {image && (
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                    {!image && (
                    <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-700 ease-out group-hover:scale-105 group-hover:translate-x-1">
                      <TrendingUp className="w-10 h-10 text-safeglobal/30" />
                    </div>
                    )}
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="outline"
                        className={`text-xs font-medium ${categoryColors[post.category] || "bg-muted/30 text-muted-foreground border-border"}`}
                      >
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 flex flex-col">
                    <h2 className="text-lg font-semibold mb-2 group-hover:text-safeglobal transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-7 h-7 rounded-full bg-gradient-to-br ${authorData[post.author]?.color || "from-gray-400 to-gray-500"} flex items-center justify-center text-white text-[9px] font-bold`}
                        >
                          {authorData[post.author]?.initials || "?"}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-foreground">
                            {post.author}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
                  );
                })()}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative py-16 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl border border-safeglobal/20 bg-gradient-to-r from-safeglobal/5 to-cyan-500/5 p-8 sm:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-30" />
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-start gap-4 max-w-xl">
                <div className="w-12 h-12 rounded-xl bg-safeglobal/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-safeglobal" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Stay Ahead in Safety
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Get weekly insights on AI safety innovation, compliance
                    updates, and industry best practices delivered to your inbox.
                    Join 15,000+ EHS professionals.
                  </p>
                </div>
              </div>
              <div className="flex w-full lg:w-auto gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/50 border-border focus:border-safeglobal/50 max-w-xs"
                />
                <Button className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/25 gap-2 flex-shrink-0">
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
