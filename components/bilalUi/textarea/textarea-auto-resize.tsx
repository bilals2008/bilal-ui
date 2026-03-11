"use client";

import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaAutoResize() {
  const [value, setValue] = useState("");

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="auto-resize">Auto-resize</Label>
      <Textarea
        id="auto-resize"
        placeholder="Start typing — I'll grow with you..."
        value={value}
        onChange={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = `${e.target.scrollHeight}px`;
          setValue(e.target.value);
        }}
        className="resize-none overflow-hidden"
        rows={2}
      />
    </div>
  );
}

