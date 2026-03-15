"use client";

import * as React from "react";
import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function BasicToggleGroup() {
  const [value, setValue] = React.useState("center");

  return (
    <div className="w-full max-w-sm space-y-3">
      <ToggleGroup
        type="single"
        value={value}
        onValueChange={(next) => {
          if (next) setValue(next);
        }}
        variant="outline"
      >
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

      <p className="text-xs text-muted-foreground">
        Selected alignment: <span className="font-medium capitalize">{value}</span>
      </p>
    </div>
  );
}


