// File: app/api/source/[name]/route.ts
import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"

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

  const filePath = path.join(
    process.cwd(),
    "components",
    "bilalUi",
    `${componentName}.tsx`
  )

  try {
    // Verify file exists and is within the expected directory
    await fs.access(filePath)
    
    // Double check that the resolved path is still within the intended directory
    const resolvedPath = await fs.realpath(filePath)
    const intendedDir = path.join(process.cwd(), "components", "bilalUi")
    
    if (!resolvedPath.startsWith(intendedDir)) {
        return new NextResponse("Access denied", { status: 403 })
    }

    const fileContent = await fs.readFile(filePath, "utf-8")
    return new NextResponse(fileContent, {
      headers: { "Content-Type": "text/plain" },
    })
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    return new NextResponse("Component not found", { status: 404 })
  }
}
