"use client";

import * as React from "react";
import { ShieldCheck } from "lucide-react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function CardInputOtp() {
  const [value, setValue] = React.useState("");

  return (
    <div className="w-full max-w-sm space-y-4 rounded-xl border bg-card p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-md border bg-muted p-2 text-muted-foreground">
          <ShieldCheck className="size-4" />
        </div>
        <div>
          <p className="text-sm font-semibold">Secure login code</p>
          <p className="text-xs text-muted-foreground">
            Enter the 6-digit OTP sent to your phone.
          </p>
        </div>
      </div>

      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
        aria-label="Card OTP input"
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
        {value.length === 6
          ? "Code entered. Continue to verify."
          : "Complete all digits to continue."}
      </p>
    </div>
  );
}
