"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaDisabled() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="disabled-msg" className="text-muted-foreground">
        Message
      </Label>
      <Textarea
        id="disabled-msg"
        placeholder="This field is disabled."
        disabled
      />
    </div>
  );
}

