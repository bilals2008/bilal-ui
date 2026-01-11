"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import Features from "./feature-block";
import TailwindCSS from "../icons/tailwindcss";
import { BrowseComponentsButton } from "../ui/Browse-button";
import { BrowseBlocksButton } from "../ui/Browse-blocks";

export function HeroSection() {
  return (
    <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 py-12 md:py-16 lg:py-20">
      {/* Left side - Title and CTA */}
      <div className="w-full lg:w-[45%] flex flex-col items-start text-left space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100">
            Ship faster{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
              with BilalUi
            </span>
            <br />
            build for{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 via-fuchsia-500 to-rose-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-rose-400">
              scale
            </span>
            .
          </h1>
          <p className="mt-6 text-base md:text-xl text-zinc-700 dark:text-zinc-300 max-w-lg">
            Empower your workflow with a library of{" "}
            <span className="font-semibold">
              150+ high-performance components
            </span>
            . Meticulously built with{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-fuchsia-500 dark:from-rose-400 dark:to-fuchsia-400">
              Tailwind CSS 4.0
            </span>{" "}
            and{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-fuchsia-500 to-purple-500 dark:from-fuchsia-400 dark:to-purple-400">
              shadcn/ui
            </span>{" "}
            to deliver the ultimate user experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-start w-full"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-300 pb-3 text-start flex items-center gap-2">
            <TailwindCSS className="w-4 h-4" />
            <span className="flex items-center gap-1.5">
              Optimized for Tailwind CSS 4.0 performance!
              <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">
                <Sparkles className="h-3 w-3 mr-1" />
                Latest
              </span>
            </span>
          </span>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3">
            <BrowseComponentsButton />
            <BrowseBlocksButton />
          </div>
        </motion.div>
        <Features />
      </div>

      {/* Right side - Components Layout */}
      <div className="w-full lg:w-[55%] flex flex-col justify-between gap-6 lg:pl-8">
        {/* Top row: Card + Action Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
        >
          {/* Card component */}
          <div className="w-full flex flex-col items-center justify-center">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              {"<Card/>"}
            </span>
            <div className="w-full h-40 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400">
              Card Preview
            </div>
          </div>
          {/* Action Search Bar */}
          <div className="w-full max-w-150 bg-transparent">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Components
            </span>
            <div className="w-full h-40 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400">
              Search Bar
            </div>
          </div>
        </motion.div>

        {/* Middle row: AI Chat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
            AI Chat
          </span>
          <div className="w-full h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-900/50">
            <span className="text-zinc-400">AI Component Interface</span>
          </div>
        </motion.div>

        {/* Bottom row: Buttons on left, Input on right */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left side - Buttons */}
          <div className="w-full">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Buttons
            </span>
            <div className="w-full h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center gap-3">
              <div className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 rounded-lg text-white dark:text-zinc-900 text-sm">
                Button 01
              </div>
              <div className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm">
                Button 02
              </div>
            </div>
          </div>
          {/* Right side - Input */}
          <div className="w-full">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Input
            </span>
            <div className="w-full h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-4">
              <div className="w-full h-10 border border-zinc-200 dark:border-zinc-800 rounded-md bg-white dark:bg-zinc-950"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
