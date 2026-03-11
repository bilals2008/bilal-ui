"use client";

import { Progress } from "@/components/ui/progress";

const items = [
  { name: "Design", value: 90 },
  { name: "Frontend", value: 65 },
  { name: "Backend", value: 40 },
  { name: "QA", value: 20 },
];

export function ProgressInlineList() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {items.map((item) => (
        <div key={item.name} className="flex items-center gap-3">
          <span className="w-20 shrink-0 text-sm">{item.name}</span>
          <Progress value={item.value} className="h-2 flex-1" />
          <span className="w-8 text-right font-mono text-xs text-muted-foreground">
            {item.value}%
          </span>
        </div>
      ))}
    </div>
  );
}

