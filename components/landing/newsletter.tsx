// File: components/landing/newsletter.tsx
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, Loader2, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

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
    <section className="relative overflow-hidden px-4 py-14">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-72 w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),rgba(244,63,94,0.08),transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),rgba(244,63,94,0.12),transparent_72%)]" />
      </div>

      <div className="mx-auto max-w-5xl">
        <Card className="group relative overflow-hidden rounded-3xl border-dashed border-zinc-300/70 bg-white/75 p-6 shadow-[0_30px_80px_-60px_rgba(24,24,27,0.55)] backdrop-blur-sm transition-colors duration-300 hover:border-zinc-400/80 dark:border-zinc-700/70 dark:bg-zinc-950/70 dark:hover:border-zinc-600/80 md:p-8">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-zinc-50/70 via-transparent to-zinc-100/45 dark:from-zinc-900/35 dark:via-transparent dark:to-zinc-900/20" />

          <div className="relative z-10 flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <Badge
                variant="pro"
                appearance="outline"
                size="sm"
                className="gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.14em]"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Stay Updated
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
                Join the{" "}
                <span className="bg-linear-to-r from-rose-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
                  Bilal UI
                </span>{" "}
                inner circle
              </h2>
              <CardDescription className="max-w-md text-sm text-zinc-600 dark:text-zinc-400 md:text-base">
                Get early access to new components and exclusive design
                resources.
              </CardDescription>
              <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <Badge
                  variant="secondary"
                  appearance="outline"
                  size="sm"
                  className="rounded-full"
                >
                  Weekly component drops
                </Badge>
                <Badge
                  variant="secondary"
                  appearance="outline"
                  size="sm"
                  className="rounded-full"
                >
                  No spam
                </Badge>
              </div>
            </div>

            <div className="w-full lg:max-w-[28rem]">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Alert className="rounded-2xl border-emerald-200/80 bg-emerald-50/80 dark:border-emerald-500/25 dark:bg-emerald-500/10">
                    <CheckCircle2 className="size-5 text-emerald-600 dark:text-emerald-400" />
                    <AlertTitle className="text-emerald-800 dark:text-emerald-200">
                      You are subscribed
                    </AlertTitle>
                    <AlertDescription className="text-emerald-700 dark:text-emerald-300">
                      Welcome! Check your inbox soon.
                    </AlertDescription>
                  </Alert>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2">
                  <InputGroup className="h-12 rounded-2xl border-zinc-200/90 bg-zinc-50/80 dark:border-zinc-700 dark:bg-zinc-900/80">
                    <InputGroupAddon className="text-zinc-400">
                      <Mail className="h-4 w-4" />
                    </InputGroupAddon>
                    <InputGroupInput
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 px-1 text-sm"
                      disabled={status === "loading"}
                    />
                    <InputGroupAddon align="inline-end" className="pr-1.5">
                      <Button
                        type="submit"
                        disabled={status === "loading"}
                        className="h-9 rounded-xl px-5 font-bold hover:shadow-lg hover:shadow-purple-500/20"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="size-4 animate-spin" />
                            Subscribing
                          </>
                        ) : (
                          <>
                            Subscribe
                            <Send className="size-3.5" />
                          </>
                        )}
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                  <p className="px-1 text-center text-[11px] text-zinc-500 dark:text-zinc-500 lg:text-left">
                    No spam, just quality updates. Unsubscribe anytime with one
                    click.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
