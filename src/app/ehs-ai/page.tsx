import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { servicesData, serviceSlugs } from "@/data/services";
import { serviceImages } from "@/data/real-images";
import { colorMap } from "@/components/safe-global/navConfig";
import Breadcrumb from "@/components/safe-global/Breadcrumb";
import { ArrowRight, ChevronRight, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "EHS / AI Solutions — SafeGlobal | AI-Powered Safety Platform",
  description:
    "Explore 12 AI-powered EHS solutions: safety monitoring, predictive analytics, compliance automation, IoT integration, and more. Protect your workforce with SafeGlobal.",
  keywords: [
    "EHS AI solutions",
    "AI safety monitoring",
    "predictive risk analytics",
    "compliance automation",
    "IoT safety integration",
    "workplace safety AI",
  ],
  openGraph: {
    title: "EHS / AI Solutions — SafeGlobal",
    description:
      "12 AI-powered EHS solutions for enterprise safety. Real-time monitoring, predictive analytics, and compliance automation.",
  },
};

export default function EHSAIPage() {
  const services = Object.values(servicesData);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-safeglobal/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "EHS / AI" }]} />

          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-6"
            >
              <Shield className="w-3 h-3 mr-1.5" />
              AI-POWERED SAFETY PLATFORM
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              EHS / AI{" "}
              <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              12 specialized AI modules designed to protect your workforce, ensure
              compliance, and transform your safety operations. From real-time
              hazard detection to predictive risk forecasting — every aspect of
              workplace safety, powered by intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
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
                <Link href="/industries">
                  View Industries
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const colors = colorMap[service.color] || colorMap.safeglobal;
              const Icon = service.icon;
              const image = serviceImages[service.slug];

              return (
                <Link
                  key={service.slug}
                  href={`/ehs-ai/${service.slug}`}
                  className="group block"
                >
                  <Card className="h-full border-border bg-card/50 hover:border-safeglobal/30 hover:shadow-xl hover:shadow-safeglobal/5 transition-all duration-300 overflow-hidden">
                    {image && (
                      <div className="relative h-36 overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className={`w-7 h-7 ${colors.text}`} />
                        </div>
                        {service.badge && (
                          <Badge
                            variant="outline"
                            className={`text-[10px] px-2.5 py-0.5 ${colors.bg} ${colors.text} ${colors.border}`}
                          >
                            <Sparkles className="w-3 h-3 mr-1" />
                            {service.badge}
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-safeglobal transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground mb-5 line-clamp-2">
                        {service.heroDescription}
                      </p>

                      {/* Stats Preview */}
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        {service.stats.slice(0, 2).map((stat) => (
                          <div
                            key={stat.label}
                            className="p-2.5 rounded-lg bg-background/50 border border-border/50"
                          >
                            <div className={`text-lg font-bold ${colors.text}`}>
                              {stat.value}
                            </div>
                            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-1 text-safeglobal text-sm font-medium">
                        Explore solution
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

      {/* Bottom CTA */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safeglobal/30 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative p-10 sm:p-14 rounded-3xl border border-safeglobal/20 bg-gradient-to-br from-safeglobal/10 via-card/80 to-cyan-500/5 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-safeglobal/10 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Not Sure Which Solution{" "}
                <span className="text-gradient">Fits</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Our safety experts will assess your facility and recommend the
                right combination of AI solutions for your unique risks.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-xl shadow-safeglobal/25 hover:shadow-safeglobal/35 transition-all gap-2"
              >
                <Link href="/contact">
                  Get a Free Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
