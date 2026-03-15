"use client";

import { CheckCircle2 } from "lucide-react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function SuccessInputOtp() {
  return (
    <div className="flex flex-col items-center gap-4">
      <InputOTP maxLength={6} value="482917" aria-label="Verified code">
        <InputOTPGroup>
          <InputOTPSlot index={0} className="border-emerald-500 text-emerald-600" />
          <InputOTPSlot index={1} className="border-emerald-500 text-emerald-600" />
          <InputOTPSlot index={2} className="border-emerald-500 text-emerald-600" />
          <InputOTPSlot index={3} className="border-emerald-500 text-emerald-600" />
          <InputOTPSlot index={4} className="border-emerald-500 text-emerald-600" />
          <InputOTPSlot index={5} className="border-emerald-500 text-emerald-600" />
        </InputOTPGroup>
      </InputOTP>
      <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
        <CheckCircle2 className="h-4 w-4" />
        Code verified successfully!
      </div>
    </div>
  );
}
