// File: components/bilalUi/demo/alert/success-alert-demo.tsx
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/bilalUi/alert/alert-variants";
import { CheckCircle2 } from "lucide-react";

export default function SuccessAlertDemo() {
  return (
    <Alert variant="success">
      <CheckCircle2 className="size-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your operation was completed successfully. Great job!
      </AlertDescription>
    </Alert>
  );
}
