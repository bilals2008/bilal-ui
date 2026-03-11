import { Badge } from "@/components/ui/badge";

export function BadgeCircle() {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="primary" shape="circle" size="xs">
        1
      </Badge>
      <Badge variant="new" shape="circle" size="sm">
        12
      </Badge>
      <Badge variant="beta" shape="circle" size="md">
        99
      </Badge>
      <Badge variant="deprecated" shape="circle" size="lg">
        !
      </Badge>
    </div>
  );
}
