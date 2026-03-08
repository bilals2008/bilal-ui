"use client";

import * as React from "react";
import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function TextAlignmentToggleGroup() {
  const [value, setValue] = React.useState("center");

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Text Alignment</label>
      <ToggleGroup type="single" value={value} onValueChange={(v) => v && setValue(v)}>
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

