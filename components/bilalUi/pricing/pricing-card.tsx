"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, ArrowRight, Crown, Sparkles, Loader2 } from "lucide-react";
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
  checkout?: boolean;
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
  checkout,
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
        checkout={checkout}
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
      whileHover={{ y: -2 }}
      className={cn(
        "relative h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950",
        className,
      )}
    >
      <div className="space-y-6">
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
  checkout,
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
  checkout?: boolean;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/lemon/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setLoading(false);
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      whileHover={{ y: -2 }}
      className={cn(
        "relative h-full overflow-hidden rounded-2xl border-2 border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950",
        className,
      )}
    >
      <div className="absolute right-5 top-5">
        <Badge variant="pro" appearance="light" size="sm">
          <Crown className="h-3 w-3" />
          {badgeLabel ?? "Best Value"}
        </Badge>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
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
                  <Crown className="h-4 w-4 mt-0.5 shrink-0 text-zinc-500" />
                )}
                <span>{getFeatureLabel(feature)}</span>
                {isFeatureSoon(feature) && (
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-600 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-400">Soon</span>
                )}
              </motion.li>
            ))}
          </ul>

        <div className="relative">
          {checkout && !comingSoon ? (
            <button
              type="button"
              onClick={handleCheckout}
              disabled={loading}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-8 text-sm font-bold text-white transition-all hover:bg-zinc-800 active:scale-[0.98] disabled:cursor-wait dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Sparkles className="h-4 w-4" />{cta}</>}
            </button>
          ) : (
            <Link
              href={comingSoon ? "#" : href}
              aria-disabled={comingSoon}
              tabIndex={comingSoon ? -1 : undefined}
              className={cn(
                "inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold transition-all active:scale-[0.98]",
                comingSoon
                  ? "pointer-events-none bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                  : "bg-zinc-900 px-8 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200",
              )}
            >
              {comingSoon ? "Coming Soon" : cta}
              {!comingSoon && <ArrowRight className="h-4 w-4" />}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
