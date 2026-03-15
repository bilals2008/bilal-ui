"use client";

import * as React from "react";
import { DollarSign, Euro, PoundSterling } from "lucide-react";

import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function CurrencySelectorToggleGroup() {
  const [currency, setCurrency] = React.useState("usd");

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">Currency</Label>
      <ToggleGroup type="single" value={currency} onValueChange={(v) => v && setCurrency(v)}>
        <ToggleGroupItem value="usd" aria-label="US Dollar">
          <DollarSign className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="eur" aria-label="Euro">
          <Euro className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="gbp" aria-label="British Pound">
          <PoundSterling className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}




