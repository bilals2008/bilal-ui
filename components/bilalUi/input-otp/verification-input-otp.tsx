"use client";

import * as React from "react";
import { CheckCircle2, LoaderCircle, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

type VerifyState = "idle" | "verifying" | "verified";

export function VerificationInputOtp() {
  const [value, setValue] = React.useState("");
  const [state, setState] = React.useState<VerifyState>("idle");

  const isComplete = value.length === 6;
  const canVerify = isComplete && state !== "verifying" && state !== "verified";

  const handleVerify = () => {
    if (!canVerify) return;
    setState("verifying");
    setTimeout(() => {
      setState("verified");
    }, 900);
  };

  return (
    <div className="w-full max-w-sm space-y-4 rounded-xl border bg-card p-4 shadow-sm">
      <div className="space-y-1">
        <p className="text-sm font-semibold">Two-factor verification</p>
        <p className="text-xs text-muted-foreground">
          Enter the 6-digit code sent to +92 *** *** 102.
        </p>
      </div>

      <InputOTP
        maxLength={6}
        value={value}
        onChange={(next) => {
          setValue(next);
          if (state !== "idle") setState("idle");
        }}
        aria-label="Verification code"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <Button onClick={handleVerify} disabled={!canVerify} className="w-full gap-2">
        {state === "idle" && (
          <>
            <ShieldCheck className="size-4" />
            Verify Code
          </>
        )}
        {state === "verifying" && (
          <>
            <LoaderCircle className="size-4 animate-spin" />
            Verifying...
          </>
        )}
        {state === "verified" && (
          <>
            <CheckCircle2 className="size-4" />
            Verified
          </>
        )}
      </Button>

      {state === "verified" && (
        <div className="rounded-md border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
          Verification successful. Next step: complete your profile setup.
        </div>
      )}
    </div>
  );
}
