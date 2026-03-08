"use client";

import * as React from "react";

import { Slider } from "@/components/ui/slider";

export function SmallSlider() {
  const [value, setValue] = React.useState(50);

  return (
    <div className="w-full max-w-xs">
      <Slider
        value={[value]}
        onValueChange={(next) => setValue(next[0] ?? 0)}
        max={100}
        step={1}
        className="h-1 [&_[data-slot=slider-range]]:bg-cyan-500 [&_[data-slot=slider-thumb]]:h-3 [&_[data-slot=slider-thumb]]:w-3"
      />
      <p className="mt-2 text-xs text-muted-foreground">Compact Slider</p>
    </div>
  );
}

