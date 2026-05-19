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

const PRO_PLACEHOLDER = `// This is a Pro component.
// Purchase the Lifetime plan ($15) to unlock the full source code.
// Go to /pricing for more details.

export function ProComponent() {
  return null;
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
