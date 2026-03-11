import { Badge, BadgeDot } from "@/components/ui/badge";

export function BadgeWithDot() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="new">
        <BadgeDot />
        Live
      </Badge>
      <Badge variant="soon" appearance="light">
        <BadgeDot />
        Pending
      </Badge>
      <Badge variant="deprecated" appearance="outline">
        <BadgeDot />
        Offline
      </Badge>
      <Badge variant="verified" appearance="light">
        <BadgeDot />
        Active
      </Badge>
    </div>
  );
}
