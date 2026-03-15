"use client";

import * as React from "react";
import { Eye, Layers, Settings2 } from "lucide-react";

import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function VisibilityToggleGroup() {
  const [visibility, setVisibility] = React.useState<string[]>(["visible"]);

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">Show/Hide Elements</Label>
      <ToggleGroup type="multiple" value={visibility} onValueChange={setVisibility}>
        <ToggleGroupItem value="visible" aria-label="Show">
          <Eye className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="layers" aria-label="Layers">
          <Layers className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="settings" aria-label="Settings">
          <Settings2 className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}




