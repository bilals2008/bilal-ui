"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithClear() {
  const [value, setValue] = useState("");

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Textarea
        placeholder="Type something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={3}
      />
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {value.length > 0 ? `${value.length} chars` : "Empty"}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setValue("")}
          disabled={!value}
        >
          Clear
        </Button>
      </div>
    </div>
  );
}
