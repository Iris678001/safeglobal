"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Menu,
  ChevronDown,
  ChevronRight,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/safe-global/ThemeToggle";
import { navLinks, type NavLink, type MegaMenuCategory } from "./navConfig";

// ─── MegaMenuDropdown (Desktop) ─────────────────────────────────────────────

function MegaMenuDropdown({ category, onNavigate }: { category: MegaMenuCategory; onNavigate: () => void }) {
  const colCount = category.columns.length;

  return (
    <div className={`fixed left-1/2 -translate-x-1/2 top-16 lg:top-20 pt-2 z-50 w-[95vw] ${colCount === 3 ? 'lg:w-[960px]' : 'lg:w-[1180px]'} max-w-[1240px]`}>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 6 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="bg-[#0e1117] border border-[#222730] shadow-2xl shadow-black/80 rounded-none overflow-hidden"
      >
        {/* Crisp solid brand accent line */}
        <div className="h-[2px] bg-safeglobal w-full" />

        <div className="p-6 lg:p-7">
          <div className={`grid grid-cols-1 md:grid-cols-2 ${colCount === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6 lg:gap-0 lg:divide-x lg:divide-[#222730]`}>
            {category.columns.map((column, colIdx) => (
              <div key={colIdx} className="lg:px-5 first:lg:pl-0 last:lg:pr-0">
                <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-[#222730]">
                  <span className="w-1.5 h-1.5 bg-safeglobal shrink-0" />
                  <h3 className="text-xs font-mono font-semibold text-neutral-200 uppercase tracking-wider">
                    {column.title}
                  </h3>
                </div>

                <div className="space-y-1">
                  {column.items.map((item, itemIdx) => (
                    <Link
                      key={itemIdx}
                      href={item.href}
                      onClick={onNavigate}
                      className="group block p-2.5 -mx-1 border-l-2 border-transparent hover:border-safeglobal hover:bg-[#161a22] transition-colors duration-150 rounded-none"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[13px] font-semibold text-neutral-100 group-hover:text-safeglobal transition-colors">
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className="text-[9px] font-mono font-medium uppercase px-1.5 py-0.5 border border-[#2d3340] bg-[#1a1e27] text-neutral-300 rounded-none shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {(category.featured || category.cta) && (
            <div className="mt-6 pt-4 border-t border-[#222730] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              {category.featured && (
                <Link
                  href={category.featured.href}
                  onClick={onNavigate}
                  className="group flex items-center justify-between gap-4 p-3.5 border border-[#222730] bg-[#12161f] hover:border-safeglobal/60 transition-colors flex-1 rounded-none"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase font-semibold text-safeglobal tracking-wider px-1.5 py-0.5 border border-safeglobal/30 bg-safeglobal/10">
                        {category.featured.badge || "PLATFORM"}
                      </span>
                      <span className="text-xs font-semibold text-neutral-100 group-hover:text-safeglobal transition-colors truncate">
                        {category.featured.title}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
                      {category.featured.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-safeglobal group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              )}

              {category.cta && (
                <Link
                  href={category.cta.href}
                  onClick={onNavigate}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-safeglobal hover:bg-safeglobal-dark text-white text-xs font-semibold tracking-wider uppercase transition-colors shrink-0 rounded-none border border-safeglobal"
                >
                  <span>{category.cta.label}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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
}: {
  link: NavLink;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      {link.megaMenu ? (
        <button
          onClick={onToggle}
          className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-none transition-all text-left cursor-pointer border-l-2 ${
            isOpen
              ? "text-safeglobal bg-safeglobal/10 border-safeglobal font-semibold"
              : "text-neutral-300 hover:text-white hover:bg-[#161a22] border-transparent"
          }`}
        >
          <span>{link.label}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>
      ) : (
        <Link
          href={link.href}
          className="block px-4 py-3 text-sm font-medium rounded-none transition-all text-neutral-300 hover:text-white hover:bg-[#161a22] border-l-2 border-transparent hover:border-safeglobal"
        >
          {link.label}
        </Link>
      )}

      <AnimatePresence>
        {isOpen && link.megaMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pl-3 pr-1 pb-3 space-y-4 pt-1">
              {link.megaMenu.columns.map((column, colIdx) => (
                <div key={colIdx} className="space-y-1">
                  <div className="flex items-center gap-2 px-3 py-1.5 border-b border-[#222730]">
                    <span className="w-1.5 h-1.5 bg-safeglobal shrink-0" />
                    <span className="text-[11px] font-mono font-semibold text-neutral-400 uppercase tracking-wider">
                      {column.title}
                    </span>
                  </div>
                  <div className="space-y-0.5 pt-1">
                    {column.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        href={item.href}
                        className="block px-3 py-2 border-l-2 border-transparent hover:border-safeglobal hover:bg-[#161a22] transition-colors text-left rounded-none"
                      >
                        <div className="flex items-center justify-between gap-1.5">
                          <span className="text-xs font-semibold text-neutral-100">
                            {item.label}
                          </span>
                          {item.badge && (
                            <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase border border-[#2d3340] bg-[#1a1e27] text-neutral-300 rounded-none">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5 font-normal">
                            {item.description}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {link.megaMenu.featured && (
                <Link
                  href={link.megaMenu.featured.href}
                  className="block p-3 mt-2 border border-[#222730] bg-[#12161f] rounded-none"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-mono uppercase font-semibold text-safeglobal px-1.5 py-0.5 border border-safeglobal/30 bg-safeglobal/10">
                      {link.megaMenu.featured.badge || "PLATFORM"}
                    </span>
                    <span className="text-xs font-semibold text-neutral-100">
                      {link.megaMenu.featured.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 line-clamp-1">
                    {link.megaMenu.featured.description}
                  </p>
                </Link>
              )}

              {link.megaMenu.cta && (
                <Link
                  href={link.megaMenu.cta.href}
                  className="flex items-center justify-center gap-2 mt-2 px-4 py-2.5 bg-safeglobal hover:bg-safeglobal-dark text-white text-xs font-semibold uppercase tracking-wider transition-all rounded-none border border-safeglobal"
                >
                  <span>{link.megaMenu.cta.label}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  // Scroll tracking for background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  // Track pathname for closing mobile menu
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileAccordion(null);
  }

  const isActiveRoute = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(href + "/");
    },
    [pathname]
  );

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

  const closeMegaMenu = useCallback(() => {
    setOpenMenu(null);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <img
                src="/logo.png"
                alt="Company Logo"
                className="h-16 w-auto object-contain scale-[1.35] origin-left"
                onError={(e) => {
                  // Fallback: hide the broken image and show the placeholder icon
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-safeglobal to-teal-500 items-center justify-center shadow-lg shadow-safeglobal/20 group-hover:shadow-safeglobal/40 transition-shadow hidden"
                style={{ display: 'none' }}
              >
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 relative">
            {navLinks.map((link) => {
              const isActive = isActiveRoute(link.href);
              const isMenuOpen = openMenu === link.label;
              const hasMegaMenu = !!link.megaMenu;

              const navLinkStyle = (isActive || isMenuOpen)
                ? "text-safeglobal bg-safeglobal/10 font-semibold"
                : scrolled
                  ? "text-gray-700 hover:text-black hover:bg-gray-100"
                  : "text-neutral-200 hover:text-white hover:bg-white/10";

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasMegaMenu && handleMenuEnter(link.label)}
                  onMouseLeave={() => hasMegaMenu && handleMenuLeave()}
                >
                  {hasMegaMenu ? (
                    <button
                      onClick={() => setOpenMenu(isMenuOpen ? null : link.label)}
                      className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${navLinkStyle}`}
                    >
                      {link.label}
                      <motion.div
                        animate={{ rotate: isMenuOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                      </motion.div>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`flex items-center px-3.5 py-2 text-sm font-medium transition-all duration-200 ${navLinkStyle}`}
                    >
                      {link.label}
                    </Link>
                  )}

                  <AnimatePresence>
                    {hasMegaMenu && isMenuOpen && link.megaMenu && (
                      <MegaMenuDropdown category={link.megaMenu} onNavigate={closeMegaMenu} />
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
              className={`gap-1.5 transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-black hover:bg-gray-100"
                  : "text-neutral-200 hover:text-white hover:bg-white/10"
              }`}
              asChild
            >
              <Link href="/contact">
                <Phone className="w-3.5 h-3.5" />
                <span>Sales</span>
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/25 hover:shadow-safeglobal/40 transition-all gap-1 rounded-none border border-safeglobal"
              asChild
            >
              <Link href="/contact">
                Request Demo
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={`transition-colors ${
                  scrolled
                    ? "text-gray-800 hover:text-black hover:bg-gray-100"
                    : "text-neutral-100 hover:text-white hover:bg-white/10"
                }`}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0e1117] border-[#222730] text-neutral-100 w-80">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-1 mt-8 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin">
                {navLinks.map((link) => (
                  <MobileAccordionItem
                    key={link.label}
                    link={link}
                    isOpen={mobileAccordion === link.label}
                    onToggle={() =>
                      setMobileAccordion(mobileAccordion === link.label ? null : link.label)
                    }
                  />
                ))}

                <div className="border-t border-[#222730] mt-4 pt-4 space-y-3">
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-sm text-neutral-400">Appearance</span>
                    <ThemeToggle />
                  </div>
                  <Button className="w-full bg-safeglobal hover:bg-safeglobal-dark text-white rounded-none border border-safeglobal" asChild>
                    <Link href="/contact">Request Demo</Link>
                  </Button>
                  <Button variant="outline" className="w-full border-[#222730] text-neutral-300 hover:bg-[#161a22] rounded-none" asChild>
                    <Link href="/contact">Get Consultation</Link>
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
