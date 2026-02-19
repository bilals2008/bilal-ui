import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function WithIconInput() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
        <Search className="h-4 w-4" />
      </div>
      <Input type="search" placeholder="Search..." className="pl-9" />
    </div>
  );
}
