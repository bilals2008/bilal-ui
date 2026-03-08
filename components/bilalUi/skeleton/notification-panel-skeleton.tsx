"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function NotificationPanelSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("w-80 rounded-lg border border-border bg-background shadow-lg", className)}>
      <div className="flex items-center justify-between border-b border-border p-4">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-12 rounded-full" />
      </div>
      <div className="max-h-96 overflow-y-auto">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="last:border-b-0 flex cursor-pointer gap-3 border-b border-border/50 p-4 transition-colors hover:bg-muted/30"
          >
            <Skeleton className="h-10 w-10 flex-shrink-0 rounded-full" />
            <div className="min-w-0 flex-1 space-y-2">
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

