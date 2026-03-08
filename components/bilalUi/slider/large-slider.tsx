"use client";

import * as React from "react";

import { Slider } from "@/components/ui/slider";

export function LargeSlider() {
  const [value, setValue] = React.useState(50);

  return (
    <div className="w-full max-w-xl">
      <Slider
        value={[value]}
        onValueChange={(next) => setValue(next[0] ?? 0)}
        max={100}
        step={1}
        className="h-3 [&_[data-slot=slider-range]]:bg-pink-500 [&_[data-slot=slider-thumb]]:h-7 [&_[data-slot=slider-thumb]]:w-7"
      />
      <p className="mt-2 text-sm text-muted-foreground">
        Large Slider - Better Accessibility
      </p>
    </div>
  );
}
