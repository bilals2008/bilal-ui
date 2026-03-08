"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const files = [
  { name: "report.pdf", progress: 100, done: true },
  { name: "photo.jpg", progress: 67, done: false },
  { name: "archive.zip", progress: 23, done: false },
];

export function ProgressFileUpload() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {files.map((file) => (
        <div key={file.name} className="flex flex-col gap-1">
          <div className="flex justify-between text-xs">
            <span className="font-medium">{file.name}</span>
            <span className={cn(file.done ? "text-emerald-500" : "text-muted-foreground")}>
              {file.done ? "Done" : `${file.progress}%`}
            </span>
          </div>
          <Progress
            value={file.progress}
            className={cn(
              "h-1.5",
              file.done ? "[&_[data-slot=progress-indicator]]:bg-emerald-500" : ""
            )}
          />
        </div>
      ))}
    </div>
  );
}

