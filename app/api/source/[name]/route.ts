// File: app/api/source/[name]/route.ts
import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"

async function findFileRecursively(dir: string, filename: string): Promise<string | null> {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const found = await findFileRecursively(fullPath, filename);
      if (found) return found;
    } else if (entry.isFile() && entry.name === filename) {
      return fullPath;
    }
  }
  return null;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params

  // Strict Validation & Sanitization
  if (!name) {
    return new NextResponse("Component name required", { status: 400 })
  }

  // Sanitize input to prevent path traversal
  const safeName = path.basename(name)
  if (safeName !== name) {
      return new NextResponse("Invalid request path", { status: 400 })
  }

  // Validate component name format (alphanumeric + hyphens only)
  // Allow .json extension if that's part of the route pattern (though usually stripped)
  const componentName = safeName.replace(".json", "")
  if (!/^[a-zA-Z0-9-]+$/.test(componentName)) {
       return new NextResponse("Invalid component name", { status: 400 })
  }

  const baseDir = path.join(process.cwd(), "components", "bilalUi");
  const targetFilename = `${componentName}.tsx`;

  try {
    const filePath = await findFileRecursively(baseDir, targetFilename);

    if (!filePath) {
       return new NextResponse("Component not found", { status: 404 })
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
