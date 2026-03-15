"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";

export function DisabledInputOtp() {
  return (
    <div className="flex flex-col items-center gap-3">
      <Label className="text-sm font-medium text-muted-foreground">
        Verification Code
      </Label>
      <InputOTP maxLength={6} disabled aria-label="Disabled verification code">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-muted-foreground">Input is disabled.</p>
    </div>
  );
}
