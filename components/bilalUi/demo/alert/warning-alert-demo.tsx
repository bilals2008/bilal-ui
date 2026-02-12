// File: components/bilalUi/demo/alert/warning-alert-demo.tsx
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/bilalUi/alert/alert-variants";
import { AlertTriangle } from "lucide-react";

export default function WarningAlertDemo() {
  return (
    <div className="w-full max-w-xl">
      <Alert variant="warning">
        <AlertTriangle className="size-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Be careful! This action might have irreversible consequences.
        </AlertDescription>
      </Alert>
    </div>
  );
}
