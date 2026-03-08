"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function TimelineSkeleton({
  count = 4,
  className,
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex gap-4">
          <div className="flex flex-shrink-0 flex-col items-center gap-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            {i < count - 1 && <Skeleton className="h-8 w-0.5 bg-gradient-to-b from-border to-transparent" />}
          </div>
          <div className="flex-1 space-y-2 pt-1">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
          </div>
        </div>
      ))}
    </div>
  );
}

