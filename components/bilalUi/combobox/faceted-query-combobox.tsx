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

type FacetKey = "status" | "priority" | "team" | "type";

type SearchRecord = {
  id: string;
  title: string;
  summary: string;
  status: string;
  priority: string;
  team: string;
  type: string;
};

const FACET_OPTIONS: Record<FacetKey, string[]> = {
  status: ["planned", "in-progress", "blocked", "done"],
  priority: ["low", "medium", "high", "urgent"],
  team: ["design", "frontend", "backend", "platform"],
  type: ["task", "bug", "research", "epic"],
};

const RECORDS: SearchRecord[] = [
  {
    id: "FT-318",
    title: "Advanced filter chips",
    summary: "Ship removable filter tokens inside combobox trigger.",
    status: "in-progress",
    priority: "high",
    team: "frontend",
    type: "task",
  },
  {
    id: "DS-041",
    title: "Keyboard focus audit",
    summary: "Verify tab order and focus rings on popover actions.",
    status: "planned",
    priority: "medium",
    team: "design",
    type: "research",
  },
  {
    id: "PL-077",
    title: "Cache invalidation race",
    summary: "Intermittent stale data after mutation in edge runtime.",
    status: "blocked",
    priority: "urgent",
    team: "platform",
    type: "bug",
  },
  {
    id: "BE-229",
    title: "Webhook retry strategy",
    summary: "Introduce exponential backoff and dead-letter tracking.",
    status: "done",
    priority: "high",
    team: "backend",
    type: "epic",
  },
  {
    id: "FE-122",
    title: "Virtualized result list",
    summary: "Improve perf for large searchable option sets.",
    status: "planned",
    priority: "low",
    team: "frontend",
    type: "task",
  },
];

function parsePendingFacet(query: string): { key: FacetKey; value: string } | null {
  const match = query.match(/(?:^|\s)([a-z-]+):([^\s]*)$/i);
  if (!match) return null;

  const key = match[1].toLowerCase() as FacetKey;
  if (!(key in FACET_OPTIONS)) return null;

  return { key, value: match[2].toLowerCase() };
}

function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

function toToken(key: FacetKey, value: string) {
  return `${key}:${value}`;
}

function parseToken(token: string): { key: FacetKey; value: string } | null {
  const [rawKey, rawValue] = token.split(":");
  const key = rawKey as FacetKey;
  if (!rawValue || !(key in FACET_OPTIONS)) return null;
  return { key, value: rawValue };
}

export function FacetedQueryCombobox() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [filters, setFilters] = React.useState<string[]>([]);
  const [selectedId, setSelectedId] = React.useState<string>("");

  const pendingFacet = React.useMemo(() => parsePendingFacet(query), [query]);

  const appliedFilterMap = React.useMemo(() => {
    const map = new Map<FacetKey, string>();
    for (const token of filters) {
      const parsed = parseToken(token);
      if (parsed) map.set(parsed.key, parsed.value);
    }
    return map;
  }, [filters]);

  const facetKeySuggestions = React.useMemo(() => {
    if (pendingFacet) return [];

    const lastToken = query.split(/\s+/).pop() ?? "";
    if (lastToken.includes(":")) return [];

    const keyQuery = normalizeText(lastToken);

    return (Object.keys(FACET_OPTIONS) as FacetKey[])
      .filter((key) => !appliedFilterMap.has(key))
      .filter((key) => key.startsWith(keyQuery));
  }, [query, pendingFacet, appliedFilterMap]);

  const facetValueSuggestions = React.useMemo(() => {
    if (!pendingFacet) return [];

    return FACET_OPTIONS[pendingFacet.key]
      .filter((value) => value.includes(pendingFacet.value))
      .filter((value) => !filters.includes(toToken(pendingFacet.key, value)));
  }, [pendingFacet, filters]);

  const textQuery = React.useMemo(() => {
    if (!query.trim()) return "";
    if (pendingFacet) {
      return normalizeText(query.replace(/(?:^|\s)[a-z-]+:[^\s]*$/i, ""));
    }
    return normalizeText(query);
  }, [query, pendingFacet]);

  const filteredRecords = React.useMemo(() => {
    return RECORDS.filter((record) => {
      const passesFacetFilters = Array.from(appliedFilterMap.entries()).every(
        ([key, value]) => normalizeText(record[key]) === value,
      );

      if (!passesFacetFilters) return false;
      if (!textQuery) return true;

      const haystack = normalizeText(
        `${record.id} ${record.title} ${record.summary} ${record.team} ${record.type}`,
      );
      return haystack.includes(textQuery);
    });
  }, [appliedFilterMap, textQuery]);

  const selectedRecord = React.useMemo(
    () => RECORDS.find((record) => record.id === selectedId),
    [selectedId],
  );

  const selectFacetKey = (key: FacetKey) => {
    setQuery((current) => {
      const trimmedEnd = current.trimEnd();
      if (!trimmedEnd) return `${key}:`;

      if (!current.endsWith(" ")) {
        return `${current.replace(/[^\s]*$/, "")}${key}:`;
      }

      return `${current}${key}:`;
    });
  };

  const selectFacetValue = (key: FacetKey, value: string) => {
    const token = toToken(key, value);

    setFilters((current) => {
      const withoutSameKey = current.filter((item) => !item.startsWith(`${key}:`));
      return [...withoutSameKey, token];
    });

    setQuery("");
  };

  const removeFilter = (token: string) => {
    setFilters((current) => current.filter((item) => item !== token));
  };

  const clearAllFilters = () => {
    setFilters([]);
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
              {selectedRecord
                ? `${selectedRecord.id} - ${selectedRecord.title}`
                : filters.length > 0
                  ? `${filters.length} facet${filters.length > 1 ? "s" : ""} active`
                  : "Search with facets (e.g. status:in-progress)"}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[min(36rem,calc(100vw-2rem))] p-0" align="start">
          <Command shouldFilter={false}>
            <CommandInput
              value={query}
              onValueChange={setQuery}
              placeholder="Try: status:planned team:frontend virtualized"
            />

            {(filters.length > 0 || query.trim()) && (
              <div className="flex flex-wrap items-center gap-2 border-b px-3 py-2">
                {filters.map((token) => (
                  <span
                    key={token}
                    className="inline-flex items-center gap-1 rounded-md border bg-muted px-2 py-1 text-xs"
                  >
                    {token}
                    <button
                      type="button"
                      onClick={() => removeFilter(token)}
                      className="rounded-sm p-0.5 hover:bg-background"
                      aria-label={`Remove ${token} filter`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}

                {filters.length > 0 && (
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="text-xs text-muted-foreground underline-offset-4 hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>
            )}

            <CommandList>
              {facetKeySuggestions.length === 0 &&
              facetValueSuggestions.length === 0 &&
              filteredRecords.length === 0 ? (
                <CommandEmpty>No matching records.</CommandEmpty>
              ) : null}

              {facetKeySuggestions.length > 0 && (
                <CommandGroup heading="Facet Keys">
                  {facetKeySuggestions.map((key) => (
                    <CommandItem key={key} value={`facet-key-${key}`} onSelect={() => selectFacetKey(key)}>
                      <span className="font-mono text-xs text-muted-foreground">{key}:</span>
                      <span>Add {key} facet</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {facetValueSuggestions.length > 0 && pendingFacet && (
                <CommandGroup heading={`Values for ${pendingFacet.key}`}>
                  {facetValueSuggestions.map((value) => {
                    const token = toToken(pendingFacet.key, value);
                    return (
                      <CommandItem
                        key={token}
                        value={`facet-value-${token}`}
                        onSelect={() => selectFacetValue(pendingFacet.key, value)}
                      >
                        <span className="font-mono text-xs text-muted-foreground">
                          {pendingFacet.key}:{value}
                        </span>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              )}

              <CommandGroup heading="Results">
                {filteredRecords.map((record) => (
                  <CommandItem
                    key={record.id}
                    value={`record-${record.id}`}
                    onSelect={() => {
                      setSelectedId(record.id);
                      setOpen(false);
                    }}
                    className="items-start"
                  >
                    <div className="flex w-full items-start justify-between gap-3">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{record.title}</p>
                        <p className="text-xs text-muted-foreground">{record.summary}</p>
                        <p className="text-[11px] text-muted-foreground">
                          {record.id} • {record.team} • {record.status}
                        </p>
                      </div>

                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          selectedId === record.id ? "opacity-100" : "opacity-0",
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
        Pro tip: type a facet key and value like <span className="font-mono">priority:urgent</span>.
      </p>
    </div>
  );
}
