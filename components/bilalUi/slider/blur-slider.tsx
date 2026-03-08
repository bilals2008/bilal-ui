"use client";

import * as React from "react";
import Image from "next/image";

import { Slider } from "@/components/ui/slider";

export function BlurSlider() {
  const [blur, setBlur] = React.useState(0);

  return (
    <div className="w-full max-w-sm space-y-4">
      <Image
        src="/placeholder.svg?height=200&width=300"
        alt="Blur preview"
        width={300}
        height={200}
        className="w-full rounded border"
        style={{ filter: `blur(${blur}px)` }}
      />
      <Slider
        value={[blur]}
        onValueChange={(next) => setBlur(next[0] ?? 0)}
        max={20}
        step={0.5}
        className="[&_[data-slot=slider-range]]:bg-slate-500 [&_[data-slot=slider-thumb]]:border-slate-500 [&_[data-slot=slider-thumb]]:bg-slate-500"
      />
      <p className="text-sm text-muted-foreground">Blur: {blur.toFixed(1)}px</p>
    </div>
  );
}
