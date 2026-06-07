"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  AlertTriangle,
  Flame,
  Cross,
  Heart,
  Phone,
  MapPin,
  Clock,
  Users,
  DoorOpen,
  Radio,
  Zap,
  CheckCircle2,
  Activity,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type HazardLevel = "low" | "medium" | "high" | "critical";

interface ZoneData {
  id: string;
  label: string;
  hazardLevel: HazardLevel;
  hazardLabel: string;
  nearestExit: string;
  nearestExitDist: string;
  emergencyContacts: { name: string; role: string; phone: string }[];
  equipment: { type: string; icon: string; count: number }[];
  workers: number;
  riskScore: number;
}

const zones: ZoneData[] = [
  {
    id: "A",
    label: "Assembly Line",
    hazardLevel: "medium",
    hazardLabel: "Medium",
    nearestExit: "Exit A1 (North)",
    nearestExitDist: "45m",
    emergencyContacts: [
      { name: "Mike Torres", role: "Zone Supervisor", phone: "+1-555-0101" },
      { name: "Sarah Kim", role: "Safety Officer", phone: "+1-555-0102" },
    ],
    equipment: [
      { type: "Fire Extinguisher", icon: "flame", count: 4 },
      { type: "First Aid Kit", icon: "heart", count: 3 },
      { type: "AED", icon: "cross", count: 1 },
    ],
    workers: 45,
    riskScore: 62,
  },
  {
    id: "B",
    label: "Chemical Storage",
    hazardLevel: "critical",
    hazardLabel: "Critical",
    nearestExit: "Exit B2 (East)",
    nearestExitDist: "30m",
    emergencyContacts: [
      { name: "Dr. Lisa Chen", role: "HazMat Lead", phone: "+1-555-0201" },
      { name: "Tom Wright", role: "Security Chief", phone: "+1-555-0202" },
    ],
    equipment: [
      { type: "Fire Extinguisher", icon: "flame", count: 6 },
      { type: "First Aid Kit", icon: "heart", count: 2 },
      { type: "AED", icon: "cross", count: 2 },
      { type: "Spill Kit", icon: "shield", count: 4 },
    ],
    workers: 12,
    riskScore: 91,
  },
  {
    id: "C",
    label: "Loading Dock",
    hazardLevel: "high",
    hazardLabel: "High",
    nearestExit: "Exit C1 (South)",
    nearestExitDist: "60m",
    emergencyContacts: [
      { name: "James Park", role: "Dock Supervisor", phone: "+1-555-0301" },
      { name: "Ana Ruiz", role: "Safety Officer", phone: "+1-555-0302" },
    ],
    equipment: [
      { type: "Fire Extinguisher", icon: "flame", count: 3 },
      { type: "First Aid Kit", icon: "heart", count: 2 },
      { type: "AED", icon: "cross", count: 1 },
    ],
    workers: 28,
    riskScore: 74,
  },
  {
    id: "D",
    label: "Office Wing",
    hazardLevel: "low",
    hazardLabel: "Low",
    nearestExit: "Exit D1 (West)",
    nearestExitDist: "20m",
    emergencyContacts: [
      { name: "Rachel Green", role: "Floor Manager", phone: "+1-555-0401" },
      { name: "David Lee", role: "Fire Warden", phone: "+1-555-0402" },
    ],
    equipment: [
      { type: "Fire Extinguisher", icon: "flame", count: 2 },
      { type: "First Aid Kit", icon: "heart", count: 1 },
    ],
    workers: 150,
    riskScore: 18,
  },
  {
    id: "E",
    label: "Server Room",
    hazardLevel: "medium",
    hazardLabel: "Medium",
    nearestExit: "Exit E1 (North-East)",
    nearestExitDist: "35m",
    emergencyContacts: [
      { name: "Kenji Sato", role: "IT Director", phone: "+1-555-0501" },
      { name: "Emma Walsh", role: "Facilities Mgr", phone: "+1-555-0502" },
    ],
    equipment: [
      { type: "Fire Extinguisher", icon: "flame", count: 2 },
      { type: "First Aid Kit", icon: "heart", count: 1 },
      { type: "AED", icon: "cross", count: 1 },
    ],
    workers: 8,
    riskScore: 55,
  },
  {
    id: "F",
    label: "Break Room",
    hazardLevel: "low",
    hazardLabel: "Low",
    nearestExit: "Exit F1 (South-West)",
    nearestExitDist: "15m",
    emergencyContacts: [
      { name: "Nina Patel", role: "HR Coordinator", phone: "+1-555-0601" },
      { name: "Carlos Vega", role: "First Aider", phone: "+1-555-0602" },
    ],
    equipment: [
      { type: "Fire Extinguisher", icon: "flame", count: 1 },
      { type: "First Aid Kit", icon: "heart", count: 2 },
    ],
    workers: 35,
    riskScore: 12,
  },
];

const hazardColors: Record<HazardLevel, { bg: string; text: string; border: string; glow: string; fill: string }> = {
  low: {
    bg: "bg-teal-600/15",
    text: "text-teal-500",
    border: "border-teal-600/30",
    glow: "rgba(45,122,111,0.2)",
    fill: "#2d7a6f",
  },
  medium: {
    bg: "bg-amber-500/15",
    text: "text-amber-400",
    border: "border-amber-500/30",
    glow: "rgba(245,158,11,0.2)",
    fill: "#f59e0b",
  },
  high: {
    bg: "bg-orange-500/15",
    text: "text-orange-400",
    border: "border-orange-500/30",
    glow: "rgba(249,115,22,0.2)",
    fill: "#f97316",
  },
  critical: {
    bg: "bg-red-500/15",
    text: "text-red-400",
    border: "border-red-500/30",
    glow: "rgba(239,68,68,0.2)",
    fill: "#ef4444",
  },
};

/* Zone SVG rect positions (in a 800x500 viewBox) */
const zonePositions: Record<string, { x: number; y: number; w: number; h: number; cx: number; cy: number }> = {
  A: { x: 20, y: 20, w: 250, h: 200, cx: 145, cy: 120 },
  B: { x: 290, y: 20, w: 220, h: 200, cx: 400, cy: 120 },
  C: { x: 530, y: 20, w: 250, h: 200, cx: 655, cy: 120 },
  D: { x: 20, y: 240, w: 250, h: 240, cx: 145, cy: 360 },
  E: { x: 290, y: 240, w: 220, h: 240, cx: 400, cy: 360 },
  F: { x: 530, y: 240, w: 250, h: 240, cx: 655, cy: 360 },
};

/* Evacuation routes (paths from each zone center to assembly points) */
const evacuationRoutes: { zoneId: string; points: string; assembly: { x: number; y: number } }[] = [
  {
    zoneId: "A",
    points: "M 145 120 L 145 220 L 400 220 L 400 470",
    assembly: { x: 400, y: 490 },
  },
  {
    zoneId: "B",
    points: "M 400 120 L 400 220 L 400 470",
    assembly: { x: 400, y: 490 },
  },
  {
    zoneId: "C",
    points: "M 655 120 L 655 220 L 400 220 L 400 470",
    assembly: { x: 400, y: 490 },
  },
  {
    zoneId: "D",
    points: "M 145 360 L 145 470 L 400 470",
    assembly: { x: 400, y: 490 },
  },
  {
    zoneId: "E",
    points: "M 400 360 L 400 470",
    assembly: { x: 400, y: 490 },
  },
  {
    zoneId: "F",
    points: "M 655 360 L 655 470 L 400 470",
    assembly: { x: 400, y: 490 },
  },
];

/* Equipment positions on map */
const equipmentPositions = [
  { type: "fire", x: 60, y: 50, label: "FE-1" },
  { type: "fire", x: 240, y: 180, label: "FE-2" },
  { type: "fire", x: 340, y: 50, label: "FE-3" },
  { type: "fire", x: 500, y: 180, label: "FE-4" },
  { type: "fire", x: 570, y: 50, label: "FE-5" },
  { type: "fire", x: 750, y: 180, label: "FE-6" },
  { type: "fire", x: 60, y: 280, label: "FE-7" },
  { type: "fire", x: 240, y: 440, label: "FE-8" },
  { type: "firstaid", x: 180, y: 100, label: "FA-1" },
  { type: "firstaid", x: 440, y: 150, label: "FA-2" },
  { type: "firstaid", x: 700, y: 150, label: "FA-3" },
  { type: "firstaid", x: 150, y: 400, label: "FA-4" },
  { type: "aed", x: 380, y: 300, label: "AED-1" },
  { type: "aed", x: 600, y: 350, label: "AED-2" },
  { type: "aed", x: 100, y: 180, label: "AED-3" },
];

/* Assembly points */
const assemblyPoints = [
  { x: 400, y: 490, label: "Main Assembly Point" },
  { x: 145, y: 490, label: "Secondary Assembly (West)" },
];

/* Exit positions */
const exitMarkers = [
  { x: 145, y: 8, label: "Exit A1" },
  { x: 400, y: 8, label: "Exit B1" },
  { x: 655, y: 8, label: "Exit C1" },
  { x: 8, y: 360, label: "Exit D1" },
  { x: 510, y: 238, label: "Exit E1" },
  { x: 792, y: 360, label: "Exit F1" },
];

const statsBarData = [
  { icon: Activity, label: "Active Zones Monitored", value: "6 / 6", color: "text-safeglobal" },
  { icon: Clock, label: "Emergency Response Time", value: "< 2 min", color: "text-amber-400" },
  { icon: CheckCircle2, label: "Evacuation Routes Clear", value: "6 / 6", color: "text-teal-500" },
  { icon: Shield, label: "Last Drill Date", value: "Feb 28, 2025", color: "text-teal-400" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function EmergencyResponseMap() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [simulating, setSimulating] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const selectedZoneData = zones.find((z) => z.id === selectedZone) ?? null;

  /* Derive simPhase from countdown to avoid setState in effect */
  const simPhase = useMemo(() => {
    if (!simulating) return 0;
    if (countdown > 7) return 1;
    if (countdown > 4) return 2;
    if (countdown > 1) return 3;
    if (countdown === 1) return 4;
    return 4;
  }, [simulating, countdown]);

  /* Simulation logic */
  const resetSimulation = useCallback(() => {
    setSimulating(false);
    setCountdown(0);
  }, []);

  const startSimulation = useCallback(() => {
    if (!selectedZone) return;
    setSimulating(true);
    setCountdown(10);
  }, [selectedZone]);

  useEffect(() => {
    if (!simulating) return;
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [simulating]);

  /* Auto-reset when simulation completes (countdown reaches 0) */
  useEffect(() => {
    if (!simulating) return;
    if (countdown === 0) {
      const t = setTimeout(resetSimulation, 2500);
      return () => clearTimeout(t);
    }
  }, [countdown, simulating, resetSimulation]);

  const simStatusText: Record<number, string> = {
    0: "System Ready — No Active Emergencies",
    1: "⚠ ALERT — Hazard Detected in Zone " + (selectedZone ?? ""),
    2: "🚨 EVACUATING — Follow marked routes immediately",
    3: "📍 ASSEMBLING — Report to nearest assembly point",
    4: "✅ ALL CLEAR — Emergency resolved, safe to return",
  };

  const getZoneFill = (zoneId: string) => {
    const zone = zones.find((z) => z.id === zoneId);
    if (!zone) return "rgba(45,122,111,0.05)";

    const base = hazardColors[zone.hazardLevel].fill;

    if (simulating && selectedZone === zoneId) {
      if (simPhase === 1) return "rgba(239,68,68,0.25)";
      if (simPhase === 2) return "rgba(239,68,68,0.35)";
      if (simPhase >= 3) return "rgba(239,68,68,0.15)";
    }

    const opacity = selectedZone === zoneId ? 0.15 : 0.05;
    if (zone.hazardLevel === "critical") return `rgba(239,68,68,${opacity})`;
    if (zone.hazardLevel === "high") return `rgba(249,115,22,${opacity})`;
    if (zone.hazardLevel === "medium") return `rgba(245,158,11,${opacity})`;
    return `rgba(45,122,111,${opacity})`;
  };

  const getZoneStroke = (zoneId: string) => {
    const zone = zones.find((z) => z.id === zoneId);
    if (!zone) return "rgba(45,122,111,0.2)";

    if (simulating && selectedZone === zoneId && simPhase <= 2) return "rgba(239,68,68,0.8)";
    if (selectedZone === zoneId) return hazardColors[zone.hazardLevel].fill;

    if (zone.hazardLevel === "critical") return "rgba(239,68,68,0.3)";
    if (zone.hazardLevel === "high") return "rgba(249,115,22,0.3)";
    if (zone.hazardLevel === "medium") return "rgba(245,158,11,0.3)";
    return "rgba(45,122,111,0.2)";
  };

  /* Equipment icon SVG */
  const EquipmentIcon = ({ type, x, y, label }: { type: string; x: number; y: number; label: string }) => {
    const color =
      type === "fire" ? "#ef4444" : type === "firstaid" ? "#2d7a6f" : "#5b8a72";
    const bgColor =
      type === "fire" ? "rgba(239,68,68,0.15)" : type === "firstaid" ? "rgba(45,122,111,0.15)" : "rgba(91,138,114,0.15)";

    return (
      <g className="cursor-pointer" opacity={0.9}>
        <circle cx={x} cy={y} r={10} fill={bgColor} stroke={color} strokeWidth={1.5} />
        {type === "fire" && (
          <path d={`M${x - 4} ${y + 3} L${x} ${y - 5} L${x + 4} ${y + 3} Z`} fill={color} />
        )}
        {type === "firstaid" && (
          <>
            <rect x={x - 4} y={y - 1.5} width={8} height={3} rx={1} fill={color} />
            <rect x={x - 1.5} y={y - 4} width={3} height={8} rx={1} fill={color} />
          </>
        )}
        {type === "aed" && (
          <>
            <path d={`M${x} ${y - 5} L${x + 4} ${y + 1} L${x + 1} ${y + 1} L${x + 3} ${y + 5} L${x - 2} ${y + 1} L${x} ${y + 1} Z`} fill={color} />
          </>
        )}
        <text x={x} y={y + 20} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">
          {label}
        </text>
      </g>
    );
  };

  return (
    <section id="emergency-map" className="relative py-20 lg:py-28 overflow-hidden section-divider">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dot-pattern" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safeglobal/30 to-transparent" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-red-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-safeglobal/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge
            variant="outline"
            className="border-red-500/30 text-red-400 bg-red-500/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
          >
            <AlertTriangle className="w-3 h-3 mr-1.5" />
            EMERGENCY RESPONSE
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Emergency{" "}
            <span className="text-gradient">Response Map</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interactive facility emergency simulation. Click any zone to view
            hazard details, evacuation routes, and emergency equipment
            locations.
          </p>
        </motion.div>

        {/* Main Content: Map + Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-3 gap-6 mb-6"
        >
          {/* Floor Plan Map */}
          <div className="lg:col-span-2 glass-card rounded-2xl border border-border overflow-hidden">
            {/* Map Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-card/50">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-safeglobal" />
                <span className="text-sm font-semibold">Facility Floor Plan</span>
                <Badge className="bg-safeglobal/20 text-safeglobal text-[10px] border-safeglobal/30">
                  LIVE
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> Fire Ext.
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600" /> First Aid
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500" /> AED
                </span>
              </div>
            </div>

            {/* SVG Map */}
            <div className="p-4 overflow-x-auto">
              <svg
                viewBox="0 0 800 510"
                className="w-full min-w-[600px] h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Dash animation for evacuation routes */}
                  <style>{`
                    .evac-route {
                      stroke-dasharray: 8 6;
                      animation: dash-flow 1s linear infinite;
                    }
                    .evac-route-inactive {
                      stroke-dasharray: 4 8;
                      opacity: 0.15;
                    }
                    @keyframes dash-flow {
                      to { stroke-dashoffset: -28; }
                    }
                  `}</style>

                  {/* Glow filter */}
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Radial glow for assembly points */}
                  <radialGradient id="assemblyGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#2d7a6f" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2d7a6f" stopOpacity="0" />
                  </radialGradient>

                  <radialGradient id="alertGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Background grid */}
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(45,122,111,0.06)" strokeWidth="0.5" />
                </pattern>
                <rect width="800" height="510" fill="url(#grid)" />

                {/* Zone Rectangles */}
                {Object.entries(zonePositions).map(([zoneId, pos]) => {
                  const zone = zones.find((z) => z.id === zoneId);
                  const isSelected = selectedZone === zoneId;
                  const isSimAlert = simulating && selectedZone === zoneId && simPhase <= 2;

                  return (
                    <g
                      key={zoneId}
                      className="cursor-pointer"
                      onClick={() => {
                        if (!simulating) setSelectedZone(zoneId);
                      }}
                    >
                      {/* Zone fill */}
                      <rect
                        x={pos.x}
                        y={pos.y}
                        width={pos.w}
                        height={pos.h}
                        rx={8}
                        fill={getZoneFill(zoneId)}
                        stroke={getZoneStroke(zoneId)}
                        strokeWidth={isSelected ? 2 : 1}
                        className="transition-all duration-300"
                      />

                      {/* Simulating flash overlay */}
                      {isSimAlert && (
                        <rect
                          x={pos.x}
                          y={pos.y}
                          width={pos.w}
                          height={pos.h}
                          rx={8}
                          fill="rgba(239,68,68,0.15)"
                          className="animate-pulse"
                        />
                      )}

                      {/* Alert glow during simulation */}
                      {isSimAlert && (
                        <circle cx={pos.cx} cy={pos.cy} r={50} fill="url(#alertGlow)" filter="url(#glow-strong)">
                          <animate attributeName="r" values="30;60;30" dur="1.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                      )}

                      {/* Zone Label */}
                      <text
                        x={pos.x + 16}
                        y={pos.y + 28}
                        fill={isSelected ? hazardColors[zone!.hazardLevel].fill : "rgba(255,255,255,0.5)"}
                        fontSize="14"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        Zone {zoneId}
                      </text>
                      <text
                        x={pos.x + 16}
                        y={pos.y + 44}
                        fill="rgba(255,255,255,0.35)"
                        fontSize="10"
                        fontFamily="sans-serif"
                      >
                        {zone?.label}
                      </text>

                      {/* Worker count */}
                      <text
                        x={pos.x + pos.w - 16}
                        y={pos.y + 28}
                        fill="rgba(255,255,255,0.4)"
                        fontSize="10"
                        textAnchor="end"
                        fontFamily="monospace"
                      >
                        {zone?.workers} workers
                      </text>

                      {/* Hazard indicator dot */}
                      <circle
                        cx={pos.x + pos.w - 16}
                        cy={pos.y + pos.h - 16}
                        r={5}
                        fill={hazardColors[zone!.hazardLevel].fill}
                        opacity={0.8}
                      />
                      {isSelected && (
                        <circle
                          cx={pos.x + pos.w - 16}
                          cy={pos.y + pos.h - 16}
                          r={5}
                          fill="none"
                          stroke={hazardColors[zone!.hazardLevel].fill}
                          strokeWidth={2}
                          opacity={0.5}
                        >
                          <animate attributeName="r" values="5;15;5" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                        </circle>
                      )}
                    </g>
                  );
                })}

                {/* Exit Markers */}
                {exitMarkers.map((exit) => (
                  <g key={exit.label}>
                    <rect
                      x={exit.x - 12}
                      y={exit.y - 8}
                      width={24}
                      height={16}
                      rx={3}
                      fill="rgba(45,122,111,0.15)"
                      stroke="rgba(45,122,111,0.4)"
                      strokeWidth={1}
                    />
                    <text
                      x={exit.x}
                      y={exit.y + 3}
                      textAnchor="middle"
                      fill="#2d7a6f"
                      fontSize="7"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      EXIT
                    </text>
                  </g>
                ))}

                {/* Evacuation Routes */}
                {evacuationRoutes.map((route) => {
                  const isActive =
                    (simulating && selectedZone === route.zoneId && simPhase >= 2) ||
                    (selectedZone === route.zoneId && !simulating);

                  return (
                    <path
                      key={route.zoneId}
                      d={route.points}
                      fill="none"
                      stroke={isActive ? "#2d7a6f" : "rgba(45,122,111,0.15)"}
                      strokeWidth={isActive ? 2.5 : 1}
                      className={isActive ? "evac-route" : "evac-route-inactive"}
                      filter={isActive ? "url(#glow)" : undefined}
                    />
                  );
                })}

                {/* Assembly Points */}
                {assemblyPoints.map((ap) => {
                  const showPulse =
                    simulating && simPhase >= 3 && selectedZone !== null;
                  return (
                    <g key={ap.label}>
                      {/* Glow circle */}
                      <circle cx={ap.x} cy={ap.y} r={25} fill="url(#assemblyGlow)" />
                      {/* Outer ring */}
                      <circle
                        cx={ap.x}
                        cy={ap.y}
                        r={12}
                        fill="rgba(45,122,111,0.1)"
                        stroke="#2d7a6f"
                        strokeWidth={1.5}
                      />
                      {/* Inner dot */}
                      <circle cx={ap.x} cy={ap.y} r={5} fill="#2d7a6f" />
                      {/* Pulsing ring during assembly phase */}
                      {showPulse && (
                        <circle
                          cx={ap.x}
                          cy={ap.y}
                          r={12}
                          fill="none"
                          stroke="#2d7a6f"
                          strokeWidth={2}
                          opacity={0.6}
                        >
                          <animate attributeName="r" values="12;30;12" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
                        </circle>
                      )}
                      {/* Label */}
                      <text
                        x={ap.x}
                        y={ap.y + 28}
                        textAnchor="middle"
                        fill="#2d7a6f"
                        fontSize="8"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        {ap.label}
                      </text>
                    </g>
                  );
                })}

                {/* Equipment markers */}
                {equipmentPositions.map((eq) => (
                  <EquipmentIcon key={eq.label} type={eq.type} x={eq.x} y={eq.y} label={eq.label} />
                ))}
              </svg>
            </div>
          </div>

          {/* Sidebar Panel */}
          <div className="glass-card rounded-2xl border border-border overflow-hidden flex flex-col">
            {/* Sidebar Header */}
            <div className="px-5 py-3 border-b border-border bg-card/50">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-safeglobal" />
                <span className="text-sm font-semibold">Zone Details</span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto max-h-[520px] scrollbar-thin p-5">
              <AnimatePresence mode="wait">
                {selectedZoneData ? (
                  <motion.div
                    key={selectedZoneData.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    {/* Zone Title */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg font-bold">Zone {selectedZoneData.id}</span>
                        <Badge
                          className={`${hazardColors[selectedZoneData.hazardLevel].bg} ${hazardColors[selectedZoneData.hazardLevel].text} border-transparent text-[10px] font-semibold`}
                        >
                          {selectedZoneData.hazardLabel}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{selectedZoneData.label}</p>
                    </div>

                    {/* Risk Score */}
                    <div className="p-4 rounded-xl border border-border bg-card/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Risk Score
                        </span>
                        <span
                          className={`text-lg font-bold ${hazardColors[selectedZoneData.hazardLevel].text}`}
                        >
                          {selectedZoneData.riskScore}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-border overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${selectedZoneData.riskScore}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{
                            background: hazardColors[selectedZoneData.hazardLevel].fill,
                          }}
                        />
                      </div>
                    </div>

                    {/* Nearest Exit */}
                    <div className="p-4 rounded-xl border border-border bg-card/30">
                      <div className="flex items-center gap-2 mb-2">
                        <DoorOpen className="w-4 h-4 text-safeglobal" />
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Nearest Exit
                        </span>
                      </div>
                      <p className="text-sm font-medium">{selectedZoneData.nearestExit}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Distance: {selectedZoneData.nearestExitDist}
                      </p>
                    </div>

                    {/* Workers */}
                    <div className="p-4 rounded-xl border border-border bg-card/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-teal-400" />
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Active Workers
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-teal-400">{selectedZoneData.workers}</p>
                    </div>

                    {/* Emergency Contacts */}
                    <div className="p-4 rounded-xl border border-border bg-card/30">
                      <div className="flex items-center gap-2 mb-3">
                        <Phone className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Emergency Contacts
                        </span>
                      </div>
                      <div className="space-y-2.5">
                        {selectedZoneData.emergencyContacts.map((contact) => (
                          <div
                            key={contact.phone}
                            className="flex items-center justify-between"
                          >
                            <div>
                              <p className="text-sm font-medium">{contact.name}</p>
                              <p className="text-[10px] text-muted-foreground">{contact.role}</p>
                            </div>
                            <span className="text-[10px] font-mono text-safeglobal">{contact.phone}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Equipment */}
                    <div className="p-4 rounded-xl border border-border bg-card/30">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="w-4 h-4 text-safeglobal" />
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Equipment Available
                        </span>
                      </div>
                      <div className="space-y-2">
                        {selectedZoneData.equipment.map((eq) => (
                          <div
                            key={eq.type}
                            className="flex items-center justify-between"
                          >
                            <div className="flex items-center gap-2">
                              {eq.icon === "flame" && (
                                <Flame className="w-3.5 h-3.5 text-red-400" />
                              )}
                              {eq.icon === "heart" && (
                                <Heart className="w-3.5 h-3.5 text-teal-500" />
                              )}
                              {eq.icon === "cross" && (
                                <Cross className="w-3.5 h-3.5 text-teal-400" />
                              )}
                              {eq.icon === "shield" && (
                                <Shield className="w-3.5 h-3.5 text-amber-400" />
                              )}
                              <span className="text-sm">{eq.type}</span>
                            </div>
                            <Badge
                              variant="outline"
                              className="text-[10px] border-border text-muted-foreground px-1.5 py-0"
                            >
                              ×{eq.count}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-safeglobal/10 flex items-center justify-center mb-4">
                      <MapPin className="w-8 h-8 text-safeglobal/40" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Select a zone on the map to view emergency details
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Simulate Emergency Button */}
            <div className="p-4 border-t border-border bg-card/30">
              {simulating ? (
                <div className="space-y-3">
                  {/* Status */}
                  <div
                    className={`p-3 rounded-lg text-xs font-medium text-center ${
                      simPhase === 1
                        ? "bg-red-500/15 text-red-400 border border-red-500/30"
                        : simPhase === 2
                          ? "bg-orange-500/15 text-orange-400 border border-orange-500/30"
                          : simPhase === 3
                            ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                            : "bg-teal-600/15 text-teal-500 border border-teal-600/30"
                    }`}
                  >
                    {simStatusText[simPhase]}
                  </div>

                  {/* Countdown */}
                  {simPhase < 4 && (
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xl font-bold font-mono text-foreground">
                        {countdown}
                      </span>
                      <span className="text-xs text-muted-foreground">seconds</span>
                    </div>
                  )}

                  {/* Reset Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-border hover:border-safeglobal/30 text-xs"
                    onClick={resetSimulation}
                  >
                    Reset Simulation
                  </Button>
                </div>
              ) : (
                <Button
                  className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 hover:border-red-500/50 text-sm font-medium gap-2 transition-all duration-300"
                  disabled={!selectedZone}
                  onClick={startSimulation}
                >
                  <Zap className="w-4 h-4" />
                  Simulate Emergency{selectedZone ? ` — Zone ${selectedZone}` : ""}
                </Button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Emergency Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {statsBarData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
              className="glass-card p-4 rounded-xl border border-border text-center group hover:border-safeglobal/30 transition-all duration-300"
            >
              <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`} />
              <div className={`text-lg sm:text-xl font-bold ${stat.color} mb-0.5`}>
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
