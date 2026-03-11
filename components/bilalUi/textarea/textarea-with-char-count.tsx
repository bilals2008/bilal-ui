"use client";

import { useState } from "react";

import { Textarea } from "@/components/ui/textarea";

export function TextareaWithCharCount() {
  const [value, setValue] = useState("");
  const max = 200;

  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      <Textarea
        placeholder="Type your message here."
        value={value}
        onChange={(e) => setValue(e.target.value.slice(0, max))}
        rows={4}
      />
      <p className="text-right text-xs text-muted-foreground">
        {value.length}/{max}
      </p>
    </div>
  );
}

