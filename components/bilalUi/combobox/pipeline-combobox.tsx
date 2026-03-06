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

type Stage = "source" | "transform" | "destination";

type Option = {
  value: string;
  label: string;
  hint: string;
};

const STAGE_ORDER: Stage[] = ["source", "transform", "destination"];

const STAGE_LABELS: Record<Stage, string> = {
  source: "Source",
  transform: "Transform",
  destination: "Destination",
};

const OPTIONS: Record<Stage, Option[]> = {
  source: [
    { value: "crm", label: "CRM Contacts", hint: "Sync sales contacts and company metadata." },
    { value: "support", label: "Support Tickets", hint: "Pull open and resolved ticket streams." },
    { value: "events", label: "Product Events", hint: "Use analytics event timelines as input." },
  ],
  transform: [
    { value: "dedupe", label: "Dedupe + Merge", hint: "Merge duplicate records by identity rules." },
    { value: "enrich", label: "AI Enrichment", hint: "Attach missing fields and semantic tags." },
    { value: "score", label: "Lead Scoring", hint: "Compute quality score from behavior signals." },
  ],
  destination: [
    { value: "warehouse", label: "Data Warehouse", hint: "Write curated tables for BI dashboards." },
    { value: "slack", label: "Slack Alerts", hint: "Post high-priority changes to operations channel." },
    { value: "webhook", label: "Outbound Webhook", hint: "Forward processed payloads to external systems." },
  ],
};

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function findOption(stage: Stage, value: string) {
  return OPTIONS[stage].find((option) => option.value === value);
}

export function PipelineCombobox() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [source, setSource] = React.useState("");
  const [transform, setTransform] = React.useState("");
  const [destination, setDestination] = React.useState("");

  const activeStage: Stage = !source ? "source" : !transform ? "transform" : !destination ? "destination" : "destination";

  const selectedSummary = React.useMemo(() => {
    const sourceLabel = source ? findOption("source", source)?.label : "Source";
    const transformLabel = transform ? findOption("transform", transform)?.label : "Transform";
    const destinationLabel = destination ? findOption("destination", destination)?.label : "Destination";

    return `${sourceLabel} -> ${transformLabel} -> ${destinationLabel}`;
  }, [source, transform, destination]);

  const visibleOptions = React.useMemo(() => {
    const q = normalize(query);
    const stageOptions = OPTIONS[activeStage];

    if (!q) return stageOptions;

    return stageOptions.filter((option) =>
      normalize(`${option.label} ${option.hint}`).includes(q),
    );
  }, [activeStage, query]);

  const selectOption = (stage: Stage, value: string) => {
    if (stage === "source") {
      setSource(value);
      setTransform("");
      setDestination("");
      setQuery("");
      return;
    }

    if (stage === "transform") {
      setTransform(value);
      setDestination("");
      setQuery("");
      return;
    }

    setDestination(value);
    setQuery("");
    setOpen(false);
  };

  const resetFromStage = (stage: Stage) => {
    if (stage === "source") {
      setSource("");
      setTransform("");
      setDestination("");
      return;
    }

    if (stage === "transform") {
      setTransform("");
      setDestination("");
      return;
    }

    setDestination("");
  };

  const clearPipeline = () => {
    setSource("");
    setTransform("");
    setDestination("");
    setQuery("");
  };

  return (
    <div className="w-full max-w-2xl space-y-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
            <span className="truncate text-left">{selectedSummary}</span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[min(40rem,calc(100vw-2rem))] p-0" align="start">
          <Command shouldFilter={false}>
            <div className="border-b px-3 py-2">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Pipeline Flow</span>
                <button
                  type="button"
                  onClick={clearPipeline}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Reset all
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
                {STAGE_ORDER.map((stage) => {
                  const selectedValue = stage === "source" ? source : stage === "transform" ? transform : destination;
                  const selected = selectedValue ? findOption(stage, selectedValue)?.label : null;
                  const isActive = activeStage === stage;

                  return (
                    <button
                      key={stage}
                      type="button"
                      onClick={() => resetFromStage(stage)}
                      className={cn(
                        "rounded-md border px-2 py-1 text-left",
                        isActive && "border-primary text-primary",
                      )}
                      aria-label={`Reset ${stage} stage`}
                    >
                      <span className="font-medium">{STAGE_LABELS[stage]}</span>
                      <span className="ml-1 text-muted-foreground">{selected ?? "not selected"}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <CommandInput
              value={query}
              onValueChange={setQuery}
              placeholder={`Select ${STAGE_LABELS[activeStage].toLowerCase()}...`}
              aria-label="Build data pipeline"
            />

            <CommandList>
              {visibleOptions.length === 0 ? <CommandEmpty>No options for this stage.</CommandEmpty> : null}

              <CommandGroup heading={`Choose ${STAGE_LABELS[activeStage]}`}>
                {visibleOptions.map((option) => {
                  const selectedValue = activeStage === "source" ? source : activeStage === "transform" ? transform : destination;

                  return (
                    <CommandItem
                      key={option.value}
                      value={`${activeStage}-${option.value}`}
                      onSelect={() => selectOption(activeStage, option.value)}
                      className="items-start"
                    >
                      <div className="flex w-full items-start justify-between gap-3">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">{option.label}</p>
                          <p className="text-xs text-muted-foreground">{option.hint}</p>
                        </div>
                        <Check
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            selectedValue === option.value ? "opacity-100" : "opacity-0",
                          )}
                        />
                      </div>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <p className="text-xs text-muted-foreground">
        Progressive selection: Source -&gt; Transform -&gt; Destination in one guided combobox.
      </p>
    </div>
  );
}
