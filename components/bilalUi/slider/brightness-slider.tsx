"use client";

import * as React from "react";

import { Slider } from "@/components/ui/slider";

export function BrightnessSlider() {
  const [brightness, setBrightness] = React.useState(50);

  return (
    <div className="w-full max-w-sm space-y-4">
      <div
        className="h-24 rounded border transition-colors"
        style={{
          backgroundColor: `rgb(${brightness * 5.1}, ${brightness * 5.1}, ${brightness * 5.1})`,
        }}
      />
      <Slider
        value={[brightness]}
        onValueChange={(next) => setBrightness(next[0] ?? 0)}
        max={100}
        step={1}
        className="[&_[data-slot=slider-range]]:bg-yellow-500 [&_[data-slot=slider-thumb]]:border-yellow-500 [&_[data-slot=slider-thumb]]:bg-yellow-500"
      />
      <p className="text-sm text-muted-foreground">Brightness: {brightness}%</p>
    </div>
  );
}

