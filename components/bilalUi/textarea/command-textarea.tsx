"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
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
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [selectedCommand, setSelectedCommand] = React.useState<string | null>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const overlayRef = React.useRef<HTMLDivElement>(null);

  const activeQuery = getActiveQuery(value);
  const suggestions = activeQuery
    ? COMMANDS.filter((item) => item.key.startsWith(activeQuery))
    : [];

  React.useEffect(() => {
    setActiveIndex(0);
  }, [activeQuery, suggestions.length]);

  const applyCommand = (command: string) => {
    setValue((current) =>
      current.replace(/(?:^|\s)\/[a-z-]*$/i, ` ${command} `).trimStart()
    );
    setSelectedCommand(command);
    requestAnimationFrame(() => textareaRef.current?.focus());
  };

  const closeSuggestions = () => {
    setValue((current) => current.replace(/(?:^|\s)\/[a-z-]*$/i, ""));
    setActiveIndex(0);
  };

  const syncOverlayScroll = (event: React.UIEvent<HTMLTextAreaElement>) => {
    if (!overlayRef.current) return;
    overlayRef.current.scrollTop = event.currentTarget.scrollTop;
    overlayRef.current.scrollLeft = event.currentTarget.scrollLeft;
  };

  const highlightedSegments = value.split(/(\/[a-z-]+)/gi);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (suggestions.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      applyCommand(suggestions[activeIndex].key);
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeSuggestions();
    }
  };

  return (
    <div className="w-full max-w-xl space-y-3">
      <div className="rounded-xl border bg-card p-3 shadow-sm">
        <span className="mb-2 block text-xs text-muted-foreground">
          Type <code className="font-mono">/</code> to trigger writing commands
        </span>

        <div className="relative">
          <div
            ref={overlayRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-md border border-transparent px-3 py-2 text-sm leading-relaxed"
          >
            <div className="min-h-36 whitespace-pre-wrap break-words">
              {highlightedSegments.map((segment, index) => {
                const isCommand = /^\/[a-z-]+$/i.test(segment);
                const isSelected = isCommand && segment === selectedCommand;
                return (
                  <span
                    key={`${segment}-${index}`}
                    className={
                      isSelected
                        ? "rounded bg-primary/25 px-0.5 font-mono text-primary"
                        : isCommand
                          ? "rounded bg-primary/10 px-0.5 font-mono text-primary/85"
                          : "text-foreground"
                    }
                  >
                    {segment}
                  </span>
                );
              })}
            </div>
          </div>

          <Textarea
            ref={textareaRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={handleKeyDown}
            onScroll={syncOverlayScroll}
            placeholder="Write your prompt. Try /summarize or /rewrite..."
            className="min-h-36 bg-transparent font-medium leading-relaxed text-transparent caret-foreground"
            aria-label="Command textarea"
            aria-autocomplete="list"
            aria-expanded={suggestions.length > 0}
            aria-controls="command-textarea-suggestions"
          />
        </div>
      </div>

      {suggestions.length > 0 && (
        <div
          id="command-textarea-suggestions"
          role="listbox"
          className="rounded-xl border bg-background p-2"
        >
          <div className="mb-2 px-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Command Suggestions
          </div>
          <div className="space-y-1">
            {suggestions.map((item, index) => (
              <Button
                key={item.key}
                type="button"
                variant="ghost"
                role="option"
                aria-selected={index === activeIndex}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => applyCommand(item.key)}
                className={`h-auto w-full justify-between rounded-md px-2 py-1.5 text-left transition-colors ${
                  index === activeIndex
                    ? "bg-primary/15 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <span className="font-mono text-sm">{item.key}</span>
                <span className="text-xs text-muted-foreground">{item.description}</span>
              </Button>
            ))}
          </div>
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        Shortcuts: <code className="font-mono">↑/↓</code> navigate, <code className="font-mono">Enter</code> apply,
        <code className="ml-1 font-mono">Esc</code> close.
      </p>
    </div>
  );
}
