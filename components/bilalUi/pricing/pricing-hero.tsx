"use client";

import { motion } from "motion/react";
import { Sparkles, ShieldCheck, Infinity, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PricingHeroProps {
  badge?: string;
  title?: string;
  highlight?: string;
  description?: string;
  features?: { icon: React.ElementType; label: string }[];
  className?: string;
}

export function PricingHero({
  badge = "Lifetime access — pay once",
  title = "Premium blocks & templates for",
  highlight = "$5 lifetime",
  description,
  features,
  className,
}: PricingHeroProps) {
  const defaultFeatures = [
    { icon: ShieldCheck, label: "Lifetime updates" },
    { icon: Infinity, label: "No recurring fees" },
    { icon: Zap, label: "Commercial use" },
  ];

  const items = features ?? defaultFeatures;

  return (
    <section
      className={cn("relative overflow-hidden pt-24 pb-16 px-4", className)}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),rgba(59,130,246,0.1),transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),rgba(59,130,246,0.15),transparent_72%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center space-y-6"
      >
        <Badge variant="info" appearance="light" size="md">
          <Sparkles className="h-3.5 w-3.5" />
          {badge}
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
          {title}
          <span className="ml-2 bg-clip-text text-transparent bg-linear-to-r from-violet-600 via-fuchsia-500 to-rose-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-rose-400">
            {highlight}
          </span>
        </h1>

        {description && (
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-zinc-500 dark:text-zinc-500">
          {items.map((item) => (
            <span key={item.label} className="flex items-center gap-1.5">
              <item.icon className="h-4 w-4 text-emerald-500" /> {item.label}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
