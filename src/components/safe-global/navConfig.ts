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
    label: "EHS / AI",
    href: "/ehs-ai",
    megaMenu: {
      label: "EHS / AI",
      href: "/ehs-ai",
      columns: [
        {
          title: "AI-Powered Safety",
          items: [
            {
              label: "AI Safety Monitoring",
              description: "Real-time hazard detection using computer vision and sensor fusion",
              href: "/ehs-ai/ai-safety-monitoring",
              icon: Eye,
              featured: true,
              badge: "Popular",
              color: "safeglobal",
            },
            {
              label: "Predictive Risk Analytics",
              description: "ML-driven risk forecasting with 94% accuracy",
              href: "/ehs-ai/predictive-risk-analytics",
              icon: Brain,
              color: "cyan",
            },
            {
              label: "Compliance Automation",
              description: "Auto-track 200+ regulations with smart alerts",
              href: "/ehs-ai/compliance-automation",
              icon: FileCheck,
              color: "violet",
            },
          ],
        },
        {
          title: "Integration & Intelligence",
          items: [
            {
              label: "IoT Safety Integration",
              description: "Connect 1000+ sensor types for unified monitoring",
              href: "/ehs-ai/iot-integration",
              icon: Cpu,
              featured: true,
              badge: "New",
              color: "amber",
            },
            {
              label: "Workplace Intelligence Systems",
              description: "Transform safety data into actionable insights",
              href: "/ehs-ai/workplace-intelligence",
              icon: Activity,
              color: "safeglobal",
            },
            {
              label: "Safety Dashboards",
              description: "Real-time KPI tracking with customizable views",
              href: "/ehs-ai/safety-dashboards",
              icon: Monitor,
              color: "cyan",
            },
          ],
        },
        {
          title: "Advanced Solutions",
          items: [
            {
              label: "Emergency Response AI",
              description: "Automated incident response and evacuation guidance",
              href: "/ehs-ai/emergency-response-ai",
              icon: Bell,
              badge: "AI",
              color: "rose",
            },
            {
              label: "Safety Training VR",
              description: "Immersive VR training simulations for high-risk scenarios",
              href: "/ehs-ai/safety-training-vr",
              icon: Layers,
              color: "violet",
            },
            {
              label: "Predictive Maintenance",
              description: "AI-driven equipment health monitoring and failure prediction",
              href: "/ehs-ai/predictive-maintenance",
              icon: TrendingUp,
              color: "safeglobal",
            },
            {
              label: "Hazard Mapping",
              description: "Spatial risk visualization with geospatial analytics",
              href: "/ehs-ai/hazard-mapping",
              icon: Radar,
              color: "cyan",
            },
            {
              label: "Safety Audit Manager",
              description: "Digital audit workflows with auto-generated reports",
              href: "/ehs-ai/safety-audit-manager",
              icon: FileCheck,
              color: "amber",
            },
            {
              label: "Access Control AI",
              description: "Intelligent zone authorization and visitor management",
              href: "/ehs-ai/access-control-ai",
              icon: Lock,
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
              href: "/industries/manufacturing",
              icon: FlaskConical,
              color: "amber",
            },
          ],
        },
        {
          title: "Construction & Energy",
          items: [
            {
              label: "Construction Site Safety",
              description: "Wearable tech + AI for real-time hazard alerts",
              href: "/industries/construction",
              icon: HardHat,
              color: "amber",
            },
            {
              label: "Oil & Gas Operations",
              description: "Remote monitoring and incident prevention",
              href: "/industries/oil-gas",
              icon: Building2,
              featured: true,
              badge: "New",
              color: "rose",
            },
          ],
        },
        {
          title: "Healthcare & Logistics",
          items: [
            {
              label: "Healthcare Facility Safety",
              description: "Patient and staff safety intelligence",
              href: "/industries/healthcare",
              icon: Stethoscope,
              color: "cyan",
            },
            {
              label: "Logistics & Warehousing",
              description: "Fleet and warehouse risk management",
              href: "/industries/logistics-warehousing",
              icon: Truck,
              color: "violet",
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
};
