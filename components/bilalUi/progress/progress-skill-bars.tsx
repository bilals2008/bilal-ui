"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const skills = [
  {
    name: "TypeScript",
    value: 92,
    color: "[&_[data-slot=progress-indicator]]:bg-blue-500",
  },
  {
    name: "React",
    value: 88,
    color: "[&_[data-slot=progress-indicator]]:bg-cyan-500",
  },
  {
    name: "Node.js",
    value: 75,
    color: "[&_[data-slot=progress-indicator]]:bg-green-500",
  },
  {
    name: "Rust",
    value: 40,
    color: "[&_[data-slot=progress-indicator]]:bg-orange-500",
  },
];

export function ProgressSkillBars() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col gap-1">
          <div className="flex justify-between text-sm">
            <span className="font-medium">{skill.name}</span>
            <span className="text-muted-foreground">{skill.value}%</span>
          </div>
          <Progress value={skill.value} className={cn("h-2.5 rounded-sm", skill.color)} />
        </div>
      ))}
    </div>
  );
}

