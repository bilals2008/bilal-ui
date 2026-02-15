import { Badge } from "@/components/ui/badge";

export function InfoBadge() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2">
      <Badge variant="info">Default</Badge>
      <Badge variant="info" appearance="light">
        Light
      </Badge>
      <Badge variant="info" appearance="outline">
        Outline
      </Badge>
      <Badge variant="info" appearance="ghost">
        Ghost
      </Badge>
    </div>
  );
}
