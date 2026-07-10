import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/safe-global/Breadcrumb";
import {
  ArrowRight,
  Eye,
  ShieldAlert,
  Activity,
  Cpu,
  Truck,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Safety Monitoring — Safeglobal | Advanced Computer Vision",
  description: "Transform your facility's safety with real-time computer vision, PPE tracking, hazardous zone geofencing, ergonomics analysis, and vehicle tracking.",
};

export default function AISafetyMonitoringPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero Section ──────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-safeglobal/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "EHS / AI", href: "/ehs-ai" },
              { label: "AI Safety Monitoring" },
            ]}
          />

          <div className="grid lg:grid-cols-[1fr_500px] gap-10 items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-safeglobal/10 flex items-center justify-center border border-safeglobal/20">
                  <Eye className="w-8 h-8 text-safeglobal" />
                </div>
                <Badge
                  variant="outline"
                  className="text-xs px-3 py-1 bg-safeglobal/10 text-safeglobal border-safeglobal/20"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  Advanced Computer Vision
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Beyond Surveillance: <br />
                <span className="text-gradient">Intelligent AI Vision</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 font-medium">
                Comprehensive visual intelligence for proactive EHS management.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Transform your existing camera infrastructure into a proactive safety engine. Our advanced computer vision models analyze thousands of video feeds simultaneously to detect PPE non-compliance, ergonomic risks, hazardous zone breaches, and vehicle trajectories in real-time.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-xl shadow-safeglobal/25 hover:shadow-safeglobal/35 transition-all gap-2"
                >
                  <Link href="/contact">
                    Request AI Demo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block h-[450px] rounded-3xl overflow-hidden border border-safeglobal/20 bg-card/50 shadow-2xl shadow-safeglobal/10">
              <img
                src="/images/ai-ppe-dashboard.png"
                alt="AI PPE Tracking Dashboard"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="rounded-2xl border border-white/10 bg-background/80 p-5 backdrop-blur-md">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-safeglobal/20 flex items-center justify-center">
                      <ShieldAlert className="w-6 h-6 text-safeglobal" />
                    </div>
                    <div>
                      <p className="text-base font-semibold">Real-Time PPE Tracking</p>
                      <p className="text-sm text-muted-foreground">Active monitoring on 14 cameras</p>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Deep Dive Features ───────────────────────────────────────────── */}
      
      {/* 1. PPE & Hazardous Zones */}
      <section className="relative py-20 lg:py-24 border-t border-border/50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden border border-border shadow-2xl shadow-black/50">
               <img
                  src="/images/ai-ppe-dashboard.png"
                  alt="PPE Compliance and Hazard Detection"
                  className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="outline" className="mb-4 text-sky-400 border-sky-400/30 bg-sky-400/10">Compliance & Safety</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Real-Time PPE Tracking & <br/><span className="text-sky-400">Hazardous Zone Geofencing</span></h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ensure every worker is protected before they even step onto the floor. Our AI instantly identifies missing hard hats, safety glasses, high-visibility vests, and specialized gear with industry-leading precision.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center flex-shrink-0 border border-sky-500/20">
                    <Eye className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Automated Compliance Monitoring</h3>
                    <p className="text-muted-foreground">Continuously track PPE usage across hundreds of personnel simultaneously without human fatigue, alerting supervisors only when compliance drops.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center flex-shrink-0 border border-rose-500/20">
                    <ShieldAlert className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Dynamic Virtual Geofencing</h3>
                    <p className="text-muted-foreground">Draw virtual boundaries around dangerous machinery or restricted areas. Get instant alerts and trigger automated alarms if a worker crosses into a high-risk zone.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ergonomics & Movement (Heatmaps) */}
      <section className="relative py-20 lg:py-24 border-t border-border/50 bg-card/20">
        <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] -z-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-purple-400 border-purple-400/30 bg-purple-400/10">Health & Biomechanics</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ergonomics, Posture Analysis & <br/><span className="text-purple-400">Workflow Heatmaps</span></h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Prevent long-term musculoskeletal disorders (MSDs) by analyzing worker posture and repetitive motions. Our computer vision maps skeletal movement to assess ergonomic risks without requiring wearable sensors.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                    <Activity className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Posture Risk Scoring (RULA/REBA)</h3>
                    <p className="text-muted-foreground">Automatically estimate RULA and REBA scores by detecting awkward bending, reaching, and lifting techniques on the assembly line.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                    <TrendingUp className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Floor Traffic & Heatmap Analytics</h3>
                    <p className="text-muted-foreground">Generate visual heatmaps of foot traffic to identify congestion points, optimize floor layouts, and reduce wasted movement for better operational efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden border border-border shadow-2xl shadow-purple-500/10">
               <img
                  src="/images/ai-heatmaps-analytics.png"
                  alt="Ergonomics and Heatmap Analytics Dashboard"
                  className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vehicle Tracking & Equipment */}
      <section className="relative py-20 lg:py-24 border-t border-border/50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden border border-border shadow-2xl shadow-cyan-500/10">
               <img
                  src="/images/ai-vehicle-tracking.png"
                  alt="Vehicle and Forklift Collision Avoidance Dashboard"
                  className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400/30 bg-cyan-400/10">Logistics & Asset Safety</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Vehicle & Forklift Tracking <br/> <span className="text-cyan-400">+ Equipment Monitoring</span></h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Industrial vehicles are a leading cause of severe accidents. Safeglobal AI maps vehicle trajectories, speeds, and pedestrian proximity to predict and prevent collisions before they happen.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                    <Truck className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Collision Avoidance Systems</h3>
                    <p className="text-muted-foreground">Monitor the distance between forklifts, AGVs, and pedestrians. The AI issues predictive warnings when trajectories intersect dangerously.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                    <Cpu className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Visual Anomaly & Equipment Monitoring</h3>
                    <p className="text-muted-foreground">Perform continuous visual inspections on critical machinery. Detect leaks, physical damage, or abnormal vibrations through computer vision to enable predictive maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ───────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 border-t border-border/50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safeglobal/30 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative p-10 sm:p-14 rounded-3xl border border-safeglobal/20 bg-gradient-to-br from-safeglobal/10 via-card/80 to-cyan-500/5 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-safeglobal/10 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Upgrade Your Facility's Vision
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Connect your existing cameras to Safeglobal's AI and unlock enterprise-grade safety monitoring, ergonomic analysis, and operational efficiency today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-xl shadow-safeglobal/25 hover:shadow-safeglobal/35 transition-all gap-2"
                >
                  <Link href="/contact">
                    Request AI Assessment
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
                    Explore Other Solutions
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
