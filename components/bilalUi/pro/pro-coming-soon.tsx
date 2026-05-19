"use client";

import { ArrowRight, Crown, Gauge, LayoutDashboard, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { ProCard } from "./pro-card";

const proPacks = [
  { label: "Dashboard systems", value: "12+", icon: LayoutDashboard },
  { label: "SaaS page blocks", value: "40+", icon: Gauge },
  { label: "Premium patterns", value: "Pro", icon: LockKeyhole },
];

export function ProComingSoon() {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-zinc-200 bg-zinc-50/50 px-5 py-7 dark:border-zinc-800 dark:bg-zinc-900/10 sm:px-8 lg:px-10">
          <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                <Crown className="h-3.5 w-3.5" />
                Bilal UI Pro
              </div>

              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl lg:text-5xl">
                Premium components are{" "}
                <span className="text-rose-500 dark:text-rose-400">
                  coming soon.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 dark:text-zinc-400 sm:text-base">
                Free components stay free. Pro will bring production-ready
                dashboards, SaaS sections, auth flows, pricing pages, and full
                templates for builders who want to launch faster.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#newsletter"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 text-sm font-bold text-white transition hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300"
                >
                  Join pro waitlist
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/docs"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-bold text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
                >
                  Browse free components
                </Link>
              </div>
            </div>

            <div className="relative">
              <ProCard
                title="Launch pack"
                subtitle="Pro v1 bundle"
                badge="Soon"
                features={proPacks}
                note="Early buyers get lifetime updates for the first pro release."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
