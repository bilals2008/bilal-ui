"use client";

import * as React from "react";
import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function MultiToggleGroup() {
  const [formats, setFormats] = React.useState<string[]>(["bold"]);

  return (
    <div className="w-full max-w-sm space-y-3">
      <ToggleGroup
        type="multiple"
        value={formats}
        onValueChange={setFormats}
        variant="outline"
      >
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      <p className="text-xs text-muted-foreground">
        Active styles:{" "}
        <span className="font-medium">
          {formats.length ? formats.join(", ") : "none"}
        </span>
      </p>
    </div>
  );
}
