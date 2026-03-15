"use client";

import * as React from "react";
import { CheckSquare, Square } from "lucide-react";

import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function SelectAllToggleGroup() {
  const [selection, setSelection] = React.useState<string[]>(["none"]);

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Selection Mode</Label>
      <ToggleGroup
        type="single"
        value={selection[0] || "none"}
        onValueChange={(v) => v && setSelection([v])}
      >
        <ToggleGroupItem value="none" aria-label="None selected">
          <Square className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="all" aria-label="All selected">
          <CheckSquare className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="rounded-md border border-border bg-muted/50 p-3 text-xs text-muted-foreground">
        {selection[0] === "all" ? "All items selected" : "No items selected"}
      </div>
    </div>
  );
}



