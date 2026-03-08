"use client";

import * as React from "react";

import { Slider } from "@/components/ui/slider";

export function TimeSlider() {
  const [minutes, setMinutes] = React.useState(30);

  const formatTime = (mins: number) => {
    if (mins < 60) return `${mins}m`;
    const hours = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    return remainingMins === 0 ? `${hours}h` : `${hours}h ${remainingMins}m`;
  };

  return (
    <div className="w-full max-w-sm space-y-4">
      <Slider
        value={[minutes]}
        onValueChange={(next) => setMinutes(next[0] ?? 0)}
        min={5}
        max={480}
        step={5}
        className="[&_[data-slot=slider-range]]:bg-violet-500 [&_[data-slot=slider-thumb]]:border-violet-500 [&_[data-slot=slider-thumb]]:bg-violet-500"
      />
      <p className="text-sm text-muted-foreground">
        Duration: {formatTime(minutes)}
      </p>
    </div>
  );
}
