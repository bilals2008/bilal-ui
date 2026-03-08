"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function ChatMessageSkeleton({
  count = 5,
  className,
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      {Array.from({ length: count }).map((_, i) => {
        const isAlt = i % 2 === 0;
        return (
          <div key={i} className={cn("flex gap-3", isAlt ? "flex-row-reverse" : "")}>
            <Skeleton className="h-8 w-8 flex-shrink-0 rounded-full" />
            <div className={cn("max-w-xs flex-1 space-y-2", isAlt ? "flex flex-col items-end" : "")}>
              <Skeleton className={cn("h-4", isAlt ? "w-20" : "w-24")} />
              <Skeleton
                className={cn(
                  "h-16 w-full rounded-lg",
                  isAlt ? "rounded-br-none" : "rounded-bl-none"
                )}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

