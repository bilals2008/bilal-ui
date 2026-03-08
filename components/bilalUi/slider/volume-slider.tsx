"use client";

import * as React from "react";

import { Slider } from "@/components/ui/slider";

export function VolumeSlider() {
  const [volume, setVolume] = React.useState(70);

  const getLabel = () => {
    if (volume === 0) return "Muted";
    if (volume < 33) return "Low";
    if (volume < 66) return "Medium";
    return "High";
  };

  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">{getLabel()}</span>
        <Slider
          value={[volume]}
          onValueChange={(next) => setVolume(next[0] ?? 0)}
          max={100}
          step={1}
          className="flex-1 [&_[data-slot=slider-range]]:bg-green-500"
        />
        <span className="w-8 text-right text-sm font-semibold">{volume}%</span>
      </div>
    </div>
  );
}

