"use client";

import { motion } from "motion/react";
import {
  Check,
  X,
  Sparkles,
  Blocks,
  LayoutTemplate,
  Infinity,
  DollarSign,
  ShieldCheck,
  Zap,
  Crown,
  ArrowRight,
  HelpCircle,
  Minus,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "All core components, forever free.",
    features: [
      "50+ UI components",
      "Copy-paste integration",
      "Tailwind v4 styling",
      "Dark mode support",
      "MIT license",
      "Community access",
    ],
    cta: "Browse Components",
    href: "/docs/components/button",
    popular: false,
  },
  {
    name: "Lifetime",
    price: "$5",
    period: "one-time",
    description: "All blocks, templates & premium components.",
    features: [
      "Everything in Free",
      "10+ page blocks",
      "3 full templates",
      "Premium components",
      "Lifetime updates",
      "Priority support",
    ],
    cta: "Get Lifetime Access",
    href: "#",
    popular: true,
  },
];

const componentCategories = [
  {
    category: "UI Components",
    items: [
      { name: "Buttons", free: true },
      { name: "Cards", free: true },
      { name: "Badges", free: true },
      { name: "Dialogs", free: true },
      { name: "Dropdowns", free: true },
      { name: "Tables", free: true },
      { name: "Forms & Inputs", free: true },
      { name: "Navigation Menus", free: true },
      { name: "Date Pickers", free: true },
      { name: "Command Palette", free: true },
      { name: "Advanced Tables", free: false },
      { name: "Data Charts", free: false },
    ],
  },
  {
    category: "Page Blocks",
    items: [
      { name: "Hero Sections", free: false },
      { name: "Feature Grids", free: false },
      { name: "Pricing Tables", free: false },
      { name: "Testimonials", free: false },
      { name: "FAQ Accordions", free: false },
      { name: "CTA Sections", free: false },
      { name: "Newsletter Forms", free: false },
      { name: "Stats/Counters", free: false },
      { name: "Team Sections", free: false },
      { name: "Contact Forms", free: false },
    ],
  },
  {
    category: "Templates",
    items: [
      { name: "SaaS Landing Page", free: false },
      { name: "Admin Dashboard", free: false },
      { name: "Portfolio Site", free: false },
      { name: "Docs Site", free: true },
      { name: "Blog Layout", free: true },
    ],
  },
];

const faqs = [
  {
    q: "What's included in the $5 Lifetime plan?",
    a: "You get all page blocks (hero, features, pricing, etc.), full templates (SaaS landing page, admin dashboard, portfolio), and premium component variants — plus lifetime updates with no recurring fees.",
  },
  {
    q: "Are the free components production-ready?",
    a: "Yes. Every component follows accessibility best practices, supports dark mode, is built on Tailwind v4, and is fully customizable since you own the code.",
  },
  {
    q: "How does the $5 lifetime payment work?",
    a: "Pay once, get access forever. No subscriptions, no recurring charges. You'll receive all current and future premium blocks, templates, and components.",
  },
  {
    q: "Can I use these in commercial projects?",
    a: "Absolutely. Both free and premium components are licensed for personal and commercial use. Build unlimited projects.",
  },
  {
    q: "How do I access premium content after purchase?",
    a: "After purchase, you'll get access to a private GitHub repository and a download link with all blocks, templates, and premium components.",
  },
  {
    q: "Will more content be added later?",
    a: "Yes. The library is actively maintained and expanded. Your lifetime purchase covers all future updates and additions to the premium collection.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-white dark:bg-black overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 px-4">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),rgba(59,130,246,0.1),transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),rgba(59,130,246,0.15),transparent_72%)]" />
        </div>

        <div className="mx-auto max-w-4xl text-center space-y-6">
          <Badge variant="info" appearance="light" size="md">
            <Sparkles className="h-3.5 w-3.5" />
            Lifetime access — pay once
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            Premium blocks & templates for
            <span className="ml-2 bg-clip-text text-transparent bg-linear-to-r from-violet-600 via-fuchsia-500 to-rose-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-rose-400">
              $5 lifetime
            </span>
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Free components stay free. Unlock the full collection — page blocks,
            premium variants, and production templates — with a single payment.
            No subscriptions. No surprises.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-zinc-500 dark:text-zinc-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-500" /> Lifetime
              updates
            </span>
            <span className="flex items-center gap-1.5">
              <Infinity className="h-4 w-4 text-violet-500" /> No recurring fees
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-amber-500" /> Commercial use
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "relative overflow-hidden rounded-2xl border p-8 transition-all duration-300",
                plan.popular
                  ? "border-violet-200 dark:border-violet-800 bg-white dark:bg-zinc-950 shadow-xl shadow-violet-500/15 dark:shadow-violet-500/10 ring-1 ring-violet-500/20 dark:ring-violet-500/30"
                  : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30",
              )}
            >
              {plan.popular && (
                <div className="absolute top-5 right-5">
                  <Badge variant="pro" appearance="light" size="sm">
                    <Crown className="h-3 w-3" />
                    Best Value
                  </Badge>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-5xl font-black text-zinc-900 dark:text-zinc-50">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 ml-1">
                        / {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <Check className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={cn(
                    "inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold transition-all active:scale-[0.98]",
                    plan.popular
                      ? "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                      : "border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800",
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="px-4 py-20 bg-zinc-50/50 dark:bg-zinc-900/20 border-y border-dashed border-zinc-200/60 dark:border-zinc-800/60">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14 space-y-4">
            <Badge variant="info" appearance="light" size="md">
              <Blocks className="h-3.5 w-3.5" />
              What you get
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Everything you need to ship faster
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              The $5 lifetime plan unlocks every block, template, and premium
              variant in the library.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
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
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
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

      {/* Comparison Table */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14 space-y-4">
            <Badge variant="info" appearance="light" size="md">
              Free vs Premium
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              What's free and what's premium
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Core components are always free. Blocks, templates, and premium
              variants are part of the $5 lifetime bundle.
            </p>
          </div>

          <div className="space-y-8">
            {componentCategories.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-4">
                  {group.category}
                </h3>
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-100 dark:divide-zinc-800">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between px-5 py-3.5 text-sm"
                    >
                      <span className="text-zinc-900 dark:text-zinc-100">
                        {item.name}
                      </span>
                      {item.free ? (
                        <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                          <Check className="h-4 w-4" />
                          Free
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-violet-600 dark:text-violet-400 font-medium">
                          <Crown className="h-4 w-4" />
                          Premium
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 bg-zinc-50/50 dark:bg-zinc-900/20 border-y border-dashed border-zinc-200/60 dark:border-zinc-800/60">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="info" appearance="light" size="md">
              <HelpCircle className="h-3.5 w-3.5" />
              Got questions?
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Everything you need to know about the pricing and what's included.
            </p>
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
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-6 pt-0 text-zinc-600 dark:text-zinc-400 leading-relaxed pl-6 sm:pl-8 border-l border-zinc-100 dark:border-zinc-800 ml-0">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <Badge variant="info" appearance="light" size="md">
            <Sparkles className="h-3.5 w-3.5" />
            Start building today
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Pay once. Build forever.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Join the community and get lifetime access to every block, template,
            and premium component for just $5.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-zinc-900 px-8 text-sm font-bold text-white hover:bg-zinc-800 transition-all active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <DollarSign className="h-4 w-4" />
              Get Lifetime Access — $5
            </Link>
            <Link
              href="/docs/components/button"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 px-8 text-sm font-bold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-[0.98]"
            >
              Browse Free Components
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
