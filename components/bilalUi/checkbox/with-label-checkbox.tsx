import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function WithLabelCheckbox() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="newsletter" defaultChecked />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="notifications-disabled" disabled />
        <Label
          htmlFor="notifications-disabled"
          className="opacity-50 cursor-not-allowed"
        >
          Enable notifications (unavailable)
        </Label>
      </div>
    </div>
  );
}
