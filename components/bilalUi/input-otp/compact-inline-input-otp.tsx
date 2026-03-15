"use client";

import * as React from "react";
import { KeyRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function CompactInlineInputOtp() {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex items-center gap-3">
      <InputOTP
        maxLength={4}
        value={value}
        onChange={setValue}
        aria-label="Compact PIN code"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <Button type="button" size="sm" disabled={value.length < 4}>
        <KeyRound className="mr-1 h-3.5 w-3.5" />
        Unlock
      </Button>
    </div>
  );
}
