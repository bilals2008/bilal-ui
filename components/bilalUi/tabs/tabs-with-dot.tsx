"use client";

import { Activity, FileText } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsWithDot() {
  return (
    <Tabs defaultValue="live" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="live" className="gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Live
        </TabsTrigger>
        <TabsTrigger value="scheduled" className="gap-2">
          <Activity className="h-4 w-4" />
          Scheduled
        </TabsTrigger>
        <TabsTrigger value="past" className="gap-2">
          <FileText className="h-4 w-4" />
          Past
        </TabsTrigger>
      </TabsList>
      <TabsContent value="live" className="p-4 text-sm text-muted-foreground">
        Live sessions.
      </TabsContent>
      <TabsContent value="scheduled" className="p-4 text-sm text-muted-foreground">
        Upcoming sessions.
      </TabsContent>
      <TabsContent value="past" className="p-4 text-sm text-muted-foreground">
        Past recordings.
      </TabsContent>
    </Tabs>
  );
}
