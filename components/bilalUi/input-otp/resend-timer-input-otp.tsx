"use client";

import * as React from "react";
import { RefreshCw, Smartphone } from "lucide-react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function ResendTimerInputOtp() {
  const [seconds, setSeconds] = React.useState(30);
  const [active, setActive] = React.useState(true);

  React.useEffect(() => {
    if (!active || seconds <= 0) return;

    const timer = window.setTimeout(() => {
      setSeconds((current) => {
        if (current <= 1) {
          setActive(false);
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [active, seconds]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <Smartphone className="h-4 w-4 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">Code sent to +1 •••• 4287</p>
      </div>
      <InputOTP maxLength={6} aria-label="Verification code with resend timer">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        {active ? (
          <>
            Resend in
            <span className="font-mono font-semibold tabular-nums text-foreground">
              {seconds}s
            </span>
          </>
        ) : (
          <button
            type="button"
            onClick={() => {
              setSeconds(30);
              setActive(true);
            }}
            className="flex items-center gap-1 font-medium text-primary hover:underline"
          >
            <RefreshCw className="h-3 w-3" />
            Resend code
          </button>
        )}
      </div>
    </div>
  );
}
