import { useId } from "react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectWithSeparator() {
  const id = useId();

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor={id}>Select Your Focus Area</Label>
      <Select defaultValue="leadership">
        <SelectTrigger id={id} className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="duration-300 data-[state=open]:zoom-in-100">
          <SelectGroup>
            <SelectLabel>Professional Skills</SelectLabel>
            <SelectItem value="leadership">Leadership</SelectItem>
            <SelectItem value="communication">Communication</SelectItem>
            <SelectItem value="project-management">Project Management</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Personal Growth</SelectLabel>
            <SelectItem value="mindfulness">Mindfulness</SelectItem>
            <SelectItem value="time-management">Time Management</SelectItem>
            <SelectItem value="creativity">Creativity</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Technology</SelectLabel>
            <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
            <SelectItem value="blockchain">Blockchain</SelectItem>
            <SelectItem value="web-dev">Web Development</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
