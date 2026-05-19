"use client";

import { motion } from "motion/react";
import { Blocks, Crown, LayoutTemplate } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FeatureCard {
  icon: React.ElementType;
  title: string;
  desc: string;
  count: string;
  color: string;
}

interface PricingFeaturesProps {
  title?: string;
  badge?: string;
  description?: string;
  features?: FeatureCard[];
  className?: string;
}

const defaultFeatures: FeatureCard[] = [
  {
    icon: LayoutTemplate,
    title: "Page Blocks",
    desc: "Hero sections, feature grids, pricing tables, testimonials, CTAs, and more.",
    count: "10+ blocks",
    color:
      "text-violet-600 bg-violet-100 dark:bg-violet-900/30 dark:text-violet-400",
  },
  {
    icon: Crown,
    title: "Premium Components",
    desc: "Data tables, charts, advanced cards, and interactive patterns not in the free tier.",
    count: "20+ variants",
    color:
      "text-fuchsia-600 bg-fuchsia-100 dark:bg-fuchsia-900/30 dark:text-fuchsia-400",
  },
  {
    icon: Blocks,
    title: "Full Templates",
    desc: "SaaS landing page, admin dashboard, and portfolio — ready to customize and deploy.",
    count: "3 templates",
    color:
      "text-rose-600 bg-rose-100 dark:bg-rose-900/30 dark:text-rose-400",
  },
];

export function PricingFeatures({
  title = "Everything you need to ship faster",
  badge = "What you get",
  description,
  features = defaultFeatures,
  className,
}: PricingFeaturesProps) {
  return (
    <section
      className={cn(
        "px-4 py-20 bg-zinc-50/50 dark:bg-zinc-900/20 border-y border-dashed border-zinc-200/60 dark:border-zinc-800/60",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 space-y-4"
            >
              <div
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-xl",
                  item.color,
                )}
              >
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.desc}
                </p>
              </div>
              <Badge variant="info" appearance="light" size="xs">
                {item.count}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
