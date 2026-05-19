"use client";

import { Crown, Sparkles, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProLockProps {
  label?: string;
  className?: string;
}

export function ProLock({
  label = "This is a Pro component",
  className,
}: ProLockProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-5 rounded-2xl border border-zinc-200 bg-white px-8 py-16 text-center dark:border-zinc-800 dark:bg-zinc-950",
        className,
      )}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-900/30">
        <LockKeyhole className="h-7 w-7 text-violet-600 dark:text-violet-400" />
      </div>

      <div className="space-y-2 max-w-sm">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-white px-3 py-1 text-xs font-semibold text-violet-600 dark:border-violet-800 dark:bg-zinc-900 dark:text-violet-400">
          <Crown className="h-3 w-3" />
          Pro
        </div>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
          {label}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          Unlock all premium component variants, page blocks, and full templates
          with a single $15 payment.
        </p>
      </div>

      <Link
        href="/pricing"
        className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-bold text-white transition-all hover:bg-violet-700 active:scale-[0.98] dark:bg-violet-500 dark:hover:bg-violet-400"
      >
        <Sparkles className="h-4 w-4" />
        Unlock with Pro
      </Link>
    </div>
  );
}
