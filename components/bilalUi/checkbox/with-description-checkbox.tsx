import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function WithDescriptionCheckbox() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start gap-3">
        <Checkbox id="tos" className="mt-0.5" />
        <div className="flex flex-col gap-0.5">
          <Label htmlFor="tos" className="leading-none">
            Accept terms and conditions
          </Label>
          <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Checkbox id="marketing" defaultChecked className="mt-0.5" />
        <div className="flex flex-col gap-0.5">
          <Label htmlFor="marketing" className="leading-none">
            Marketing emails
          </Label>
          <p className="text-sm text-muted-foreground">
            Receive emails about new products, features, and updates.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Checkbox id="security" disabled className="mt-0.5" />
        <div className="flex flex-col gap-0.5 opacity-50">
          <Label htmlFor="security" className="leading-none cursor-not-allowed">
            Security alerts
          </Label>
          <p className="text-sm text-muted-foreground">
            Get notified about unusual activity in your account.
          </p>
        </div>
      </div>
    </div>
  );
}
