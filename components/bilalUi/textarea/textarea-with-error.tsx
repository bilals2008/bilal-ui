"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithError() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="feedback" className="text-destructive">
        Feedback
      </Label>
      <Textarea
        id="feedback"
        placeholder="Your feedback..."
        className="border-destructive focus-visible:ring-destructive"
        aria-invalid="true"
      />
      <p className="text-xs text-destructive">This field is required.</p>
    </div>
  );
}

