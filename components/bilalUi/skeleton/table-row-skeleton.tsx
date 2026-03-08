"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function TableRowSkeleton({
  columns = 5,
  className,
}: {
  columns?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 border-b border-border px-4 py-4",
        className
      )}
    >
      <Skeleton className="h-5 w-5 rounded" />
      {Array.from({ length: columns }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-4",
            i === 0 ? "flex-1" : i === columns - 1 ? "w-20" : "w-32"
          )}
        />
      ))}
      <Skeleton className="h-4 w-10" />
    </div>
  );
}

