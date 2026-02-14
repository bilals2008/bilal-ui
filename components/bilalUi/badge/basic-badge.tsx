// File: components/bilalUi/badge/basic-badge.tsx
import { Badge } from "@/components/ui/badge";

export function BasicBadge() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Badge variant="primary">Default</Badge>
      <Badge variant="primary" appearance="light">
        Light
      </Badge>
      <Badge variant="primary" appearance="outline">
        Outline
      </Badge>
      <Badge variant="primary" appearance="ghost">
        Ghost
      </Badge>
    </div>
  );
}
