"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";

export function LabeledInputOtp() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-center">
        <Label className="text-sm font-semibold">Verification Code</Label>
        <p className="mt-1 text-xs text-muted-foreground">
          Enter the 6-digit code sent to your email.
        </p>
      </div>
      <InputOTP maxLength={6} aria-label="Verification code">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
