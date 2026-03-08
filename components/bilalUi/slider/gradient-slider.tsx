"use client";

import * as React from "react";

import { Slider } from "@/components/ui/slider";

export function GradientSlider() {
  const [hue, setHue] = React.useState(0);
  const hslColor = `hsl(${hue}, 100%, 50%)`;

  return (
    <div className="w-full max-w-sm space-y-4">
      <div
        className="h-20 rounded-lg border-2"
        style={{ backgroundColor: hslColor }}
      />
      <Slider
        value={[hue]}
        onValueChange={(next) => setHue(next[0] ?? 0)}
        max={360}
        step={1}
        className="[&_[data-slot=slider-range]]:bg-gradient-to-r [&_[data-slot=slider-range]]:from-red-500 [&_[data-slot=slider-range]]:via-yellow-500 [&_[data-slot=slider-range]]:to-blue-500"
      />
      <p className="text-sm text-muted-foreground">Hue: {hue} degrees</p>
    </div>
  );
}

