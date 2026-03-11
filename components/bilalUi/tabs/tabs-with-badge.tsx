"use client";

import { Inbox, Mail, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsWithBadge() {
  return (
    <Tabs defaultValue="inbox" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="inbox" className="gap-2">
          <Inbox className="h-4 w-4" />
          Inbox
          <Badge className="h-5 px-1.5 text-xs">12</Badge>
        </TabsTrigger>
        <TabsTrigger value="starred" className="gap-2">
          <Star className="h-4 w-4" />
          Starred
          <Badge variant="secondary" className="h-5 px-1.5 text-xs">
            3
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="sent" className="gap-2">
          <Mail className="h-4 w-4" />
          Sent
        </TabsTrigger>
      </TabsList>
      <TabsContent value="inbox" className="p-4 text-sm text-muted-foreground">
        12 unread messages.
      </TabsContent>
      <TabsContent value="starred" className="p-4 text-sm text-muted-foreground">
        3 starred items.
      </TabsContent>
      <TabsContent value="sent" className="p-4 text-sm text-muted-foreground">
        Sent mail.
      </TabsContent>
    </Tabs>
  );
}
