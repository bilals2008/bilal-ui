// File: components/bilalUi/badge/new-badge.tsx
import { Badge } from "@/components/ui/badge";

export function NewBadge() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2">
      <Badge variant="new" appearance="default">
        Default
      </Badge>
      <Badge variant="new" appearance="light">
        Light
      </Badge>
      <Badge variant="new" appearance="outline">
        Outline
      </Badge>
      <Badge variant="new" appearance="ghost">
        Ghost
      </Badge>
    </div>
  );
}
