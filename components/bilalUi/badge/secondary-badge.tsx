// File: components/bilalUi/badge/secondary-badge.tsx
import { Badge } from "@/components/ui/badge";

export function SecondaryBadge() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2">
      <Badge variant="secondary">Default</Badge>
      <Badge variant="secondary" appearance="light">
        Light
      </Badge>
      <Badge variant="secondary" appearance="outline">
        Outline
      </Badge>
      <Badge variant="secondary" appearance="ghost">
        Ghost
      </Badge>
    </div>
  );
}
