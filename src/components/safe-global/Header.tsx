"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Shield,
  Menu,
  ChevronRight,
  Phone,
} from "lucide-react";
import { ThemeToggle } from "@/components/safe-global/ThemeToggle";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-safeglobal to-cyan-500 flex items-center justify-center shadow-lg shadow-safeglobal/20 group-hover:shadow-safeglobal/40 transition-shadow">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-safeglobal rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-foreground">
                Safe<span className="text-safeglobal">Global</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase -mt-0.5 hidden sm:block">
                AI Safety Intelligence
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                  activeSection === link.href.replace("#", "")
                    ? "text-safeglobal bg-safeglobal/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground gap-1.5"
              onClick={() => handleNavClick("#contact")}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Sales</span>
            </Button>
            <Button
              size="sm"
              className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/25 hover:shadow-safeglobal/40 transition-all gap-1"
              onClick={() => handleNavClick("#contact")}
            >
              Request Demo
              <ChevronRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background border-border w-80"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-1 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-all text-left cursor-pointer ${
                      activeSection === link.href.replace("#", "")
                        ? "text-safeglobal bg-safeglobal/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="border-t border-border mt-4 pt-4 space-y-3">
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-sm text-muted-foreground">Appearance</span>
                    <ThemeToggle />
                  </div>
                  <Button
                    className="w-full bg-safeglobal hover:bg-safeglobal-dark text-white"
                    onClick={() => handleNavClick("#contact")}
                  >
                    Request Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-border"
                    onClick={() => handleNavClick("#contact")}
                  >
                    Get Consultation
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
