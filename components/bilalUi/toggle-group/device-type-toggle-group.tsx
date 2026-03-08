"use client";

import * as React from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function DeviceTypeToggleGroup() {
  const [device, setDevice] = React.useState("desktop");

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Preview Device</label>
      <ToggleGroup type="single" value={device} onValueChange={(v) => v && setDevice(v)}>
        <ToggleGroupItem value="mobile" aria-label="Mobile device">
          <Smartphone className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="tablet" aria-label="Tablet device">
          <Tablet className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="desktop" aria-label="Desktop device">
          <Monitor className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

