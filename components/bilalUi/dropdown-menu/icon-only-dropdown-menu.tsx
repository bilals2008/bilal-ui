import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Copy, Download, Edit, Trash2 } from "lucide-react";

export function IconOnlyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Edit className="mr-2 size-4" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy className="mr-2 size-4" />
          Copy
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Download className="mr-2 size-4" />
          Download
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Trash2 className="mr-2 size-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
