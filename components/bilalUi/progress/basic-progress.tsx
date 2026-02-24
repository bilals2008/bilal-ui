// File: components/bilalUi/progress/basic-progress.tsx
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

function getProgressTone(value: number) {
  if (value >= 90) return "danger";
  if (value >= 70) return "warning-high";
  if (value >= 50) return "warning";
  if (value >= 20) return "info";
  return "success";
}

function getToneClasses(tone: ReturnType<typeof getProgressTone>) {
  switch (tone) {
    case "danger":
      return "[&_[data-slot=progress-indicator]]:bg-red-500";
    case "warning-high":
      return "[&_[data-slot=progress-indicator]]:bg-orange-500";
    case "warning":
      return "[&_[data-slot=progress-indicator]]:bg-amber-500";
    case "info":
      return "[&_[data-slot=progress-indicator]]:bg-sky-500";
    default:
      return "[&_[data-slot=progress-indicator]]:bg-emerald-500";
  }
}

export function BasicProgress() {
  const value = 60;
  const tone = getProgressTone(value);

  return (
    <div className="w-full max-w-sm">
      <Progress value={value} className={cn(getToneClasses(tone))} />
    </div>
  );
}
