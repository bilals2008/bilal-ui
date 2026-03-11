import { Beaker, Check, Cpu, Eye, FlaskConical, AlertTriangle } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function BadgeReleaseStages() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="alpha">
        <Beaker className="h-3 w-3" />
        Alpha
      </Badge>
      <Badge variant="beta">
        <FlaskConical className="h-3 w-3" />
        Beta
      </Badge>
      <Badge variant="preview">
        <Eye className="h-3 w-3" />
        Preview
      </Badge>
      <Badge variant="experimental">
        <Cpu className="h-3 w-3" />
        Experimental
      </Badge>
      <Badge variant="stable">
        <Check className="h-3 w-3" />
        Stable
      </Badge>
      <Badge variant="deprecated">
        <AlertTriangle className="h-3 w-3" />
        Deprecated
      </Badge>
    </div>
  );
}
