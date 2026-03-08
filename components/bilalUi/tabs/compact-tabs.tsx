"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RANGES = ["1d", "1w", "1m", "3m", "1y"];

export function CompactTabs() {
  return (
    <Tabs defaultValue="1d" className="w-full max-w-xs">
      <TabsList className="h-7 gap-0 p-0.5">
        {RANGES.map((range) => (
          <TabsTrigger key={range} value={range} className="h-6 px-2 text-xs">
            {range}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="1d" className="pt-2 text-xs text-muted-foreground">
        Last 24 hours chart.
      </TabsContent>
      <TabsContent value="1w" className="pt-2 text-xs text-muted-foreground">
        Last 7 days chart.
      </TabsContent>
      <TabsContent value="1m" className="pt-2 text-xs text-muted-foreground">
        Last month chart.
      </TabsContent>
      <TabsContent value="3m" className="pt-2 text-xs text-muted-foreground">
        Last 3 months chart.
      </TabsContent>
      <TabsContent value="1y" className="pt-2 text-xs text-muted-foreground">
        Last year chart.
      </TabsContent>
    </Tabs>
  );
}
