"use client";

import { useSyncExternalStore, useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Shield } from "lucide-react";

function useCookieConsent() {
  const subscribe = useCallback((callback: () => void) => {
    window.addEventListener("storage", callback);
    window.addEventListener("safeglobal-cookie-change", callback);
    return () => {
      window.removeEventListener("storage", callback);
      window.removeEventListener("safeglobal-cookie-change", callback);
    };
  }, []);

  const getSnapshot = useCallback(() => {
    return localStorage.getItem("safeglobal-cookie-consent") === "accepted";
  }, []);

  const getServerSnapshot = useCallback(() => {
    return false;
  }, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default function CookieConsent() {
  const isAccepted = useCookieConsent();
  const [locallyDismissed, setLocallyDismissed] = useState(false);

  const handleAcceptAll = () => {
    localStorage.setItem("safeglobal-cookie-consent", "accepted");
    window.dispatchEvent(new Event("safeglobal-cookie-change"));
  };

  const handleClose = () => {
    setLocallyDismissed(true);
  };

  if (isAccepted || locallyDismissed) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{ animation: "cookie-slide-up 0.5s ease-out forwards" }}
    >
      <div className="bg-card/95 backdrop-blur-xl border-t border-safeglobal/10 shadow-2xl shadow-black/20">
        {/* Premium gradient line at top */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-safeglobal/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Content */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-safeglobal/20 to-teal-500/10 flex items-center justify-center border border-safeglobal/15">
                <Shield className="w-4 h-4 text-safeglobal" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We use cookies to enhance your experience and analyze site usage.{" "}
                  <span className="text-safeglobal hover:underline cursor-pointer font-medium">
                    Cookie Policy
                  </span>
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 h-8"
              >
                Customize
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-md shadow-safeglobal/25 hover:shadow-safeglobal/35 transition-all text-xs h-8 px-4"
              >
                Accept All
              </Button>
              <button
                onClick={handleClose}
                className="text-muted-foreground/60 hover:text-foreground transition-colors p-1 rounded-md hover:bg-muted/50 cursor-pointer"
                aria-label="Close cookie consent"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
