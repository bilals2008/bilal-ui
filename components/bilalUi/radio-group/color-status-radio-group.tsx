import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function ColorStatusRadioGroup() {
  return (
    <RadioGroup
      defaultValue="urgent"
      className="flex items-center justify-center gap-6"
    >
      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="urgent"
          id="status-urgent"
          className="border-red-500 text-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20 [&_svg]:fill-red-500"
        />
        <Label
          htmlFor="status-urgent"
          className="cursor-pointer font-medium leading-none text-red-500"
        >
          Urgent
        </Label>
      </div>

      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="ready"
          id="status-ready"
          className="border-emerald-500 text-emerald-500 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20 [&_svg]:fill-emerald-500"
        />
        <Label
          htmlFor="status-ready"
          className="cursor-pointer font-medium leading-none text-emerald-500"
        >
          Ready
        </Label>
      </div>

      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="review"
          id="status-review"
          className="border-amber-500 text-amber-500 focus-visible:border-amber-500 focus-visible:ring-amber-500/20 [&_svg]:fill-amber-500"
        />
        <Label
          htmlFor="status-review"
          className="cursor-pointer font-medium leading-none text-amber-500"
        >
          Review
        </Label>
      </div>
    </RadioGroup>
  );
}
