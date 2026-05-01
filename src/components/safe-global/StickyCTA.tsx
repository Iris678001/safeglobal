"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/safe-global/MagneticButton";
import { X, ChevronRight, Shield } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-slide-up">
      <div className="bg-card/95 backdrop-blur-xl border-t border-safeglobal/20 shadow-[0_-8px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-safeglobal/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 text-safeglobal" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">
                Get Your Free Safety Audit
              </p>
              <p className="text-xs text-muted-foreground hidden sm:block truncate">
                Comprehensive risk assessment + ROI projection — no obligation
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <MagneticButton strength={0.3} distance={120}>
              <Button
                size="sm"
                className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/25 gap-1 h-9"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Request Demo
                <ChevronRight className="w-3.5 h-3.5" />
              </Button>
            </MagneticButton>
            <button
              onClick={() => setDismissed(true)}
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
