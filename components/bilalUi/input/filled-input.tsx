import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FilledInput() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="filled-input">Project name</Label>
      <Input
        id="filled-input"
        placeholder="Q2 Growth Plan"
        className="border-transparent bg-zinc-100 focus-visible:bg-white dark:bg-zinc-900"
      />
    </div>
  );
}
