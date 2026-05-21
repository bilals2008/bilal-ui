"use client";

import { useState } from "react";
import { Crown, LockKeyhole, Sparkles, KeyRound } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useProAccess } from "@/hooks/use-pro-access";
import { LicenseDialog } from "./license-dialog";

interface ProLockProps {
  label?: string;
  className?: string;
}

export function ProLock({
  label = "This is a Pro component",
  className,
}: ProLockProps) {
  const { hasAccess, verifyAndStore } = useProAccess();
  const [showDialog, setShowDialog] = useState(false);

  if (hasAccess) {
    return null;
  }

  return (
    <>
      <div
        className={cn(
          "rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-16 text-center",
          "animate-in fade-in zoom-in-50 duration-500",
          className,
        )}
      >
        <div className="mx-auto flex max-w-sm flex-col items-center gap-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
            <LockKeyhole className="h-7 w-7 text-zinc-400" />
          </div>

          <Badge variant="pro" appearance="outline" shape="circle">
            <Crown className="h-3 w-3" />
            Pro
          </Badge>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">{label}</h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Unlock all premium component variants, page blocks, and full
              templates with a single $15 payment.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-zinc-900 transition-all duration-300 ease-out hover:bg-zinc-200 active:scale-[0.98]"
            >
              <Sparkles className="h-4 w-4" />
              Unlock with Pro
            </Link>
            <button
              type="button"
              onClick={() => setShowDialog(true)}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-500 underline underline-offset-2 transition-colors hover:text-zinc-300"
            >
              <KeyRound className="h-3 w-3" />
              Already purchased? Enter license key
            </button>
          </div>
        </div>
      </div>

      <LicenseDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        onVerify={verifyAndStore}
      />
    </>
  );
}
