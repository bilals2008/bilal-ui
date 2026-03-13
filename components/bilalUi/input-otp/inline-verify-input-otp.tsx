"use client";

import * as React from "react";
import { CheckCircle2, Mail } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function InlineVerifyInputOtp() {
  const [value, setValue] = React.useState("");
  const [verified, setVerified] = React.useState(false);

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <p className="text-sm font-medium">Email</p>
        </div>
        {verified ? (
          <Badge className="gap-1 bg-emerald-500 text-xs text-white">
            <CheckCircle2 className="h-3 w-3" />
            Verified
          </Badge>
        ) : (
          <Badge variant="secondary" className="text-xs">
            Unverified
          </Badge>
        )}
      </div>
      <p className="text-xs text-muted-foreground">alex@example.com</p>
      {!verified && (
        <div className="flex items-center gap-2">
          <InputOTP
            maxLength={4}
            value={value}
            onChange={setValue}
            aria-label="Email verification code"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
          <Button
            type="button"
            size="sm"
            disabled={value.length < 4}
            onClick={() => setVerified(true)}
          >
            Verify
          </Button>
        </div>
      )}
    </div>
  );
}
