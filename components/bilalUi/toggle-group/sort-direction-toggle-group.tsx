"use client";

import * as React from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function SortDirectionToggleGroup() {
  const [sort, setSort] = React.useState("asc");

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Sort Order</label>
      <ToggleGroup type="single" value={sort} onValueChange={(v) => v && setSort(v)}>
        <ToggleGroupItem value="asc" aria-label="Ascending">
          <span className="text-xs font-medium">A-Z</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="desc" aria-label="Descending">
          <span className="text-xs font-medium">Z-A</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

