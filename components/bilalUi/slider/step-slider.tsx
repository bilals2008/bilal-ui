"use client";

import * as React from "react";

import { Slider } from "@/components/ui/slider";

export function StepSlider() {
  const [value, setValue] = React.useState(50);

  return (
    <div className="w-full max-w-sm space-y-4">
      <Slider
        value={[value]}
        onValueChange={(next) => setValue(next[0] ?? 0)}
        max={100}
        step={25}
        className="[&_[data-slot=slider-range]]:bg-purple-500 [&_[data-slot=slider-thumb]]:border-purple-500 [&_[data-slot=slider-thumb]]:bg-purple-500"
      />
      <div className="flex justify-between text-sm">
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>75</span>
        <span>100</span>
      </div>
      <p className="text-sm text-muted-foreground">
        Step: 25 | Current: {value}
      </p>
    </div>
  );
}

