"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Menu,
  ChevronDown,
  ChevronRight,
  Phone,
  ArrowRight,
  Sparkles,
  Zap,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/safe-global/ThemeToggle";
import { navLinks, colorMap, type NavLink, type MegaMenuCategory } from "./navConfig";

// ─── MegaMenuDropdown (Desktop) ─────────────────────────────────────────────

function MegaMenuDropdown({ category }: { category: MegaMenuCategory }) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 w-[90vw] max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="bg-background/95 backdrop-blur-2xl border border-border rounded-2xl shadow-2xl shadow-black/20 dark:shadow-black/40 overflow-hidden"
      >
        {/* Top gradient accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-safeglobal to-transparent" />

        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.columns.map((column, colIdx) => (
              <div key={colIdx}>
                {/* Column header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-4 rounded-full bg-gradient-to-b from-safeglobal to-cyan-500" />
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    {column.title}
                  </h3>
                </div>

                {/* Column items */}
                <div className="space-y-1">
                  {column.items.map((item, itemIdx) => {
                    const colors = colorMap[item.color || "safeglobal"];
                    const Icon = item.icon;
                    return (
                      <a
                        key={itemIdx}
                        href={item.href}
                        className="group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 hover:bg-accent/50 relative"
                      >
                        {/* Icon */}
                        {Icon && (
                          <div
                            className={`flex-shrink-0 w-9 h-9 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center transition-all duration-200 group-hover:scale-110`}
                          >
                            <Icon className={`w-4 h-4 ${colors.text}`} />
                          </div>
                        )}

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-foreground group-hover:text-safeglobal transition-colors">
                              {item.label}
                            </span>
                            {item.badge && (
                              <span
                                className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-semibold rounded-full ${
                                  item.badge === "New"
                                    ? "bg-safeglobal/15 text-safeglobal"
                                    : item.badge === "AI"
                                    ? "bg-violet-500/15 text-violet-500"
                                    : item.badge === "Popular"
                                    ? "bg-amber-500/15 text-amber-500"
                                    : "bg-cyan-500/15 text-cyan-500"
                                }`}
                              >
                                {item.badge === "New" && <Zap className="w-2.5 h-2.5" />}
                                {item.badge === "AI" && <Sparkles className="w-2.5 h-2.5" />}
                                {item.badge}
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {/* Arrow on hover */}
                        <ArrowRight className="w-3.5 h-3.5 text-transparent group-hover:text-safeglobal group-hover:translate-x-0.5 transition-all duration-200 mt-1 flex-shrink-0" />
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Featured + CTA bar */}
          {(category.featured || category.cta) && (
            <div className="mt-6 pt-5 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Featured item */}
              {category.featured && (
                <a
                  href={category.featured.href}
                  className="group flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-safeglobal/5 via-cyan-500/5 to-safeglobal/5 border border-safeglobal/10 hover:border-safeglobal/25 transition-all duration-300 flex-1"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-safeglobal/20 to-cyan-500/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-safeglobal" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-foreground group-hover:text-safeglobal transition-colors">
                        {category.featured.title}
                      </span>
                      {category.featured.badge && (
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-safeglobal/15 text-safeglobal">
                          {category.featured.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                      {category.featured.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-safeglobal transition-colors flex-shrink-0 mt-0.5" />
                </a>
              )}

              {/* CTA button */}
              {category.cta && (
                <a
                  href={category.cta.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-safeglobal hover:bg-safeglobal-dark text-white text-sm font-semibold shadow-lg shadow-safeglobal/25 hover:shadow-safeglobal/40 transition-all duration-200 flex-shrink-0"
                >
                  {category.cta.label}
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

// ─── Mobile Accordion Item ──────────────────────────────────────────────────

function MobileAccordionItem({
  link,
  isOpen,
  onToggle,
  onNavClick,
}: {
  link: NavLink;
  isOpen: boolean;
  onToggle: () => void;
  onNavClick: (href: string) => void;
}) {
  return (
    <div>
      <button
        onClick={() => {
          if (link.megaMenu) {
            onToggle();
          } else {
            onNavClick(link.href);
          }
        }}
        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-all text-left cursor-pointer ${
          isOpen
            ? "text-safeglobal bg-safeglobal/10"
            : "text-muted-foreground hover:text-foreground hover:bg-accent"
        }`}
      >
        <span>{link.label}</span>
        {link.megaMenu && (
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        )}
      </button>

      {/* Accordion content */}
      <AnimatePresence>
        {isOpen && link.megaMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-2 space-y-3">
              {link.megaMenu.columns.map((column, colIdx) => (
                <div key={colIdx}>
                  <div className="flex items-center gap-2 px-4 py-1.5">
                    <div className="w-0.5 h-3 rounded-full bg-gradient-to-b from-safeglobal to-cyan-500" />
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                      {column.title}
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    {column.items.map((item, itemIdx) => {
                      const colors = colorMap[item.color || "safeglobal"];
                      const Icon = item.icon;
                      return (
                        <button
                          key={itemIdx}
                          onClick={() => onNavClick(item.href)}
                          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-accent/50 transition-all text-left cursor-pointer"
                        >
                          {Icon && (
                            <div
                              className={`flex-shrink-0 w-7 h-7 rounded-md ${colors.bg} ${colors.border} border flex items-center justify-center`}
                            >
                              <Icon className={`w-3.5 h-3.5 ${colors.text}`} />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-medium text-foreground">
                                {item.label}
                              </span>
                              {item.badge && (
                                <span
                                  className={`px-1 py-0.5 text-[9px] font-semibold rounded-full ${
                                    item.badge === "New"
                                      ? "bg-safeglobal/15 text-safeglobal"
                                      : item.badge === "AI"
                                      ? "bg-violet-500/15 text-violet-500"
                                      : "bg-amber-500/15 text-amber-500"
                                  }`}
                                >
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="text-[10px] text-muted-foreground line-clamp-1 mt-0.5">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Mobile featured */}
              {link.megaMenu.featured && (
                <button
                  onClick={() => onNavClick(link.megaMenu!.featured!.href)}
                  className="w-full flex items-center gap-3 p-3 mt-2 rounded-xl bg-gradient-to-r from-safeglobal/5 to-cyan-500/5 border border-safeglobal/15 text-left cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-safeglobal flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold text-foreground">
                      {link.megaMenu.featured.title}
                    </span>
                    <p className="text-[10px] text-muted-foreground line-clamp-1">
                      {link.megaMenu.featured.description}
                    </p>
                  </div>
                </button>
              )}

              {/* Mobile CTA */}
              {link.megaMenu.cta && (
                <button
                  onClick={() => onNavClick(link.megaMenu!.cta!.href)}
                  className="w-full flex items-center justify-center gap-2 mt-2 px-4 py-2.5 rounded-xl bg-safeglobal hover:bg-safeglobal-dark text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  {link.megaMenu.cta.label}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Header Component ──────────────────────────────────────────────────

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  // Scroll tracking
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mega menu on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileAccordion(null);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleMenuEnter = useCallback((label: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
    setOpenMenu(label);
  }, []);

  const handleMenuLeave = useCallback(() => {
    menuTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  }, []);

  return (
    <header
      ref={headerRef}
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
          <nav className="hidden lg:flex items-center gap-0.5 relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              const isMenuOpen = openMenu === link.label;
              const hasMegaMenu = !!link.megaMenu;

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasMegaMenu && handleMenuEnter(link.label)}
                  onMouseLeave={() => hasMegaMenu && handleMenuLeave()}
                >
                  <button
                    onClick={() => {
                      if (hasMegaMenu) {
                        setOpenMenu(isMenuOpen ? null : link.label);
                      } else {
                        handleNavClick(link.href);
                      }
                    }}
                    className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                      isActive || isMenuOpen
                        ? "text-safeglobal bg-safeglobal/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {link.label}
                    {hasMegaMenu && (
                      <motion.div
                        animate={{ rotate: isMenuOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                      </motion.div>
                    )}
                  </button>

                  {/* Mega menu dropdown */}
                  <AnimatePresence>
                    {hasMegaMenu && isMenuOpen && link.megaMenu && (
                      <MegaMenuDropdown category={link.megaMenu} />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
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
              <div className="flex flex-col gap-1 mt-8 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin">
                {navLinks.map((link) => (
                  <MobileAccordionItem
                    key={link.label}
                    link={link}
                    isOpen={mobileAccordion === link.label}
                    onToggle={() =>
                      setMobileAccordion(
                        mobileAccordion === link.label ? null : link.label
                      )
                    }
                    onNavClick={handleNavClick}
                  />
                ))}

                <div className="border-t border-border mt-4 pt-4 space-y-3">
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-sm text-muted-foreground">
                      Appearance
                    </span>
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
