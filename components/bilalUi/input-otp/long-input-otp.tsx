"use client";

import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function LongInputOtp() {
  const [value, setValue] = React.useState("");

  return (
    <div className="w-full max-w-md space-y-2">
      <InputOTP
        maxLength={8}
        value={value}
        onChange={setValue}
        aria-label="8 digit OTP input"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-muted-foreground">
        8-digit layout for high-security verification flows.
      </p>
    </div>
  );
}
