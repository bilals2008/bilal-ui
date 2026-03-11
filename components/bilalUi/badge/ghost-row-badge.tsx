import { Badge } from "@/components/ui/badge";

export function BadgeGhostRow() {
  return (
    <div className="flex flex-wrap gap-3">
      {(
        [
          "primary",
          "new",
          "soon",
          "info",
          "beta",
          "breaking",
          "verified",
          "pro",
          "preview",
          "wip",
          "lab",
          "featured",
        ] as const
      ).map((variant) => (
        <Badge key={variant} variant={variant} appearance="ghost" size="md">
          {variant}
        </Badge>
      ))}
    </div>
  );
}
