import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function DashedRadioGroup() {
  return (
    <RadioGroup defaultValue="standard" className="max-w-72 gap-3">
      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="standard"
          id="delivery-standard"
          className="border-primary border-dashed data-[state=checked]:border-background"
        />
        <Label htmlFor="delivery-standard">Standard Courier</Label>
      </div>

      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="priority"
          id="delivery-priority"
          className="border-primary border-dashed data-[state=checked]:border-background"
        />
        <Label htmlFor="delivery-priority">Priority Dispatch</Label>
      </div>

      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="express"
          id="delivery-express"
          className="border-primary border-dashed data-[state=checked]:border-background"
        />
        <Label htmlFor="delivery-express">Express Arrival</Label>
      </div>
    </RadioGroup>
  );
}
