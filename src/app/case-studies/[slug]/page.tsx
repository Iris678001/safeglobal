import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/safe-global/Breadcrumb";
import { caseStudies, caseStudySlugs } from "@/data/case-studies";
import {
  ArrowRight,
  Building2,
  BarChart3,
  Quote,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return { title: "Case Study Not Found — SafeGlobal" };
  }

  return {
    title: `${study.client} Case Study — SafeGlobal`,
    description: `How ${study.client} achieved ${study.results[0].value} ${study.results[0].metric.toLowerCase()} with SafeGlobal's AI-powered safety platform.`,
    openGraph: {
      title: `${study.client} Case Study — SafeGlobal`,
      description: `How ${study.client} transformed safety with SafeGlobal.`,
    },
  };
}

const industryColors: Record<string, string> = {
  Manufacturing: "bg-safeglobal/15 text-safeglobal border-safeglobal/20",
  "Oil & Gas": "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  Construction: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  "Life Sciences": "bg-violet-500/15 text-violet-400 border-violet-500/20",
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = caseStudies
    .filter((s) => s.slug !== study.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-safeglobal/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Case Studies", href: "/case-studies" },
              { label: study.client },
            ]}
          />

          {/* Client Header */}
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${study.image} flex items-center justify-center flex-shrink-0`}
            >
              <Building2 className="w-8 h-8 text-safeglobal/40" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge
                  variant="outline"
                  className={`text-xs font-medium ${industryColors[study.industry] || "bg-muted/30 text-muted-foreground border-border"}`}
                >
                  {study.industry}
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                {study.client}
              </h1>
              <p className="text-lg text-muted-foreground">{study.title.replace(`${study.client}: `, "")}</p>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div
            className={`relative h-48 sm:h-64 lg:h-80 rounded-2xl bg-gradient-to-br ${study.image} overflow-hidden`}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Building2 className="w-20 h-20 text-safeglobal/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12">
            {/* Main Content */}
            <div className="space-y-12">
              {/* Challenge */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <h2 className="text-2xl font-bold">The Challenge</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-safeglobal" />
                  <h2 className="text-2xl font-bold">
                    The SafeGlobal Solution
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <BarChart3 className="w-5 h-5 text-safeglobal" />
                  <h2 className="text-2xl font-bold">Results</h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {study.results.map((result) => (
                    <div
                      key={result.metric}
                      className="p-6 rounded-xl border border-safeglobal/20 bg-safeglobal/5 text-center"
                    >
                      <div className="text-3xl sm:text-4xl font-bold text-safeglobal mb-2">
                        {result.value}
                      </div>
                      <div className="text-sm font-semibold mb-1">
                        {result.metric}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {result.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="p-8 rounded-2xl border border-border bg-card/50">
                <Quote className="w-8 h-8 text-safeglobal/30 mb-4" />
                <blockquote className="text-xl font-medium leading-relaxed mb-4">
                  &ldquo;{study.testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${study.image} flex items-center justify-center`}>
                    <Building2 className="w-5 h-5 text-safeglobal/50" />
                  </div>
                  <div>
                    <div className="font-semibold">{study.testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {study.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-8 rounded-2xl border border-safeglobal/20 bg-gradient-to-r from-safeglobal/5 to-cyan-500/5">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      Want Results Like These?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get a free safety assessment and discover how SafeGlobal
                      can transform your safety outcomes.
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
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Client Info */}
              <div className="rounded-2xl border border-border bg-card/50 p-6">
                <h3 className="text-lg font-semibold mb-4">Client Profile</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Client</span>
                    <span className="font-medium">{study.client}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Industry</span>
                    <Badge
                      variant="outline"
                      className={`text-xs ${industryColors[study.industry] || "bg-muted/30 text-muted-foreground border-border"}`}
                    >
                      {study.industry}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ROI</span>
                    <span className="font-medium text-safeglobal">
                      {study.results[2]?.value || "340%+"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="rounded-2xl border border-safeglobal/20 bg-gradient-to-br from-safeglobal/5 to-cyan-500/5 p-6">
                <h3 className="text-lg font-semibold mb-4">Key Results</h3>
                <div className="space-y-4">
                  {study.results.map((result) => (
                    <div key={result.metric} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-safeglobal/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-safeglobal" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">
                          {result.value}{" "}
                          <span className="text-muted-foreground font-normal">
                            {result.metric}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Case Studies */}
              <div className="rounded-2xl border border-border bg-card/50 p-6">
                <h3 className="text-lg font-semibold mb-4">
                  More Case Studies
                </h3>
                <div className="space-y-4">
                  {relatedStudies.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/case-studies/${related.slug}`}
                      className="group block"
                    >
                      <div className="flex gap-3">
                        <div
                          className={`w-14 h-14 rounded-lg bg-gradient-to-br ${related.image} flex-shrink-0 flex items-center justify-center`}
                        >
                          <Building2 className="w-5 h-5 text-safeglobal/30" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">
                            {related.industry}
                          </p>
                          <h4 className="text-sm font-medium line-clamp-2 group-hover:text-safeglobal transition-colors">
                            {related.client}
                          </h4>
                          <span className="text-[10px] text-safeglobal font-medium">
                            {related.results[0].value}{" "}
                            {related.results[0].metric}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
