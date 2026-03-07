import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function OutlinedInput() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="outlined-input">Email address</Label>
      <Input
        id="outlined-input"
        type="email"
        placeholder="you@company.com"
        className="border-zinc-300 dark:border-zinc-700"
      />
    </div>
  );
}
