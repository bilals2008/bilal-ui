import { Badge } from "@/components/ui/badge";

export function BadgeVersionTable() {
  const rows = [
    { pkg: "@ui/core", version: "v3.2.1", status: "stable" as const, tag: "latest" },
    { pkg: "@ui/charts", version: "v2.0.0", status: "beta" as const, tag: "beta" },
    { pkg: "@ui/ai", version: "v0.9.0", status: "alpha" as const, tag: "alpha" },
    { pkg: "@ui/legacy", version: "v1.4.2", status: "deprecated" as const, tag: "legacy" },
    { pkg: "@ui/motion", version: "v4.0.0", status: "preview" as const, tag: "preview" },
  ];

  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border">
      <div className="grid grid-cols-3 bg-muted px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <span>Package</span>
        <span>Version</span>
        <span>Status</span>
      </div>
      {rows.map(({ pkg, version, status, tag }) => (
        <div key={pkg} className="grid grid-cols-3 items-center border-t px-4 py-2.5 text-sm">
          <span className="font-mono text-xs">{pkg}</span>
          <Badge variant="version" appearance="light" size="sm">
            {version}
          </Badge>
          <Badge variant={status} appearance="light" size="sm">
            {tag}
          </Badge>
        </div>
      ))}
    </div>
  );
}
