import {
  Shield,
  Brain,
  FileCheck,
  Cpu,
  BarChart3,
  Monitor,
  Factory,
  Building2,
  HardHat,
  Stethoscope,
  FlaskConical,
  Truck,
  Sparkles,
  Zap,
  Eye,
  Activity,
  Radar,
  Bell,
  TrendingUp,
  Lock,
  Globe,
  Layers,
  DollarSign,
  Package,
  Users,
  Wrench,
  FolderKanban,
  Settings,
  type LucideIcon,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface MegaMenuItem {
  label: string;
  description?: string;
  href: string;
  icon?: LucideIcon;
  featured?: boolean;
  badge?: string;
  color?: string;
}

export interface MegaMenuColumn {
  title: string;
  items: MegaMenuItem[];
}

export interface MegaMenuCategory {
  label: string;
  href: string;
  columns: MegaMenuColumn[];
  featured?: {
    title: string;
    description: string;
    href: string;
    badge?: string;
  };
  cta?: {
    label: string;
    href: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
  megaMenu?: MegaMenuCategory;
}

// ─── Navigation Data (Route-Based) ──────────────────────────────────────────

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Solutions",
    href: "/ehs-ai",
    megaMenu: {
      label: "Solutions",
      href: "/ehs-ai",
      columns: [
        {
          title: "AI powered data capture and analytics",
          items: [
            {
              label: "IoT Safety Integration",
              description: "Connect 1000+ sensor types for unified monitoring",
              href: "/ehs-ai/iot-integration",
              icon: Cpu,
              featured: true,
              badge: "Popular",
              color: "sky",
            },
            {
              label: "Process Safety Management",
              description: "Comprehensive safety protocols and hazard lifecycle tracking",
              href: "/ehs-ai/process-safety-management",
              icon: Activity,
              color: "amber",
            },
            {
              label: "Computer Vision",
              description: "Real-time hazard detection using multi-camera AI analysis",
              href: "/ehs-ai/ai-safety-monitoring",
              icon: Eye,
              color: "safeglobal",
            },
            {
              label: "Workplace Intelligence Systems",
              description: "Transform safety data into actionable insights",
              href: "/ehs-ai/workplace-intelligence",
              icon: Brain,
              color: "violet",
            },
          ],
        },
        {
          title: "EHS Management",
          items: [
            {
              label: "Compliance Automation",
              description: "Auto-track 200+ regulations with smart alerts",
              href: "/ehs-ai/compliance-automation",
              icon: FileCheck,
              color: "violet",
            },
            {
              label: "Safety Audit Manager",
              description: "Digital audit workflows with auto-generated reports",
              href: "/ehs-ai/safety-audit-manager",
              icon: FileCheck,
              color: "amber",
            },
            {
              label: "Safety Dashboards",
              description: "Real-time KPI tracking with customizable views",
              href: "/ehs-ai/safety-dashboards",
              icon: Monitor,
              color: "sky",
            },
            {
              label: "Hazard Mapping",
              description: "Spatial risk visualization with geospatial analytics",
              href: "/ehs-ai/hazard-mapping",
              icon: Radar,
              color: "cyan",
            },
          ],
        },

        {
          title: "Enterprise ERP",
          items: [
            {
              label: "Financial Management",
              description: "General ledger, AP/AR, budgeting & cost center tracking",
              href: "/erp#financial-management",
              icon: DollarSign,
              featured: true,
              badge: "New",
              color: "safeglobal",
            },
            {
              label: "Supply Chain Management",
              description: "Procurement, inventory, warehouse & logistics optimization",
              href: "/erp#supply-chain",
              icon: Package,
              color: "amber",
            },
            {
              label: "HR & Workforce Management",
              description: "Payroll, attendance, recruitment & employee lifecycle",
              href: "/erp#hr-workforce",
              icon: Users,
              color: "cyan",
            },
            {
              label: "Asset Management",
              description: "Fixed asset tracking, depreciation & maintenance planning",
              href: "/erp#asset-management",
              icon: Wrench,
              color: "violet",
            },
            {
              label: "Project Management",
              description: "Project costing, resource allocation & milestone tracking",
              href: "/erp#project-management",
              icon: FolderKanban,
              color: "rose",
            },
            {
              label: "Manufacturing & Production",
              description: "BOM management, production planning & shop floor control",
              href: "/erp#manufacturing",
              icon: Settings,
              color: "safeglobal",
            },
          ],
        },
      ],
      featured: {
        title: "AI Safety Platform 2.0",
        description:
          "Our next-gen platform now includes multi-modal AI, real-time compliance scoring, and predictive incident prevention across all industries.",
        href: "/ehs-ai",
        badge: "Just Released",
      },
      cta: {
        label: "View All Services",
        href: "/ehs-ai",
      },
    },
  },
  {
    label: "Industries",
    href: "/industries",
    megaMenu: {
      label: "Industries",
      href: "/industries",
      columns: [
        {
          title: "Manufacturing",
          items: [
            {
              label: "Smart Factory Safety",
              description: "IoT-connected production line monitoring",
              href: "/industries/manufacturing",
              icon: Factory,
              featured: true,
              badge: "Popular",
              color: "safeglobal",
            },
            {
              label: "Chemical Processing",
              description: "Hazardous material tracking and compliance",
              href: "/industries/chemical-processing",
              icon: FlaskConical,
              color: "amber",
            },
          ],
        },
        {
          title: "Construction",
          items: [
            {
              label: "Construction Site Safety",
              description: "Wearable tech + AI for real-time hazard alerts",
              href: "/industries/construction",
              icon: HardHat,
              color: "amber",
            },
          ],
        },
        {
          title: "Healthcare & Mining",
          items: [
            {
              label: "Healthcare Facility Safety",
              description: "Patient and staff safety intelligence",
              href: "/industries/healthcare",
              icon: Stethoscope,
              color: "sky",
            },
            {
              label: "Mining & Extraction",
              description: "Underground and open-pit safety systems",
              href: "/industries/mining-extraction",
              icon: Globe,
              color: "safeglobal",
            },
          ],
        },
        {
          title: "Energy & Logistics",
          items: [
            {
              label: "Oil & Gas Operations",
              description: "Remote monitoring and incident prevention",
              href: "/industries/oil-gas",
              icon: Building2,
              featured: true,
              badge: "New",
              color: "rose",
            },
            {
              label: "Logistics & Warehousing",
              description: "Fleet and warehouse risk management",
              href: "/industries/logistics-warehousing",
              icon: Truck,
              color: "violet",
            },
          ],
        },
      ],
      featured: {
        title: "Industry-Specific Solutions",
        description:
          "Tailored safety intelligence for every sector. 500K+ workers protected across 12 industries worldwide.",
        href: "/industries",
        badge: "Explore",
      },
      cta: {
        label: "View All Industries",
        href: "/industries",
      },
    },
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

// ─── Color mapping for item accents ─────────────────────────────────────────

export const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  safeglobal: {
    bg: "bg-safeglobal/10",
    text: "text-safeglobal",
    border: "border-safeglobal/20",
    glow: "group-hover:shadow-safeglobal/10",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-500",
    border: "border-cyan-500/20",
    glow: "group-hover:shadow-cyan-500/10",
  },
  violet: {
    bg: "bg-violet-500/10",
    text: "text-violet-500",
    border: "border-violet-500/20",
    glow: "group-hover:shadow-violet-500/10",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-500",
    border: "border-amber-500/20",
    glow: "group-hover:shadow-amber-500/10",
  },
  rose: {
    bg: "bg-rose-500/10",
    text: "text-rose-500",
    border: "border-rose-500/20",
    glow: "group-hover:shadow-rose-500/10",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-500",
    border: "border-emerald-500/20",
    glow: "group-hover:shadow-emerald-500/10",
  },
  sky: {
    bg: "bg-sky-500/10",
    text: "text-sky-500",
    border: "border-sky-500/20",
    glow: "group-hover:shadow-sky-500/10",
  },
};
