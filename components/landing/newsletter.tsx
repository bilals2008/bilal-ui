// File: components/landing/newsletter.tsx
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="relative py-12 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-6 md:p-8 rounded-2xl bg-white dark:bg-black border-2 border-dashed border-zinc-200 dark:border-zinc-800 transition-all hover:border-zinc-300 dark:hover:border-zinc-700">
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="flex-1 space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-[10px] font-bold tracking-wider uppercase">
                Stay Updated
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Join the{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-rose-500">
                  Bilal UI
                </span>{" "}
                inner circle
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
                Get early access to new components and exclusive design
                resources.
              </p>
            </div>

            <div className="w-full lg:w-100">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/50 dark:border-emerald-500/20"
                >
                  <CheckCircle2 className="size-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
                    Welcome! Check your inbox soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <div className="relative flex items-center gap-2 p-1 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus-within:border-zinc-400 dark:focus-within:border-zinc-600 transition-all">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-transparent px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-hidden placeholder:text-zinc-500"
                      disabled={status === "loading"}
                    />
                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98, y: 0 }}
                      className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-bold transition-all hover:shadow-xl hover:shadow-purple-500/20 disabled:opacity-50 overflow-hidden"
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent w-[200%] -translate-x-full group-hover:animate-shimmer" />

                      {status === "loading" ? (
                        <Loader2 className="size-4 animate-spin" />
                      ) : (
                        <>
                          <span className="relative z-10">Subscribe</span>
                          <Send className="relative z-10 size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </>
                      )}
                    </motion.button>
                  </div>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500 text-center lg:text-left px-1">
                    No spam, just quality updates. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
