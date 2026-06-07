"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Shield,
  GraduationCap,
  FileWarning,
  Wrench,
  Heart,
  CheckCircle2,
  Copy,
  RotateCcw,
  Lightbulb,
  Clock,
  ChevronRight,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────

type QuizPhase = "welcome" | "quiz" | "results";

interface Dimension {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

interface Answer {
  text: string;
  score: number;
}

interface Question {
  dimension: string;
  text: string;
  answers: Answer[];
}

// ── Data ───────────────────────────────────────────────────────────────────

const dimensions: Dimension[] = [
  { id: "leadership", label: "Leadership", icon: <Shield className="w-4 h-4" />, color: "#2d7a6f" },
  { id: "training", label: "Training", icon: <GraduationCap className="w-4 h-4" />, color: "#5b8a72" },
  { id: "reporting", label: "Reporting", icon: <FileWarning className="w-4 h-4" />, color: "#f59e0b" },
  { id: "equipment", label: "Equipment", icon: <Wrench className="w-4 h-4" />, color: "#8b5cf6" },
  { id: "culture", label: "Culture", icon: <Heart className="w-4 h-4" />, color: "#ec4899" },
];

const questions: Question[] = [
  // Leadership Commitment (2 questions)
  {
    dimension: "leadership",
    text: "How would you describe your organization's safety leadership commitment?",
    answers: [
      { text: "Safety is only discussed after an incident occurs", score: 1 },
      { text: "Leadership mentions safety occasionally in meetings", score: 2 },
      { text: "Safety is a regular agenda item with dedicated leadership reviews", score: 3 },
      { text: "Safety is embedded in every business decision with executive KPIs", score: 4 },
    ],
  },
  {
    dimension: "leadership",
    text: "How is the safety budget allocated in your organization?",
    answers: [
      { text: "No dedicated safety budget; funding is reactive", score: 1 },
      { text: "A basic budget exists but is often redirected", score: 2 },
      { text: "A dedicated annual safety budget with planned investments", score: 3 },
      { text: "Strategic multi-year safety investment plan tied to business outcomes", score: 4 },
    ],
  },
  // Training & Competency (2 questions)
  {
    dimension: "training",
    text: "How frequently does your workforce receive safety training?",
    answers: [
      { text: "Only during initial onboarding or after incidents", score: 1 },
      { text: "Annual refresher training is provided", score: 2 },
      { text: "Regular training with role-specific modules and assessments", score: 3 },
      { text: "Continuous AI-personalized training with real-time competency tracking", score: 4 },
    ],
  },
  {
    dimension: "training",
    text: "What does your safety onboarding process look like for new employees?",
    answers: [
      { text: "Brief orientation with a safety handbook", score: 1 },
      { text: "Half-day safety session with a quiz", score: 2 },
      { text: "Structured multi-day program with practical assessments", score: 3 },
      { text: "Immersive onboarding with mentoring, simulations, and competency verification", score: 4 },
    ],
  },
  // Incident Reporting (2 questions)
  {
    dimension: "reporting",
    text: "How would you describe your incident reporting culture?",
    answers: [
      { text: "Incidents are hidden due to fear of blame or retaliation", score: 1 },
      { text: "Major incidents are reported but near-misses are often ignored", score: 2 },
      { text: "Both incidents and near-misses are actively reported and tracked", score: 3 },
      { text: "A blame-free culture with real-time digital reporting and AI trend analysis", score: 4 },
    ],
  },
  {
    dimension: "reporting",
    text: "How are near-miss events tracked and managed?",
    answers: [
      { text: "Near-misses are not tracked at all", score: 1 },
      { text: "Informal tracking through supervisor reports", score: 2 },
      { text: "Formal near-miss reporting system with follow-up actions", score: 3 },
      { text: "AI-powered near-miss detection with automated root cause analysis", score: 4 },
    ],
  },
  // Equipment & Processes (2 questions)
  {
    dimension: "equipment",
    text: "What is the PPE compliance rate across your facilities?",
    answers: [
      { text: "Below 60% — compliance is inconsistent", score: 1 },
      { text: "Around 70-80% — generally good but gaps remain", score: 2 },
      { text: "85-95% — strong compliance with regular audits", score: 3 },
      { text: "Near 100% — IoT-enabled smart PPE with real-time monitoring", score: 4 },
    ],
  },
  {
    dimension: "equipment",
    text: "How are safety audits conducted in your organization?",
    answers: [
      { text: "Audits are rare, usually triggered by regulatory requirements", score: 1 },
      { text: "Annual audits with basic checklists", score: 2 },
      { text: "Regular audits with detailed findings and corrective action plans", score: 3 },
      { text: "Continuous automated audits with AI-driven insights and predictive flags", score: 4 },
    ],
  },
  // Safety Culture (2 questions)
  {
    dimension: "culture",
    text: "How engaged are workers in safety initiatives and decision-making?",
    answers: [
      { text: "Workers have no voice in safety matters", score: 1 },
      { text: "Workers can raise concerns through suggestion boxes", score: 2 },
      { text: "Active safety committees with worker representation", score: 3 },
      { text: "Empowered safety champions at every level with real-time feedback loops", score: 4 },
    ],
  },
  {
    dimension: "culture",
    text: "How does your organization approach continuous safety improvement?",
    answers: [
      { text: "No structured improvement process exists", score: 1 },
      { text: "Improvements are made reactively after incidents", score: 2 },
      { text: "Regular reviews with data-driven improvement initiatives", score: 3 },
      { text: "Continuous improvement culture with AI benchmarking and industry best practices", score: 4 },
    ],
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────

function getScoreClassification(score: number) {
  if (score <= 10) return { label: "Reactive", color: "#ef4444", glow: "rgba(239, 68, 68, 0.3)" };
  if (score <= 20) return { label: "Developing", color: "#f59e0b", glow: "rgba(245, 158, 11, 0.3)" };
  if (score <= 30) return { label: "Proactive", color: "#2d7a6f", glow: "rgba(45, 122, 111, 0.3)" };
  return { label: "World-Class", color: "#5b8a72", glow: "rgba(91, 138, 114, 0.4)" };
}

function getDimensionColor(dimId: string): string {
  const dim = dimensions.find((d) => d.id === dimId);
  return dim?.color ?? "#2d7a6f";
}

function getRecommendations(dimensionScores: Record<string, number>): string[] {
  const recs: { dim: string; score: number; text: string }[] = [
    { dim: "leadership", score: dimensionScores.leadership ?? 0, text: "Establish executive safety KPIs and implement a structured safety leadership program with monthly reviews." },
    { dim: "training", score: dimensionScores.training ?? 0, text: "Deploy AI-personalized training modules with competency tracking and real-time knowledge gap analysis." },
    { dim: "reporting", score: dimensionScores.reporting ?? 0, text: "Implement a blame-free digital reporting system with automated near-miss detection and trend analysis." },
    { dim: "equipment", score: dimensionScores.equipment ?? 0, text: "Upgrade to IoT-enabled smart PPE monitoring and implement continuous automated safety audits." },
    { dim: "culture", score: dimensionScores.culture ?? 0, text: "Launch a safety champion program with empowered worker representatives at every organizational level." },
  ];
  recs.sort((a, b) => a.score - b.score);
  return recs.slice(0, 4).map((r) => r.text);
}

// ── Component ──────────────────────────────────────────────────────────────

export default function SafetyCultureQuiz() {
  const [phase, setPhase] = useState<QuizPhase>("welcome");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [copied, setCopied] = useState(false);

  // Derived
  const totalScore = useMemo(
    () => answers.reduce<number>((sum, a) => sum + (a ?? 0), 0),
    [answers]
  );

  const dimensionScores = useMemo(() => {
    const scores: Record<string, number> = {};
    dimensions.forEach((d) => {
      scores[d.id] = 0;
    });
    questions.forEach((q, i) => {
      scores[q.dimension] = (scores[q.dimension] ?? 0) + (answers[i] ?? 0);
    });
    return scores;
  }, [answers]);

  const maxDimensionScores = useMemo(() => {
    const max: Record<string, number> = {};
    dimensions.forEach((d) => {
      max[d.id] = 0;
    });
    questions.forEach((q) => {
      max[q.dimension] = (max[q.dimension] ?? 0) + 4;
    });
    return max;
  }, []);

  const classification = getScoreClassification(totalScore);
  const recommendations = useMemo(
    () => getRecommendations(dimensionScores),
    [dimensionScores]
  );

  // SVG gauge
  const gaugeRadius = 70;
  const gaugeCircumference = 2 * Math.PI * gaugeRadius;
  const gaugeOffset = gaugeCircumference - (totalScore / 40) * gaugeCircumference;

  // Handlers
  const selectAnswer = useCallback(
    (score: number) => {
      setAnswers((prev) => {
        const next = [...prev];
        next[currentQ] = score;
        return next;
      });
    },
    [currentQ]
  );

  const goNext = useCallback(() => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
    } else {
      setPhase("results");
    }
  }, [currentQ]);

  const goBack = useCallback(() => {
    if (currentQ > 0) {
      setCurrentQ((prev) => prev - 1);
    }
  }, [currentQ]);

  const retake = useCallback(() => {
    setPhase("welcome");
    setCurrentQ(0);
    setAnswers(Array(questions.length).fill(null));
    setCopied(false);
  }, []);

  const shareScore = useCallback(() => {
    const text = `I scored ${totalScore}/40 (${classification.label}) on the SafeGlobal Safety Culture Assessment! Assess your organization at safeglobal.com`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, [totalScore, classification.label]);

  const currentQuestion = questions[currentQ];
  const currentDimension = dimensions.find(
    (d) => d.id === currentQuestion.dimension
  );

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <section
      id="safety-quiz"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-safeglobal/[0.02]" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="absolute inset-0 bg-noise" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-safeglobal/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 -right-32 w-72 h-72 bg-teal-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {/* ─── WELCOME SCREEN ────────────────────────────────────────── */}
          {phase === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Badge */}
              <Badge
                variant="outline"
                className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-6"
              >
                ASSESSMENT
              </Badge>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Safety Culture{" "}
                <span className="text-gradient">Assessment</span>
              </h2>

              {/* Subtitle */}
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Evaluate your organization&apos;s safety maturity across five
                critical dimensions and discover where you stand on the path to
                world-class safety.
              </p>

              {/* Category indicators */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
                {dimensions.map((dim, idx) => (
                  <motion.div
                    key={dim.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
                  >
                    <span style={{ color: dim.color }}>{dim.icon}</span>
                    <span className="text-sm font-medium text-foreground">
                      {dim.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Button
                  onClick={() => setPhase("quiz")}
                  className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/25 gap-2 h-12 px-8 text-base"
                >
                  Start Assessment
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="mt-4 text-sm text-muted-foreground flex items-center justify-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Takes 3-5 minutes
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* ─── QUIZ SCREEN ──────────────────────────────────────────── */}
          {phase === "quiz" && currentQuestion && (
            <motion.div
              key={`quiz-${currentQ}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10"
            >
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Question {currentQ + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-semibold text-safeglobal">
                    {Math.round(((currentQ + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-safeglobal to-teal-500"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((currentQ + 1) / questions.length) * 100}%`,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Dimension badge */}
              {currentDimension && (
                <div className="mb-4">
                  <Badge
                    variant="outline"
                    className="px-3 py-1 text-xs font-medium border-current/20"
                    style={{
                      color: currentDimension.color,
                      borderColor: `${currentDimension.color}30`,
                      backgroundColor: `${currentDimension.color}10`,
                    }}
                  >
                    <span className="mr-1">{currentDimension.icon}</span>
                    {currentDimension.label}
                  </Badge>
                </div>
              )}

              {/* Question text */}
              <h3 className="text-xl sm:text-2xl font-bold mb-8 leading-relaxed">
                {currentQuestion.text}
              </h3>

              {/* Answer cards */}
              <div className="space-y-3 mb-8">
                {currentQuestion.answers.map((answer, aIdx) => {
                  const isSelected = answers[currentQ] === answer.score;
                  return (
                    <motion.button
                      key={aIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: aIdx * 0.07 }}
                      onClick={() => selectAnswer(answer.score)}
                      className={`
                        w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer
                        ${
                          isSelected
                            ? "border-safeglobal bg-safeglobal/10 shadow-[0_0_20px_rgba(45,122,111,0.12)]"
                            : "border-border bg-card/50 hover:border-safeglobal/30 hover:bg-safeglobal/5"
                        }
                      `}
                      aria-pressed={isSelected}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`
                            mt-0.5 w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center
                            transition-all duration-200
                            ${
                              isSelected
                                ? "border-safeglobal bg-safeglobal"
                                : "border-muted-foreground/30"
                            }
                          `}
                        >
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 15,
                              }}
                            >
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            </motion.div>
                          )}
                        </div>
                        <div className="flex-1">
                          <p
                            className={`text-sm sm:text-base transition-colors duration-200 ${
                              isSelected
                                ? "text-foreground font-medium"
                                : "text-muted-foreground"
                            }`}
                          >
                            {answer.text}
                          </p>
                        </div>
                        <span
                          className={`
                            text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md flex-shrink-0
                            ${
                              answer.score === 1
                                ? "bg-red-500/10 text-red-400"
                                : answer.score === 2
                                  ? "bg-amber-500/10 text-amber-400"
                                  : answer.score === 3
                                    ? "bg-safeglobal/10 text-safeglobal"
                                    : "bg-teal-500/10 text-teal-400"
                            }
                          `}
                        >
                          {answer.score === 1
                            ? "Reactive"
                            : answer.score === 2
                              ? "Developing"
                              : answer.score === 3
                                ? "Proactive"
                                : "World-Class"}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={goBack}
                  disabled={currentQ === 0}
                  className="gap-2 border-border hover:border-safeglobal/30"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>

                <Button
                  onClick={goNext}
                  disabled={answers[currentQ] === null}
                  className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/25 gap-2"
                >
                  {currentQ === questions.length - 1 ? (
                    "See Results"
                  ) : (
                    "Next"
                  )}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* ─── RESULTS SCREEN ────────────────────────────────────────── */}
          {phase === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Score gauge card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Your Safety Maturity Score
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Based on your responses across 5 safety dimensions
                </p>

                {/* SVG Radial Gauge */}
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto mb-6">
                  <svg
                    className="w-full h-full -rotate-90"
                    viewBox="0 0 160 160"
                  >
                    {/* Background track */}
                    <circle
                      cx="80"
                      cy="80"
                      r={gaugeRadius}
                      fill="none"
                      stroke="rgba(128,128,128,0.1)"
                      strokeWidth="10"
                    />
                    {/* Score arc */}
                    <motion.circle
                      cx="80"
                      cy="80"
                      r={gaugeRadius}
                      fill="none"
                      stroke={classification.color}
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={gaugeCircumference}
                      initial={{ strokeDashoffset: gaugeCircumference }}
                      animate={{ strokeDashoffset: gaugeOffset }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                      style={{
                        filter: `drop-shadow(0 0 8px ${classification.glow})`,
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-5xl sm:text-6xl font-black"
                      style={{ color: classification.color }}
                    >
                      {totalScore}
                    </motion.span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      out of 40
                    </span>
                  </div>
                </div>

                {/* Classification badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <Badge
                    className="text-base px-6 py-2 border-0 font-semibold"
                    style={{
                      backgroundColor: `${classification.color}20`,
                      color: classification.color,
                      boxShadow: `0 0 20px ${classification.glow}`,
                    }}
                  >
                    {classification.label}
                  </Badge>
                </motion.div>
              </div>

              {/* Dimension breakdown */}
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <h4 className="text-lg font-bold mb-6">
                  Dimension Breakdown
                </h4>
                <div className="space-y-5">
                  {dimensions.map((dim, idx) => {
                    const score = dimensionScores[dim.id] ?? 0;
                    const max = maxDimensionScores[dim.id] ?? 8;
                    const pct = Math.round((score / max) * 100);

                    return (
                      <motion.div
                        key={dim.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.9 + idx * 0.1,
                        }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <span style={{ color: dim.color }}>{dim.icon}</span>
                            <span className="text-sm font-medium">
                              {dim.label}
                            </span>
                          </div>
                          <span
                            className="text-sm font-bold"
                            style={{ color: dim.color }}
                          >
                            {score}/{max}
                          </span>
                        </div>
                        <div className="h-2.5 rounded-full bg-muted/50 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: dim.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{
                              duration: 0.8,
                              ease: "easeOut",
                              delay: 1 + idx * 0.1,
                            }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Recommendations */}
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                  Personalized Recommendations
                </h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Focus on these areas to accelerate your safety maturity journey
                </p>
                <div className="space-y-3">
                  {recommendations.map((rec, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 1.4 + idx * 0.1,
                      }}
                      className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/50"
                    >
                      <div className="mt-0.5 w-6 h-6 rounded-full bg-safeglobal/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-safeglobal">
                          {idx + 1}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {rec}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-safeglobal hover:bg-safeglobal-dark text-white shadow-lg shadow-safeglobal/25 gap-2 h-12 px-8"
                >
                  Get Detailed Report
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={retake}
                  className="gap-2 border-border hover:border-safeglobal/30 h-12 px-8"
                >
                  <RotateCcw className="w-4 h-4" />
                  Retake Assessment
                </Button>
                <Button
                  variant="outline"
                  onClick={shareScore}
                  className="gap-2 border-border hover:border-safeglobal/30 h-12 px-8"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? "Copied!" : "Share Score"}
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
