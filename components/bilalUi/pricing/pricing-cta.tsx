// File: components/bilalUi/pricing/pricing-cta.tsx
"use client";

import { Sparkles, DollarSign } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PricingCTAProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  className?: string;
}

export function PricingCTA({
  badge = "Start building today",
  title = "Pay once. Build forever.",
  description,
  primaryCta,
  secondaryCta,
  className,
}: PricingCTAProps) {
  return (
    <section className={cn("px-4 py-20", className)}>
      <div className="mx-auto max-w-3xl text-center space-y-6">
        <Badge variant="info" appearance="light" size="md">
          <Sparkles className="h-3.5 w-3.5" />
          {badge}
        </Badge>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href={primaryCta.href}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-zinc-900 px-8 text-sm font-bold text-white hover:bg-zinc-800 transition-all active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <DollarSign className="h-4 w-4" />
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 px-8 text-sm font-bold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-[0.98]"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
