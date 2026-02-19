"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const MAX_CHARS = 160;

export function WithCounterTextarea() {
  const [value, setValue] = useState("");
  const remaining = MAX_CHARS - value.length;

  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="message-counter">Your message</Label>
      <Textarea
        id="message-counter"
        placeholder="Type your message here."
        maxLength={MAX_CHARS}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p
        className={`text-xs text-right ${
          remaining <= 20 ? "text-destructive" : "text-muted-foreground"
        }`}
      >
        {remaining} characters remaining
      </p>
    </div>
  );
}
