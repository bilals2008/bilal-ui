import { Input } from "@/components/ui/input";

export function BasicInput() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Input type="email" placeholder="Email" />
      <Input disabled type="email" placeholder="Email (disabled)" />
    </div>
  );
}
