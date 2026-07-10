import type { Metadata } from "next";
import Link from "next/link";
import { industriesData, industrySlugs } from "@/data/industries";
import { industryImages } from "@/data/real-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/safe-global/Breadcrumb";
import { ArrowRight, Shield, Globe, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries — Safeglobal | Purpose-Built Safety for High-Risk Sectors",
  description:
    "Safeglobal delivers AI-powered safety solutions tailored to manufacturing, construction, oil & gas, healthcare, logistics, and mining. Deep domain expertise for every industry.",
  keywords: [
    "industrial safety",
    "manufacturing safety",
    "construction safety",
    "oil and gas safety",
    "healthcare safety",
    "warehouse safety",
    "mining safety",
    "AI safety solutions",
  ],
  openGraph: {
    title: "Industries — Safeglobal | Purpose-Built Safety for High-Risk Sectors",
    description:
      "AI-powered safety solutions tailored to your industry. 500K+ workers protected across 6 high-risk sectors worldwide.",
  },
};

const colorMap: Record<string, { bg: string; text: string; border: string; gradientBg: string }> = {
  safeglobal: {
    bg: "bg-safeglobal/10",
    text: "text-safeglobal",
    border: "border-safeglobal/20 hover:border-safeglobal/40",
    gradientBg: "from-safeglobal to-emerald-600",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20 hover:border-amber-500/40",
    gradientBg: "from-amber-500 to-amber-600",
  },
  rose: {
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    border: "border-rose-500/20 hover:border-rose-500/40",
    gradientBg: "from-rose-500 to-rose-600",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    gradientBg: "from-cyan-500 to-cyan-600",
  },
  violet: {
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    border: "border-violet-500/20 hover:border-violet-500/40",
    gradientBg: "from-violet-500 to-violet-600",
  },
};

const overviewStats = [
  { icon: Shield, label: "Workers Protected", value: "500K+", color: "text-safeglobal" },
  { icon: Globe, label: "Countries Active", value: "30+", color: "text-cyan-400" },
  { icon: Users, label: "Enterprise Clients", value: "200+", color: "text-amber-400" },
  { icon: TrendingUp, label: "Avg Risk Reduction", value: "73%", color: "text-violet-400" },
];

export default function IndustriesPage() {
  const industries = industrySlugs.map((slug) => industriesData[slug]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-safeglobal/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Industries" }]} />

          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
            >
              INDUSTRIES WE SERVE
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Purpose-Built for{" "}
              <span className="text-gradient">High-Risk</span> Industries
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Deep domain expertise combined with AI intelligence, tailored to the unique risks and regulations of each industry. Every solution is designed for the specific hazards your workers face.
            </p>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {overviewStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-safeglobal/10 flex items-center justify-center">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const colors = colorMap[industry.color] || colorMap.safeglobal;
              const Icon = industry.icon;
              const image = industryImages[industry.slug];

              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group relative block"
                >
                  <div
                    className={`relative h-full p-6 rounded-2xl border bg-card/50 ${colors.border} card-hover-premium transition-all duration-300 overflow-hidden`}
                  >
                    {image && (
                      <div className="-m-6 mb-5 relative h-44 overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      </div>
                    )}
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-safeglobal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Icon & Title */}
                    <div className="relative flex items-start gap-4 mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.gradientBg} flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className="text-xl font-bold group-hover:text-safeglobal transition-colors">
                          {industry.title}
                        </h2>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {industry.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="relative text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                      {industry.heroDescription}
                    </p>

                    {/* Key Stats */}
                    <div className="relative grid grid-cols-2 gap-3 mb-5">
                      {industry.stats.slice(0, 2).map((stat) => (
                        <div
                          key={stat.label}
                          className="p-3 rounded-lg bg-background/50 border border-border/50"
                        >
                          <div className={`text-lg font-bold ${colors.text}`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Challenges Preview */}
                    <div className="relative flex flex-wrap gap-1.5 mb-5">
                      {industry.challenges.slice(0, 3).map((challenge) => (
                        <Badge
                          key={challenge.title}
                          variant="outline"
                          className="text-[11px] px-2 py-0.5 border-border/50 text-muted-foreground"
                        >
                          {challenge.title}
                        </Badge>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="relative flex items-center gap-2 text-safeglobal font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Explore Solutions</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>

                    {/* Bottom gradient line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-safeglobal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="relative inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-border bg-card/30 max-w-xl mx-auto">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-safeglobal/40 to-transparent" />
              <h3 className="text-xl font-bold">
                Not sure which solution fits?
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Our safety experts will assess your operations and recommend the right combination of AI-powered safety tools for your industry.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/20 hover:shadow-safeglobal/30 transition-all gap-2 px-6"
                >
                  Get Free Safety Assessment
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
