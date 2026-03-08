"use client";

import { BookOpen, Code, Image as ImageIcon } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function FloatingTabs() {
  return (
    <Tabs defaultValue="preview" className="flex w-full max-w-md flex-col items-center gap-3">
      <TabsList className="shadow-md">
        <TabsTrigger value="preview" className="gap-1.5">
          <ImageIcon className="h-4 w-4" />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code" className="gap-1.5">
          <Code className="h-4 w-4" />
          Code
        </TabsTrigger>
        <TabsTrigger value="docs" className="gap-1.5">
          <BookOpen className="h-4 w-4" />
          Docs
        </TabsTrigger>
      </TabsList>
      <div className="w-full rounded-xl border bg-card p-5 text-sm text-muted-foreground">
        <TabsContent value="preview">Component preview renders here.</TabsContent>
        <TabsContent value="code">Source code snippet here.</TabsContent>
        <TabsContent value="docs">Usage documentation.</TabsContent>
      </div>
    </Tabs>
  );
}
