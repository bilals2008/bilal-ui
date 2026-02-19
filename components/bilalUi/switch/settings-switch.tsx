import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const settings = [
  {
    id: "marketing",
    label: "Marketing emails",
    description: "Receive emails about new products and features.",
    defaultChecked: true,
  },
  {
    id: "social",
    label: "Social notifications",
    description: "Receive notifications for follows, likes, and comments.",
    defaultChecked: false,
  },
  {
    id: "security",
    label: "Security alerts",
    description: "Get notified about unusual activity in your account.",
    defaultChecked: true,
  },
];

export function SettingsSwitch() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {settings.map((setting) => (
        <div
          key={setting.id}
          className="flex items-start justify-between gap-4"
        >
          <div className="flex flex-col gap-0.5">
            <Label htmlFor={setting.id} className="leading-none">
              {setting.label}
            </Label>
            <p className="text-sm text-muted-foreground">
              {setting.description}
            </p>
          </div>
          <Switch id={setting.id} defaultChecked={setting.defaultChecked} />
        </div>
      ))}
    </div>
  );
}
