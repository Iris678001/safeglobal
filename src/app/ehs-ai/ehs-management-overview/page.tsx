import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/safe-global/Breadcrumb";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Layers,
  Network,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "EHS Management Platform | Safeglobal",
  description: "Proactively manage environmental, health, and safety risks with a unified platform natively integrated with SAP S/4HANA.",
};

export default function EHSManagementOverview() {
  return (
    <div className="min-h-screen pb-20">
      {/* ─── Hero Section ──────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-safeglobal/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <Breadcrumb
            items={[
              { label: "EHS / AI", href: "/ehs-ai" },
              { label: "EHS Management Platform" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-sky-500/10 flex items-center justify-center">
                  <Layers className="w-8 h-8 text-sky-500" />
                </div>
                <Badge
                  variant="outline"
                  className="text-xs px-3 py-1 bg-sky-500/10 text-sky-500 border-sky-500/20"
                >
                  <Zap className="w-3 h-3 mr-1" />
                  Platform Overview
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                <span className="text-gradient">Next-Generation</span> EHS Management Platform
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Proactively manage environmental, health, and safety risks with a unified platform natively integrated with SAP S/4HANA.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-xl shadow-safeglobal/25 hover:shadow-safeglobal/40 transition-all duration-300 hover:-translate-y-0.5 gap-2"
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
                  className="border-border hover:border-safeglobal/50 hover:bg-safeglobal/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 gap-2"
                >
                  <Link href="#sap-integration">
                    Explore SAP Integration
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
              <img
                src="/images/sap_s4hana_dashboard.png"
                alt="SAP S/4HANA EHS Dashboard"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Platform Overview ─────────────────────────────────────────────── */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">The Single Source of Truth for EHS</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The EHS Management Platform is an enterprise-grade solution designed to centralize, streamline, and automate your environmental, health, and safety processes. Built for complex industrial environments, the platform bridges the gap between frontline operations and corporate governance. By establishing a single source of truth, organizations can move from reactive compliance to proactive risk mitigation, ensuring workforce safety and operational continuity while reducing the total cost of compliance.
          </p>
        </div>
      </section>

      {/* ─── SAP S/4HANA Integration Deep Dive ─────────────────────────────── */}
      <section id="sap-integration" className="relative py-20 lg:py-28 bg-gradient-to-b from-background via-sky-500/5 to-background">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-sky-500/30 text-sky-600 dark:text-sky-400 bg-sky-500/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
            >
              ENTERPRISE ARCHITECTURE
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              SAP S/4HANA <span className="text-sky-600 dark:text-sky-400">Integration Deep Dive</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Unlock the full potential of your enterprise architecture with bi-directional, real-time integration into SAP S/4HANA. Our platform is engineered to align perfectly with the SAP data model, eliminating silos and ensuring that EHS processes are woven into the fabric of your core business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/5 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <Database className="w-10 h-10 text-sky-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">Master Data Synchronization</h3>
                <p className="text-muted-foreground mb-4">
                  Maintain consistency across your enterprise without manual data entry. Sync critical master data via standard OData services and BAPIs.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                    <span><strong>SAP HCM / SuccessFactors:</strong> Auto-update org structures and employee records for incident reporting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                    <span><strong>SAP EAM / PM:</strong> Sync functional locations. Hazards link directly to the physical asset in SAP.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/5 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <Network className="w-10 h-10 text-sky-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">Incident Management & ERP Mapping</h3>
                <p className="text-muted-foreground mb-4">
                  Transform frontline observations into actionable ERP workflows directly within SAP EHS Incident Management.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                    <span><strong>Automated Logging:</strong> Incidents captured via mobile instantly generate records in SAP EHS-MGM-INC.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                    <span><strong>Workflow Triggering:</strong> High-severity incidents auto-trigger PM maintenance notifications in SAP.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/5 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <ShieldCheck className="w-10 h-10 text-sky-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">Automated Compliance Reporting</h3>
                <p className="text-muted-foreground mb-4">
                  Streamline your ESG and compliance reporting pipelines directly into the SAP data lake.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                    <span><strong>SAP SuPM Sync:</strong> Environmental data automatically pushes to SAP Sustainability Performance Management.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                    <span><strong>Regulatory Output:</strong> Automate OSHA, EPA, and local reporting directly from consolidated SAP data.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── Core Modules ──────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Core Platform <span className="text-gradient">Modules</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Link href="/ehs-ai/compliance-automation" className="group block">
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm group-hover:border-safeglobal/50 group-hover:shadow-2xl group-hover:shadow-safeglobal/10 transition-all duration-300 group-hover:-translate-y-1">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-safeglobal transition-colors">1. Compliance Management</h3>
                  <p className="text-muted-foreground mb-4">Stay ahead of regulatory changes and ensure adherence across all facilities.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Regulatory Register Mapping</li>
                    <li>• Task & Action Tracking (CAPAs)</li>
                    <li>• Digital Permit Management</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/ehs-ai/safety-audit-manager" className="group block">
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm group-hover:border-safeglobal/50 group-hover:shadow-2xl group-hover:shadow-safeglobal/10 transition-all duration-300 group-hover:-translate-y-1">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-safeglobal transition-colors">2. Audit & Inspection</h3>
                  <p className="text-muted-foreground mb-4">Drive continuous improvement through rigorous, data-driven assessments.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Logic-driven Dynamic Questionnaires</li>
                    <li>• Offline-First Field Execution</li>
                    <li>• Seamless SAP Audit Management Sync</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/ehs-ai/hazard-mapping" className="group block">
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm group-hover:border-safeglobal/50 group-hover:shadow-2xl group-hover:shadow-safeglobal/10 transition-all duration-300 group-hover:-translate-y-1">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-safeglobal transition-colors">3. Hazard Mapping</h3>
                  <p className="text-muted-foreground mb-4">Visualize and mitigate risks before they escalate into incidents.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Geospatial Hazard Visualization</li>
                    <li>• Job Hazard Analysis (JHA) to SAP EHS-MGM-RAS</li>
                    <li>• Control Effectiveness Monitoring</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/ehs-ai/incident-management" className="group block">
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm group-hover:border-safeglobal/50 group-hover:shadow-2xl group-hover:shadow-safeglobal/10 transition-all duration-300 group-hover:-translate-y-1">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-safeglobal transition-colors">4. Incident Management</h3>
                  <p className="text-muted-foreground mb-4">Streamline mobile reporting, RCA workflows, and CAPA tracking.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Mobile-First Offline Reporting</li>
                    <li>• Root Cause Analysis (RCA)</li>
                    <li>• Direct SAP EHS Integration</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/ehs-ai/risk-management" className="group block">
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm group-hover:border-safeglobal/50 group-hover:shadow-2xl group-hover:shadow-safeglobal/10 transition-all duration-300 group-hover:-translate-y-1">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-safeglobal transition-colors">5. Risk Management</h3>
                  <p className="text-muted-foreground mb-4">Leverage dynamic risk matrices and predictive hazard modeling.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Dynamic 5x5 Risk Matrices</li>
                    <li>• Job Safety Analysis (JSA)</li>
                    <li>• Predictive Risk Modeling</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/ehs-ai/permit-to-work" className="group block">
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm group-hover:border-safeglobal/50 group-hover:shadow-2xl group-hover:shadow-safeglobal/10 transition-all duration-300 group-hover:-translate-y-1">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-safeglobal transition-colors">6. Permit to Work</h3>
                  <p className="text-muted-foreground mb-4">Execute digital workflows, LOTO integration, and active clash detection.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Digital Permit Approvals</li>
                    <li>• Lockout/Tagout (LOTO) Integration</li>
                    <li>• Geo-fenced Clash Detection</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Benefits ──────────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-safeglobal/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Platform Benefits</h2>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-safeglobal shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Unified Data Ecosystem</h4>
                <p className="text-muted-foreground">Eliminate data silos by making your EHS platform an extension of your SAP S/4HANA core, ensuring single-source-of-truth reporting.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-safeglobal shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Proactive Risk Mitigation</h4>
                <p className="text-muted-foreground">Shift from reactive incident logging to predictive hazard management, lowering Recordable Incident Rates (TRIR) and reducing insurance premiums.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-safeglobal shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Operational Efficiency</h4>
                <p className="text-muted-foreground">Automate data entry, reporting, and workflow triggers between EHS and maintenance teams, significantly reducing administrative overhead.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-safeglobal shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Uncompromised Compliance</h4>
                <p className="text-muted-foreground">Maintain continuous audit readiness with automated regulatory tracking and standardized processes across global operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
