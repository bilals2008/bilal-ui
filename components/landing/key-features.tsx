"use client";

import { motion } from "motion/react";
import {
  ScanFace,
  Palette,
  Settings2,
  Heart,
  Sparkles,
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  pill: string;
  accent: string;
  className: string;
};

const features = [
  {
    icon: ScanFace,
    title: "Reusable, Real-World Components",
    description:
      "Start with polished building blocks for dashboards, auth, forms, pricing, navigation, and more.",
    pill: "Production Ready",
    accent: "from-orange-500 to-amber-400",
    className:
      "md:col-span-2 bg-orange-500/5 dark:bg-orange-500/10 border-orange-200/80 dark:border-orange-900/50",
  },
  {
    icon: Palette,
    title: "Design Control with Tailwind CSS",
    description:
      "Every component is easy to tune so your product keeps a consistent brand voice without fighting defaults.",
    pill: "Fully Customizable",
    accent: "from-fuchsia-500 to-rose-500",
    className:
      "md:col-span-4 bg-fuchsia-500/5 dark:bg-fuchsia-500/10 border-fuchsia-200/80 dark:border-fuchsia-900/50",
  },
  {
    icon: Settings2,
    title: "150+ Components and Growing",
    description:
      "Ship quickly with a broad catalog built for docs sites, SaaS products, internal tools, and landing pages.",
    pill: "Fast Delivery",
    accent: "from-emerald-500 to-cyan-500",
    className:
      "md:col-span-4 bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-200/80 dark:border-emerald-900/50",
  },
  {
    icon: Heart,
    title: "Built for React and Next.js Teams",
    description:
      "Drop components into modern app structures with predictable patterns that teams can onboard to quickly.",
    pill: "Team Friendly",
    accent: "from-pink-500 to-rose-500",
    className:
      "md:col-span-2 bg-pink-500/5 dark:bg-pink-500/10 border-pink-200/80 dark:border-pink-900/50",
  },
  {
    icon: Sparkles,
    title: "Purposeful Motion and Microinteractions",
    description:
      "Add depth with thoughtful transitions that feel smooth in production, not distracting in real user flows.",
    pill: "Motion Ready",
    accent: "from-sky-500 to-cyan-500",
    className:
      "md:col-span-3 bg-sky-500/5 dark:bg-sky-500/10 border-sky-200/80 dark:border-sky-900/50",
  },
  {
    icon: Code2,
    title: "Clean Patterns That Scale",
    description:
      "Maintain velocity as your codebase grows with composable APIs, readable structure, and type-safe ergonomics.",
    pill: "Scalable Architecture",
    accent: "from-zinc-700 to-zinc-500",
    className:
      "md:col-span-3 bg-zinc-500/5 dark:bg-zinc-500/10 border-zinc-200/90 dark:border-zinc-800",
  },
] satisfies FeatureItem[];

export function KeyFeatures() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.18),rgba(56,189,248,0.12),transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.2),rgba(56,189,248,0.15),transparent_72%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="inline-flex items-center rounded-full border border-zinc-200/80 bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-600 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300">
            Why builders choose Bilal UI
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
            Key features that keep
            <span className="ml-2 bg-linear-to-r from-rose-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
              shipping fast
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
            From first prototype to production release, every piece is built to
            reduce decision fatigue and improve delivery speed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-26px_rgba(24,24,27,0.45)] dark:hover:shadow-[0_22px_45px_-30px_rgba(0,0,0,0.75)]",
                feature.className,
              )}
            >
              <div
                className={cn(
                  "absolute inset-x-0 top-0 h-1 bg-linear-to-r opacity-75",
                  feature.accent,
                )}
                aria-hidden="true"
              />
              <div className="relative flex h-full flex-col justify-between gap-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-600 dark:bg-zinc-950/60 dark:text-zinc-300">
                      {feature.pill}
                    </span>
                    <div className="inline-flex rounded-xl border border-zinc-200/70 bg-white/40 p-2 text-zinc-700 backdrop-blur-sm dark:border-zinc-700/60 dark:bg-zinc-950/45 dark:text-zinc-200">
                      <feature.icon className="h-5 w-5 stroke-[1.75]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="h-px w-full bg-linear-to-r from-zinc-300/80 to-transparent dark:from-zinc-700/70" />
                <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  Built for high-velocity product teams
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
