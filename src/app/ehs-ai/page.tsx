import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/safe-global/Breadcrumb";
import { 
  ArrowRight, 
  Shield, 
  Sparkles, 
  AlertTriangle, 
  Activity, 
  FileCheck2, 
  Eye, 
  Network 
} from "lucide-react";

export const metadata: Metadata = {
  title: "EHS / AI Solutions — Safeglobal | AI-Powered Safety Platform",
  description:
    "Discover bespoke AI-powered EHS solutions: safety monitoring, predictive analytics, compliance automation, IoT integration, and more. Protect your workforce with Safeglobal.",
  keywords: [
    "EHS AI solutions",
    "AI safety monitoring",
    "predictive risk analytics",
    "compliance automation",
    "IoT safety integration",
    "workplace safety AI",
  ],
  openGraph: {
    title: "EHS / AI Solutions — Safeglobal",
    description:
      "AI-powered EHS solutions for enterprise safety. Real-time monitoring, predictive analytics, and compliance automation.",
  },
};

export default function EHSAIPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Glowing Background effects */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-safeglobal/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "EHS / AI" }]} />

          <div className="max-w-3xl mb-16">
            <Badge
              variant="outline"
              className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-6"
            >
              <Sparkles className="w-3 h-3 mr-1.5" />
              NEXT-GEN ENTERPRISE PLATFORM
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
              Intelligence for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-safeglobal via-cyan-400 to-blue-500">
                Total Safety
              </span>
            </h1>
            <p className="text-lg sm:text-2xl text-muted-foreground leading-relaxed mb-8">
              A bespoke, unified platform powered by state-of-the-art computer vision, IoT integrations, and predictive analytics.
            </p>
          </div>

          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {/* Core EHS Platform - Large Split Screen */}
            <div className="md:col-span-12 lg:col-span-8 group relative rounded-3xl overflow-hidden border border-white/10 bg-card/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-safeglobal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="grid md:grid-cols-2 h-full">
                <div className="p-8 sm:p-12 flex flex-col justify-center relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-safeglobal/20 flex items-center justify-center mb-6 border border-safeglobal/30 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                    <Shield className="w-7 h-7 text-safeglobal" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Core EHS Platform</h2>
                  <p className="text-muted-foreground mb-8 text-lg">
                    The centralized nervous system for your enterprise safety. Manage incidents, audits, and compliance in one unified, AI-enhanced hub.
                  </p>
                  <Button asChild className="w-fit bg-safeglobal hover:bg-safeglobal/80 text-white gap-2 rounded-full px-6 py-6 border-0">
                    <Link href="/ehs-ai/ehs-management-overview">
                      Explore Platform <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative min-h-[300px] md:min-h-full">
                  <Image 
                    src="/images/ehs_dashboard_mockup.png" 
                    alt="EHS Dashboard UI" 
                    fill 
                    className="object-cover object-left group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background md:from-background/80 lg:from-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* AI & Computer Vision */}
            <div className="md:col-span-12 lg:col-span-4 group relative rounded-3xl overflow-hidden border border-white/10 bg-card/20 backdrop-blur-xl flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <Image 
                  src="/images/ai_safety_vision.png" 
                  alt="AI Safety Vision" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-8 relative z-10 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                    <Eye className="w-5 h-5 text-cyan-400" />
                  </div>
                  <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 bg-cyan-500/10">Computer Vision</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">AI Safety Monitoring</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  Real-time hazard detection using advanced neural networks. Monitor PPE compliance and safety perimeters instantly.
                </p>
                <Link href="/ehs-ai/ai-safety-monitoring" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group/link">
                  See AI in action <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Predictive Risk Management */}
            <div className="md:col-span-12 lg:col-span-5 group relative rounded-3xl overflow-hidden border border-white/10 bg-card/20 backdrop-blur-xl flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src="/images/risk_predictive_analytics.png" 
                  alt="Predictive Analytics" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-8 relative z-10 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/20 border border-blue-500/30">
                    <Activity className="w-5 h-5 text-blue-400" />
                  </div>
                  <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10">Analytics</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Predictive Risk</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  Forecast potential incidents before they happen by analyzing historical data and environmental factors.
                </p>
                <Link href="/ehs-ai/risk-management" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group/link">
                  Explore Analytics <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Core Modules & IoT Grid Area */}
            <div className="md:col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Incident Management */}
              <Link href="/ehs-ai/incident-management" className="group relative rounded-3xl p-8 border border-white/10 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors duration-300 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-[50px] group-hover:bg-rose-500/20 transition-colors" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center mb-5 border border-rose-500/30">
                    <AlertTriangle className="w-6 h-6 text-rose-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-rose-400 transition-colors">Incident Management</h3>
                  <p className="text-sm text-muted-foreground">Streamline reporting, root cause analysis, and corrective actions workflows.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-rose-400 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </Link>

              {/* Permit to Work */}
              <Link href="/ehs-ai/permit-to-work" className="group relative rounded-3xl p-8 border border-white/10 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors duration-300 flex flex-col justify-between">
                <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[50px] group-hover:bg-amber-500/20 transition-colors" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-5 border border-amber-500/30">
                    <FileCheck2 className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-amber-400 transition-colors">Permit to Work</h3>
                  <p className="text-sm text-muted-foreground">Digitize and automate high-risk work permits with intelligent clash detection.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-amber-400 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </Link>

              {/* IoT Integration - Span 2 columns on small screens */}
              <div className="sm:col-span-2 group relative rounded-3xl overflow-hidden border border-white/10 bg-card/20 backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-8 relative z-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        <Network className="w-6 h-6 text-emerald-400" />
                      </div>
                      <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 bg-emerald-500/10">Connected Devices</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">IoT Integration</h3>
                    <p className="text-muted-foreground mb-0">
                      Connect wearables, environmental sensors, and smart equipment directly into the Safeglobal ecosystem.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button asChild variant="outline" className="rounded-full border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-500/10 text-emerald-400 gap-2 px-6">
                      <Link href="/ehs-ai/iot-integration">
                        Connect Devices <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative p-10 sm:p-16 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-safeglobal/10 via-card/80 to-cyan-500/5 backdrop-blur-xl overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Ready to Upgrade Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Safety Stack</span>?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Deploy state-of-the-art EHS software tailored to your enterprise's unique operational needs.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all gap-2 rounded-full px-8 py-6 text-lg border-0"
              >
                <Link href="/contact">
                  Request a Custom Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
