import { Badge } from "@/components/ui/badge";

export function SuccessBadge() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2">
      <Badge variant="stable">Default</Badge>
      <Badge variant="stable" appearance="light">
        Light
      </Badge>
      <Badge variant="stable" appearance="outline">
        Outline
      </Badge>
      <Badge variant="stable" appearance="ghost">
        Ghost
      </Badge>
    </div>
  );
}
