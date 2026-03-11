"use client";

import { cn } from "@/lib/utils";

const segments = [
  { label: "Used", value: 45, color: "bg-blue-500" },
  { label: "Cached", value: 25, color: "bg-sky-300" },
  { label: "Free", value: 30, color: "bg-muted" },
];

export function ProgressSegmented() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex h-3 w-full overflow-hidden rounded-full">
        {segments.map((segment) => (
          <div
            key={segment.label}
            className={cn(segment.color, "transition-all")}
            style={{ width: `${segment.value}%` }}
          />
        ))}
      </div>
      <div className="flex gap-3">
        {segments.map((segment) => (
          <div
            key={segment.label}
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <span className={cn("h-2 w-2 rounded-full", segment.color)} />
            {segment.label} {segment.value}%
          </div>
        ))}
      </div>
    </div>
  );
}

