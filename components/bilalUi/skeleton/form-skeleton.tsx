"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function FormSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("max-w-lg space-y-6", className)}>
      <div>
        <Skeleton className="mb-2 h-4 w-32" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
      <div>
        <Skeleton className="mb-2 h-4 w-28" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Skeleton className="mb-2 h-4 w-24" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        <div>
          <Skeleton className="mb-2 h-4 w-24" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>
      <div>
        <Skeleton className="mb-2 h-4 w-32" />
        <Skeleton className="h-32 w-full rounded-md" />
      </div>
      <div className="flex gap-3 pt-4">
        <Skeleton className="h-10 w-32 rounded-md" />
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>
    </div>
  );
}

