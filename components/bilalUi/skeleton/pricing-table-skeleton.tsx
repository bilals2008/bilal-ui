"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function PricingTableSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 gap-6 md:grid-cols-3", className)}>
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "space-y-4 rounded-lg border border-border p-6",
            i === 1 ? "ring-2 ring-primary" : ""
          )}
        >
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-10 w-24" />
          <div className="space-y-2 border-y border-border py-4">
            {Array.from({ length: 4 }).map((_, j) => (
              <Skeleton key={j} className="h-4 w-40" />
            ))}
          </div>
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      ))}
    </div>
  );
}

