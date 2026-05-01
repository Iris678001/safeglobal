"use client";

import { useState } from "react";
import {
  Shield,
  Linkedin,
  Twitter,
  Youtube,
  ArrowUp,
  Send,
  CheckCircle2,
  Loader2,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  Platform: [
    { label: "AI Safety Monitoring", href: "#services" },
    { label: "Predictive Risk Analytics", href: "#services" },
    { label: "Compliance Automation", href: "#services" },
    { label: "Safety Training", href: "#services" },
    { label: "IoT Integration", href: "#services" },
  ],
  Industries: [
    { label: "Manufacturing", href: "#industries" },
    { label: "Construction", href: "#industries" },
    { label: "Oil & Gas", href: "#industries" },
    { label: "Warehousing", href: "#industries" },
    { label: "Healthcare", href: "#industries" },
  ],
  Resources: [
    { label: "Case Studies", href: "#case-studies" },
    { label: "Blog & Insights", href: "#blog" },
    { label: "Safety Reports", href: "#blog" },
    { label: "Documentation", href: "#services" },
    { label: "API Reference", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#about" },
    { label: "Partners", href: "#about" },
    { label: "Press", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

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
    <footer className="relative border-t border-border bg-card/30">
      {/* Newsletter Bar */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-safeglobal hover:border-safeglobal/30 transition-all cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
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

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
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
    </footer>
  );
}
