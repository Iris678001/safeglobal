import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/safe-global/Breadcrumb";
import { caseStudies } from "@/data/case-studies";
import { caseStudyImages } from "@/data/real-images";
import {
  ArrowRight,
  TrendingUp,
  Building2,
  BarChart3,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — Safeglobal",
  description:
    "See how leading enterprises have transformed their safety outcomes with Safeglobal's AI-powered platform. Real impact, measurable ROI.",
  openGraph: {
    title: "Case Studies — Safeglobal",
    description:
      "Real impact, measurable ROI. See how enterprises transform safety with Safeglobal.",
  },
};

const industryColors: Record<string, string> = {
  Manufacturing: "bg-safeglobal/15 text-safeglobal border-safeglobal/20",
  "Oil & Gas": "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  Construction: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  "Life Sciences": "bg-violet-500/15 text-violet-400 border-violet-500/20",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-safeglobal/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Case Studies" }]} />

          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-6"
            >
              PROVEN RESULTS
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Real Impact.{" "}
              <span className="text-gradient">Measurable ROI.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how leading enterprises have transformed their safety outcomes
              with Safeglobal&apos;s AI-powered platform.
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { label: "Avg. Incident Reduction", value: "79%" },
              { label: "Avg. Compliance Rate", value: "98%" },
              { label: "Total Annual Savings", value: "$33M+" },
              { label: "Average ROI", value: "340%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl border border-border bg-card/50"
              >
                <div className="text-2xl sm:text-3xl font-bold text-safeglobal">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 stagger-grid">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group"
              >
                {(() => {
                  const image = caseStudyImages[study.slug];
                  return (
                <article className="relative h-full rounded-2xl border border-border bg-card/50 hover:border-safeglobal/30 transition-all duration-300 overflow-hidden card-hover-premium">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-safeglobal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Case study image */}
                  <div
                    className={`relative h-40 sm:h-48 bg-gradient-to-br ${study.image} overflow-hidden`}
                  >
                    {image && (
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/10 to-transparent" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                    {!image && (
                    <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-700 ease-out group-hover:scale-105">
                      <Building2 className="w-10 h-10 text-safeglobal/25" />
                    </div>
                    )}
                    {/* Industry Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="outline"
                        className={`text-xs font-medium ${industryColors[study.industry] || "bg-muted/30 text-muted-foreground border-border"}`}
                      >
                        {study.industry}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                      {study.client}
                    </p>
                    <h2 className="text-lg font-semibold mb-3 group-hover:text-safeglobal transition-colors leading-snug">
                      {study.title}
                    </h2>

                    {/* Key Result */}
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-safeglobal/5 border border-safeglobal/10 mb-4">
                      <BarChart3 className="w-5 h-5 text-safeglobal flex-shrink-0" />
                      <div>
                        <span className="text-lg font-bold text-safeglobal">
                          {study.results[0].value}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">
                          {study.results[0].metric}
                        </span>
                      </div>
                    </div>

                    {/* Mini Testimonial */}
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Quote className="w-4 h-4 text-safeglobal/40 flex-shrink-0 mt-0.5" />
                      <p className="line-clamp-2 italic">
                        {study.testimonial.quote}
                      </p>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground">
                        {study.testimonial.author},{" "}
                        {study.testimonial.role.split(", ")[0]}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-safeglobal font-medium group-hover:gap-2 transition-all">
                        Read Case Study
                        <ArrowRight className="w-3 h-3" />
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

      {/* CTA */}
      <section className="relative py-16 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl border border-safeglobal/20 bg-gradient-to-r from-safeglobal/5 to-cyan-500/5 p-8 sm:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-30" />
            <div className="relative text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Join the growing list of enterprises that have transformed their
                safety outcomes with Safeglobal. Get a free safety assessment
                today.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Link href="/contact">
                  <Button className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/25 gap-2">
                    Get Free Safety Audit
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline" className="border-safeglobal/30 hover:border-safeglobal/60 hover:bg-safeglobal/5 gap-2">
                    Read Our Blog
                    <TrendingUp className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
