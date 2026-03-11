import { Crown, Star, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function BadgePlanTiers() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="secondary" size="lg">
        Free
      </Badge>
      <Badge variant="updated" size="lg">
        <Zap />
        Starter
      </Badge>
      <Badge variant="pro" size="lg">
        <Star />
        Pro
      </Badge>
      <Badge variant="featured" size="lg">
        <Crown />
        Enterprise
      </Badge>
    </div>
  );
}
