// File: components/landing/cta-section.tsx
"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-50/50 dark:to-zinc-900/10 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          <span>Ready to start building?</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Build your next idea with{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">
            Bilal UI
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Join thousands of developers building beautiful applications faster
          than ever. Accessible, customizable, and open source.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link
            href="/docs/components/button"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-zinc-900 dark:bg-zinc-100 px-8 font-medium text-white dark:text-zinc-900 transition-all duration-300 hover:w-44 hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-95"
          >
            <div className="absolute inset-0 flex items-center justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:transform-[skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
            <span className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform -1" />
            </span>
          </Link>

          <Link
            href="https://github.com"
            target="_blank"
            className="group inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-transparent px-8 font-medium text-zinc-900 dark:text-zinc-100 transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95"
          >
            <span className="flex items-center gap-2">
              View on GitHub
              <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
