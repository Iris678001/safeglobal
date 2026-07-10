import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/safe-global/Breadcrumb";
import { 
  ArrowRight, 
  ShieldAlert, 
  Activity, 
  Map, 
  ClipboardCheck, 
  TrendingDown,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI-Powered Risk Management — Safeglobal",
  description:
    "Transform workplace safety with dynamic risk matrices, intelligent Job Safety Analysis (JSA), and predictive risk modeling to proactively identify and mitigate hazards.",
  keywords: [
    "dynamic risk matrix",
    "job safety analysis",
    "predictive risk modeling",
    "hazard identification",
    "AI risk management",
    "EHS software",
  ],
};

export default function RiskManagementPage() {
  const features = [
    {
      title: "Dynamic Risk Matrices",
      description: "Move beyond static spreadsheets. Our intelligent 5x5 matrices update in real-time based on live facility data, historical incidents, and external variables, providing a truly accurate snapshot of your operational risk.",
      icon: Activity,
    },
    {
      title: "Predictive Risk Modeling",
      description: "Leverage machine learning to forecast potential hazards before they occur. By analyzing millions of data points across your enterprise, Safeglobal predicts where and when incidents are most likely to happen.",
      icon: TrendingDown,
    },
    {
      title: "Intelligent JSA & JHA",
      description: "Automate Job Safety Analysis. Our AI suggests potential hazards and recommended controls based on the task description, location, and equipment involved, drastically reducing administrative burden.",
      icon: ClipboardCheck,
    },
    {
      title: "Geospatial Heatmaps",
      description: "Visualize risk across your entire portfolio. Interactive heatmaps overlay predictive risk scores onto your facility floor plans, allowing EHS leaders to allocate resources where they are needed most.",
      icon: Map,
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb 
            items={[
              { label: "EHS / AI", href: "/ehs-ai" },
              { label: "Risk Management" }
            ]} 
          />

          <div className="max-w-4xl mt-8">
            <Badge
              variant="outline"
              className="border-sky-500/30 text-sky-500 bg-sky-500/10 px-4 py-1.5 text-sm font-medium tracking-wide mb-6 backdrop-blur-md"
            >
              <ShieldAlert className="w-4 h-4 mr-2" />
              PROACTIVE HAZARD MITIGATION
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8">
              Predictive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                Risk Management
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              Transform your safety culture from reactive to predictive. Safeglobal’s Risk Management module utilizes advanced AI to continuously analyze hazards, automate Job Safety Analyses (JSA), and project future risks—allowing you to intervene before incidents happen.
            </p>

          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              A comprehensive suite of tools designed to identify, assess, and eliminate workplace hazards with unprecedented accuracy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="bg-card/40 backdrop-blur-sm border-border/50 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/5 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-sky-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deep Dive 1: Dynamic Risk Matrix */}
      <section className="relative py-24 border-t border-border/50 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-black/20 bg-background/50 backdrop-blur-xl">
                <img 
                  src="/images/risk_matrix_dashboard.png" 
                  alt="Dynamic 5x5 Risk Matrix Dashboard Mockup" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <Badge variant="outline" className="text-sky-500 border-sky-500/30 bg-sky-500/10 mb-6">
                Data-Driven Assessment
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Dynamic 5x5 Risk Matrices
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Traditional risk matrices are static and quickly become outdated. Safeglobal introduces dynamic matrices that continuously recalculate risk severity and probability based on live operational data.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Real-time recalibration of hazard scores.",
                  "Automated integration with incident reporting.",
                  "Customizable risk thresholds and alerts.",
                  "Enterprise-wide aggregation of risk profiles."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-sky-500 mr-3 shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 2: Predictive Heatmaps */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="text-orange-500 border-orange-500/30 bg-orange-500/10 mb-6">
                Forecasting & AI
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Predictive Risk Modeling
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                What if you could know where the next incident is likely to occur? Our predictive models analyze historical trends, environmental factors, and near-misses to generate highly accurate spatial heatmaps of impending risk.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Geospatial hazard visualization for facility floors.",
                  "Machine learning algorithms that detect hidden correlations.",
                  "Proactive alerts for high-risk zones.",
                  "Resource optimization based on predictive hotspots."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-orange-500 mr-3 shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tl from-orange-500/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-black/20 bg-background/50 backdrop-blur-xl">
                <img 
                  src="/images/predictive_risk_heatmap.png" 
                  alt="Predictive Risk Heatmap Dashboard Mockup" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 mt-12 border-t border-border/50">
        <div className="absolute inset-0 bg-sky-500/5" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Anticipate and Prevent Hazards?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the safety leaders who are using Safeglobal to cut incident rates by up to 40% through AI-driven predictive modeling.
          </p>
          <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white shadow-xl shadow-sky-500/20">
            Start Your Risk Assessment
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
