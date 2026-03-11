"use client";

import { Globe, Home, Settings, User } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ITEMS = [
  { value: "home", label: "Home", icon: Home },
  { value: "explore", label: "Explore", icon: Globe },
  { value: "profile", label: "Profile", icon: User },
  { value: "settings", label: "Settings", icon: Settings },
];

export function StackedIconTabs() {
  return (
    <Tabs defaultValue="home" className="w-full max-w-sm">
      <TabsList className="grid h-auto grid-cols-4 p-1">
        {ITEMS.map(({ value, label, icon: Icon }) => (
          <TabsTrigger key={value} value={value} className="h-auto flex-col gap-1 py-2">
            <Icon className="h-5 w-5" />
            <span className="text-[10px]">{label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {ITEMS.map(({ value, label }) => (
        <TabsContent key={value} value={value} className="p-4 text-sm text-muted-foreground">
          {label} section.
        </TabsContent>
      ))}
    </Tabs>
  );
}
