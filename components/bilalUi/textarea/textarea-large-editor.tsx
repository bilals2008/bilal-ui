"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaLargeEditor() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Label htmlFor="editor">Document Editor</Label>
      <Textarea
        id="editor"
        placeholder="Start writing your document..."
        className="min-h-[240px] font-mono text-sm"
      />
    </div>
  );
}

