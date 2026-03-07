import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CompactInput() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="compact-input">Short code</Label>
      <Input
        id="compact-input"
        placeholder="A1B2C3"
        className="h-8 text-xs"
      />
    </div>
  );
}
