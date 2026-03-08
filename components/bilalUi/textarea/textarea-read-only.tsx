"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaReadOnly() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="readonly-msg">License Agreement</Label>
      <Textarea
        id="readonly-msg"
        readOnly
        rows={4}
        defaultValue="This software is provided 'as-is', without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software."
        className="cursor-default resize-none bg-muted text-muted-foreground"
      />
    </div>
  );
}

