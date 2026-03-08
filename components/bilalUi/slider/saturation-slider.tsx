"use client";

import * as React from "react";

import { Slider } from "@/components/ui/slider";

export function SaturationSlider() {
  const [saturation, setSaturation] = React.useState(100);

  return (
    <div className="w-full max-w-sm space-y-4">
      <div
        className="h-24 rounded border bg-red-500 transition-all"
        style={{ filter: `saturate(${saturation}%)` }}
      />
      <Slider
        value={[saturation]}
        onValueChange={(next) => setSaturation(next[0] ?? 100)}
        max={200}
        step={1}
        className="[&_[data-slot=slider-range]]:bg-red-500 [&_[data-slot=slider-thumb]]:border-red-500 [&_[data-slot=slider-thumb]]:bg-red-500"
      />
      <p className="text-sm text-muted-foreground">Saturation: {saturation}%</p>
    </div>
  );
}

