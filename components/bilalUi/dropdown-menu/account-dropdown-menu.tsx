// File: components/bilalUi/dropdown-menu/account-dropdown-menu.tsx
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  UserRound,
  UsersRound,
  MailPlus,
  UserPlus,
  ShieldCheck,
  ChevronsUpDown,
  Sparkles,
} from "lucide-react";

export function AccountDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2 border-sky-500/40">
          <span className="flex size-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-300">
            B
          </span>
          bilal@ui.dev
          <ChevronsUpDown className="size-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel className="flex items-center gap-2">
          <Sparkles className="size-4 text-amber-500" />
          Workspace
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserRound className="size-4" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShieldCheck className="size-4" />
            Security
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <UsersRound className="size-4" />
            Invite team
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-52">
            <DropdownMenuItem>
              <MailPlus className="size-4" />
              Invite via email
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPlus className="size-4" />
              Add existing user
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
