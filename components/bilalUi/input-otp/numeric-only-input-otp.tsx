"use client";

import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function NumericOnlyInputOtp() {
  const [value, setValue] = React.useState("");

  return (
    <div className="w-full max-w-sm space-y-2">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(next) => setValue(next.replace(/\D/g, "").slice(0, 6))}
        aria-label="Numeric only OTP input"
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
      <p className="text-xs text-muted-foreground">
        Only numeric characters are accepted in this variant.
      </p>
    </div>
  );
}
