import { Badge } from "@/components/ui/badge";

export function BadgeNotificationCounts() {
  return (
    <div className="flex items-center gap-6">
      {[
        { label: "Inbox", count: "5", variant: "primary" as const },
        { label: "Updates", count: "12", variant: "info" as const },
        { label: "Alerts", count: "3", variant: "breaking" as const },
        { label: "Reviews", count: "99+", variant: "beta" as const },
      ].map(({ label, count, variant }) => (
        <div key={label} className="flex items-center gap-1.5 text-sm font-medium">
          {label}
          <Badge variant={variant} shape="circle" size="sm">
            {count}
          </Badge>
        </div>
      ))}
    </div>
  );
}
