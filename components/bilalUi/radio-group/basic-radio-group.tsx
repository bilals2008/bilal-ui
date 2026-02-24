import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function BasicRadioGroup() {
  return (
    <RadioGroup defaultValue="starter" className="gap-3">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="starter" id="starter" />
        <Label htmlFor="starter">Starter</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="pro" id="pro" />
        <Label htmlFor="pro">Pro</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="enterprise" id="enterprise" disabled />
        <Label htmlFor="enterprise" className="text-muted-foreground">
          Enterprise (Disabled)
        </Label>
      </div>
    </RadioGroup>
  );
}
