"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function ResendInputOtp() {
  const [value, setValue] = React.useState("");
  const [secondsLeft, setSecondsLeft] = React.useState(30);

  React.useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = window.setTimeout(() => setSecondsLeft((prev) => prev - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [secondsLeft]);

  return (
    <div className="w-full max-w-sm space-y-3">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
        aria-label="OTP with resend action"
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

      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          Didn&apos;t receive it?{" "}
          {secondsLeft > 0 ? `Resend in ${secondsLeft}s` : "You can resend now."}
        </p>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          disabled={secondsLeft > 0}
          onClick={() => {
            setValue("");
            setSecondsLeft(30);
          }}
        >
          Resend code
        </Button>
      </div>
    </div>
  );
}
