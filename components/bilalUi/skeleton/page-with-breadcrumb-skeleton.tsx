"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function PageWithBreadcrumbSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <Skeleton className="h-4 w-20" />
            {i < 3 && <Skeleton className="h-4 w-4" />}
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <MiniCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

function MiniCardSkeleton() {
  return (
    <div className="space-y-3 rounded-lg border border-border bg-background p-4">
      <Skeleton className="h-5 w-32" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
      <Skeleton className="mt-4 h-8 w-20 rounded-md" />
    </div>
  );
}

