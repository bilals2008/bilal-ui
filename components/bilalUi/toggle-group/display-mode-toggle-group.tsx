"use client";

import * as React from "react";
import { Maximize, Minimize } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function DisplayModeToggleGroup() {
  const [display, setDisplay] = React.useState("compact");

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Display Mode</label>
      <ToggleGroup type="single" value={display} onValueChange={(v) => v && setDisplay(v)}>
        <ToggleGroupItem value="compact" aria-label="Compact">
          <Minimize className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="expanded" aria-label="Expanded">
          <Maximize className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

