"use client";

import * as React from "react";

import { Badge } from "@/components/ui/badge";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function BadgeStatusInputOtp() {
  const [value, setValue] = React.useState("");
  const status =
    value.length === 0 ? "waiting" : value.length < 6 ? "typing" : "ready";

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <Label className="text-sm font-semibold">Enter OTP</Label>
        <Badge
          variant={status === "ready" ? "primary" : "secondary"}
          className={cn(
            "text-xs transition-colors",
            status === "ready" && "bg-emerald-500 text-white",
            status === "typing" && "bg-amber-500 text-white",
          )}
        >
          {status === "waiting" && "Waiting"}
          {status === "typing" && "Typing..."}
          {status === "ready" && "Ready"}
        </Badge>
      </div>
      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
        aria-label="Verification code with status badge"
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
    </div>
  );
}
