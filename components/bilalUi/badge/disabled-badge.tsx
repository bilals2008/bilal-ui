import { Crown } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function BadgeDisabled() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="primary" disabled>
        Default
      </Badge>
      <Badge variant="new" appearance="light" disabled>
        New
      </Badge>
      <Badge variant="pro" appearance="outline" disabled>
        <Crown />
        Pro
      </Badge>
      <Badge variant="beta" appearance="ghost" disabled>
        Beta
      </Badge>
    </div>
  );
}
