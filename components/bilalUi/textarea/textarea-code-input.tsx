"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaCodeInput() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="code">Paste your code</Label>
      <Textarea
        id="code"
        placeholder="// paste code here..."
        className="resize-none border-zinc-700 bg-zinc-950 font-mono text-sm text-green-400 placeholder:text-zinc-600"
        rows={6}
      />
    </div>
  );
}

