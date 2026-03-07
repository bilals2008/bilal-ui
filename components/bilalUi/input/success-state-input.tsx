import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SuccessStateInput() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="success-state-input">Email verified</Label>
      <div className="relative">
        <Input
          id="success-state-input"
          defaultValue="hello@bilalui.dev"
          className="border-emerald-500 pr-9 focus-visible:ring-emerald-500/30"
        />
        <CheckCircle2 className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-emerald-500" />
      </div>
      <p className="text-xs text-emerald-600 dark:text-emerald-400">Looks good, this email is available.</p>
    </div>
  );
}
