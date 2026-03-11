"use client";

import { FileText, Image as ImageIcon, Video } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function FullWidthTabs() {
  return (
    <Tabs defaultValue="files" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="files" className="gap-1.5">
          <FileText className="h-4 w-4" />
          Files
        </TabsTrigger>
        <TabsTrigger value="images" className="gap-1.5">
          <ImageIcon className="h-4 w-4" />
          Images
        </TabsTrigger>
        <TabsTrigger value="videos" className="gap-1.5">
          <Video className="h-4 w-4" />
          Videos
        </TabsTrigger>
      </TabsList>
      <TabsContent value="files" className="p-4 text-sm text-muted-foreground">
        File list here.
      </TabsContent>
      <TabsContent value="images" className="p-4 text-sm text-muted-foreground">
        Image grid here.
      </TabsContent>
      <TabsContent value="videos" className="p-4 text-sm text-muted-foreground">
        Video list here.
      </TabsContent>
    </Tabs>
  );
}
