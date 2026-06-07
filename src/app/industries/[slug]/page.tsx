import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industriesData, industrySlugs } from "@/data/industries";
import { industryImages } from "@/data/real-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/safe-global/Breadcrumb";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Shield,
  Building2,
  ChevronRight,
} from "lucide-react";

// ─── Static Params ──────────────────────────────────────────────────────────

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

// ─── Metadata ───────────────────────────────────────────────────────────────

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  // We need to handle async params in Next.js 16
  return params.then(({ slug }) => {
    const industry = industriesData[slug];
    if (!industry) {
      return { title: "Industry Not Found — SafeGlobal" };
    }
    return {
      title: `${industry.title} Safety Solutions — SafeGlobal | AI-Powered ${industry.title} Safety`,
      description: industry.heroDescription,
      keywords: [
        `${industry.title.toLowerCase()} safety`,
        `${industry.title.toLowerCase()} AI safety`,
        `${industry.title.toLowerCase()} risk management`,
        "industrial safety",
        "SafeGlobal",
      ],
      openGraph: {
        title: `${industry.title} Safety Solutions — SafeGlobal`,
        description: industry.heroDescription,
      },
    };
  });
}

// ─── Color Map ──────────────────────────────────────────────────────────────

const colorMap: Record<string, { bg: string; text: string; border: string; gradientBg: string; accentBg: string }> = {
  safeglobal: {
    bg: "bg-safeglobal/10",
    text: "text-safeglobal",
    border: "border-safeglobal/20",
    gradientBg: "from-safeglobal to-emerald-600",
    accentBg: "bg-safeglobal/5",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
    gradientBg: "from-amber-500 to-amber-600",
    accentBg: "bg-amber-500/5",
  },
  rose: {
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    border: "border-rose-500/20",
    gradientBg: "from-rose-500 to-rose-600",
    accentBg: "bg-rose-500/5",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/20",
    gradientBg: "from-cyan-500 to-cyan-600",
    accentBg: "bg-cyan-500/5",
  },
  violet: {
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    border: "border-violet-500/20",
    gradientBg: "from-violet-500 to-violet-600",
    accentBg: "bg-violet-500/5",
  },
};

// ─── Page Component ─────────────────────────────────────────────────────────

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  const colors = colorMap[industry.color] || colorMap.safeglobal;
  const Icon = industry.icon;
  const heroImage = industryImages[industry.slug];

  // Get related industries (all except current)
  const relatedIndustries = industrySlugs
    .filter((s) => s !== slug)
    .slice(0, 3)
    .map((s) => industriesData[s]);

  return (
    <div className="min-h-screen">
      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-safeglobal/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Industries", href: "/industries" },
              { label: industry.title },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <Badge
                variant="outline"
                className={`${colors.border} ${colors.text} ${colors.bg} px-4 py-1.5 text-xs font-medium tracking-wide mb-4`}
              >
                {industry.title.toUpperCase()} SAFETY
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                {industry.title}{" "}
                <span className="text-gradient">Safety Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {industry.heroDescription}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/20 hover:shadow-safeglobal/30 transition-all gap-2 px-6"
                  >
                    {industry.cta.title}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/industries">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border hover:border-safeglobal/30 hover:bg-safeglobal/5 gap-2"
                  >
                    View All Industries
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Icon + Key Stat */}
            <div className="space-y-6">
              {heroImage ? (
                <div className="relative h-80 rounded-3xl overflow-hidden border border-border bg-card/50 shadow-2xl shadow-black/10">
                  <img
                    src={heroImage.src}
                    alt={heroImage.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-background/75 p-4 backdrop-blur-md">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradientBg} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{industry.title}</p>
                      <p className="text-xs text-muted-foreground">{industry.subtitle}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${colors.gradientBg} flex items-center justify-center shadow-xl`}
                >
                  <Icon className="w-12 h-12 text-white" />
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                {industry.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl border border-border bg-card/50"
                  >
                    <div className={`text-2xl font-bold ${colors.text}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground/70 mt-0.5">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Challenges Section ────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="border-red-500/30 text-red-400 bg-red-500/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
            >
              KEY CHALLENGES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Industry-Specific{" "}
              <span className="text-gradient">Risks & Challenges</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the unique hazards in {industry.title.toLowerCase()} is the first step toward eliminating them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {industry.challenges.map((challenge, idx) => (
              <div
                key={challenge.title}
                className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-red-500/20 hover:bg-red-500/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg group-hover:text-red-400 transition-colors">
                        {challenge.title}
                      </h3>
                      <Badge variant="outline" className="text-[10px] bg-red-500/10 text-red-400 border-red-500/20">
                        HIGH PRIORITY
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Solutions Section ─────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 section-divider">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
            >
              OUR SOLUTIONS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              AI-Powered{" "}
              <span className="text-gradient">Safety Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Purpose-built technology that addresses each {industry.title.toLowerCase()} challenge with intelligent, automated safety systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {industry.solutions.map((solution, idx) => (
              <div
                key={solution.title}
                className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-safeglobal/20 hover:bg-safeglobal/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-safeglobal/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-safeglobal" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg group-hover:text-safeglobal transition-colors">
                        {solution.title}
                      </h3>
                      <Badge variant="outline" className="text-[10px] bg-safeglobal/10 text-safeglobal border-safeglobal/20">
                        AI-POWERED
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Challenge → Solution Mapping */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-center mb-8">
              Challenge → Solution <span className="text-gradient">Mapping</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {industry.challenges.map((challenge, idx) => (
                <div
                  key={challenge.title}
                  className="group p-4 rounded-xl border border-border bg-card/30 hover:bg-card/60 hover:border-safeglobal/15 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-3 h-3 text-red-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-red-400 mb-1">
                        {challenge.title}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ArrowRight className="w-3 h-3 text-safeglobal" />
                        <span className="text-safeglobal font-medium">
                          {industry.solutions[idx]?.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Section ─────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className={`${colors.border} ${colors.text} ${colors.bg} px-4 py-1.5 text-xs font-medium tracking-wide mb-4`}
            >
              PROVEN RESULTS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Impact That <span className="text-gradient">Speaks for Itself</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`group relative p-6 rounded-2xl border border-border bg-card/50 hover:${colors.border} transition-all duration-300 text-center`}
              >
                <div className={`text-4xl font-bold ${colors.text} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Case Study Section ────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-8 lg:p-12 rounded-2xl border border-safeglobal/20 bg-gradient-to-br from-safeglobal/5 to-transparent overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-safeglobal/5 rounded-full blur-[100px]" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-safeglobal/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-safeglobal" />
                </div>
                <Badge className="bg-safeglobal/20 text-safeglobal border-safeglobal/30">
                  Case Study
                </Badge>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                {industry.caseStudy.title}
              </h2>
              <p className="text-safeglobal/80 font-medium mb-4">
                {industry.caseStudy.company}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {industry.caseStudy.result}
              </p>

              <div className="mt-8">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/20 hover:shadow-safeglobal/30 transition-all gap-2 px-6"
                  >
                    Get Similar Results
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ────────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 section-divider">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-safeglobal to-emerald-600 flex items-center justify-center shadow-xl mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {industry.cta.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {industry.cta.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/20 hover:shadow-safeglobal/30 transition-all gap-2 px-8 h-13"
                >
                  Request Free Assessment
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/industries">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:border-safeglobal/30 hover:bg-safeglobal/5 gap-2 h-13"
                >
                  Explore Other Industries
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Related Industries ─────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Explore Other <span className="text-gradient">Industries</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedIndustries.map((related) => {
              const relatedColors = colorMap[related.color] || colorMap.safeglobal;
              const RelatedIcon = related.icon;
              const relatedImage = industryImages[related.slug];

              return (
                <Link
                  key={related.slug}
                  href={`/industries/${related.slug}`}
                  className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-safeglobal/20 card-hover-premium transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${relatedColors.gradientBg} flex items-center justify-center overflow-hidden`}
                    >
                      {relatedImage ? (
                        <img
                          src={relatedImage.src}
                          alt={relatedImage.alt}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <RelatedIcon className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <h3 className="font-semibold group-hover:text-safeglobal transition-colors">
                      {related.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {related.subtitle}
                  </p>
                  <div className="flex items-center gap-1.5 text-safeglobal text-sm font-medium">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
