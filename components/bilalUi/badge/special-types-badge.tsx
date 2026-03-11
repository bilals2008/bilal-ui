import { Clock, FlaskConical, Layers, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function BadgeSpecialTypes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="wip">
        <Layers />
        WIP
      </Badge>
      <Badge variant="lab">
        <FlaskConical />
        Lab
      </Badge>
      <Badge variant="request">
        <Clock />
        Request
      </Badge>
      <Badge variant="featured">
        <Star />
        Featured
      </Badge>
    </div>
  );
}
