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
import { ChevronDown, Heart, LogOut, Share2, UserRound } from "lucide-react";

export function BoldColorfulDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          Actions
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <DropdownMenuLabel className="text-blue-700 dark:text-blue-300">Quick Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="group">
            <UserRound className="size-4 text-red-500 group-hover:text-red-600" />
            User Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="group">
            <Heart className="size-4 text-pink-500 group-hover:text-pink-600" />
            Favorites
          </DropdownMenuItem>
          <DropdownMenuItem className="group">
            <Share2 className="size-4 text-blue-500 group-hover:text-blue-600" />
            Share
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut className="size-4" />
          Exit
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
