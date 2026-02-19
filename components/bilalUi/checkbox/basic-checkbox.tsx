import { Checkbox } from "@/components/ui/checkbox";

export function BasicCheckbox() {
  return (
    <div className="flex items-center gap-6">
      <Checkbox id="default" />
      <Checkbox id="checked" defaultChecked />
      <Checkbox id="disabled" disabled />
      <Checkbox id="disabled-checked" disabled defaultChecked />
    </div>
  );
}
