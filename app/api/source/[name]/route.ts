// File: app/api/source/[name]/route.ts
import { readFile, readdir } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  
  // Normalize name to capitalized file name convention if needed, or search loosely
  // Assuming files are named ExactlyLikeThis.tsx or exactly-like-this.tsx
  // Let's search for exact match of name.tsx first, or try capitalization strategies if smartness is required.
  // For now, let's assume the user passes the exact filename without extension, or a case-insensitive search.
  
  
  try {
    const componentsDir = path.join(process.cwd(), 'components/bilalUi');
    
    // Custom recursive finder that matches case-insensitively and ignores hyphens
    const findComponent = async (dir: string): Promise<string | null> => {
        const entries = await readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                const found = await findComponent(fullPath);
                if (found) return found;
            } else if (entry.isFile()) {
                const entryNameNormalized = entry.name.replace(/\.tsx$/, '').replace(/[-_]/g, '').toLowerCase();
                const targetNameNormalized = name.replace(/[-_]/g, '').toLowerCase();
                
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

    const source = await readFile(filePath, 'utf-8');
    return new NextResponse(source, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
  } catch (error) {
    console.error('Error reading component source:', error);
    return new NextResponse('Error reading source', { status: 500 });
  }
}
