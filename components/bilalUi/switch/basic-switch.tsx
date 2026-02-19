// File: components/bilalUi/switch/basic-switch.tsx
import { Switch } from "@/components/ui/switch";

export function BasicSwitch() {
  return (
    <div className="flex items-center gap-6">
      <Switch />
      <Switch defaultChecked />
      <Switch disabled />
      <Switch disabled defaultChecked />
    </div>
  );
}
