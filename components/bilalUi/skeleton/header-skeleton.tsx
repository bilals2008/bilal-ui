"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function HeaderSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("border-b border-border bg-background", className)}>
      <div className="flex items-center justify-between gap-4 p-4">
        <Skeleton className="h-6 w-32" />
        <div className="flex max-w-md flex-1 items-center gap-3">
          <Skeleton className="h-10 flex-1 rounded-md" />
          <Skeleton className="h-10 w-10 rounded-md" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </div>
  );
}

