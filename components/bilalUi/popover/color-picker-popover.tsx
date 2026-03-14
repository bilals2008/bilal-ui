"use client";

import { useState } from "react";
import { Palette } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const SWATCHES = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#06b6d4",
  "#6366f1",
  "#a855f7",
  "#ec4899",
  "#64748b",
  "#0f172a",
];

export function ColorPickerPopover() {
  const [color, setColor] = useState("#6366f1");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Palette className="h-4 w-4" />
          Color
          <span className="h-4 w-4 rounded-sm border" style={{ background: color }} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <p className="mb-3 text-sm font-semibold">Pick a color</p>
        <div className="mb-3 grid grid-cols-5 gap-2">
          {SWATCHES.map((swatch) => (
            <button
              key={swatch}
              type="button"
              onClick={() => setColor(swatch)}
              className="h-8 w-8 rounded-md border-2 transition-transform hover:scale-110"
              style={{
                background: swatch,
                borderColor: color === swatch ? "#fff" : "transparent",
                outline: color === swatch ? `2px solid ${swatch}` : "none",
              }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 shrink-0 rounded border" style={{ background: color }} />
          <Input value={color} onChange={(event) => setColor(event.target.value)} className="h-7 font-mono text-xs" />
        </div>
      </PopoverContent>
    </Popover>
  );
}
