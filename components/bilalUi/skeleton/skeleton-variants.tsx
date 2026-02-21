import { cn } from "@/lib/utils";

export type SkeletonProps = React.ComponentProps<"div"> & {
  shimmer?: boolean;
};

export function Skeleton({
  className,
  shimmer = true,
  ...props
}: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden rounded-md animate-pulse",
        shimmer && [
          "after:absolute after:inset-0 after:-translate-x-full",
          "after:animate-shimmer",
          "after:bg-gradient-to-r",
          "after:from-transparent after:via-white/20 after:to-transparent",
          "dark:after:via-white/10",
        ],
        className,
      )}
      {...props}
    />
  );
}
