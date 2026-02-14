import { Badge } from "@/components/ui/badge";

export function WarningBadge() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2">
      <Badge variant="soon">Default</Badge>
      <Badge variant="soon" appearance="light">
        Light
      </Badge>
      <Badge variant="soon" appearance="outline">
        Outline
      </Badge>
      <Badge variant="soon" appearance="ghost">
        Ghost
      </Badge>
    </div>
  );
}
