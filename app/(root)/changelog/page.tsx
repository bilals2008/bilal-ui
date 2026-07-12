// File: app/(root)/changelog/page.tsx
"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { changelogData } from "@/data/changelog";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Rocket, Zap, Bug, Settings } from "lucide-react";

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
    variant: "fix" as const,
  },
  internal: {
    icon: Settings,
    color: "text-muted-foreground",
    bg: "bg-muted/10",
    label: "Internal",
    variant: "secondary" as const,
  },
};

function splitReleaseDate(date: string) {
  const [monthDay, year] = date.split(",");
  return {
    monthDay: monthDay?.trim() ?? date,
    year: year?.trim() ?? "Latest",
  };
}

function formatVersion(version: string) {
  return version.startsWith("v") ? version : `v${version}`;
}

export default function ChangelogPage() {
  const shouldReduceMotion = useReducedMotion();
  const latestVersion = changelogData[0]?.version;

  return (
    <main className="relative min-h-screen px-4 pb-28 pt-24 sm:px-6">
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
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="mb-14 text-center sm:mb-16"
        >
          <Badge
            variant="updated"
            appearance="outline"
            size="sm"
            className="mb-5 uppercase tracking-wide"
          >
            {latestVersion
              ? `Release notes - ${formatVersion(latestVersion)}`
              : "Release notes"}
          </Badge>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Changelog
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Stay up to date with the latest features, improvements, and fixes in
            Bilal UI. We&apos;re constantly evolving to provide the best design
            experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border sm:hidden" />

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-border sm:block" />

          <div className="space-y-12 sm:space-y-20">
            {changelogData.map((entry, index) => {
              const releaseDate = splitReleaseDate(entry.date);

              return (
                <motion.div
                  key={entry.version}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                  }}
                  className={cn(
                    "relative flex flex-col items-start gap-8 pl-10 sm:gap-0 sm:pl-0 sm:flex-row",
                    index % 2 === 0 ? "sm:flex-row-reverse" : "",
                  )}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-3 top-1 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-emerald-500 bg-background shadow-[0_0_0_4px_rgba(16,185,129,0.16)] sm:left-1/2">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </div>

                  {/* Content Card */}
                  <article
                    className={cn(
                      "w-full rounded-2xl border border-border/80 bg-background/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-md sm:w-[46%] sm:p-7",
                      index % 2 === 0 ? "sm:ms-8" : "sm:me-8",
                    )}
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <Badge variant="version" appearance="light" size="md">
                        {formatVersion(entry.version)}
                      </Badge>
                      <span className="text-sm font-medium text-muted-foreground">
                        {entry.date}
                      </span>
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      {entry.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                      {entry.description}
                    </p>

                    <ul className="space-y-3">
                      {entry.changes.map((change, cIndex) => {
                        const config = typeConfig[change.type];
                        const Icon = config.icon;

                        return (
                          <li key={cIndex} className="flex items-start gap-3">
                            <div
                              className={cn(
                                "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md",
                                config.bg,
                              )}
                            >
                              <Icon className={cn("h-3.5 w-3.5", config.color)} />
                            </div>
                            <div className="space-y-1">
                              <Badge
                                variant={config.variant}
                                appearance="light"
                                size="xs"
                              >
                                {config.label}
                              </Badge>
                              <p className="text-sm text-muted-foreground">
                                {change.content}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </article>

                  {/* Date Display for Desktop (Opposite side) */}
                  <div
                    className={cn(
                      "hidden w-[45%] flex-col justify-center sm:flex",
                      index % 2 === 0
                        ? "items-end pe-8 text-right"
                        : "items-start ps-8 text-left",
                    )}
                  >
                    <span className="text-2xl font-semibold tracking-tight text-muted-foreground">
                      {releaseDate.year}
                    </span>
                    <span className="text-sm font-medium text-emerald-500/70">
                      {releaseDate.monthDay}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
