"use client";

import * as React from "react";
import { ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function TwoFactorInputOtp() {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-5 w-5 text-primary" />
        <p className="text-sm font-semibold">Two-factor authentication</p>
      </div>
      <p className="text-center text-xs text-muted-foreground">
        Open your authenticator app and enter the 6-digit code.
      </p>
      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
        aria-label="Two-factor authentication code"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="flex w-full gap-2">
        <Button type="button" variant="outline" className="flex-1">
          Cancel
        </Button>
        <Button type="button" className="flex-1" disabled={value.length < 6}>
          Confirm
        </Button>
      </div>
    </div>
  );
}
