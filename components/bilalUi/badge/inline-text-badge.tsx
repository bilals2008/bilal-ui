import { Crown } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function BadgeInlineText() {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <p>
        The new
        <Badge variant="new" size="sm" className="mx-1">
          New
        </Badge>
        editor is now available in
        <Badge variant="preview" size="sm" appearance="light" className="mx-1">
          Preview
        </Badge>
        .
      </p>
      <p>
        This API is
        <Badge
          variant="deprecated"
          size="sm"
          appearance="outline"
          className="mx-1"
        >
          Deprecated
        </Badge>
        , please migrate to the
        <Badge variant="stable" size="sm" appearance="light" className="mx-1">
          Stable
        </Badge>
        version.
      </p>
      <p>
        Requires
        <Badge variant="pro" size="sm" className="mx-1">
          <Crown />
          Pro
        </Badge>
        plan or higher.
      </p>
    </div>
  );
}
