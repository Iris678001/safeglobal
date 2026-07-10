"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Shield,
  AlertTriangle,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface ScoreResult {
  score: number;
  level: string;
  color: string;
  recommendations: string[];
  potentialSavings: string;
}

function calculateScore(
  incidentRate: number,
  complianceLevel: number,
  trainingCompletion: number,
  technologyLevel: number
): ScoreResult {
  const rawScore =
    (100 - incidentRate * 10) * 0.3 +
    complianceLevel * 0.3 +
    trainingCompletion * 0.2 +
    technologyLevel * 0.2;

  const score = Math.round(Math.max(0, Math.min(100, rawScore)));

  let level: string, color: string;
  if (score >= 85) {
    level = "Excellent";
    color = "#2d7a6f";
  } else if (score >= 70) {
    level = "Good";
    color = "#5b8a72";
  } else if (score >= 50) {
    level = "Needs Improvement";
    color = "#f59e0b";
  } else {
    level = "Critical";
    color = "#ef4444";
  }

  const recommendations: string[] = [];
  if (incidentRate > 5)
    recommendations.push(
      "Deploy AI hazard detection to reduce incident frequency"
    );
  if (complianceLevel < 80)
    recommendations.push(
      "Implement automated compliance tracking and reporting"
    );
  if (trainingCompletion < 75)
    recommendations.push(
      "Launch AI-personalized safety training programs"
    );
  if (technologyLevel < 60)
    recommendations.push(
      "Upgrade to IoT-enabled safety monitoring systems"
    );
  if (recommendations.length === 0)
    recommendations.push(
      "Optimize with predictive analytics for near-zero incidents"
    );

  const savingsMultiplier = ((100 - score) / 100) * 0.7;
  const baseSavings = 500000;
  const potentialSavings = `$${((baseSavings * savingsMultiplier) / 1000).toFixed(0)}K-$${((baseSavings * savingsMultiplier * 3) / 1000).toFixed(0)}K`;

  return { score, level, color, recommendations, potentialSavings };
}

export default function SafetyScoreCalculator() {
  const [incidentRate, setIncidentRate] = useState(7);
  const [complianceLevel, setComplianceLevel] = useState(65);
  const [trainingCompletion, setTrainingCompletion] = useState(55);
  const [technologyLevel, setTechnologyLevel] = useState(40);
  const [result, setResult] = useState<ScoreResult | null>(null);

  const handleCalculate = useCallback(() => {
    const score = calculateScore(
      incidentRate,
      complianceLevel,
      trainingCompletion,
      technologyLevel
    );
    setResult(score);
  }, [incidentRate, complianceLevel, trainingCompletion, technologyLevel]);

  const circumference = 2 * Math.PI * 54;
  const scoreOffset = result
    ? circumference - (result.score / 100) * circumference
    : circumference;

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
          >
            INTERACTIVE TOOL
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What&apos;s Your{" "}
            <span className="text-gradient">Safety Score?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Answer four quick questions to assess your organization&apos;s
            safety maturity and discover how much you could save with AI-powered
            safety intelligence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Left - Sliders */}
          <div className="p-6 lg:p-8 rounded-2xl border border-border bg-card/50 space-y-8">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              Rate Your Current Safety Status
            </h3>

            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">
                    Monthly Incident Rate
                  </label>
                  <span className="text-sm text-safeglobal font-semibold">
                    {incidentRate} per 100 workers
                  </span>
                </div>
                <Slider
                  value={[incidentRate]}
                  onValueChange={setIncidentRate}
                  min={0}
                  max={15}
                  step={1}
                  className="py-2"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>0 (Excellent)</span>
                  <span>15 (Critical)</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">
                    Compliance Level
                  </label>
                  <span className="text-sm text-safeglobal font-semibold">
                    {complianceLevel}%
                  </span>
                </div>
                <Slider
                  value={[complianceLevel]}
                  onValueChange={setComplianceLevel}
                  min={0}
                  max={100}
                  step={5}
                  className="py-2"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">
                    Training Completion Rate
                  </label>
                  <span className="text-sm text-safeglobal font-semibold">
                    {trainingCompletion}%
                  </span>
                </div>
                <Slider
                  value={[trainingCompletion]}
                  onValueChange={setTrainingCompletion}
                  min={0}
                  max={100}
                  step={5}
                  className="py-2"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">
                    Safety Technology Level
                  </label>
                  <span className="text-sm text-safeglobal font-semibold">
                    {technologyLevel}%
                  </span>
                </div>
                <Slider
                  value={[technologyLevel]}
                  onValueChange={setTechnologyLevel}
                  min={0}
                  max={100}
                  step={5}
                  className="py-2"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>Manual only</span>
                  <span>Fully automated</span>
                </div>
              </div>
            </div>

            <Button
              onClick={handleCalculate}
              className="w-full bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/25 h-12 gap-2"
            >
              <Shield className="w-4 h-4" />
              Calculate My Safety Score
            </Button>
          </div>

          {/* Right - Results */}
          <div className="p-6 lg:p-8 rounded-2xl border border-border bg-card/50">
            {result ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Score Circle */}
                <div className="flex justify-center">
                  <div className="relative w-44 h-44">
                    <svg
                      className="w-full h-full -rotate-90"
                      viewBox="0 0 120 120"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="8"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke={result.color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={scoreOffset}
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span
                        className="text-5xl font-black"
                        style={{ color: result.color }}
                      >
                        {result.score}
                      </span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                        Safety Score
                      </span>
                    </div>
                  </div>
                </div>

                {/* Level Badge */}
                <div className="text-center">
                  <Badge
                    className="text-sm px-4 py-1.5 border-0"
                    style={{
                      backgroundColor: `${result.color}20`,
                      color: result.color,
                    }}
                  >
                    {result.level}
                  </Badge>
                </div>

                {/* Potential Savings */}
                <div className="p-4 rounded-xl border border-safeglobal/20 bg-safeglobal/5 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-safeglobal" />
                    <span className="text-sm font-medium text-safeglobal">
                      Potential Annual Savings
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-safeglobal">
                    {result.potentialSavings}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    with Safeglobal AI-powered safety platform
                  </p>
                </div>

                {/* Recommendations */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-safeglobal" />
                    Recommended Actions
                  </h4>
                  <div className="space-y-2">
                    {result.recommendations.map((rec) => (
                      <div
                        key={rec}
                        className="flex items-start gap-2 p-3 rounded-lg border border-border bg-background/50"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-safeglobal mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {rec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  className="w-full bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/25 gap-2"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Your Detailed Safety Audit
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 rounded-full bg-safeglobal/10 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-safeglobal/40" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Your Safety Score Awaits
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Adjust the sliders to reflect your organization&apos;s
                    current safety status, then calculate your score.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                  <div className="p-3 rounded-lg border border-border">
                    <div className="text-lg font-bold text-safeglobal">4</div>
                    Quick Questions
                  </div>
                  <div className="p-3 rounded-lg border border-border">
                    <div className="text-lg font-bold text-safeglobal">30s</div>
                    To Complete
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
