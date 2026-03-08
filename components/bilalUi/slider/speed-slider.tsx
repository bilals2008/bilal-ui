"use client";

import * as React from "react";

import { Slider } from "@/components/ui/slider";

export function SpeedSlider() {
  const [speed, setSpeed] = React.useState(1);

  return (
    <div className="w-full max-w-sm space-y-4">
      <Slider
        value={[speed]}
        onValueChange={(next) => setSpeed(next[0] ?? 1)}
        min={0.5}
        max={2}
        step={0.25}
        className="[&_[data-slot=slider-range]]:bg-teal-500 [&_[data-slot=slider-thumb]]:border-teal-500 [&_[data-slot=slider-thumb]]:bg-teal-500"
      />
      <p className="text-sm text-muted-foreground">
        Playback Speed: {speed.toFixed(2)}x
      </p>
    </div>
  );
}

