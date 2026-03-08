"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function KanbanBoardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-4 overflow-x-auto pb-4", className)}>
      {Array.from({ length: 3 }).map((_, colIdx) => (
        <div
          key={colIdx}
          className="w-80 flex-shrink-0 space-y-3 rounded-lg border border-border bg-muted/30 p-4"
        >
          <Skeleton className="h-5 w-32" />
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, cardIdx) => (
              <div
                key={cardIdx}
                className="cursor-grab space-y-2 rounded-lg border border-border bg-background p-3 transition-shadow hover:shadow-md"
              >
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-5/6" />
                <div className="flex gap-2 pt-2">
                  <Skeleton className="h-6 w-12 rounded-full text-xs" />
                  <Skeleton className="h-6 w-6 flex-shrink-0 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

