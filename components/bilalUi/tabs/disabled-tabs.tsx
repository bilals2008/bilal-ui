"use client";

import { Code, CreditCard, Settings } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DisabledTabs() {
  return (
    <Tabs defaultValue="general" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="general" className="gap-1.5">
          <Settings className="h-4 w-4" />
          General
        </TabsTrigger>
        <TabsTrigger value="advanced" className="gap-1.5">
          <Code className="h-4 w-4" />
          Advanced
        </TabsTrigger>
        <TabsTrigger value="billing" disabled className="gap-1.5">
          <CreditCard className="h-4 w-4" />
          Billing
        </TabsTrigger>
      </TabsList>
      <TabsContent value="general" className="p-4 text-sm text-muted-foreground">
        General settings.
      </TabsContent>
      <TabsContent value="advanced" className="p-4 text-sm text-muted-foreground">
        Advanced options.
      </TabsContent>
    </Tabs>
  );
}
