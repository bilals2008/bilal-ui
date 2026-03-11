"use client";

import { BookOpen, Code, Globe } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PillTabs() {
  return (
    <Tabs defaultValue="all" className="w-full max-w-sm">
      <TabsList className="rounded-full bg-muted p-1">
        <TabsTrigger value="all" className="gap-1.5 rounded-full">
          <Globe className="h-3.5 w-3.5" />
          All
        </TabsTrigger>
        <TabsTrigger value="code" className="gap-1.5 rounded-full">
          <Code className="h-3.5 w-3.5" />
          Code
        </TabsTrigger>
        <TabsTrigger value="docs" className="gap-1.5 rounded-full">
          <BookOpen className="h-3.5 w-3.5" />
          Docs
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="pt-3 text-sm text-muted-foreground">
        Showing all results.
      </TabsContent>
      <TabsContent value="code" className="pt-3 text-sm text-muted-foreground">
        Code results only.
      </TabsContent>
      <TabsContent value="docs" className="pt-3 text-sm text-muted-foreground">
        Documentation results.
      </TabsContent>
    </Tabs>
  );
}
