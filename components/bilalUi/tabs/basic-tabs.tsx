"use client";

import { Bell, Lock, User } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function BasicTabs() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">
          <User className="mr-2 h-4 w-4" />
          Account
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <Bell className="mr-2 h-4 w-4" />
          Notifications
        </TabsTrigger>
        <TabsTrigger value="security">
          <Lock className="mr-2 h-4 w-4" />
          Security
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4 text-sm text-muted-foreground">
        Manage your account details.
      </TabsContent>
      <TabsContent value="notifications" className="p-4 text-sm text-muted-foreground">
        Configure how you receive notifications.
      </TabsContent>
      <TabsContent value="security" className="p-4 text-sm text-muted-foreground">
        Update your password and 2FA settings.
      </TabsContent>
    </Tabs>
  );
}
