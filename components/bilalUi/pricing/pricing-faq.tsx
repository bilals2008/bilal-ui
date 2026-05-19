"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, Minus, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FAQ {
  q: string;
  a: string;
}

interface PricingFAQProps {
  faqs: FAQ[];
  title?: string;
  badge?: string;
  description?: string;
  className?: string;
}

export function PricingFAQ({
  faqs,
  title = "Frequently Asked Questions",
  badge = "Got questions?",
  description,
  className,
}: PricingFAQProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section
      className={cn(
        "px-4 py-20 bg-zinc-50/50 dark:bg-zinc-900/20 border-y border-dashed border-zinc-200/60 dark:border-zinc-800/60",
        className,
      )}
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="info" appearance="light" size="md">
            <HelpCircle className="h-3.5 w-3.5" />
            {badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {title}
          </h2>
          {description && (
            <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
          )}
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className={cn(
                  "group relative overflow-hidden rounded-lg transition-all duration-300",
                  isOpen
                    ? "bg-white dark:bg-zinc-900 shadow-xs"
                    : "hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50",
                )}
              >
                <div
                  className={cn(
                    "absolute left-0 top-0 bottom-0 w-1 bg-violet-500 transition-all duration-300",
                    isOpen ? "opacity-100" : "opacity-0",
                  )}
                />
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                >
                  <span
                    className={cn(
                      "font-medium transition-colors duration-200 pr-4",
                      isOpen
                        ? "text-violet-600 dark:text-violet-400"
                        : "text-zinc-900 dark:text-zinc-100",
                    )}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={cn(
                      "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                      isOpen
                        ? "border-violet-400/60 bg-violet-50 text-violet-600 dark:border-violet-700 dark:bg-violet-900/30 dark:text-violet-400"
                        : "border-zinc-200 text-zinc-500 group-hover:border-zinc-300 group-hover:text-zinc-700 dark:border-zinc-700 dark:text-zinc-400 dark:group-hover:border-zinc-600 dark:group-hover:text-zinc-200",
                    )}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-6 pt-0 text-zinc-600 dark:text-zinc-400 leading-relaxed pl-6 sm:pl-8 border-l border-zinc-100 dark:border-zinc-800 ml-0">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
