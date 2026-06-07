"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Pause,
  Eye,
  Siren,
  TrendingUp,
  Video,
  Calendar,
  Clock,
  MonitorPlay,
} from "lucide-react";

/* ───────────────────── Types & Data ───────────────────── */

interface VideoCard {
  id: number;
  title: string;
  duration: string;
  category: string;
  categoryColor: string;
  views: string;
  icon: React.ElementType;
  gradientFrom: string;
  gradientTo: string;
}

const videoCards: VideoCard[] = [
  {
    id: 1,
    title: "AI Hazard Detection in Real-Time",
    duration: "8:45",
    category: "Product Demo",
    categoryColor: "safeglobal",
    views: "2.4K views",
    icon: Eye,
    gradientFrom: "from-safeglobal/30",
    gradientTo: "to-cyan-900/40",
  },
  {
    id: 2,
    title: "Emergency Response Simulation",
    duration: "6:22",
    category: "Safety Feature",
    categoryColor: "amber",
    views: "1.8K views",
    icon: Siren,
    gradientFrom: "from-amber-600/30",
    gradientTo: "to-orange-900/40",
  },
  {
    id: 3,
    title: "Client Success: 73% Risk Reduction",
    duration: "10:15",
    category: "Client Story",
    categoryColor: "cyan",
    views: "3.1K views",
    icon: TrendingUp,
    gradientFrom: "from-teal-600/30",
    gradientTo: "to-blue-900/40",
  },
];

const statsData = [
  {
    icon: Video,
    label: "Video Resources",
    value: "50+",
    color: "text-safeglobal",
    bg: "bg-safeglobal/10",
    border: "border-safeglobal/20",
  },
  {
    icon: Eye,
    label: "Total Views",
    value: "2M+",
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/20",
  },
  {
    icon: Calendar,
    label: "Content Schedule",
    value: "New Weekly",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
];

/* ─────────────── Featured Video Player ─────────────── */

function FeaturedVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 0.15;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const currentSeconds = Math.floor((progress / 100) * 754); // 12:34 = 754s

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative group"
    >
      <div
        className="relative rounded-2xl overflow-hidden cursor-pointer border border-border/50 hover:border-safeglobal/30 transition-colors duration-500"
        onClick={togglePlay}
      >
        {/* Video background - dark simulated player */}
        <div className="relative aspect-video bg-gradient-to-br from-card via-background to-card overflow-hidden">
          {/* Tech grid background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />

          {/* Floating tech particles */}
          <div className="particles-container">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  width: `${2 + Math.random() * 3}px`,
                  height: `${2 + Math.random() * 3}px`,
                  left: `${Math.random() * 100}%`,
                  bottom: `${-10 + Math.random() * 20}%`,
                  animationDuration: `${8 + Math.random() * 12}s`,
                  animationDelay: `${Math.random() * 8}s`,
                  opacity: 0.3 + Math.random() * 0.4,
                }}
              />
            ))}
          </div>

          {/* Ambient glow orbs inside player */}
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-safeglobal/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] bg-teal-500/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Simulated dashboard content in player */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <div className="w-3/4 max-w-lg space-y-3">
              <div className="h-3 bg-safeglobal/30 rounded-full w-2/3" />
              <div className="flex gap-3">
                <div className="h-20 flex-1 bg-safeglobal/20 rounded-lg" />
                <div className="h-20 flex-1 bg-teal-400/20 rounded-lg" />
                <div className="h-20 flex-1 bg-amber-400/20 rounded-lg" />
              </div>
              <div className="h-12 bg-safeglobal/15 rounded-lg" />
              <div className="flex gap-3">
                <div className="h-8 flex-1 bg-safeglobal/10 rounded" />
                <div className="h-8 flex-1 bg-safeglobal/10 rounded" />
                <div className="h-8 flex-1 bg-safeglobal/10 rounded" />
                <div className="h-8 flex-1 bg-safeglobal/10 rounded" />
              </div>
            </div>
          </div>

          {/* Gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

          {/* Large Play Button Overlay - shown when paused */}
          <motion.div
            initial={false}
            animate={{
              scale: isPlaying ? 0.8 : 1,
              opacity: isPlaying ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
          >
            <div className="relative">
              {/* Outer pulse ring */}
              <div className="absolute inset-0 rounded-full bg-safeglobal/20 animate-ping" />
              {/* Main play button */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-safeglobal to-safeglobal-dark flex items-center justify-center shadow-2xl shadow-safeglobal/30 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
              </div>
            </div>
          </motion.div>

          {/* Pause button in corner - shown when playing */}
          <motion.div
            initial={false}
            animate={{
              opacity: isPlaying ? 1 : 0,
              scale: isPlaying ? 1 : 0.8,
            }}
            transition={{ duration: 0.2 }}
            className="absolute top-4 right-4 z-10 pointer-events-none"
          >
            <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10">
              <Pause className="w-4 h-4 text-white" />
            </div>
          </motion.div>

          {/* NOW PLAYING badge */}
          <motion.div
            initial={false}
            animate={{
              opacity: isPlaying ? 1 : 0,
              y: isPlaying ? 0 : -8,
            }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 left-4 z-10 pointer-events-none"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-safeglobal/20 backdrop-blur-sm border border-safeglobal/30">
              <div className="w-2 h-2 rounded-full bg-safeglobal animate-pulse" />
              <span className="text-[10px] font-semibold text-safeglobal uppercase tracking-wider">
                Now Playing
              </span>
            </div>
          </motion.div>

          {/* Title overlay at bottom */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 z-10 pointer-events-none">
            <div className="flex items-end justify-between gap-4">
              <div>
                <Badge
                  variant="outline"
                  className="border-white/20 text-white/80 bg-white/10 backdrop-blur-sm text-[10px] tracking-wider mb-2"
                >
                  <MonitorPlay className="w-3 h-3 mr-1" />
                  PLATFORM OVERVIEW
                </Badge>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  SafeGlobal Platform Walkthrough
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  Complete platform tour — from setup to real-time monitoring
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10">
                  <Clock className="w-3 h-3 text-white/60" />
                  <span className="text-xs font-mono text-white/80">
                    {formatTime(currentSeconds)} / 12:34
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress bar at bottom */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10 z-20 pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-safeglobal via-safeglobal-light to-teal-400 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
            {/* Progress dot */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-safeglobal shadow-lg shadow-safeglobal/50 transition-all duration-100"
              style={{ left: `${progress}%`, transform: `translate(-50%, -50%)` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────── Video Grid Card ─────────────── */

function VideoGridCard({ video, index }: { video: VideoCard; index: number }) {
  const Icon = video.icon;

  const categoryStyles: Record<string, string> = {
    safeglobal:
      "bg-safeglobal/20 border-safeglobal/30 text-safeglobal",
    amber: "bg-amber-500/20 border-amber-500/30 text-amber-400",
    cyan: "bg-teal-500/20 border-teal-500/30 text-teal-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="card-hover-premium rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-safeglobal/30 hover:shadow-lg hover:shadow-safeglobal/5 transition-all duration-300">
        {/* Thumbnail area */}
        <div className="relative aspect-video overflow-hidden">
          {/* Gradient background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${video.gradientFrom} ${video.gradientTo}`}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />

          {/* Icon centered */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <Icon className="w-16 h-16 text-white" />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Category badge - top left */}
          <div className="absolute top-3 left-3 z-10">
            <Badge
              variant="outline"
              className={`${categoryStyles[video.categoryColor]} text-[10px] font-semibold tracking-wider backdrop-blur-sm`}
            >
              {video.category}
            </Badge>
          </div>

          {/* Duration badge - bottom right */}
          <div className="absolute bottom-3 right-3 z-10">
            <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/10">
              <Clock className="w-3 h-3 text-white/60" />
              <span className="text-[11px] font-mono text-white/90">
                {video.duration}
              </span>
            </div>
          </div>

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-safeglobal to-safeglobal-dark flex items-center justify-center shadow-xl shadow-safeglobal/30 scale-75 group-hover:scale-100 transition-transform duration-300">
              <Play className="w-6 h-6 text-white fill-white ml-0.5" />
            </div>
          </div>
        </div>

        {/* Content below thumbnail */}
        <div className="p-4">
          <h4 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-safeglobal transition-colors duration-300 line-clamp-2 mb-2">
            {video.title}
          </h4>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Eye className="w-3.5 h-3.5" />
            <span className="text-xs">{video.views}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────── Stats Card ─────────────── */

function StatCard({
  stat,
  index,
}: {
  stat: (typeof statsData)[0];
  index: number;
}) {
  const Icon = stat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      className="glass-card rounded-xl p-4 sm:p-5 border border-border/50 hover:border-safeglobal/20 transition-all duration-300 text-center"
    >
      <div
        className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${stat.bg} ${stat.border} border mb-3`}
      >
        <Icon className={`w-5 h-5 ${stat.color}`} />
      </div>
      <div className="text-xl sm:text-2xl font-bold text-foreground mb-0.5">
        {stat.value}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground">
        {stat.label}
      </div>
    </motion.div>
  );
}

/* ─────────────── Main Component ─────────────── */

export default function VideoShowcase() {
  return (
    <section
      id="video-showcase"
      className="section-divider relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/80 to-background" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute inset-0 bg-noise" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-[5%] w-[500px] h-[500px] bg-safeglobal/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[5%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-safeglobal/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 lg:mb-18"
        >
          <Badge
            variant="outline"
            className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
          >
            <Play className="w-3.5 h-3.5 mr-1 fill-safeglobal" />
            VIDEO SHOWCASE
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            See SafeGlobal{" "}
            <span className="text-gradient">In Action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Watch real-world implementations, product demos, and client success
            stories. See how SafeGlobal transforms workplace safety from
            detection to prevention.
          </p>
        </motion.div>

        {/* ── Featured Video Player ── */}
        <div className="mb-10 lg:mb-14">
          <FeaturedVideoPlayer />
        </div>

        {/* ── Video Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-12 lg:mb-16">
          {videoCards.map((video, index) => (
            <VideoGridCard key={video.id} video={video} index={index} />
          ))}
        </div>

        {/* ── Bottom Stats Row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {statsData.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
