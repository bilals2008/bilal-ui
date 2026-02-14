// File: components/bilalUi/badge/soft-badge.tsx
import { Badge } from "@/components/ui/badge";

export function SoftBadge() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2">
      <Badge
        variant="soft"
        appearance="light"
        className="bg-teal-100 text-teal-800 dark:bg-teal-500/20 dark:text-teal-400"
      >
        success
      </Badge>
      <Badge
        variant="soft"
        appearance="light"
        className="bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400"
      >
        info
      </Badge>
      <Badge
        variant="soft"
        appearance="light"
        className="bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-400"
      >
        warning
      </Badge>
      <Badge
        variant="soft"
        appearance="light"
        className="bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-400"
      >
        destructive
      </Badge>
      <Badge
        variant="soft"
        appearance="light"
        shape="circle"
        className="bg-violet-100 text-violet-800 dark:bg-violet-500/20 dark:text-violet-400"
      >
        circle
      </Badge>
    </div>
  );
}
