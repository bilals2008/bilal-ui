import { readFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';
import { sourceRegistry } from '@/lib/component-source';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  const filePath = sourceRegistry[name];

  if (!filePath) {
    return new NextResponse('Component not found', { status: 404 });
  }

  try {
    const fullPath = path.join(process.cwd(), filePath);
    const source = await readFile(fullPath, 'utf-8');
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
