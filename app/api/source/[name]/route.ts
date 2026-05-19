import { NextResponse } from "next/server"
import fs from "fs/promises"
import fsSync from "fs"
import path from "path"
import { PRO_COMPONENTS } from "@/config/pro"

async function findFilesRecursively(
  dir: string,
  filename: string,
  matches: string[] = [],
): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await findFilesRecursively(fullPath, filename, matches);
    } else if (entry.isFile() && entry.name === filename) {
      matches.push(fullPath);
    }
  }
  return matches;
}

function selectBestMatch(matches: string[], preferDemo: boolean): string | null {
  if (!matches.length) return null;

  const sorted = [...matches].sort((a, b) =>
    a.length === b.length ? a.localeCompare(b) : a.length - b.length,
  );

  const demoSegment = `${path.sep}demo${path.sep}`;
  const demoMatches = sorted.filter((filePath) => filePath.includes(demoSegment));
  const nonDemoMatches = sorted.filter((filePath) => !filePath.includes(demoSegment));

  if (preferDemo) return demoMatches[0] || nonDemoMatches[0] || sorted[0];
  return nonDemoMatches[0] || demoMatches[0] || sorted[0];
}

function getComponentGroupFromPath(filePath: string): string | null {
  const parts = filePath.replace(/\\/g, "/").split("/");
  const bilalUiIndex = parts.indexOf("bilalUi");
  if (bilalUiIndex === -1 || bilalUiIndex + 1 >= parts.length) return null;
  const group = parts[bilalUiIndex + 1];
  if (group === "demo" || group === "pricing" || group === "pro") return null;
  return group;
}

function isProFile(filePath: string): boolean {
  const group = getComponentGroupFromPath(filePath);
  if (!group) return false;

  const config = PRO_COMPONENTS[group];
  if (!config) return false;

  const filename = path.basename(filePath, path.extname(filePath));
  const groupDir = path.dirname(filePath);
  const groupDirname = path.basename(groupDir);

  if (groupDirname !== group) return false;

  try {
    const allFiles = fsSync.readdirSync(groupDir)
      .filter(f => f.endsWith(".tsx"))
      .sort();
    const index = allFiles.indexOf(`${filename}.tsx`);
    if (index === -1) return false;
    return index >= config.freeCount;
  } catch {
    return false;
  }
}

const PRO_PLACEHOLDER = `"use client";

import { Crown, LockKeyhole, Sparkles } from "lucide-react";
import Link from "next/link";

interface ProPlaceholderProps {
  children?: React.ReactNode;
}

export function ProPlaceholder({ children }: ProPlaceholderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-violet-200 bg-gradient-to-b from-violet-50/80 to-white px-6 py-12 text-center dark:border-violet-800/50 dark:from-violet-950/20 dark:to-zinc-950">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/25">
        <LockKeyhole className="h-6 w-6 text-white" />
      </div>
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-white px-3 py-1 text-xs font-semibold text-violet-600 dark:border-violet-800 dark:bg-zinc-900 dark:text-violet-400">
          <Crown className="h-3 w-3" />
          Pro Component
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Purchase the Lifetime plan ($15) to unlock this component.
        </p>
      </div>
      <Link
        href="/pricing"
        className="inline-flex h-9 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 text-sm font-bold text-white shadow-lg shadow-violet-500/25 transition-all hover:from-violet-500 hover:to-fuchsia-500 active:scale-[0.98]"
      >
        <Sparkles className="h-3.5 w-3.5" />
        Unlock with Pro
      </Link>
    </div>
  );
}
`;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params

  if (!name) {
    return new NextResponse("Component name required", { status: 400 })
  }

  const safeName = path.basename(name)
  if (safeName !== name) {
      return new NextResponse("Invalid request path", { status: 400 })
  }

  const componentName = safeName.replace(".json", "")
  if (!/^[a-zA-Z0-9-]+$/.test(componentName)) {
       return new NextResponse("Invalid component name", { status: 400 })
  }

  const baseDir = path.join(process.cwd(), "components", "bilalUi");
  const targetFilename = `${componentName}.tsx`;
  const preferDemo = componentName.endsWith("-demo");

  try {
    const matches = await findFilesRecursively(baseDir, targetFilename);
    const filePath = selectBestMatch(matches, preferDemo);

    if (!filePath) {
       return new NextResponse("Component not found", { status: 404 })
    }

    if (isProFile(filePath)) {
      return new NextResponse(PRO_PLACEHOLDER, {
        headers: { "Content-Type": "text/plain" },
      });
    }

    const fileContent = await fs.readFile(filePath, "utf-8")
    return new NextResponse(fileContent, {
      headers: { "Content-Type": "text/plain" },
    })
  } catch (error) {
    console.error(`Error reading file for ${componentName}:`, error)
    return new NextResponse("Component not found", { status: 404 })
  }
}
