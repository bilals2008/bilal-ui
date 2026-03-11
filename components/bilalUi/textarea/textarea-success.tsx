"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaSuccess() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="success-msg">Message</Label>
      <Textarea
        id="success-msg"
        defaultValue="Great product! Highly recommend to everyone."
        className="border-green-500 focus-visible:ring-green-400"
      />
      <p className="flex items-center gap-1 text-xs text-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Looks good!
      </p>
    </div>
  );
}

