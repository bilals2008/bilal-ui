"use client";

import { Textarea } from "@/components/ui/textarea";

export function TextareaWithSubject() {
  return (
    <div className="flex w-full max-w-sm flex-col overflow-hidden rounded-md border border-border divide-y divide-border">
      <input
        className="bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none"
        placeholder="Subject"
      />
      <Textarea
        placeholder="Body"
        className="min-h-[120px] resize-none rounded-none border-none text-sm shadow-none focus-visible:ring-0"
      />
    </div>
  );
}
