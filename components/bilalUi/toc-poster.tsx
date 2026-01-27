"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

export function TOCPoster() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-6 mb-2"
    >
      <Link
        href="https://github.com/bilals2008/bilal-ui"
        target="_blank"
        className="group relative flex flex-col items-start gap-3 overflow-hidden rounded-xl border border-rose-500/20 p-4 transition-all hover:border-rose-500/50 hover:bg-rose-500/2"
      >
        <div className="relative flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-500">
          <Github className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
          <span>Open Source</span>
        </div>

        <div className="relative space-y-1.5">
          <h3 className="font-bold text-foreground transition-colors group-hover:text-rose-500">
            Give us a Star
          </h3>
          <p className="text-[11px] leading-relaxed text-muted-foreground/80 transition-colors group-hover:text-muted-foreground">
            Support our open-source collection of UI components and animated
            effects. Pairs beautifully with shadcn/ui.
          </p>
        </div>

        <div className="relative mt-2 flex items-center gap-2 text-xs font-bold text-rose-500">
          <span className="underline underline-offset-4 decoration-rose-500/30 transition-all group-hover:decoration-rose-500">
            Star on GitHub
          </span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}
