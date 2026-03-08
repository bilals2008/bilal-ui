"use client";

import { useId, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const users = [
  { id: "1", fallback: "ZA", name: "Zara Ali" },
  { id: "2", fallback: "OM", name: "Omar Malik" },
  { id: "3", fallback: "HN", name: "Hina Noor" },
];

export function SelectWithAvatars() {
  const id = useId();
  const [value, setValue] = useState("1");
  const selectedUser = users.find((user) => user.id === value);

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor={id}>Select User</Label>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger
          id={id}
          className="w-full pl-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2"
        >
          <SelectValue aria-label={value}>
            {selectedUser && (
              <>
                <Avatar className="size-5">
                  <AvatarImage alt={selectedUser.name} />
                  <AvatarFallback className="text-xs">
                    {selectedUser.fallback}
                  </AvatarFallback>
                </Avatar>
                <span className="truncate">{selectedUser.name}</span>
              </>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>User Context</SelectLabel>
            {users.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                <Avatar className="size-5">
                  <AvatarImage alt={item.name} />
                  <AvatarFallback className="text-xs">
                    {item.fallback}
                  </AvatarFallback>
                </Avatar>
                <span className="truncate">{item.name}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
