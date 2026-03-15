"use client";

import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function EmailFlowInputOtp() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <Mail className="h-6 w-6 text-primary" />
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold">Check your email</p>
        <p className="mt-1 text-xs text-muted-foreground">
          We sent a code to
          <span className="font-medium text-foreground"> alex@example.com</span>
        </p>
      </div>
      <InputOTP maxLength={6} aria-label="Email verification code">
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
      <Button type="button" className="w-full">
        Verify email
      </Button>
      <p className="text-xs text-muted-foreground">
        Didn&apos;t receive it?{" "}
        <button type="button" className="font-medium text-primary hover:underline">
          Resend
        </button>
      </p>
    </div>
  );
}
