"use client";

import * as React from "react";
import { Zap } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function PriorityFilterToggleGroup() {
  const [priority, setPriority] = React.useState("medium");

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Priority</label>
      <ToggleGroup
        type="single"
        value={priority}
        onValueChange={(v) => v && setPriority(v)}
      >
        <ToggleGroupItem value="low" aria-label="Low priority">
          <span className="text-xs font-medium">Low</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="medium" aria-label="Medium priority">
          <span className="text-xs font-medium">Medium</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="high" aria-label="High priority">
          <Zap className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

