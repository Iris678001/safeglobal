import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/safe-global/Breadcrumb";
import { blogPosts, blogSlugs } from "@/data/blog";
import { blogImages } from "@/data/real-images";
import {
  Clock,
  Calendar,
  ArrowRight,
  TrendingUp,
  Share2,
  BookOpen,
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found — Safeglobal" };
  }

  return {
    title: `${post.title} — Safeglobal Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  // Fill with non-same-category if not enough
  if (relatedPosts.length < 2) {
    const additional = blogPosts
      .filter(
        (p) =>
          p.slug !== post.slug &&
          !relatedPosts.find((r) => r.slug === p.slug)
      )
      .slice(0, 2 - relatedPosts.length);
    relatedPosts.push(...additional);
  }

  const heroImage = blogImages[post.slug];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-safeglobal/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          {/* Hero Image */}
          <div
            className={`relative h-64 sm:h-80 lg:h-96 rounded-2xl bg-gradient-to-br ${post.image} overflow-hidden mb-8`}
          >
            {heroImage && (
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            {!heroImage && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="w-16 h-16 text-safeglobal/30 mx-auto mb-3" />
                <span className="text-sm text-safeglobal/40 font-medium tracking-wider">
                  {post.category}
                </span>
              </div>
            </div>
            )}
            <div className="absolute top-4 left-4">
              <Badge
                variant="outline"
                className={`text-xs font-medium ${categoryColors[post.category] || "bg-muted/30 text-muted-foreground border-border"}`}
              >
                {post.category}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Main Content */}
            <article>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Author & Meta */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${authorData[post.author]?.color || "from-gray-400 to-gray-500"} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {authorData[post.author]?.initials || "?"}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {post.author}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <div className="ml-auto">
                  <Button variant="ghost" size="sm" className="text-muted-foreground gap-1">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none dark:prose-invert">
                {post.content.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-muted-foreground leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 rounded-2xl border border-safeglobal/20 bg-gradient-to-r from-safeglobal/5 to-cyan-500/5">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      Ready to Transform Your Safety Program?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get a free safety assessment and discover how Safeglobal
                      can protect your workforce.
                    </p>
                  </div>
                  <Link href="/contact">
                    <Button className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/25 gap-2 flex-shrink-0">
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Related Posts */}
              <div className="rounded-2xl border border-border bg-card/50 p-6">
                <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group block"
                    >
                      {(() => {
                        const relatedImage = blogImages[related.slug];
                        return (
                      <div className="flex gap-3">
                        <div
                          className={`w-16 h-16 rounded-lg bg-gradient-to-br ${related.image} flex-shrink-0 flex items-center justify-center`}
                        >
                          {relatedImage ? (
                            <img
                              src={relatedImage.src}
                              alt={relatedImage.alt}
                              loading="lazy"
                              className="h-full w-full rounded-lg object-cover"
                            />
                          ) : (
                            <TrendingUp className="w-5 h-5 text-safeglobal/30" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium line-clamp-2 group-hover:text-safeglobal transition-colors">
                            {related.title}
                          </h4>
                          <span className="text-[10px] text-muted-foreground flex items-center gap-1 mt-1">
                            <Clock className="w-2.5 h-2.5" />
                            {related.readTime}
                          </span>
                        </div>
                      </div>
                        );
                      })()}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="rounded-2xl border border-border bg-card/50 p-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {["AI Safety", "Compliance", "Industry Trends", "Technology"].map(
                    (cat) => (
                      <Link key={cat} href="/blog">
                        <Badge
                          variant="outline"
                          className={`cursor-pointer hover:border-safeglobal/30 hover:bg-safeglobal/5 transition-all ${categoryColors[cat] || ""}`}
                        >
                          {cat}
                        </Badge>
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* Newsletter Mini */}
              <div className="rounded-2xl border border-safeglobal/20 bg-gradient-to-br from-safeglobal/5 to-cyan-500/5 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-safeglobal" />
                  <h3 className="text-lg font-semibold">Newsletter</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Get weekly safety insights delivered to your inbox.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full h-9 rounded-md border border-border bg-background/50 px-3 text-sm focus:border-safeglobal/50 focus:outline-none focus:ring-1 focus:ring-safeglobal/25"
                  />
                  <Button className="w-full bg-safeglobal hover:bg-safeglobal-dark text-white gap-2">
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
