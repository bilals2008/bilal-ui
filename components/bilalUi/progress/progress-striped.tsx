"use client";

import { Progress } from "@/components/ui/progress";

export function ProgressStriped() {
  return (
    <div className="w-full max-w-sm">
      <Progress
        value={65}
        className="[&_[data-slot=progress-indicator]]:bg-amber-500 [&_[data-slot=progress-indicator]]:[background-image:repeating-linear-gradient(-45deg,transparent,transparent_6px,rgba(0,0,0,0.1)_6px,rgba(0,0,0,0.1)_12px)]"
      />
    </div>
  );
}

