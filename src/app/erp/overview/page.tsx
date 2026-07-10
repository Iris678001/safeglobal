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
  Globe,
  Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise ERP Platform | Safeglobal",
  description: "Empower your organization with a scalable, fully integrated Enterprise Resource Planning (ERP) platform combining SAP S/4HANA robustness with Open Source agility.",
};

export default function ERPOverview() {
  return (
    <div className="min-h-screen pb-20">
      {/* ─── Hero Section ──────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-safeglobal/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <Breadcrumb
            items={[
              { label: "Solutions", href: "/erp" },
              { label: "Enterprise ERP Platform" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-sky-500/10 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-sky-500" />
                </div>
                <Badge
                  variant="outline"
                  className="text-xs px-3 py-1 bg-sky-500/10 text-sky-500 border-sky-500/20"
                >
                  <Zap className="w-3 h-3 mr-1" />
                  ERP Platform
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Architecting <span className="text-gradient">Operational Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Empower your organization with a scalable, fully integrated Enterprise Resource Planning (ERP) platform. 
                We combine the robustness of proprietary systems like SAP S/4HANA with the limitless customization of Open Source ERP.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-xl shadow-safeglobal/25 hover:shadow-safeglobal/40 transition-all duration-300 hover:-translate-y-0.5 gap-2"
                >
                  <Link href="/contact">
                    Request Architecture Review
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-border hover:border-safeglobal/50 hover:bg-safeglobal/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 gap-2"
                >
                  <Link href="#hybrid-erp">
                    Explore Hybrid ERP
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
              <img
                src="/images/global_erp_platform_hero.png"
                alt="Global Enterprise ERP Dashboard"
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">The Digital Central Nervous System</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In today’s hyper-connected business environment, fragmented systems create data silos, hinder operational visibility, and stall growth. Our Enterprise ERP Platform serves as a single source of truth, enabling real-time data synchronization across all business units. Whether deploying a highly customized Open Source framework (like Odoo or ERPNext) or integrating deeply with SAP S/4HANA, we orchestrate complex logistics with high availability and robust security.
          </p>
        </div>
      </section>

      {/* ─── Open Source vs Enterprise ERP (Hybrid Approach) ──────────────── */}
      <section id="hybrid-erp" className="relative py-20 lg:py-28 bg-gradient-to-b from-background via-sky-500/5 to-background">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-sky-500/30 text-sky-600 dark:text-sky-400 bg-sky-500/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
            >
              HYBRID ARCHITECTURE
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Open Source ERP vs <span className="text-sky-600 dark:text-sky-400">Enterprise ERP</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              We recognize that standard proprietary ERPs can lead to vendor lock-in. We deploy both Open Source ERPs and Enterprise systems, offering unparalleled flexibility and hybrid integration capabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
              <img
                src="/images/open_source_erp_dashboard.png"
                alt="Odoo / ERPNext Dashboard"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <Badge className="bg-background/80 backdrop-blur text-foreground border-border">Powered by Odoo / ERPNext</Badge>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">The Open Source Advantage</h3>
              <p className="text-muted-foreground mb-6">Built on modern Python/JS frameworks like the Frappe framework or Odoo ORM, offering deep structural customization without waiting for vendor roadmaps.</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 shrink-0 mt-1">
                    <Settings className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Limitless Customization</h4>
                    <p className="text-sm text-muted-foreground">Modify database schemas and logic freely. Reallocate proprietary licensing budgets toward high-value API integrations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">No Vendor Lock-in</h4>
                    <p className="text-sm text-muted-foreground">Own your source code and data. Self-host on bare metal or private AWS/GCP to ensure total data sovereignty.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">SAP S/4HANA & Enterprise Integrations</h3>
              <p className="text-muted-foreground mb-6">For organizations bound to legacy proprietary systems like SAP or Oracle, we construct Event-Driven Architectures (Kafka, RabbitMQ) to sync agile front-office open-source solutions with a central proprietary ledger in real-time.</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 shrink-0 mt-1">
                    <Database className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">SAP S/4HANA Sync</h4>
                    <p className="text-sm text-muted-foreground">Real-time syncing of master data, financials, and supply chain logistics between localized open-source nodes and corporate SAP cores.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 shrink-0 mt-1">
                    <Network className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">API-First Connectivity</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive REST/GraphQL endpoints ensuring SAP data flows flawlessly to web storefronts, 3PL providers, and field apps.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
              <img
                src="/images/sap_erp_financials_dashboard.png"
                alt="SAP S/4HANA Financial Dashboard"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <Badge className="bg-background/80 backdrop-blur text-foreground border-border">Enterprise SAP S/4HANA Integration</Badge>
              </div>
            </div>
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
            <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-safeglobal/50 hover:shadow-2xl hover:shadow-safeglobal/10 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-sky-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Financial Management</h3>
                <p className="text-muted-foreground mb-4">Handle multi-company, multi-currency, and localized tax compliance effortlessly.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• General Ledger & AI Bank Rec</li>
                  <li>• Dynamic AP/AR Workflows</li>
                  <li>• GAAP/IFRS Automated Reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-safeglobal/50 hover:shadow-2xl hover:shadow-safeglobal/10 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-sky-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">2. Supply Chain (SCM)</h3>
                <p className="text-muted-foreground mb-4">Deep visibility from raw procurement to warehouse final delivery.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multi-Warehouse WMS & Bin tracking</li>
                  <li>• Vendor Performance Scoring</li>
                  <li>• MRP & Bill of Materials Routing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-safeglobal/50 hover:shadow-2xl hover:shadow-safeglobal/10 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Network className="w-6 h-6 text-sky-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Human Resources (HRIS)</h3>
                <p className="text-muted-foreground mb-4">Manage the complete employee lifecycle, driving engagement and efficiency.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Global Payroll Engine</li>
                  <li>• Geofenced Time & Attendance</li>
                  <li>• Talent & Performance Management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── Technical Capabilities ──────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-safeglobal/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Technical Capabilities</h2>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-safeglobal shrink-0" />
              <div>
                <h4 className="font-bold text-lg">API-First Architecture</h4>
                <p className="text-muted-foreground">Comprehensive REST/GraphQL APIs and webhooks for seamless integration with legacy systems, 3PL providers, and specialized SaaS tools.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-safeglobal shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Enterprise-Grade Security</h4>
                <p className="text-muted-foreground">Role-Based Access Control (RBAC), row-level security policies, OAuth2/SAML SSO integrations, and encrypted data at rest (AES-256) and in transit.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-safeglobal shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Cloud-Native & Scalable</h4>
                <p className="text-muted-foreground">Containerized deployments using Docker and Kubernetes, allowing for horizontal auto-scaling during peak transactional loads.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-safeglobal shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Real-Time Business Intelligence</h4>
                <p className="text-muted-foreground">Integrated data warehousing capabilities, providing low-latency querying and visualization for predictive analytics and data-driven decision-making.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
