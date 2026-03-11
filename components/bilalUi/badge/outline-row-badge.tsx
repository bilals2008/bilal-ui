import { Badge } from "@/components/ui/badge";

export function BadgeOutlineRow() {
  return (
    <div className="flex flex-wrap gap-2">
      {(
        [
          "primary",
          "new",
          "soon",
          "info",
          "beta",
          "breaking",
          "fix",
          "docs",
          "perf",
          "refactor",
          "pro",
          "verified",
          "preview",
          "experimental",
        ] as const
      ).map((variant) => (
        <Badge key={variant} variant={variant} appearance="outline" size="sm">
          {variant}
        </Badge>
      ))}
    </div>
  );
}
