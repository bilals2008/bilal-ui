"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";

export function OnboardingStepInputOtp() {
  const [value, setValue] = React.useState("");
  const filled = value.length === 6;

  return (
    <div className="flex w-full max-w-sm flex-col gap-5 rounded-2xl border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={cn(
                "h-1.5 w-8 rounded-full transition-colors",
                step === 2 ? "bg-primary" : "bg-muted",
              )}
            />
          ))}
        </div>
        <span className="ml-auto text-xs text-muted-foreground">Step 2 of 3</span>
      </div>
      <div>
        <p className="text-sm font-bold">Confirm your number</p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Enter the 6-digit code we texted to
          <span className="font-medium text-foreground"> +44 •••• 7821</span>
        </p>
      </div>
      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
        aria-label="Onboarding verification code"
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
      <div className="flex gap-2">
        <Button type="button" variant="outline" className="flex-1">
          Back
        </Button>
        <Button type="button" className="flex-1" disabled={!filled}>
          Continue
        </Button>
      </div>
    </div>
  );
}
