import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function GhostInput() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="ghost-input">Website</Label>
      <Input
        id="ghost-input"
        placeholder="https://example.com"
        className="border-dashed bg-transparent"
      />
    </div>
  );
}
