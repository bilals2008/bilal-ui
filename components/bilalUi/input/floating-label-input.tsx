import { Input } from "@/components/ui/input";

export function FloatingLabelInput() {
  return (
    <div className="w-full max-w-sm">
      <div className="relative">
        <Input
          id="floating-label-input"
          placeholder=" "
          className="peer pt-5"
        />
        <label
          htmlFor="floating-label-input"
          className="pointer-events-none absolute left-3 top-2 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
        >
          Company name
        </label>
      </div>
    </div>
  );
}
