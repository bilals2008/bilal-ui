"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function DataTableSkeleton({
  rows = 5,
  className,
}: {
  rows?: number;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-border", className)}>
      <div className="flex items-center gap-4 border-b border-border bg-muted/50 p-4">
        <Skeleton className="h-5 w-5 rounded" />
        <Skeleton className="h-4 w-32 flex-1" />
        <Skeleton className="h-4 w-32 flex-1" />
        <Skeleton className="h-4 w-32 flex-1" />
        <Skeleton className="h-4 w-20" />
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex items-center gap-4 border-b border-border p-4 last:border-b-0",
            i % 2 === 0 ? "bg-background" : "bg-muted/30"
          )}
        >
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-4 w-32 flex-1" />
          <Skeleton className="h-4 w-32 flex-1" />
          <Skeleton className="h-4 w-32 flex-1" />
          <Skeleton className="h-6 w-16 rounded" />
        </div>
      ))}
    </div>
  );
}

