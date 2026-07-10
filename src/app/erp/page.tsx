import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/safe-global/Breadcrumb";
import {
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Package,
  Users,
  Wrench,
  FolderKanban,
  Settings,
  Sparkles,
  BarChart3,
  Globe,
  Layers,
  Shield,
  Smartphone,
  Cpu,
  Lock,
  Zap,
  TrendingUp,
  Database,
} from "lucide-react";

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Enterprise ERP Platform — Safeglobal | Cloud-Native ERP Solutions",
  description:
    "Safeglobal's cloud-native ERP platform unifies financial management, supply chain, HR, asset tracking, project management, and manufacturing operations in a single intelligent system.",
  keywords: [
    "ERP platform",
    "enterprise resource planning",
    "cloud ERP",
    "financial management",
    "supply chain management",
    "HR management",
    "asset management",
    "manufacturing ERP",
  ],
  openGraph: {
    title: "Enterprise ERP Platform — Safeglobal",
    description:
      "Unified cloud-native ERP with AI-powered automation. Financial management, supply chain, HR, and manufacturing in one platform.",
  },
};

// ─── Module Data ─────────────────────────────────────────────────────────────
const erpModules = [
  {
    id: "financial-management",
    icon: DollarSign,
    title: "Financial Management",
    color: "safeglobal",
    description:
      "Complete financial control with real-time general ledger, accounts payable/receivable, multi-currency support, and automated bank reconciliation. Manage budgets, cost centers, and profit centers with drill-down analytics.",
    capabilities: [
      "General Ledger & Chart of Accounts",
      "Accounts Payable & Receivable",
      "Multi-Currency & Multi-Entity",
      "Budgeting & Forecasting",
      "Bank Reconciliation",
      "Tax Compliance (VAT, GST, WHT)",
    ],
    stat: "40%",
    statLabel: "Faster financial close",
  },
  {
    id: "supply-chain",
    icon: Package,
    title: "Supply Chain Management",
    color: "amber",
    description:
      "End-to-end supply chain visibility from procurement to delivery. Automate purchase orders, optimize inventory levels with AI-driven demand forecasting, and manage warehouse operations with barcode/RFID integration.",
    capabilities: [
      "Procurement & Purchase Orders",
      "Inventory & Warehouse Management",
      "Demand Forecasting (AI-driven)",
      "Supplier Relationship Management",
      "Barcode & RFID Integration",
      "Logistics & Shipment Tracking",
    ],
    stat: "32%",
    statLabel: "Inventory cost reduction",
  },
  {
    id: "hr-workforce",
    icon: Users,
    title: "HR & Workforce Management",
    color: "cyan",
    description:
      "Manage the entire employee lifecycle from recruitment to retirement. Automated payroll processing, time & attendance tracking, leave management, performance appraisals, and learning & development modules.",
    capabilities: [
      "Payroll Processing & Compliance",
      "Time & Attendance Tracking",
      "Recruitment & Onboarding",
      "Performance Management",
      "Leave & Benefits Administration",
      "Learning & Development",
    ],
    stat: "60%",
    statLabel: "HR process automation",
  },
  {
    id: "asset-management",
    icon: Wrench,
    title: "Asset Management",
    color: "violet",
    description:
      "Track and manage fixed assets throughout their lifecycle. Automated depreciation scheduling across multiple methods (straight-line, declining balance, units of production), maintenance planning, and insurance tracking.",
    capabilities: [
      "Fixed Asset Register & Tracking",
      "Depreciation Scheduling",
      "Preventive Maintenance Planning",
      "Asset Transfer & Disposal",
      "Insurance & Warranty Tracking",
      "QR/Barcode Asset Identification",
    ],
    stat: "25%",
    statLabel: "Maintenance cost savings",
  },
  {
    id: "project-management",
    icon: FolderKanban,
    title: "Project Management",
    color: "rose",
    description:
      "Plan, execute, and monitor projects with real-time cost tracking, resource allocation, and milestone management. Earned value analysis provides accurate project health metrics and forecasting.",
    capabilities: [
      "Project Costing & Budgeting",
      "Resource Allocation & Scheduling",
      "Milestone & Task Management",
      "Earned Value Analysis",
      "Timesheet Integration",
      "Client Billing & Invoicing",
    ],
    stat: "35%",
    statLabel: "On-time delivery improvement",
  },
  {
    id: "manufacturing",
    icon: Settings,
    title: "Manufacturing & Production",
    color: "safeglobal",
    description:
      "Digitize your production floor with bill of materials management, production planning, work order processing, and quality control. Real-time shop floor data collection enables continuous improvement.",
    capabilities: [
      "Bill of Materials (BOM) Management",
      "Production Planning & Scheduling",
      "Work Order Processing",
      "Shop Floor Data Collection",
      "Quality Control & Inspection",
      "Material Requirements Planning (MRP)",
    ],
    stat: "28%",
    statLabel: "Production efficiency gain",
  },
];

const platformFeatures = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics & Reporting",
    description:
      "Interactive dashboards and 200+ pre-built reports with drill-down capability. Custom report builder with scheduled distribution to stakeholders.",
  },
  {
    icon: Globe,
    title: "Multi-Entity & Multi-Currency",
    description:
      "Manage multiple subsidiaries, branches, and legal entities with inter-company transaction elimination and consolidated financial reporting across currencies.",
  },
  {
    icon: Cpu,
    title: "API-First Integration Ecosystem",
    description:
      "200+ pre-built connectors for CRM, e-commerce, banking, logistics, and IoT platforms. RESTful APIs and webhooks enable custom integrations.",
  },
  {
    icon: Lock,
    title: "Role-Based Access & Audit Trail",
    description:
      "Granular role-based access control with field-level security. Complete audit trail with tamper-proof logs for regulatory compliance.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description:
      "Native mobile apps for iOS and Android. Approve purchase orders, submit timesheets, scan assets, and review dashboards from anywhere.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Automation",
    description:
      "Intelligent document processing, anomaly detection in transactions, predictive demand forecasting, and automated workflow routing based on business rules.",
  },
];

const businessBenefits = [
  {
    title: "Operational Efficiency",
    description:
      "Eliminate manual data entry and redundant processes across departments. Unified data model ensures single source of truth with 60% reduction in process cycle times.",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Real-time visibility into KPIs across finance, operations, and HR. AI-powered insights surface opportunities and risks before they impact the bottom line.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Cloud-native platform scales from 50 to 50,000+ users without infrastructure changes. Multi-tenant architecture with dedicated data isolation per organization.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Built-in compliance for IFRS, GAAP, VAT, GST, and regional labor laws across 30+ countries. Automated regulatory reporting reduces compliance effort by 70%.",
  },
];

// ─── Color Map ───────────────────────────────────────────────────────────────
const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  safeglobal: { bg: "bg-safeglobal/10", text: "text-safeglobal", border: "border-safeglobal/20" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/20" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/20" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/20" },
  rose: { bg: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/20" },
};

// ─── Page Component ──────────────────────────────────────────────────────────
export default function ERPPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero Section ──────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-safeglobal/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Solutions", href: "/ehs-ai" }, { label: "ERP Platform" }]} />

          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-6"
            >
              <Database className="w-3 h-3 mr-1.5" />
              CLOUD-NATIVE ERP PLATFORM
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Enterprise{" "}
              <span className="text-gradient">Resource Planning</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              A unified, cloud-native ERP platform that connects your finance,
              supply chain, HR, manufacturing, and project operations in a
              single intelligent system. Built for enterprises that demand
              real-time visibility, AI-driven automation, and zero-compromise
              compliance.
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
                <Link href="/ehs-ai">
                  Explore All Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Row ─────────────────────────────────────────────────────── */}
      <section className="relative py-12 lg:py-16">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: TrendingUp, value: "40%", label: "Cost Reduction", description: "Average operational savings" },
              { icon: Shield, value: "99.9%", label: "Uptime SLA", description: "Enterprise-grade reliability" },
              { icon: Layers, value: "50+", label: "Modules", description: "Integrated ERP modules" },
              { icon: Zap, value: "200+", label: "Integrations", description: "Pre-built connectors" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-safeglobal/30 hover:bg-safeglobal/5 transition-all duration-300 text-center overflow-hidden"
              >
                <div className="w-10 h-10 rounded-lg bg-safeglobal/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-5 h-5 text-safeglobal" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-safeglobal mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground/60 mt-0.5">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Core Modules Section ──────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-safeglobal/3 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
            >
              CORE MODULES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Six Pillars of{" "}
              <span className="text-gradient">Enterprise Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each module is purpose-built yet deeply integrated, giving you a
              360° view of operations while allowing phased adoption.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {erpModules.map((mod) => {
              const colors = colorMap[mod.color] || colorMap.safeglobal;
              const Icon = mod.icon;

              return (
                <div
                  key={mod.id}
                  id={mod.id}
                  className="group scroll-mt-24"
                >
                  <Card className="h-full border-border bg-card/50 hover:border-safeglobal/30 hover:shadow-xl hover:shadow-safeglobal/5 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className={`w-7 h-7 ${colors.text}`} />
                        </div>
                        <div className="flex items-baseline gap-1.5">
                          <span className={`text-2xl font-bold ${colors.text}`}>
                            {mod.stat}
                          </span>
                          <span className="text-[10px] text-muted-foreground max-w-[80px] leading-tight">
                            {mod.statLabel}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-safeglobal transition-colors">
                        {mod.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                        {mod.description}
                      </p>
                      <div className="space-y-2">
                        {mod.capabilities.map((cap) => (
                          <div
                            key={cap}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle2
                              className={`w-4 h-4 flex-shrink-0 ${colors.text}`}
                            />
                            <span className="text-muted-foreground">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Platform Features ─────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
            >
              PLATFORM CAPABILITIES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Built for the{" "}
              <span className="text-gradient">Modern Enterprise</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-safeglobal/30 hover:bg-safeglobal/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-safeglobal/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-sm font-bold text-safeglobal">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Business Benefits ─────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/3 rounded-full blur-[120px]" />

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
              <span className="text-gradient">Safeglobal ERP</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {businessBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-safeglobal/30 hover:bg-safeglobal/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-safeglobal/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-5 h-5 text-safeglobal" />
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

      {/* ─── CTA Section ───────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safeglobal/30 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative p-10 sm:p-14 rounded-3xl border border-safeglobal/20 bg-gradient-to-br from-safeglobal/10 via-card/80 to-cyan-500/5 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-safeglobal/10 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <Badge
                variant="outline"
                className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-6"
              >
                <Sparkles className="w-3 h-3 mr-1.5" />
                GET STARTED
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Ready to Unify Your{" "}
                <span className="text-gradient">Operations</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                See how Safeglobal ERP can streamline your finance, supply
                chain, HR, and manufacturing operations in a single platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-xl shadow-safeglobal/25 hover:shadow-safeglobal/35 transition-all gap-2"
                >
                  <Link href="/contact">
                    Schedule a Demo
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
