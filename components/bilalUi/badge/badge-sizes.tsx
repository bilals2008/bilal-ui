import { Badge } from "@/components/ui/badge";

export function BadgeSizes() {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="primary" size="xs">
        xs
      </Badge>
      <Badge variant="primary" size="sm">
        sm
      </Badge>
      <Badge variant="primary" size="md">
        md
      </Badge>
      <Badge variant="primary" size="lg">
        lg
      </Badge>
    </div>
  );
}
