import { AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ErrorStateInput() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="error-state-input">Username</Label>
      <div className="relative">
        <Input
          id="error-state-input"
          aria-invalid="true"
          defaultValue="bilal ui"
          className="border-red-500 pr-9 focus-visible:ring-red-500/30"
        />
        <AlertCircle className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-red-500" />
      </div>
      <p className="text-xs text-red-500">Only letters, numbers, and hyphens are allowed.</p>
    </div>
  );
}
