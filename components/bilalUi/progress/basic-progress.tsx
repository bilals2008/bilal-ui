import { Progress } from "@/components/ui/progress";

export function BasicProgress() {
  return (
    <div className="w-full max-w-sm">
      <Progress value={60} />
    </div>
  );
}
