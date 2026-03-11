import { X } from "lucide-react";

import { Badge, BadgeButton } from "@/components/ui/badge";

export function BadgeTagCloud() {
  const tags = [
    { label: "design", variant: "info" as const, size: "md" as const },
    { label: "ux", variant: "preview" as const, size: "sm" as const },
    { label: "frontend", variant: "new" as const, size: "lg" as const },
    { label: "typescript", variant: "updated" as const, size: "md" as const },
    { label: "a11y", variant: "verified" as const, size: "sm" as const },
    { label: "perf", variant: "perf" as const, size: "md" as const },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(({ label, variant, size }) => (
        <Badge key={label} variant={variant} appearance="light" size={size}>
          {label}
          <BadgeButton aria-label={`Remove ${label}`}>
            <X />
          </BadgeButton>
        </Badge>
      ))}
    </div>
  );
}
