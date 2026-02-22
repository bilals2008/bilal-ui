// File: app/registry/[name]/route.ts
import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"

const COMPONENTS_DIR_NAME = "bilalUi"
const EXCLUDED_FROM_INDEX = new Set([
  "component-preview.tsx",
  "open-in-v0-button.tsx",
  "mdx-action-bar.tsx",
  "toc-poster.tsx",
  "TestDemo.tsx",
])

// Helper to extract component data from a file
async function getComponentData(filePath: string, componentsDir: string) {
  const content = await fs.readFile(filePath, "utf-8")
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
async function getAllComponentFiles(dir: string, fileList: string[] = []) {
  try {
      const entries = await fs.readdir(dir, { withFileTypes: true })
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)
        if (entry.isDirectory()) {
          if (entry.name === "demo") continue
          await getAllComponentFiles(fullPath, fileList)
        } else if (entry.isFile() && entry.name.endsWith(".tsx")) {
          if (entry.name.endsWith("-demo.tsx")) continue
          if (EXCLUDED_FROM_INDEX.has(entry.name)) continue
          fileList.push(fullPath)
        }
      }
  } catch (err) {
      console.error("Error reading directory:", err)
  }
  return fileList
}

async function findComponentFiles(
  dir: string,
  filename: string,
  matches: string[] = [],
): Promise<string[]> {
  try {
      const entries = await fs.readdir(dir, { withFileTypes: true })
      
      for (const entry of entries) {
        if (entry.isDirectory()) {
          await findComponentFiles(path.join(dir, entry.name), filename, matches)
        } else if (entry.isFile() && entry.name === filename) {
          matches.push(path.join(dir, entry.name))
        }
      }
  } catch (err) {
      console.error("Error finding component file:", err)
  }
  return matches
}

function selectBestMatch(matches: string[], preferDemo: boolean): string | null {
  if (!matches.length) return null

  const sorted = [...matches].sort((a, b) =>
    a.length === b.length ? a.localeCompare(b) : a.length - b.length,
  )
  const demoSegment = `${path.sep}demo${path.sep}`
  const demoMatches = sorted.filter((filePath) => filePath.includes(demoSegment))
  const nonDemoMatches = sorted.filter((filePath) => !filePath.includes(demoSegment))

  if (preferDemo) return demoMatches[0] || nonDemoMatches[0] || sorted[0]
  return nonDemoMatches[0] || demoMatches[0] || sorted[0]
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params
  
  // Basic validation & Sanitization
  if (!name || !name.endsWith(".json")) {
    return new NextResponse("Invalid request", { status: 400 })
  }

  // Sanitize input to prevent path traversal
  const safeName = path.basename(name)
  if (safeName !== name) {
      return new NextResponse("Invalid request path", { status: 400 })
  }

  const componentsDir = path.join(process.cwd(), "components", COMPONENTS_DIR_NAME)
  const componentName = safeName.replace(".json", "")

  // Validate component name format (alphanumeric + hyphens only)
  if (!/^[a-zA-Z0-9-]+$/.test(componentName) && componentName !== "index" && componentName !== "registry") {
       return new NextResponse("Invalid component name", { status: 400 })
  }

  // Handle Index / Registry request
  if (componentName === "index" || componentName === "registry") {
    try {
      const allFiles = await getAllComponentFiles(componentsDir)
      const registry = await Promise.all(allFiles.map(filePath => getComponentData(filePath, componentsDir)))
      return NextResponse.json(registry)
    } catch (error) {
      console.error("Error generating registry index:", error)
      return new NextResponse("Error generating registry", { status: 500 })
    }
  }

  // Handle Individual Component request
  const matches = await findComponentFiles(componentsDir, `${componentName}.tsx`)
  const filePath = selectBestMatch(matches, componentName.endsWith("-demo"))

  if (!filePath) {
    return new NextResponse("Component not found", { status: 404 })
  }

  try {
    const data = await getComponentData(filePath, componentsDir)
    return NextResponse.json(data)
  } catch (error) {
    console.error(`Error generating data for ${componentName}:`, error)
    return new NextResponse("Error processing component", { status: 500 })
  }
}
