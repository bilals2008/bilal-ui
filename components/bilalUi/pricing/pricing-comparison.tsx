"use client";

import { motion } from "motion/react";
import { Check, Crown, Blocks, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ComparisonItem {
  name: string;
  free: boolean;
}

interface ComparisonCategory {
  category: string;
  items: ComparisonItem[];
}

interface PricingComparisonProps {
  categories: ComparisonCategory[];
  title?: string;
  badge?: string;
  description?: string;
  className?: string;
}

export function PricingComparison({
  categories,
  title = "What's free and what's premium",
  badge = "Free vs Premium",
  description,
  className,
}: PricingComparisonProps) {
  const freeItems = categories.flatMap((g) => g.items.filter((i) => i.free));
  const premiumItems = categories.flatMap((g) => g.items.filter((i) => !i.free));

  return (
    <section className={cn("px-4 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14 space-y-4">
          <Badge variant="info" appearance="light" size="md">
            <Blocks className="h-3.5 w-3.5" />
            {badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {title}
          </h2>
          {description && (
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Free Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm dark:border-green-900/50 dark:bg-zinc-950 h-full"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-green-100 dark:border-green-900/30">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-700 dark:text-green-400">Free</h3>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {freeItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  className="flex items-center gap-2 rounded-lg border border-green-200/60 bg-green-50/50 px-3 py-2.5 text-sm font-medium text-green-700 dark:border-green-900/40 dark:bg-green-950/20 dark:text-green-300"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-green-500 dark:text-green-400" />
                  <span className="truncate">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Premium Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm dark:border-violet-900/50 dark:bg-zinc-950 h-full"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-violet-100 dark:border-violet-900/30">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-900/30">
                <Crown className="h-4 w-4 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-lg font-bold text-violet-700 dark:text-violet-400">Premium</h3>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {premiumItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  className="flex items-center gap-2 rounded-lg border border-violet-200/60 bg-violet-50/50 px-3 py-2.5 text-sm font-medium text-violet-700 dark:border-violet-900/40 dark:bg-violet-950/20 dark:text-violet-300"
                >
                  <Crown className="h-3.5 w-3.5 shrink-0 text-violet-500 dark:text-violet-400" />
                  <span className="truncate">{item.name}</span>
                </motion.div>
              ))}
              <div className="flex items-center gap-2 rounded-lg border border-dashed border-zinc-300 bg-zinc-50 px-3 py-2.5 text-sm font-medium text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900/50">
                <Sparkles className="h-3.5 w-3.5 shrink-0" />
                <span>+ much more</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
