"use client";

import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";

export function ProgressInputOtp() {
  const [value, setValue] = React.useState("");
  const progress = (value.length / 6) * 100;

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
        aria-label="Verification code with progress"
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
      <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-300",
            progress === 100 ? "bg-emerald-500" : "bg-primary",
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground">{value.length} / 6 digits entered</p>
    </div>
  );
}
