"use client";

import * as React from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function LanguageSelectorToggleGroup() {
  const [lang, setLang] = React.useState("en");

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Language</label>
      <ToggleGroup type="single" value={lang} onValueChange={(v) => v && setLang(v)}>
        <ToggleGroupItem value="en" aria-label="English">
          <span className="text-xs font-medium">EN</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="es" aria-label="Spanish">
          <span className="text-xs font-medium">ES</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="fr" aria-label="French">
          <span className="text-xs font-medium">FR</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="de" aria-label="German">
          <span className="text-xs font-medium">DE</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

