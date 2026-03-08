"use client";

import { Progress } from "@/components/ui/progress";

export function ProgressThin() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      <span className="text-xs text-muted-foreground">Reading progress</span>
      <Progress
        value={68}
        className="h-1 [&_[data-slot=progress-indicator]]:bg-foreground"
      />
    </div>
  );
}

