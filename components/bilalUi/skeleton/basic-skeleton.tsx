import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function BasicSkeleton({
  className,
  ...props
}: React.ComponentProps<typeof Skeleton>) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Skeleton className={cn("h-4 w-[250px]", className)} {...props} />
      <Skeleton className={cn("h-4 w-[200px]", className)} {...props} />
    </div>
  );
}
