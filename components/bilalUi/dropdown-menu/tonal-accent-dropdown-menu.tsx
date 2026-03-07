import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  CreditCard,
  LogOut,
  Settings,
  UserRound,
} from "lucide-react";

export function TonalAccentDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
          Actions
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-emerald-200 bg-emerald-50 dark:border-emerald-800/50 dark:bg-emerald-950/30">
        <DropdownMenuLabel className="text-emerald-700 dark:text-emerald-300">Quick Actions</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-emerald-200 dark:bg-emerald-800/30" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-emerald-900 dark:text-emerald-100">
            <UserRound className="mr-2 size-4 text-emerald-600" />
            My Account
          </DropdownMenuItem>
          <DropdownMenuItem className="text-emerald-900 dark:text-emerald-100">
            <CreditCard className="mr-2 size-4 text-emerald-600" />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="text-emerald-900 dark:text-emerald-100">
            <Settings className="mr-2 size-4 text-emerald-600" />
            Preferences
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-emerald-200 dark:bg-emerald-800/30" />
        <DropdownMenuItem className="text-red-600 dark:text-red-400">
          <LogOut className="mr-2 size-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
