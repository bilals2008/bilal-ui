// File: app/registry/[name]/route.ts
import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const COMPONENTS_DIR_NAME = "bilalUi"

// Helper to extract component data from a file
function getComponentData(filePath: string, componentsDir: string) {
  const content = fs.readFileSync(filePath, "utf-8")
  const filename = path.basename(filePath, path.extname(filePath))
  
  // Extract dependencies
  const dependencies = new Set<string>()
  const registryDependencies = new Set<string>()
  
  // Regex for imports
  const importRegex = /import\s+(?:[\w\s{},*]+)\s+from\s+['"]([^'"]+)['"]/g
  let match
  
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1]
    
    if (importPath.startsWith("@/components/ui/") || importPath.startsWith(`@/components/${COMPONENTS_DIR_NAME}/`)) {
        const depName = path.basename(importPath, path.extname(importPath))
        registryDependencies.add(depName)
    } else if (!importPath.startsWith(".") && !importPath.startsWith("@/")) {
        dependencies.add(importPath)
    }
  }

  const relativePath = `components/${COMPONENTS_DIR_NAME}/${path.relative(componentsDir, filePath).replace(/\\/g, "/")}`

  return {
    name: filename,
    type: "registry:component",
    dependencies: dependencies.size ? Array.from(dependencies) : undefined,
    registryDependencies: registryDependencies.size ? Array.from(registryDependencies) : undefined,
    files: [
      {
        path: relativePath,
        content: content,
        type: "registry:component"
      }
    ]
  }
}

// Recursively find all component files
function getAllComponentFiles(dir: string, fileList: string[] = []) {
  if (!fs.existsSync(dir)) return fileList
  
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      getAllComponentFiles(fullPath, fileList)
    } else if (entry.isFile() && entry.name.endsWith(".tsx")) {
      // Filter out likely helper files (start with lowercase or special names)
      // We assume installable components are PascalCase
      if (/^[A-Z]/.test(entry.name)) {
         fileList.push(fullPath)
      }
    }
  }
  return fileList
}

// Recursive function to find a specific file by name
function findComponentFile(dir: string, filename: string): string | null {
  if (!fs.existsSync(dir)) return null
  
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const found = findComponentFile(path.join(dir, entry.name), filename)
      if (found) return found
    } else if (entry.isFile() && entry.name === filename) {
      return path.join(dir, entry.name)
    }
  }
  return null
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params
  
  // Basic validation
  if (!name || !name.endsWith(".json")) {
    return new NextResponse("Invalid request", { status: 400 })
  }

  const componentsDir = path.join(process.cwd(), "components", COMPONENTS_DIR_NAME)
  const componentName = name.replace(".json", "")

  // Handle Index / Registry request
  if (componentName === "index" || componentName === "registry") {
    try {
      const allFiles = getAllComponentFiles(componentsDir)
      const registry = allFiles.map(filePath => getComponentData(filePath, componentsDir))
      return NextResponse.json(registry)
    } catch (error) {
      console.error("Error generating registry index:", error)
      return new NextResponse("Error generating registry", { status: 500 })
    }
  }

  // Handle Individual Component request
  const filePath = findComponentFile(componentsDir, `${componentName}.tsx`)

  if (!filePath) {
    return new NextResponse("Component not found", { status: 404 })
  }

  try {
    const data = getComponentData(filePath, componentsDir)
    return NextResponse.json(data)
  } catch (error) {
    console.error(`Error generating data for ${componentName}:`, error)
    return new NextResponse("Error processing component", { status: 500 })
  }
}
