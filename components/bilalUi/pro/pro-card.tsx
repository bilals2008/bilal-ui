// File: components/bilalUi/pro/pro-card.tsx
"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProBadge } from "./pro-badge";

interface ProCardProps {
  title: string;
  subtitle?: string;
  badge?: string;
  features: { icon: React.ElementType; label: string; value: string }[];
  note?: string;
  className?: string;
}

export function ProCard({
  title,
  subtitle,
  badge = "Soon",
  features,
  note,
  className,
}: ProCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950/60",
        className,
      )}
    >
      <div className="mb-4 flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/60">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-500">
            {title}
          </p>
          {subtitle && (
            <p className="mt-1 text-lg font-bold text-zinc-900 dark:text-zinc-100">
              {subtitle}
            </p>
          )}
        </div>
        <div className="rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-xs font-bold text-orange-500">
          {badge}
        </div>
      </div>

      <div className="grid gap-3">
        {features.map((item, i) => (
          <div
            key={item.label}
            className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/30"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
              <item.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                {item.label}
              </p>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                <div className="h-full w-2/3 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              </div>
            </div>
            <span className="text-xl font-black text-zinc-900 dark:text-zinc-100">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {note && (
        <div className="mt-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/30">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-rose-500 dark:text-rose-400" />
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {note}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
