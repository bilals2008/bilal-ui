"use client";

import { Textarea } from "@/components/ui/textarea";

export function TextareaBorderless() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1 border-b border-border pb-1">
      <Textarea
        placeholder="Add a note..."
        className="resize-none border-none px-0 text-sm shadow-none focus-visible:ring-0"
        rows={3}
      />
    </div>
  );
}

