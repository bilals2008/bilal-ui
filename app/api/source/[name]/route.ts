// File: app/api/source/[name]/route.ts

import { readFile, readdir } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  
  const isRegistryRequest = name.endsWith('.json');
  const componentName = isRegistryRequest ? name.replace(/\.json$/, '') : name;
  
  try {
    const componentsDir = path.join(process.cwd(), 'components/bilalUi');
    
    // Custom recursive finder
    const findComponent = async (dir: string): Promise<string | null> => {
        const entries = await readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                const found = await findComponent(fullPath);
                if (found) return found;
            } else if (entry.isFile()) {
                const entryNameNormalized = entry.name.replace(/\.tsx$/, '').replace(/[-_]/g, '').toLowerCase();
                const targetNameNormalized = componentName.replace(/[-_]/g, '').toLowerCase();
                
                if (entryNameNormalized === targetNameNormalized) {
                    return fullPath;
                }
            }
        }
        return null;
    };

    const filePath = await findComponent(componentsDir);

    if (!filePath) {
      return new NextResponse('Component not found', { status: 404 });
    }

    const content = await readFile(filePath, 'utf-8');

    // If .json requested, return Registry JSON format
    if (isRegistryRequest) {
      const registryItem = {
        name: componentName.toLowerCase(),
        type: "registry:ui",
        dependencies: ["lucide-react"],
        files: [
          {
            path: `components/bilalUi/${path.relative(componentsDir, filePath).replace(/\\/g, "/")}`,
            content: content,
            type: "registry:ui",
            target: `components/bilalUi/${path.relative(componentsDir, filePath).replace(/\\/g, "/")}`
          }
        ]
      };
      return NextResponse.json(registryItem);
    }

    // Default: Return Raw Text for Preview
    return new NextResponse(content, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
