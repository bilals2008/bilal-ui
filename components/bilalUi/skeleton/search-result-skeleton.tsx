"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function SearchResultSkeleton({
  count = 3,
  className,
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="cursor-pointer rounded-lg border border-border p-4 transition-colors hover:border-border/80"
        >
          <Skeleton className="mb-2 h-5 w-2/3" />
          <Skeleton className="mb-2 h-3 w-full" />
          <Skeleton className="mb-3 h-3 w-5/6" />
          <Skeleton className="h-3 w-32" />
        </div>
      ))}
    </div>
  );
}

