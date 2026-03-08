"use client";

import * as React from "react";
import { Grid, List } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ViewModeToggleGroup() {
  const [view, setView] = React.useState("grid");

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">View Mode</label>
      <ToggleGroup type="single" value={view} onValueChange={(v) => v && setView(v)}>
        <ToggleGroupItem value="grid" aria-label="Grid view">
          <Grid className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="list" aria-label="List view">
          <List className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

