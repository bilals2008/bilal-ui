"use client";

import * as React from "react";
import { RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";

export function ExpiryInputOtp() {
  const [seconds] = React.useState(299);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center">
        <Label className="text-sm font-semibold">Enter verification code</Label>
        <p className="mt-1 text-xs text-muted-foreground">This code will expire in</p>
        <p className="mt-1 text-2xl font-bold tabular-nums text-foreground">
          {String(minutes).padStart(2, "0")}:
          {String(remainingSeconds).padStart(2, "0")}
        </p>
      </div>
      <InputOTP maxLength={6} aria-label="Verification code with expiry">
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
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="gap-1.5 text-xs text-muted-foreground"
      >
        <RefreshCw className="h-3 w-3" />
        Request new code
      </Button>
    </div>
  );
}
