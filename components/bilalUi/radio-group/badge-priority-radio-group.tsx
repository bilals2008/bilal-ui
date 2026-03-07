import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const priorities = [
  {
    value: "low",
    id: "priority-low",
    label: "Low",
    tone: "bg-slate-500/10 text-slate-600 dark:text-slate-300",
  },
  {
    value: "medium",
    id: "priority-medium",
    label: "Medium",
    tone: "bg-blue-500/10 text-blue-600 dark:text-blue-300",
  },
  {
    value: "high",
    id: "priority-high",
    label: "High",
    tone: "bg-amber-500/10 text-amber-600 dark:text-amber-300",
  },
  {
    value: "critical",
    id: "priority-critical",
    label: "Critical",
    tone: "bg-red-500/10 text-red-600 dark:text-red-300",
  },
];

export function BadgePriorityRadioGroup() {
  return (
    <RadioGroup defaultValue="high" className="w-full max-w-sm gap-2">
      {priorities.map((priority) => (
        <Label
          key={priority.value}
          htmlFor={priority.id}
          className="hover:bg-accent flex cursor-pointer items-center justify-between rounded-md border p-3 transition-colors"
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem id={priority.id} value={priority.value} />
            <span className="text-sm font-medium">Task Priority</span>
          </div>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${priority.tone}`}
          >
            {priority.label}
          </span>
        </Label>
      ))}
    </RadioGroup>
  );
}
