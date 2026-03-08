"use client";

import { Progress } from "@/components/ui/progress";

export function ProgressStorage() {
  const used = 68;
  const total = 100;
  const usedGb = ((used / 100) * 15).toFixed(1);

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 rounded-xl border bg-card p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">Storage</span>
        <span className="text-xs text-muted-foreground">
          {usedGb} GB of 15 GB used
        </span>
      </div>
      <Progress
        value={used}
        className="h-3 rounded-full [&_[data-slot=progress-indicator]]:bg-gradient-to-r [&_[data-slot=progress-indicator]]:from-blue-500 [&_[data-slot=progress-indicator]]:to-indigo-500"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span className="font-medium text-blue-500">{used}% used</span>
        <span>{total - used}% free</span>
      </div>
    </div>
  );
}
