// File: app/registry/[name]/route.ts
import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params
  
  // Basic validation
  if (!name || !name.endsWith(".json")) {
    return new NextResponse("Invalid request", { status: 400 })
  }

  const componentName = name.replace(".json", "")
  // Handle registry.json specifically if needed, but for now focus on components
  if (componentName === "registry") {
     // TODO: Implement full registry index if needed
     return new NextResponse("Registry index not implemented dynamically yet", { status: 501 })
  }

  const componentsDir = path.join(process.cwd(), "components", "bilalUi")
  
  // Recursive function to find file
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

  const filePath = findComponentFile(componentsDir, `${componentName}.tsx`)

  if (!filePath) {
    return new NextResponse("Component not found", { status: 404 })
  }

  const content = fs.readFileSync(filePath, "utf-8")
  
  // Extract dependencies
  const dependencies = new Set<string>()
  const registryDependencies = new Set<string>()
  
  // Regex for imports
  const importRegex = /import\s+(?:[\w\s{},*]+)\s+from\s+['"]([^'"]+)['"]/g
  let match
  
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1]
    
    if (importPath.startsWith("@/components/ui/") || importPath.startsWith("@/components/bilalUi/")) {
        const depName = path.basename(importPath, path.extname(importPath))
        registryDependencies.add(depName)
    } else if (!importPath.startsWith(".") && !importPath.startsWith("@/")) {
        dependencies.add(importPath)
    }
  }

  const relativePath = `components/bilal-ui/${path.relative(componentsDir, filePath).replace(/\\/g, "/")}`

  const data = {
    name: componentName,
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

  return NextResponse.json(data)
}
