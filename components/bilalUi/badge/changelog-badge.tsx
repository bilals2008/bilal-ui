import { AlertTriangle, BookOpen, RotateCcw, Wrench, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function BadgeChangelog() {
  return (
    <div className="flex flex-col gap-3">
      {[
        { variant: "breaking" as const, icon: AlertTriangle, label: "Breaking" },
        { variant: "new" as const, icon: Zap, label: "New" },
        { variant: "fix" as const, icon: Wrench, label: "Fix" },
        { variant: "docs" as const, icon: BookOpen, label: "Docs" },
        { variant: "perf" as const, icon: Zap, label: "Perf" },
        { variant: "refactor" as const, icon: RotateCcw, label: "Refactor" },
      ].map(({ variant, icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-3 text-sm">
          <Badge variant={variant} appearance="light" size="sm">
            <Icon className="h-3 w-3" />
            {label}
          </Badge>
          <span className="text-muted-foreground">
            Added support for {label.toLowerCase()} feature in v4.2
          </span>
        </div>
      ))}
    </div>
  );
}
