"use client";

import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

const COMMANDS = [
  { key: "/summarize", description: "Compress text into short bullets." },
  { key: "/rewrite", description: "Rewrite with better clarity and flow." },
  { key: "/translate", description: "Translate the selected text." },
  { key: "/headline", description: "Generate high-converting title options." },
  { key: "/cta", description: "Create a sharper call to action." },
];

function getActiveQuery(value: string) {
  const match = value.match(/(?:^|\s)\/([a-z-]*)$/i);
  return match ? `/${match[1]}` : "";
}

export function CommandTextarea() {
  const [value, setValue] = React.useState(
    "Launch copy for our new feature.\n/su"
  );

  const activeQuery = getActiveQuery(value);
  const suggestions = activeQuery
    ? COMMANDS.filter((item) => item.key.startsWith(activeQuery))
    : [];
  const chips = Array.from(
    new Set((value.match(/(?:^|\s)(\/[a-z-]+)/gi) ?? []).map((item) => item.trim()))
  );

  const applyCommand = (command: string) => {
    setValue((current) => current.replace(/(?:^|\s)\/[a-z-]*$/i, ` ${command} `).trimStart());
  };

  return (
    <div className="w-full max-w-xl space-y-3">
      <div className="rounded-xl border bg-card p-3 shadow-sm">
        <div className="mb-2 flex flex-wrap gap-2">
          {chips.length > 0 ? (
            chips.map((chip) => (
              <Badge key={chip} variant="secondary" className="rounded-md font-mono text-xs">
                {chip}
              </Badge>
            ))
          ) : (
            <span className="text-xs text-muted-foreground">
              Type <code className="font-mono">/</code> to trigger writing commands
            </span>
          )}
        </div>

        <Textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Write your prompt. Try /summarize or /rewrite..."
          className="min-h-36 font-medium leading-relaxed"
          aria-label="Command textarea"
        />
      </div>

      {suggestions.length > 0 && (
        <div className="rounded-xl border bg-background p-2">
          <div className="mb-2 px-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Command Suggestions
          </div>
          <div className="space-y-1">
            {suggestions.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => applyCommand(item.key)}
                className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left transition-colors hover:bg-muted"
              >
                <span className="font-mono text-sm">{item.key}</span>
                <span className="text-xs text-muted-foreground">{item.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
