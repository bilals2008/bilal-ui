"use client";

import * as React from "react";

import { Slider } from "@/components/ui/slider";

export function OpacitySlider() {
  const [opacity, setOpacity] = React.useState(100);

  return (
    <div className="w-full max-w-sm space-y-4">
      <div
        className="h-24 rounded border bg-blue-500 transition-opacity"
        style={{ opacity: opacity / 100 }}
      />
      <Slider
        value={[opacity]}
        onValueChange={(next) => setOpacity(next[0] ?? 100)}
        max={100}
        step={1}
        className="[&_[data-slot=slider-range]]:bg-blue-500 [&_[data-slot=slider-thumb]]:border-blue-500 [&_[data-slot=slider-thumb]]:bg-blue-500"
      />
      <p className="text-sm text-muted-foreground">Opacity: {opacity}%</p>
    </div>
  );
}

