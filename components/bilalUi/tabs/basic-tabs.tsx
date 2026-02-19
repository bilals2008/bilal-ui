// File: components/bilalUi/tabs/basic-tabs.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function BasicTabs() {
  return (
    <Tabs defaultValue="account" className="w-72">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-muted-foreground pt-2 px-1">
          Make changes to your account here.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-muted-foreground pt-2 px-1">
          Change your password here.
        </p>
      </TabsContent>
    </Tabs>
  );
}
