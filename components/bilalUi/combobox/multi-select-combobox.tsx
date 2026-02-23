"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const skills = [
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "typescript", label: "TypeScript" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "node", label: "Node.js" },
  { value: "postgres", label: "PostgreSQL" },
];

export function MultiSelectCombobox() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string[]>(["react", "typescript"]);

  const toggleSkill = (skillValue: string) => {
    setSelected((current) =>
      current.includes(skillValue)
        ? current.filter((item) => item !== skillValue)
        : [...current, skillValue],
    );
  };

  const selectedLabels = skills
    .filter((skill) => selected.includes(skill.value))
    .map((skill) => skill.label);

  return (
    <div className="w-full max-w-md space-y-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {selected.length
              ? `${selected.length} skill${selected.length > 1 ? "s" : ""} selected`
              : "Select skills..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
          <Command>
            <CommandInput placeholder="Search skills..." />
            <CommandList>
              <CommandEmpty>No skill found.</CommandEmpty>
              <CommandGroup>
                {skills.map((skill) => (
                  <CommandItem
                    key={skill.value}
                    value={skill.value}
                    onSelect={(currentValue) => {
                      toggleSkill(currentValue);
                    }}
                  >
                    {skill.label}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        selected.includes(skill.value) ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <div className="flex flex-wrap gap-2">
        {selectedLabels.length ? (
          selectedLabels.map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-1 rounded-md border bg-muted px-2 py-1 text-xs"
            >
              {label}
            </span>
          ))
        ) : (
          <span className="text-xs text-muted-foreground">No skills selected.</span>
        )}
      </div>

      {selected.length > 0 ? (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-7 px-2 text-xs"
          onClick={() => setSelected([])}
        >
          <X className="mr-1 h-3.5 w-3.5" />
          Clear selection
        </Button>
      ) : null}
    </div>
  );
}
