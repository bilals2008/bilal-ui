"use client";

import { AlertCircle } from "lucide-react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function ErrorStateInputOtp() {
  return (
    <div className="flex flex-col items-center gap-4">
      <InputOTP maxLength={6} value="123456" aria-label="Invalid code">
        <InputOTPGroup>
          <InputOTPSlot index={0} className="border-destructive text-destructive" />
          <InputOTPSlot index={1} className="border-destructive text-destructive" />
          <InputOTPSlot index={2} className="border-destructive text-destructive" />
          <InputOTPSlot index={3} className="border-destructive text-destructive" />
          <InputOTPSlot index={4} className="border-destructive text-destructive" />
          <InputOTPSlot index={5} className="border-destructive text-destructive" />
        </InputOTPGroup>
      </InputOTP>
      <div className="flex items-center gap-2 text-sm font-medium text-destructive">
        <AlertCircle className="h-4 w-4" />
        Invalid code. 2 attempts remaining.
      </div>
    </div>
  );
}
