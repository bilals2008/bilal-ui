"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ProFeatureCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  index?: number;
  className?: string;
}

export function ProFeatureCard({
  icon: Icon,
  label,
  value,
  index = 0,
  className,
}: ProFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className={cn(
        "flex items-center gap-4 rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/30",
        className,
      )}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-zinc-800 dark:text-zinc-200">
          {label}
        </p>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
          <div className="h-full w-2/3 rounded-full bg-zinc-400 dark:bg-zinc-600" />
        </div>
      </div>
      <span className="text-xl font-black text-zinc-900 dark:text-zinc-100">
        {value}
      </span>
    </motion.div>
  );
}
