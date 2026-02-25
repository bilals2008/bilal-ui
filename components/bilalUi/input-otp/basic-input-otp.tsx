"use client";

import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function BasicInputOtp() {
  const [value, setValue] = React.useState("");
  const isComplete = value.length === 6;

  return (
    <div className="w-full max-w-sm space-y-2">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
        aria-label="One-time password"
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
        {isComplete
          ? "Code complete. You can continue to the next step."
          : "Enter the 6-digit code sent to your email."}
      </p>
    </div>
  );
}
