"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function HintInputOtp() {
  return (
    <div className="flex flex-col items-center gap-2">
      <InputOTP maxLength={6} aria-label="Date of birth input">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="flex gap-0.5 text-[10px] text-muted-foreground">
        {["D", "D", "M", "M", "Y", "Y"].map((hint, index) => (
          <span key={index} className="w-10 text-center">
            {hint}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        Enter your date of birth (DDMMYY)
      </p>
    </div>
  );
}
