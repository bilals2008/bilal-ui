"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaFixedHeight() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="fixed">Notes</Label>
      <Textarea
        id="fixed"
        placeholder="Add your notes here..."
        className="h-32 resize-none"
      />
    </div>
  );
}

