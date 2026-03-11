import { Crown, FlaskConical, ShieldCheck, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function BadgeWithIcon() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="verified">
        <ShieldCheck />
        Verified
      </Badge>
      <Badge variant="pro">
        <Crown />
        Pro
      </Badge>
      <Badge variant="beta" appearance="light">
        <FlaskConical />
        Beta
      </Badge>
      <Badge variant="new" appearance="light">
        <Zap />
        New
      </Badge>
    </div>
  );
}
