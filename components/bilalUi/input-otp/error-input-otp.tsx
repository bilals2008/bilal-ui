"use client";

import * as React from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function ErrorInputOtp() {
  const [value, setValue] = React.useState("");
  const [isInvalid, setIsInvalid] = React.useState(false);

  React.useEffect(() => {
    if (value.length === 6) {
      setIsInvalid(value !== "123456");
      return;
    }
    setIsInvalid(false);
  }, [value]);

  return (
    <div className="w-full max-w-sm space-y-3">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
        aria-label="OTP with error state"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} aria-invalid={isInvalid} />
          <InputOTPSlot index={1} aria-invalid={isInvalid} />
          <InputOTPSlot index={2} aria-invalid={isInvalid} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} aria-invalid={isInvalid} />
          <InputOTPSlot index={4} aria-invalid={isInvalid} />
          <InputOTPSlot index={5} aria-invalid={isInvalid} />
        </InputOTPGroup>
      </InputOTP>

      {value.length < 6 && (
        <p className="text-xs text-muted-foreground">
          Demo tip: enter <span className="font-medium">123456</span> as valid code.
        </p>
      )}
      {value.length === 6 && !isInvalid && (
        <p className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="size-3.5" />
          Code accepted.
        </p>
      )}
      {isInvalid && (
        <p className="flex items-center gap-1.5 text-xs text-destructive">
          <AlertTriangle className="size-3.5" />
          Invalid code. Please try again.
        </p>
      )}
    </div>
  );
}
