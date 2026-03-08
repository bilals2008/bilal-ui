"use client";

import { useState } from "react";
import { Dribbble, Facebook, Instagram, Twitter } from "lucide-react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const socials = [
  { value: "dribbble", label: "Dribbble", icon: Dribbble },
  { value: "facebook", label: "Facebook", icon: Facebook },
  { value: "instagram", label: "Instagram", icon: Instagram },
  { value: "twitter", label: "Twitter", icon: Twitter },
];

export function SelectSocialIcon() {
  const [value, setValue] = useState("dribbble");
  const selectedSocial = socials.find((item) => item.value === value);

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor="social-select">Social Channel</Label>

      <Select value={value} onValueChange={setValue}>
        <SelectTrigger id="social-select" className="w-full">
          <div className="flex items-center gap-2">
            {selectedSocial && <selectedSocial.icon className="size-4" />}
            <SelectValue />
          </div>
        </SelectTrigger>

        <SelectContent align="start">
          {socials.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <item.icon className="size-4" />
              <span className="truncate">{item.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
