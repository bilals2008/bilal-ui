// File: components/bilalUi/badge/destructive-badge.tsx
import { Badge } from "@/components/ui/badge";

export function DestructiveBadge() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2">
      <Badge variant="deprecated">Default</Badge>
      <Badge variant="deprecated" appearance="light">
        Light
      </Badge>
      <Badge variant="deprecated" appearance="outline">
        Outline
      </Badge>
      <Badge variant="deprecated" appearance="ghost">
        Ghost
      </Badge>
    </div>
  );
}
