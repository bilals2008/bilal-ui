"use client";

import { BarChart2, LayoutDashboard, Settings, Users } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function IconOnlyTabs() {
  return (
    <Tabs defaultValue="dashboard" className="w-full max-w-xs">
      <TabsList className="grid grid-cols-4">
        <TabsTrigger value="dashboard" title="Dashboard">
          <LayoutDashboard className="h-4 w-4" />
        </TabsTrigger>
        <TabsTrigger value="analytics" title="Analytics">
          <BarChart2 className="h-4 w-4" />
        </TabsTrigger>
        <TabsTrigger value="team" title="Team">
          <Users className="h-4 w-4" />
        </TabsTrigger>
        <TabsTrigger value="settings" title="Settings">
          <Settings className="h-4 w-4" />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard" className="p-4 text-sm text-muted-foreground">
        Dashboard overview.
      </TabsContent>
      <TabsContent value="analytics" className="p-4 text-sm text-muted-foreground">
        Analytics data.
      </TabsContent>
      <TabsContent value="team" className="p-4 text-sm text-muted-foreground">
        Team members.
      </TabsContent>
      <TabsContent value="settings" className="p-4 text-sm text-muted-foreground">
        App settings.
      </TabsContent>
    </Tabs>
  );
}
