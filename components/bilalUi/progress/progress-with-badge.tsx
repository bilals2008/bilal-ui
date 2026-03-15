// File: components/bilalUi/progress/progress-with-badge.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function ProgressWithBadge() {
  const value = 100;

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Task complete</span>
        <Badge variant="secondary" className="bg-emerald-500 text-white">
          Done
        </Badge>
      </div>
      <Progress
        value={value}
        className="**:data-[slot=progress-indicator]:bg-emerald-500"
      />
    </div>
  );
}
