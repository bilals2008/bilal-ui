import { Badge, BadgeButton } from "@/components/ui/badge";
import { X } from "lucide-react";

export function BadgeDismissible() {
  return (
    <div className="flex flex-wrap gap-2">
      {["React", "TypeScript", "Tailwind", "Next.js"].map((tag) => (
        <Badge key={tag} variant="secondary" appearance="outline" size="md">
          {tag}
          <BadgeButton aria-label={`Remove ${tag}`}>
            <X />
          </BadgeButton>
        </Badge>
      ))}
    </div>
  );
}
