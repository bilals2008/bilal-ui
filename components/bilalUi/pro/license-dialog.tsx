"use client";

import { useState } from "react";
import { Crown, Check, X, Loader2, KeyRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface LicenseDialogProps {
  open: boolean;
  onClose: () => void;
  onVerify: (key: string) => Promise<{ success: boolean; error?: string }>;
}

export function LicenseDialog({
  open,
  onClose,
  onVerify,
}: LicenseDialogProps) {
  const [key, setKey] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!key.trim()) return;

    setStatus("loading");
    setError("");

    const result = await onVerify(key.trim());

    if (result.success) {
      setStatus("success");
      setTimeout(() => {
        onClose();
        setKey("");
        setStatus("idle");
      }, 1200);
    } else {
      setStatus("error");
      setError(result.error ?? "Invalid license key");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-md animate-in fade-in zoom-in-95 duration-200">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <div className="mb-6 flex items-center justify-between">
            <Badge variant="pro" appearance="outline" shape="circle">
              <Crown className="h-3 w-3" />
              Pro License
            </Badge>
            <button
              onClick={onClose}
              className="rounded-full p-1 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-300"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <h3 className="mb-1 text-lg font-bold text-white">
            Enter your license key
          </h3>
          <p className="mb-6 text-sm text-zinc-400">
            Paste the license key you received after purchase to unlock all
            Pro components.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                value={key}
                onChange={(e) => {
                  setKey(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-zinc-600 focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600"
                disabled={status === "loading" || status === "success"}
                autoFocus
              />
            </div>

            {status === "error" && (
              <p className="flex items-center gap-1.5 text-sm text-red-400">
                <X className="h-3.5 w-3.5" />
                {error}
              </p>
            )}

            {status === "success" && (
              <p className="flex items-center gap-1.5 text-sm text-emerald-400">
                <Check className="h-3.5 w-3.5" />
                License verified! Unlocking Pro...
              </p>
            )}

            <button
              type="submit"
              disabled={
                !key.trim() || status === "loading" || status === "success"
              }
              className={cn(
                "flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all",
                status === "success"
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-zinc-900 hover:bg-zinc-200 active:scale-[0.98]",
                "disabled:cursor-not-allowed disabled:opacity-50",
              )}
            >
              {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "success" && <Check className="h-4 w-4" />}
              {status === "loading"
                ? "Verifying..."
                : status === "success"
                  ? "Unlocked!"
                  : "Verify & Unlock"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-zinc-600">
            Didn&apos;t get a key? Check your email receipt or{" "}
            <a
              href="https://lemonsqueezy.com/my-orders"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 underline underline-offset-2 hover:text-zinc-300"
            >
              visit LemonSqueezy orders
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
