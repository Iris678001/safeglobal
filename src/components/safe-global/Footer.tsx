"use client";

import { useState } from "react";
import {
  Shield,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  ArrowUp,
  Send,
  CheckCircle2,
  Loader2,
  Mail,
  Award,
  Lock,
  Globe,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  "EHS / AI": [
    { label: "AI Safety Monitoring", href: "#services" },
    { label: "Predictive Risk Analytics", href: "#services" },
    { label: "Compliance Automation", href: "#services" },
    { label: "IoT Safety Integration", href: "#services" },
    { label: "Safety Dashboards", href: "#services" },
    { label: "Emergency Response AI", href: "#services" },
  ],
  Industries: [
    { label: "Manufacturing", href: "#industries" },
    { label: "Construction", href: "#industries" },
    { label: "Oil & Gas", href: "#industries" },
    { label: "Healthcare", href: "#industries" },
    { label: "Logistics & Warehousing", href: "#industries" },
    { label: "Mining & Extraction", href: "#industries" },
  ],
  Resources: [
    { label: "Case Studies", href: "#case-studies" },
    { label: "Blog & Insights", href: "#blog" },
    { label: "Resource Library", href: "#resources" },
    { label: "FAQ", href: "#faq" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Security & Compliance", href: "#security" },
    { label: "Partners", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

const officeLocations = [
  { name: "San Francisco", shortName: "SF", x: "14%", y: "38%" },
  { name: "London", shortName: "LDN", x: "46%", y: "28%" },
  { name: "Singapore", shortName: "SG", x: "74%", y: "58%" },
];

// Backed by investor/partner logos
const backedByLogos = [
  { initials: "YC", name: "Y Combinator", color: "from-orange-500 to-orange-600" },
  { initials: "SQ", name: "Sequoia Capital", color: "from-red-500 to-red-600" },
  { initials: "A16Z", name: "Andreessen Horowitz", color: "from-gray-500 to-gray-600" },
  { initials: "GV", name: "Google Ventures", color: "from-blue-500 to-blue-600" },
  { initials: "TCV", name: "Technology Crossover Ventures", color: "from-cyan-500 to-teal-500" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card/30 card-premium footer-grid-bg">
      {/* Animated gradient line at top */}
      <div className="divider-animated h-0" />

      {/* Backed By Row - above newsletter */}
      <div className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-xs text-muted-foreground/60 tracking-wide font-medium">Backed by</p>
            <div className="flex items-center gap-3">
              {backedByLogos.map((logo) => (
                <div
                  key={logo.initials}
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${logo.color} flex items-center justify-center text-white text-[10px] font-bold shadow-md hover:scale-110 transition-transform cursor-default`}
                  title={logo.name}
                >
                  {logo.initials}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Bar - with prominent gradient background */}
      <div className="relative border-b border-border overflow-hidden">
        {/* Gradient background for newsletter */}
        <div className="absolute inset-0 bg-gradient-to-r from-safeglobal/10 via-cyan-500/5 to-safeglobal/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-1">
                Stay Ahead of Safety Trends
              </h3>
              <p className="text-sm text-muted-foreground">
                Get weekly AI safety insights, compliance updates, and industry
                reports delivered to your inbox.
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex items-center gap-2 w-full lg:w-auto"
            >
              <div className="relative flex-1 lg:w-72">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 bg-background/50 border-border h-11"
                />
              </div>
              <Button
                type="submit"
                disabled={status === "loading"}
                className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/20 h-11 gap-2 flex-shrink-0"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : status === "success" ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {status === "success" ? "Subscribed!" : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-safeglobal to-cyan-500 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold">
                  Safe<span className="text-safeglobal">Global</span>
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              AI-powered workplace safety intelligence. Protecting 500,000+
              workers across 30+ countries with zero compromise.
            </p>

            {/* Decorative SVG World Map */}
            <div className="relative w-full h-20 rounded-lg overflow-hidden bg-background/30 border border-border/50">
              <svg
                viewBox="0 0 400 100"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Subtle grid lines */}
                <defs>
                  <pattern
                    id="footerGrid"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 20 0 L 0 0 0 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.3"
                      className="text-safeglobal/10"
                    />
                  </pattern>
                </defs>
                <rect width="400" height="100" fill="url(#footerGrid)" />

                {/* Simplified continent outlines */}
                <path
                  d="M 40 20 Q 55 15 70 20 Q 80 25 75 35 Q 70 50 60 55 Q 50 50 45 40 Q 38 30 40 20 Z"
                  fill="currentColor"
                  className="text-safeglobal/8"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <path
                  d="M 65 55 Q 72 50 78 55 Q 82 65 78 78 Q 72 85 68 80 Q 63 70 65 55 Z"
                  fill="currentColor"
                  className="text-safeglobal/8"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <path
                  d="M 170 18 Q 185 15 195 20 Q 200 28 195 32 Q 185 35 178 30 Q 172 25 170 18 Z"
                  fill="currentColor"
                  className="text-safeglobal/8"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <path
                  d="M 175 35 Q 185 32 195 38 Q 198 50 192 65 Q 185 72 180 68 Q 173 55 175 35 Z"
                  fill="currentColor"
                  className="text-safeglobal/8"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <path
                  d="M 210 15 Q 240 10 280 18 Q 310 25 320 35 Q 315 45 290 50 Q 260 48 240 42 Q 220 35 210 25 Z"
                  fill="currentColor"
                  className="text-safeglobal/8"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <path
                  d="M 300 60 Q 315 55 330 60 Q 335 68 325 72 Q 310 72 300 65 Z"
                  fill="currentColor"
                  className="text-safeglobal/8"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />

                {/* Office location dots */}
                {officeLocations.map((loc) => (
                  <g key={loc.name}>
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r="5"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="0.5"
                      opacity="0.4"
                    >
                      <animate
                        attributeName="r"
                        values="3;8;3"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.4;0;0.4"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r="2.5"
                      fill="#10b981"
                      opacity="0.9"
                    />
                    <text
                      x={loc.x}
                      y={Number(loc.y.replace("%", "")) + 12}
                      textAnchor="middle"
                      fill="currentColor"
                      className="text-safeglobal/50"
                      fontSize="5"
                      fontWeight="500"
                    >
                      {loc.shortName}
                    </text>
                  </g>
                ))}

                {/* Connecting lines between offices */}
                <line
                  x1="14%"
                  y1="38%"
                  x2="46%"
                  y2="28%"
                  stroke="#10b981"
                  strokeWidth="0.4"
                  strokeDasharray="4 4"
                  opacity="0.2"
                />
                <line
                  x1="46%"
                  y1="28%"
                  x2="74%"
                  y2="58%"
                  stroke="#10b981"
                  strokeWidth="0.4"
                  strokeDasharray="4 4"
                  opacity="0.2"
                />
              </svg>
            </div>

            {/* Office Locations */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-1.5 font-medium">
                Office Locations
              </p>
              <div className="flex items-center gap-3">
                {officeLocations.map((loc) => (
                  <span
                    key={loc.name}
                    className="flex items-center gap-1 text-[11px] text-muted-foreground/70"
                  >
                    <MapPin className="w-2.5 h-2.5 text-safeglobal/60" />
                    {loc.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Buttons - with hover effects */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Github, label: "GitHub" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-safeglobal hover:border-safeglobal/30 hover:bg-safeglobal/5 hover:scale-110 transition-all cursor-pointer"
                >
                  <Icon className="w-4.5 h-4.5" />
                </button>
              ))}
            </div>

            {/* Backed by */}
            <p className="text-[10px] text-muted-foreground/40 leading-relaxed">
              Backed by <span className="text-muted-foreground/60 font-medium">Y Combinator</span>,{" "}
              <span className="text-muted-foreground/60 font-medium">Sequoia Capital</span>
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => {
                        const el = document.querySelector(link.href);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-sm text-muted-foreground hover:text-safeglobal transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted by row */}
      <div className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/60">
            <Globe className="w-3.5 h-3.5 text-safeglobal/50" />
            <span>
              Trusted by{" "}
              <span className="text-safeglobal font-semibold">200+</span>{" "}
              enterprises worldwide
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span>
                &copy; {new Date().getFullYear()} SafeGlobal. All rights
                reserved.
              </span>
              <button className="hover:text-safeglobal transition-colors cursor-pointer">
                Privacy Policy
              </button>
              <button className="hover:text-safeglobal transition-colors cursor-pointer">
                Terms of Service
              </button>
              <button className="hover:text-safeglobal transition-colors cursor-pointer">
                Cookie Policy
              </button>
            </div>
            <div className="flex items-center gap-3">
              {/* Security Badges */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
                <div className="flex items-center gap-1 px-2 py-1 rounded border border-border/50">
                  <Lock className="w-3 h-3 text-safeglobal/60" />
                  <span>ISO 27001</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded border border-border/50">
                  <Shield className="w-3 h-3 text-safeglobal/60" />
                  <span>SOC 2</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded border border-border/50">
                  <Award className="w-3 h-3 text-safeglobal/60" />
                  <span>ISO 45001</span>
                </div>
              </div>

              {/* System Status Indicator */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5">
                <div className="relative flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div className="absolute w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </div>
                <span className="text-[10px] text-emerald-500 font-medium">All Systems Operational</span>
              </div>

              {/* Social Icons in bottom bar */}
              <div className="hidden lg:flex items-center gap-1.5">
                {[
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Github, label: "GitHub" },
                  { Icon: Youtube, label: "YouTube" },
                ].map(({ Icon, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="w-7 h-7 rounded-md flex items-center justify-center text-muted-foreground/40 hover:text-safeglobal hover:bg-safeglobal/5 transition-all cursor-pointer"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-safeglobal gap-1"
              >
                Back to top
                <ArrowUp className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
