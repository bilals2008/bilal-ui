"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

export function TemperatureSlider() {
  const [temp, setTemp] = React.useState(20);

  const getColor = () => {
    if (temp < 10) return "bg-blue-600";
    if (temp < 15) return "bg-blue-400";
    if (temp < 20) return "bg-cyan-400";
    if (temp < 25) return "bg-green-400";
    if (temp < 30) return "bg-orange-400";
    return "bg-red-600";
  };

  return (
    <div className="w-full max-w-sm space-y-4">
      <Slider
        value={[temp]}
        onValueChange={(next) => setTemp(next[0] ?? 0)}
        min={0}
        max={40}
        step={1}
        className={cn(
          "transition-colors",
          temp < 10 &&
            "[&_[data-slot=slider-range]]:bg-blue-600 [&_[data-slot=slider-thumb]]:border-blue-600 [&_[data-slot=slider-thumb]]:bg-blue-600",
          temp >= 10 &&
            temp < 15 &&
            "[&_[data-slot=slider-range]]:bg-blue-400 [&_[data-slot=slider-thumb]]:border-blue-400 [&_[data-slot=slider-thumb]]:bg-blue-400",
          temp >= 15 &&
            temp < 20 &&
            "[&_[data-slot=slider-range]]:bg-cyan-400 [&_[data-slot=slider-thumb]]:border-cyan-400 [&_[data-slot=slider-thumb]]:bg-cyan-400",
          temp >= 20 &&
            temp < 25 &&
            "[&_[data-slot=slider-range]]:bg-green-400 [&_[data-slot=slider-thumb]]:border-green-400 [&_[data-slot=slider-thumb]]:bg-green-400",
          temp >= 25 &&
            temp < 30 &&
            "[&_[data-slot=slider-range]]:bg-orange-400 [&_[data-slot=slider-thumb]]:border-orange-400 [&_[data-slot=slider-thumb]]:bg-orange-400",
          temp >= 30 &&
            "[&_[data-slot=slider-range]]:bg-red-600 [&_[data-slot=slider-thumb]]:border-red-600 [&_[data-slot=slider-thumb]]:bg-red-600"
        )}
      />
      <div className="flex items-center justify-between">
        <div className={cn("h-8 w-8 rounded", getColor())} />
        <span className="text-sm font-semibold">{temp}C</span>
      </div>
    </div>
  );
}

