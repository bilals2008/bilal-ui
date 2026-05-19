"use client";

import { motion } from "motion/react";
import { Check, ArrowRight, Crown, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type FeatureItem = string | { label: string; soon?: boolean; more?: boolean };

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: FeatureItem[];
  cta: string;
  href: string;
  popular?: boolean;
  badge?: string;
  comingSoon?: boolean;
  className?: string;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  href,
  popular,
  badge,
  comingSoon,
  className,
}: PricingCardProps) {
  if (popular) {
    return (
      <PremiumCard
        name={name}
        price={price}
        period={period}
        description={description}
        features={features}
        cta={cta}
        href={href}
        badge={badge}
        comingSoon={comingSoon}
        className={className}
      />
    );
  }

  return (
    <FreeCard
      name={name}
      price={price}
      description={description}
      features={features}
      cta={cta}
      href={href}
      className={className}
    />
  );
}

function getFeatureLabel(f: FeatureItem) {
  return typeof f === "string" ? f : f.label;
}
function isFeatureSoon(f: FeatureItem) {
  return typeof f !== "string" && f.soon;
}
function isFeatureMore(f: FeatureItem) {
  return typeof f !== "string" && f.more;
}

function FreeCard({
  name,
  price,
  description,
  features,
  cta,
  href,
  className,
}: {
  name: string;
  price: string;
  description: string;
  features: FeatureItem[];
  cta: string;
  href: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={cn(
        "relative h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-shadow duration-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950",
        className,
      )}
    >
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-zinc-100/50 blur-3xl dark:bg-zinc-800/30" />

      <div className="relative space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-zinc-500 dark:text-zinc-400">
            {name}
          </h3>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-5xl font-black text-zinc-900 dark:text-zinc-50">
              {price}
            </span>
          </div>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
        </div>

        <ul className="space-y-2.5">
          {features.map((feature, i) => (
            <motion.li
              key={getFeatureLabel(feature)}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300"
            >
              {isFeatureMore(feature) ? (
                <Sparkles className="h-4 w-4 mt-0.5 shrink-0 text-zinc-400" />
              ) : (
                <Check className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
              )}
              <span>{getFeatureLabel(feature)}</span>
              {isFeatureSoon(feature) && (
                <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-600 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-400">Soon</span>
              )}
            </motion.li>
          ))}
        </ul>

        <Link
          href={href}
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white text-sm font-bold text-zinc-900 transition-all hover:bg-zinc-50 active:scale-[0.98] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
        >
          {cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}

function PremiumCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  href,
  badge: badgeLabel,
  comingSoon,
  className,
}: {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: FeatureItem[];
  cta: string;
  href: string;
  badge?: string;
  comingSoon?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      whileHover={{ y: -4 }}
      className={cn(
        "relative h-full overflow-hidden rounded-2xl border-2 border-violet-200 bg-white p-8 shadow-xl shadow-violet-500/15 transition-shadow duration-300 hover:shadow-2xl hover:shadow-violet-500/25 dark:border-violet-800 dark:bg-zinc-950 dark:shadow-violet-500/10",
        className,
      )}
    >
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-violet-400/10 blur-3xl dark:bg-violet-500/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-fuchsia-400/10 blur-3xl dark:bg-fuchsia-500/10"
      />

      {/* Shimmer line */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"
      />

      <div className="absolute right-5 top-5">
        <Badge variant="pro" appearance="light" size="sm">
          <Crown className="h-3 w-3" />
          {badgeLabel ?? "Best Value"}
        </Badge>
      </div>

      <div className="relative space-y-6">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-violet-600 dark:text-violet-400">
            <Sparkles className="h-4 w-4" />
            {name}
          </h3>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-5xl font-black text-zinc-900 dark:text-zinc-50">
              {price}
            </span>
            {period && (
              <span className="text-sm text-zinc-400 ml-1">/ {period}</span>
            )}
          </div>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
        </div>

          <ul className="space-y-2.5">
            {features.map((feature, i) => (
              <motion.li
                key={getFeatureLabel(feature)}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300"
              >
                {isFeatureMore(feature) ? (
                  <Sparkles className="h-4 w-4 mt-0.5 shrink-0 text-zinc-400" />
                ) : (
                  <Crown className="h-4 w-4 mt-0.5 shrink-0 text-violet-500" />
                )}
                <span>{getFeatureLabel(feature)}</span>
                {isFeatureSoon(feature) && (
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-600 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-400">Soon</span>
                )}
              </motion.li>
            ))}
          </ul>

        <div className="relative">
          <Link
            href={comingSoon ? "#" : href}
            aria-disabled={comingSoon}
            tabIndex={comingSoon ? -1 : undefined}
            className={cn(
              "inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold transition-all active:scale-[0.98]",
              comingSoon
                ? "pointer-events-none bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                : "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25 hover:from-violet-500 hover:to-fuchsia-500 hover:shadow-xl hover:shadow-violet-500/30",
            )}
          >
            {comingSoon ? "Coming Soon" : cta}
            {!comingSoon && <ArrowRight className="h-4 w-4" />}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
