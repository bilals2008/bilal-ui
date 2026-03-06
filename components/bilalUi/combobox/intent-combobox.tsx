"use client";

import * as React from "react";
import { Check, ChevronsUpDown, RotateCcw } from "lucide-react";

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

type IntentId = "find" | "create" | "assign" | "link";

type IntentDefinition = {
  id: IntentId;
  label: string;
  description: string;
  placeholder: string;
  allowTypes: Array<EntityRecord["type"]>;
};

type EntityRecord = {
  id: string;
  title: string;
  summary: string;
  type: "task" | "project" | "doc" | "person";
  status: "planned" | "active" | "done";
};

const INTENTS: IntentDefinition[] = [
  {
    id: "find",
    label: "Find",
    description: "Locate an existing entity quickly.",
    placeholder: "Search records, docs, or people...",
    allowTypes: ["task", "project", "doc", "person"],
  },
  {
    id: "create",
    label: "Create",
    description: "Start something new from reusable templates.",
    placeholder: "Search templates to create from...",
    allowTypes: ["task", "project", "doc"],
  },
  {
    id: "assign",
    label: "Assign",
    description: "Pick people for ownership and routing.",
    placeholder: "Find teammates by skill or role...",
    allowTypes: ["person"],
  },
  {
    id: "link",
    label: "Link",
    description: "Attach related artifacts to the current item.",
    placeholder: "Find related docs, tasks, or projects...",
    allowTypes: ["task", "project", "doc"],
  },
];

const ENTITIES: EntityRecord[] = [
  {
    id: "TASK-218",
    title: "Refactor combobox state machine",
    summary: "Stabilize keyboard navigation for nested popovers.",
    type: "task",
    status: "active",
  },
  {
    id: "PROJ-091",
    title: "Design system migration",
    summary: "Move legacy tokens into semantic theme contracts.",
    type: "project",
    status: "planned",
  },
  {
    id: "DOC-044",
    title: "Incident runbook",
    summary: "Escalation flow, ownership matrix, and rollback steps.",
    type: "doc",
    status: "done",
  },
  {
    id: "USR-013",
    title: "Areeba Khan",
    summary: "Frontend lead, accessibility and DX ownership.",
    type: "person",
    status: "active",
  },
  {
    id: "USR-027",
    title: "Hamza Iqbal",
    summary: "Platform engineer, CI/CD and reliability systems.",
    type: "person",
    status: "active",
  },
  {
    id: "TASK-287",
    title: "Preview panel for search results",
    summary: "Inline metadata to reduce wrong selections.",
    type: "task",
    status: "planned",
  },
];

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export function IntentCombobox() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [selectedIntentId, setSelectedIntentId] = React.useState<IntentId>("find");
  const [selectedEntityId, setSelectedEntityId] = React.useState<string>("");

  const selectedIntent = React.useMemo(
    () => INTENTS.find((intent) => intent.id === selectedIntentId) ?? INTENTS[0],
    [selectedIntentId],
  );

  const selectedEntity = React.useMemo(
    () => ENTITIES.find((entity) => entity.id === selectedEntityId),
    [selectedEntityId],
  );

  const intentSuggestions = React.useMemo(() => {
    const q = normalize(query);
    if (!q) return INTENTS;

    return INTENTS.filter((intent) => {
      return normalize(`${intent.label} ${intent.description}`).includes(q);
    });
  }, [query]);

  const resultSuggestions = React.useMemo(() => {
    const q = normalize(query);

    return ENTITIES.filter((entity) => selectedIntent.allowTypes.includes(entity.type)).filter((entity) => {
      if (!q) return true;
      return normalize(`${entity.id} ${entity.title} ${entity.summary} ${entity.type} ${entity.status}`).includes(q);
    });
  }, [query, selectedIntent]);

  const intentForEntity = (intent: IntentDefinition, entity: EntityRecord) => {
    if (intent.id === "create") {
      return `Create from ${entity.type} template`;
    }

    if (intent.id === "assign") {
      return "Assign ownership";
    }

    if (intent.id === "link") {
      return "Link to current item";
    }

    return "Open details";
  };

  const resetSelection = () => {
    setSelectedEntityId("");
    setQuery("");
  };

  return (
    <div className="w-full max-w-2xl space-y-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            <span className="truncate text-left">
              {selectedEntity
                ? `${selectedIntent.label}: ${selectedEntity.title}`
                : `${selectedIntent.label} with intent...`}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[min(38rem,calc(100vw-2rem))] p-0" align="start">
          <Command shouldFilter={false}>
            <div className="border-b px-3 py-2">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Active Intent
                </span>
                {selectedEntity && (
                  <button
                    type="button"
                    onClick={resetSelection}
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Reset
                  </button>
                )}
              </div>

              <div className="inline-flex items-center rounded-md border bg-muted px-2 py-1 text-xs font-medium">
                {selectedIntent.label}
                <span className="ml-2 text-muted-foreground">{selectedIntent.description}</span>
              </div>
            </div>

            <CommandInput
              value={query}
              onValueChange={setQuery}
              placeholder={selectedIntent.placeholder}
              aria-label="Search by intent"
            />

            <CommandList>
              {intentSuggestions.length === 0 && resultSuggestions.length === 0 ? (
                <CommandEmpty>No matching actions or entities.</CommandEmpty>
              ) : null}

              <CommandGroup heading="Switch Intent">
                {intentSuggestions.map((intent) => (
                  <CommandItem
                    key={intent.id}
                    value={`intent-${intent.id}`}
                    onSelect={() => {
                      setSelectedIntentId(intent.id);
                      setQuery("");
                    }}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium">{intent.label}</p>
                        <p className="text-xs text-muted-foreground">{intent.description}</p>
                      </div>
                      <Check
                        className={cn(
                          "h-4 w-4 shrink-0",
                          selectedIntent.id === intent.id ? "opacity-100" : "opacity-0",
                        )}
                      />
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>

              <CommandGroup heading={`${selectedIntent.label} Targets`}>
                {resultSuggestions.map((entity) => (
                  <CommandItem
                    key={entity.id}
                    value={`entity-${entity.id}`}
                    onSelect={() => {
                      setSelectedEntityId(entity.id);
                      setOpen(false);
                    }}
                    className="items-start"
                  >
                    <div className="flex w-full items-start justify-between gap-3">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{entity.title}</p>
                        <p className="text-xs text-muted-foreground">{entity.summary}</p>
                        <p className="text-[11px] text-muted-foreground">
                          {entity.id} • {entity.type} • {intentForEntity(selectedIntent, entity)}
                        </p>
                      </div>
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          selectedEntityId === entity.id ? "opacity-100" : "opacity-0",
                        )}
                      />
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <p className="text-xs text-muted-foreground">
        Flow: select intent first, then pick a target that fits that intent.
      </p>
    </div>
  );
}
