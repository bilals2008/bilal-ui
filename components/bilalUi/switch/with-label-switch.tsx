import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function WithLabelSwitch() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="dark-mode" defaultChecked />
        <Label htmlFor="dark-mode">Dark Mode</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="notifications-off" disabled />
        <Label
          htmlFor="notifications-off"
          className="opacity-50 cursor-not-allowed"
        >
          Notifications (unavailable)
        </Label>
      </div>
    </div>
  );
}
