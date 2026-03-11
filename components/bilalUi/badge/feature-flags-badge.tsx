import { Badge } from "@/components/ui/badge";

export function BadgeFeatureFlags() {
  return (
    <div className="flex flex-col gap-2">
      {[
        { label: "Edge Runtime", variant: "preview" as const },
        { label: "AI Suggestions", variant: "experimental" as const },
        { label: "New Dashboard", variant: "soon" as const },
        { label: "Legacy API", variant: "legacy" as const },
        { label: "Headless Mode", variant: "headless" as const },
      ].map(({ label, variant }) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-lg border bg-card px-3 py-2"
        >
          <span className="text-sm font-medium">{label}</span>
          <Badge variant={variant} appearance="light" size="sm">
            {variant}
          </Badge>
        </div>
      ))}
    </div>
  );
}
