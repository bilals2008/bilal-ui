// File: components/footer/Footer.tsx
"use client";

import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="border-t-2 border-dashed border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-black/5">
      <div className="mx-auto max-w-7xl px-6 py-4 md:py-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              &copy; {new Date().getFullYear()} Bilal UI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/bilals2008"
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://x.com/MBH7555"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 font-medium group cursor-default"
          >
            Crafted with{" "}
            <motion.span
              animate={{
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-red-500 inline-block drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]"
            >
              ❤️
            </motion.span>{" "}
            by{" "}
            <span className="font-bold bg-clip-text text-transparent bg-linear-to-r from-rose-500 via-fuchsia-500 to-purple-500 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
              Bilal
            </span>
            .
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
