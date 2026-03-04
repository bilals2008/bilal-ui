// File: components/hero/Hero.tsx
"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Sparkles, ArrowRight, CheckCircle2, Rocket } from "lucide-react";
import Features from "./feature-block";
import TailwindCSS from "../icons/tailwindcss";
import { BrowseComponentsButton } from "../ui/browse-components-button";
import { BrowseBlocksButton } from "../ui/browse-blocks";
import { GridPattern } from "../ui/grid-pattern";
import { cn } from "@/lib/utils";

const heroHighlights = [
  "150+ production-ready components",
  "Accessible by default",
  "Type-safe and easy to customize",
];

// Separate component for the announcement badge
const AnnouncementBadge = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
      role="status"
      aria-label="Bilal UI development status"
    >
      <div className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-zinc-200/80 bg-white/75 px-4 py-2 backdrop-blur-md transition-all hover:border-zinc-300 hover:shadow-[0_10px_40px_-20px_rgba(14,165,233,0.65)] dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:hover:border-zinc-700">
        {/* Animated Shimmer Background (disabled if user prefers reduced motion) */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 w-[200%] bg-linear-to-r from-transparent via-sky-500/15 to-transparent dark:via-sky-400/15"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            aria-hidden="true"
          />
        )}

        <div className="relative flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.55)]"></span>
          </span>
          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block mx-1" />
          <span className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-200">
            New component drops are
            <span className="bg-linear-to-r from-sky-500 to-amber-500 bg-clip-text font-bold text-transparent">
              shipping weekly
            </span>
          </span>
          <Rocket className="ml-1 h-4 w-4 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </motion.div>
  );
};

// Animated underline for the main heading
const AnimatedUnderline = () => {
  const gradientId = React.useId();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <svg
        className="absolute -bottom-2 left-0 w-full h-2 sm:h-3 pointer-events-none"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,5 Q25,0 50,5 T100,5"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="50%" stopColor="#d946ef" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      className="absolute -bottom-2 left-0 w-full h-2 sm:h-3 pointer-events-none"
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M0,5 Q25,0 50,5 T100,5"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1,
          opacity: 1,
          d: [
            "M0,5 Q25,0 50,5 T100,5",
            "M0,5 Q25,8 50,5 T100,5",
            "M0,5 Q25,0 50,5 T100,5",
          ],
        }}
        transition={{
          pathLength: { duration: 1.5, delay: 0.8, ease: "easeOut" },
          opacity: { duration: 1, delay: 0.8 },
          d: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="50%" stopColor="#d946ef" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export function HeroSection() {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 overflow-hidden px-4 pt-24 pb-32 sm:px-6">
      <div className="pointer-events-none absolute inset-0 -z-20" aria-hidden="true">
        <div className="absolute left-1/2 -top-56 h-128 w-lg -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),rgba(251,191,36,0.15),transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.32),rgba(251,191,36,0.2),transparent_72%)]" />
        <div className="absolute inset-x-0 top-0 h-80 bg-linear-to-b from-white/85 to-transparent dark:from-zinc-950/65" />
      </div>

      {/* Background Grid Pattern */}
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "mask-[radial-gradient(950px_circle_at_center,white,transparent)]",
          "stroke-zinc-300 dark:stroke-zinc-700/40 opacity-60 -z-10",
        )}
      />

      <AnnouncementBadge />

      <div className="flex w-full flex-col items-center justify-center gap-8 text-center">
        {/* Main Content - Centered */}
        <div className="flex w-full max-w-5xl flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl lg:text-7xl dark:text-zinc-100">
              Ship polished interfaces
              <br />
              faster with{" "}
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-rose-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
                  Bilal UI
                </span>
                <AnimatedUnderline />
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base text-zinc-700 md:text-xl dark:text-zinc-300">
              Build from launch-ready blocks instead of blank files. Bilal UI
              gives you fast, accessible React and Next.js components engineered
              for real products.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/90 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex w-full flex-col items-center"
          >
            <span className="flex items-center justify-center gap-2 pb-4 text-center text-sm text-zinc-600 dark:text-zinc-300">
              <TailwindCSS className="h-4 w-4" />
              <span className="flex items-center gap-1.5">
                Crafted for Tailwind CSS 4 and shadcn/ui
                <span className="inline-flex items-center rounded-md bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Fresh
                </span>
              </span>
            </span>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BrowseComponentsButton />
              <BrowseBlocksButton />
            </div>
            <span className="mt-4 flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
              <ArrowRight className="h-3.5 w-3.5" />
              Copy, paste, and ship without lock-in.
            </span>
          </motion.div>
          <Features />
        </div>
      </div>
    </div>
  );
}
