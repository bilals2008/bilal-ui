"use client";

import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithWordCount() {
  const [value, setValue] = useState("");
  const wordCount = value.trim() === "" ? 0 : value.trim().split(/\s+/).length;

  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      <Label htmlFor="words">Essay</Label>
      <Textarea
        id="words"
        placeholder="Start writing..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={5}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{wordCount} words</span>
        <span>{value.length} characters</span>
      </div>
    </div>
  );
}

