"use client";

import { useId, useState } from "react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectProgramming() {
  const id = useId();
  const [value, setValue] = useState("react");

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor={id}>Primary Tech Stack</Label>

      <Select value={value} onValueChange={setValue}>
        <SelectTrigger id={id} className="w-full">
          <SelectValue />
        </SelectTrigger>

        <SelectContent className="max-h-80">
          <SelectGroup>
            <SelectLabel>Frontend</SelectLabel>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="next">Next.js</SelectItem>
            <SelectItem value="vue">Vue.js</SelectItem>
            <SelectItem value="svelte">Svelte</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Backend</SelectLabel>
            <SelectItem value="node">Node.js</SelectItem>
            <SelectItem value="django">Django</SelectItem>
            <SelectItem value="spring">Spring Boot</SelectItem>
            <SelectItem value="laravel">Laravel</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Database</SelectLabel>
            <SelectItem value="postgres">PostgreSQL</SelectItem>
            <SelectItem value="mysql">MySQL</SelectItem>
            <SelectItem value="mongodb">MongoDB</SelectItem>
            <SelectItem value="redis">Redis</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
