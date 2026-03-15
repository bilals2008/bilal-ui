"use client";

import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaFloatingLabel() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;

  return (
    <div className="relative w-full max-w-sm">
      <Textarea
        id="floating"
        rows={4}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        className="peer resize-none pt-5"
      />
      <Label
        htmlFor="floating"
        className={`pointer-events-none absolute left-3 text-muted-foreground transition-all duration-150 ${
          active ? "top-1.5 text-xs" : "top-3 text-sm"
        }`}
      >
        Your message
      </Label>
    </div>
  );
}
