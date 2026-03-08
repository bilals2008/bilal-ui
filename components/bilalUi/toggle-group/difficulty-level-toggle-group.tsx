"use client";

import * as React from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function DifficultyLevelToggleGroup() {
  const [level, setLevel] = React.useState("medium");

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Difficulty</label>
      <ToggleGroup type="single" value={level} onValueChange={(v) => v && setLevel(v)}>
        <ToggleGroupItem value="easy" aria-label="Easy">
          <span className="text-xs font-medium">Easy</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="medium" aria-label="Medium">
          <span className="text-xs font-medium">Medium</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="hard" aria-label="Hard">
          <span className="text-xs font-medium">Hard</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

