// File: app/(root)/changelog/page.tsx
"use client";

import React from "react";
import { motion } from "motion/react";
import { changelogData } from "@/data/changelog";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, Rocket, Zap, Bug, Settings } from "lucide-react";

const typeConfig = {
  feature: {
    icon: Rocket,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    label: "Feature",
    variant: "info" as const,
  },
  improvement: {
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    label: "Improvement",
    variant: "updated" as const,
  },
  fix: {
    icon: Bug,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    label: "Fix",
    variant: "deprecated" as const,
  },
  internal: {
    icon: Settings,
    color: "text-zinc-500",
    bg: "bg-zinc-500/10",
    label: "Internal",
    variant: "secondary" as const,
  },
};

export default function ChangelogPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-32 px-4 sm:px-6">
      {/* Background Grid Pattern */}
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "mask-[radial-gradient(1000px_circle_at_center,white,transparent)]",
          "stroke-zinc-300 dark:stroke-zinc-600/30 opacity-70 -z-10",
        )}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6 font-inter">
            Changelog
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Stay up to date with the latest features, improvements, and fixes in
            Bilal UI. We&apos;re constantly evolving to provide the best design
            experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-16 sm:space-y-24">
            {changelogData.map((entry, index) => (
              <motion.div
                key={entry.version}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "relative flex flex-col sm:flex-row items-start gap-8 sm:gap-0",
                  index % 2 === 0 ? "sm:flex-row-reverse" : "",
                )}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 sm:left-1/2 top-0 w-8 h-8 rounded-full bg-white dark:bg-black border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)] -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Content Card */}
                <div
                  className={cn(
                    "w-full sm:w-[45%] bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm",
                    index % 2 === 0 ? "sm:ms-8" : "sm:me-8",
                  )}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="version" appearance="light" size="md">
                      v{entry.version}
                    </Badge>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                      {entry.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                    {entry.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm leading-relaxed">
                    {entry.description}
                  </p>

                  <div className="space-y-4">
                    {entry.changes.map((change, cIndex) => {
                      const config = typeConfig[change.type];
                      const Icon = config.icon;

                      return (
                        <div key={cIndex} className="flex gap-3">
                          <div
                            className={cn(
                              "mt-0.5 w-6 h-6 rounded-md shrink-0 flex items-center justify-center",
                              config.bg,
                            )}
                          >
                            <Icon className={cn("w-3.5 h-3.5", config.color)} />
                          </div>
                          <span className="text-sm text-zinc-700 dark:text-zinc-300">
                            {change.content}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Date Display for Desktop (Opposite side) */}
                <div
                  className={cn(
                    "hidden sm:flex w-[45%] flex-col justify-center",
                    index % 2 === 0
                      ? "items-end text-right pe-8"
                      : "items-start text-left ps-8",
                  )}
                >
                  <span className="text-2xl font-bold text-zinc-200 dark:text-zinc-800">
                    {entry.date.split(",")[1].trim()}
                  </span>
                  <span className="text-green-500/50 font-medium uppercase tracking-widest text-xs">
                    Released
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
