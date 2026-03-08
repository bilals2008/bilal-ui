"use client";

import * as React from "react";
import { CheckCircle, Flag } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function StatusFilterToggleGroup() {
  const [statuses, setStatuses] = React.useState<string[]>(["active"]);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Status</label>
      <ToggleGroup type="multiple" value={statuses} onValueChange={setStatuses}>
        <ToggleGroupItem value="active" aria-label="Active">
          <CheckCircle className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="flagged" aria-label="Flagged">
          <Flag className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

