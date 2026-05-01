"use client";

import { useSyncExternalStore, useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X, Shield } from "lucide-react";

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
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
      <div
        className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl max-w-2xl mx-auto p-6 relative"
        style={{ animation: "cookie-slide-up 0.5s ease-out forwards" }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-muted/50 cursor-pointer"
          aria-label="Close cookie consent"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="flex items-start gap-4 pr-8">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-safeglobal/10 flex items-center justify-center">
            <Cookie className="w-5 h-5 text-safeglobal" />
          </div>

          <div className="flex-1 space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-safeglobal" />
                <h3 className="text-sm font-semibold">Cookie Preferences</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use cookies to enhance your experience and analyze site
                usage. By continuing, you agree to our{" "}
                <span className="text-safeglobal hover:underline cursor-pointer">
                  Cookie Policy
                </span>
                .
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAcceptAll}
                className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-md shadow-safeglobal/20 hover:shadow-safeglobal/30 transition-all text-sm"
              >
                Accept All
              </Button>
              <Button
                variant="outline"
                className="border-border hover:border-safeglobal/50 hover:bg-safeglobal/5 text-sm"
              >
                Customize Preferences
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
