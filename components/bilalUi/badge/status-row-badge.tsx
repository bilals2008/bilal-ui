import { Badge } from "@/components/ui/badge";

export function BadgeStatusRow() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="verified">Verified</Badge>
      <Badge variant="verified" appearance="light">
        Verified
      </Badge>
      <Badge variant="verified" appearance="outline">
        Verified
      </Badge>
      <Badge variant="verified" appearance="ghost">
        Verified
      </Badge>
    </div>
  );
}
