import { Badge, BadgeDot } from "@/components/ui/badge";

export function BadgeStatusPills() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="new" appearance="light" shape="circle">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        Online
      </Badge>
      <Badge variant="soon" appearance="light" shape="circle">
        <BadgeDot />
        Away
      </Badge>
      <Badge variant="deprecated" appearance="light" shape="circle">
        <BadgeDot />
        Offline
      </Badge>
      <Badge variant="secondary" appearance="light" shape="circle">
        <BadgeDot />
        Unknown
      </Badge>
    </div>
  );
}
