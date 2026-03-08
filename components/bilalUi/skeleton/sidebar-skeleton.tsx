"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function SidebarSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-64 space-y-2 border-r border-border bg-background p-4",
        className
      )}
    >
      <Skeleton className="mb-6 h-8 w-32" />
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 rounded-lg p-2">
          <Skeleton className="h-5 w-5 flex-shrink-0 rounded" />
          <Skeleton className="h-4 w-24 flex-1" />
        </div>
      ))}
    </div>
  );
}

