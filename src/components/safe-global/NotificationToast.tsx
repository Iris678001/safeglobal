"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, AlertTriangle, Info, X } from "lucide-react";

type ToastType = "success" | "warning" | "info";

interface SafetyToast {
  id: number;
  type: ToastType;
  title: string;
  description: string;
}

const SAFETY_ALERTS: SafetyToast[] = [
  {
    id: 1,
    type: "success",
    title: "PPE Compliance Verified",
    description: "Zone A-7: All workers wearing required PPE",
  },
  {
    id: 2,
    type: "warning",
    title: "Noise Threshold Exceeded",
    description: "Floor 2: Levels at 87dB, limit is 85dB",
  },
  {
    id: 3,
    type: "info",
    title: "Safety Drill Complete",
    description: "Building C: Monthly fire drill completed successfully",
  },
  {
    id: 4,
    type: "success",
    title: "Equipment Check Passed",
    description: "Assembly Line: All machinery within safe parameters",
  },
  {
    id: 5,
    type: "warning",
    title: "Chemical Storage Alert",
    description: "Unit B3: Temperature approaching upper limit",
  },
  {
    id: 6,
    type: "info",
    title: "Compliance Score Updated",
    description: "Overall facility score increased to 96.2%",
  },
];

const TOAST_ICONS: Record<ToastType, typeof Shield> = {
  success: Shield,
  warning: AlertTriangle,
  info: Info,
};

const TOAST_COLORS: Record<
  ToastType,
  { border: string; icon: string; iconBg: string }
> = {
  success: {
    border: "border-l-teal-600",
    icon: "text-teal-600",
    iconBg: "bg-teal-600/15",
  },
  warning: {
    border: "border-l-amber-500",
    icon: "text-amber-500",
    iconBg: "bg-amber-500/15",
  },
  info: {
    border: "border-l-teal-500",
    icon: "text-teal-500",
    iconBg: "bg-teal-500/15",
  },
};

interface ActiveToast extends SafetyToast {
  uid: number;
  dismissed: boolean;
}

let uidCounter = 0;

export default function NotificationToast() {
  const [activeToasts, setActiveToasts] = useState<ActiveToast[]>([]);
  const [alertIndex, setAlertIndex] = useState(0);
  const [started, setStarted] = useState(false);

  const addToast = useCallback((alert: SafetyToast) => {
    const uid = ++uidCounter;
    const newToast: ActiveToast = { ...alert, uid, dismissed: false };

    setActiveToasts((prev) => {
      const filtered = prev.filter((t) => !t.dismissed);
      // Max 2 visible at a time
      const toShow = filtered.length >= 2 ? filtered.slice(1) : filtered;
      return [...toShow, newToast];
    });

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      setActiveToasts((prev) =>
        prev.map((t) => (t.uid === uid ? { ...t, dismissed: true } : t))
      );
    }, 5000);
  }, []);

  // Initial 3-second delay before first toast
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setStarted(true);
      addToast(SAFETY_ALERTS[0]);
      setAlertIndex(1);
    }, 3000);

    return () => clearTimeout(initialTimer);
  }, [addToast]);

  // Auto-cycle every 8 seconds after start
  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      const nextIndex = alertIndex % SAFETY_ALERTS.length;
      addToast(SAFETY_ALERTS[nextIndex]);
      setAlertIndex((prev) => prev + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, [started, alertIndex, addToast]);

  // Clean up dismissed toasts after animation completes
  useEffect(() => {
    if (activeToasts.some((t) => t.dismissed)) {
      const timer = setTimeout(() => {
        setActiveToasts((prev) => prev.filter((t) => !t.dismissed));
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [activeToasts]);

  const dismissToast = (uid: number) => {
    setActiveToasts((prev) =>
      prev.map((t) => (t.uid === uid ? { ...t, dismissed: true } : t))
    );
  };

  const visibleToasts = activeToasts.filter((t) => !t.dismissed);
  const hasContent = visibleToasts.length > 0;

  return (
    <div className="fixed top-24 right-6 z-50 flex flex-col items-end gap-2 pointer-events-none">
      <AnimatePresence>
        {hasContent && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex items-center gap-2 pointer-events-auto"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-600" />
            </span>
            <span className="text-xs font-semibold text-teal-500 tracking-wider uppercase">
              Live Alerts
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-2 pointer-events-auto">
        <AnimatePresence mode="popLayout">
          {activeToasts.map((toast) => {
            const Icon = TOAST_ICONS[toast.type];
            const colors = TOAST_COLORS[toast.type];

            return (
              <motion.div
                key={toast.uid}
                layout
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`
                  relative flex items-start gap-3 min-w-[300px] max-w-[360px]
                  rounded-lg border border-border border-l-4 ${colors.border}
                  bg-card/90 backdrop-blur-xl shadow-lg shadow-black/10
                  p-3.5
                `}
              >
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-md ${colors.iconBg} flex items-center justify-center`}
                >
                  <Icon className={`w-4 h-4 ${colors.icon}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-foreground leading-tight">
                    {toast.title}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                    {toast.description}
                  </p>
                  <p className="text-[10px] text-muted-foreground/50 mt-1">
                    Just now
                  </p>
                </div>

                {/* Close button */}
                <button
                  onClick={() => dismissToast(toast.uid)}
                  className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center text-muted-foreground/40 hover:text-muted-foreground hover:bg-muted/50 transition-colors cursor-pointer"
                  aria-label="Dismiss notification"
                >
                  <X className="w-3 h-3" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
