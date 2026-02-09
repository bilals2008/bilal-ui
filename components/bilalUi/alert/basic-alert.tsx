// File: components/bilalUi/alert/basic-alert.tsx
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";

export function BasicAlert() {
  return (
    <div className="grid w-full max-w-xl gap-4">
      <Alert>
        <Info />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          Your profile is 80% complete. Add a cover photo to finish setup.
        </AlertDescription>
      </Alert>

      <Alert>
        <CheckCircle2 />
        <AlertTitle>All set</AlertTitle>
        <AlertDescription>
          Your settings were saved successfully.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTriangle />
        <AlertTitle>Action required</AlertTitle>
        <AlertDescription>
          Your session expired. Please sign in again to continue.
        </AlertDescription>
      </Alert>
    </div>
  );
}
