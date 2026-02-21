// File: components/bilalUi/dropdown-menu/account-dropdown-menu.tsx
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  UserRound,
  Settings,
  CreditCard,
  Bell,
  LogOut,
  ChevronDown,
} from "lucide-react";

export function AccountDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <UserRound className="size-4 text-sky-500" />
          Account
          <ChevronDown className="size-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserRound className="size-4 text-sky-500" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="size-4 text-violet-500" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="size-4 text-amber-500" />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bell className="size-4 text-emerald-500" />
          Notifications
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut className="size-4" />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
