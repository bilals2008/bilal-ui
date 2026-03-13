import { FileText, FolderOpen, Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbFilePath() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="font-mono text-xs">
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="flex items-center gap-1">
            <FolderOpen className="h-3.5 w-3.5 text-amber-500" />
            src
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="flex items-center gap-1">
            <FolderOpen className="h-3.5 w-3.5 text-amber-500" />
            components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="flex items-center gap-1">
            <FolderOpen className="h-3.5 w-3.5 text-amber-500" />
            ui
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="flex items-center gap-1">
            <FileText className="h-3.5 w-3.5 text-sky-500" />
            button.tsx
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
