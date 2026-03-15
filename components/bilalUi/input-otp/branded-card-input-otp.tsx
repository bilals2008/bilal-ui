"use client";

import { ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function BrandedCardInputOtp() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-5 rounded-2xl border bg-card p-8 shadow-md">
      <div className="flex flex-col items-center gap-1">
        <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
          <ShieldCheck className="h-5 w-5 text-primary-foreground" />
        </div>
        <p className="text-base font-bold tracking-tight">Verify your identity</p>
        <p className="max-w-[200px] text-center text-xs text-muted-foreground">
          A 6-digit code was sent to your registered phone number.
        </p>
      </div>
      <InputOTP maxLength={6} aria-label="Branded verification code">
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
        Verify now
      </Button>
      <p className="text-[11px] text-muted-foreground">
        Code expires in{" "}
        <span className="font-mono font-semibold text-foreground">04:59</span>
      </p>
    </div>
  );
}
