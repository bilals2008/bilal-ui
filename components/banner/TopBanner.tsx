"use client";

import { X, Sparkles } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-60 w-full bg-linear-to-r from-rose-500 via-fuchsia-500 to-purple-500">
      <div className="flex items-center justify-center px-4 py-2.5 sm:px-6">
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <Sparkles className="h-4 w-4 hidden sm:block" />
          <span className="hidden sm:inline">
            New components added! Check out the latest
          </span>
          <span className="sm:hidden">New: </span>
          <Link
            href="/docs/components/button"
            className="underline underline-offset-2 hover:no-underline font-semibold"
          >
            Magnetic Particle Button
          </Link>
          <span className="hidden sm:inline">and more</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-4 p-1 rounded hover:bg-white/20 transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4 text-white" />
        </button>
      </div>
    </div>
  );
}
