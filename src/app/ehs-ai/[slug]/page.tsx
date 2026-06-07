import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { servicesData, serviceSlugs } from "@/data/services";
import { serviceImages } from "@/data/real-images";
import { colorMap } from "@/components/safe-global/navConfig";
import Breadcrumb from "@/components/safe-global/Breadcrumb";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// ─── Static Params ───────────────────────────────────────────────────────────
export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

// ─── Dynamic Metadata ────────────────────────────────────────────────────────
export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = servicesData[slug];
    if (!service) {
      return { title: "Service Not Found — SafeGlobal" };
    }

    return {
      title: `${service.title} — SafeGlobal | EHS AI Solutions`,
      description: service.heroDescription,
      keywords: [
        service.title,
        "EHS AI",
        "workplace safety",
        "AI safety solutions",
        service.slug,
      ],
      openGraph: {
        title: `${service.title} — SafeGlobal`,
        description: service.heroDescription,
      },
    };
  });
}

// ─── Page Component ──────────────────────────────────────────────────────────
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const colors = colorMap[service.color] || colorMap.safeglobal;
  const Icon = service.icon;
  const heroImage = serviceImages[service.slug];

  return (
    <div className="min-h-screen">
      {/* ─── Hero Section ──────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-safeglobal/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "EHS / AI", href: "/ehs-ai" },
              { label: service.title },
            ]}
          />

          <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center`}
              >
                <Icon className={`w-8 h-8 ${colors.text}`} />
              </div>
              {service.badge && (
                <Badge
                  variant="outline"
                  className={`text-xs px-3 py-1 ${colors.bg} ${colors.text} ${colors.border}`}
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  {service.badge}
                </Badge>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="text-gradient">{service.title}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              {service.subtitle}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {service.heroDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                asChild
                className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-xl shadow-safeglobal/25 hover:shadow-safeglobal/35 transition-all gap-2"
              >
                <Link href="/contact">
                  {service.cta.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-border hover:border-safeglobal/50 hover:bg-safeglobal/5 gap-2"
              >
                <Link href="/ehs-ai">
                  All Solutions
                </Link>
              </Button>
            </div>
          </div>
          {heroImage && (
            <div className="relative hidden lg:block h-[360px] rounded-3xl overflow-hidden border border-safeglobal/20 bg-card/50 shadow-2xl shadow-safeglobal/10">
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-background/75 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{service.title}</p>
                    <p className="text-xs text-muted-foreground">{service.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </section>

      {/* ─── Stats Row ─────────────────────────────────────────────────────── */}
      <section className="relative py-12 lg:py-16">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {service.stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-safeglobal/30 hover:bg-safeglobal/5 transition-all duration-300 text-center overflow-hidden"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300`}
                >
                  <Icon className={`w-5 h-5 ${colors.text}`} />
                </div>
                <div className={`text-3xl sm:text-4xl font-bold ${colors.text} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground/60 mt-0.5">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features Section ──────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-safeglobal/3 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
            >
              KEY FEATURES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What Makes <span className="text-gradient">{service.title}</span> Powerful
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => (
              <div
                key={feature.title}
                className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-safeglobal/30 hover:bg-safeglobal/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className={`text-sm font-bold ${colors.text}`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-2 group-hover:text-safeglobal transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Benefits Section ──────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
            >
              BUSINESS IMPACT
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Why Organizations Choose{" "}
              <span className="text-gradient">{service.title}</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-safeglobal/30 hover:bg-safeglobal/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <CheckCircle2 className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-2 group-hover:text-safeglobal transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Related Services ──────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
            >
              PAIRED SOLUTIONS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Related <span className="text-gradient">Solutions</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {service.relatedServices.map((related) => {
              const relatedColors =
                colorMap[related.color] || colorMap.safeglobal;
              const relatedSlug = related.href.split("/").pop() || "";
              const relatedService = servicesData[relatedSlug];

              return (
                <Link
                  key={related.title}
                  href={related.href}
                  className="group block"
                >
                  <Card className="h-full border-border bg-card/50 hover:border-safeglobal/30 hover:shadow-xl hover:shadow-safeglobal/5 transition-all duration-300">
                    <CardContent className="p-6">
                      {relatedService ? (
                        <>
                          <div
                            className={`w-12 h-12 rounded-xl ${relatedColors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <relatedService.icon
                              className={`w-6 h-6 ${relatedColors.text}`}
                            />
                          </div>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-safeglobal transition-colors">
                            {related.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {relatedService.subtitle}
                          </p>
                        </>
                      ) : (
                        <>
                          <div
                            className={`w-12 h-12 rounded-xl ${relatedColors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Sparkles
                              className={`w-6 h-6 ${relatedColors.text}`}
                            />
                          </div>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-safeglobal transition-colors">
                            {related.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Explore this solution
                          </p>
                        </>
                      )}
                      <div className="flex items-center gap-1 text-safeglobal text-sm font-medium mt-4">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ───────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safeglobal/30 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative p-10 sm:p-14 rounded-3xl border border-safeglobal/20 bg-gradient-to-br from-safeglobal/10 via-card/80 to-cyan-500/5 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-safeglobal/10 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                {service.cta.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                {service.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-xl shadow-safeglobal/25 hover:shadow-safeglobal/35 transition-all gap-2"
                >
                  <Link href="/contact">
                    Request Demo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-border hover:border-safeglobal/50 hover:bg-safeglobal/5 gap-2"
                >
                  <Link href="/ehs-ai">
                    Explore All Solutions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
