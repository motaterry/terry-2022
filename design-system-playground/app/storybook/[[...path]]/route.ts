import { NextRequest, NextResponse } from 'next/server';
import { readFile, stat } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const STORYBOOK_DIR = path.join(process.cwd(), 'storybook-static');

// MIME types for different file extensions
const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.ico': 'image/x-icon',
};

function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || 'application/octet-stream';
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  try {
    // Check if Storybook has been built
    if (!existsSync(STORYBOOK_DIR)) {
      return new NextResponse(
        `Storybook not built. Please run "npm run build-storybook" first.`,
        {
          status: 503,
          headers: { 'Content-Type': 'text/plain' },
        }
      );
    }

    // Await params (Next.js 16+ requires this)
    const resolvedParams = await params;
    
    // Get the requested path
    const requestedPath = resolvedParams.path?.join('/') || '';
    
    // Security: prevent directory traversal
    if (requestedPath.includes('..')) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    // Determine the file path
    let filePath: string;
    if (!requestedPath || requestedPath === '') {
      // Root path - serve index.html
      filePath = path.join(STORYBOOK_DIR, 'index.html');
    } else {
      filePath = path.join(STORYBOOK_DIR, requestedPath);
    }

    // Check if file exists
    if (!existsSync(filePath)) {
      // If it's a route request (not a file), serve index.html for SPA routing
      const indexPath = path.join(STORYBOOK_DIR, 'index.html');
      if (existsSync(indexPath)) {
        const content = await readFile(indexPath);
        return new NextResponse(content, {
          headers: {
            'Content-Type': 'text/html',
          },
        });
      }
      return new NextResponse('Not Found', { status: 404 });
    }

    // Check if it's a directory
    const stats = await stat(filePath);
    if (stats.isDirectory()) {
      // If directory, try index.html inside it
      const indexPath = path.join(filePath, 'index.html');
      if (existsSync(indexPath)) {
        filePath = indexPath;
      } else {
        // Otherwise serve root index.html
        filePath = path.join(STORYBOOK_DIR, 'index.html');
      }
    }

    // Read and serve the file
    let content = await readFile(filePath);
    const mimeType = getMimeType(filePath);

    // If serving HTML, rewrite relative paths to absolute paths
    if (mimeType === 'text/html') {
      let htmlContent = content.toString('utf-8');
      
      // Rewrite relative paths (./ and ../) to absolute paths under /storybook
      htmlContent = htmlContent.replace(
        /(href|src)=["'](\.\/|\.\.\/)([^"']+)["']/g,
        (match, attr, prefix, path) => {
          // Remove leading ./ or ../
          const cleanPath = path.replace(/^\.\.?\//, '');
          return `${attr}="/storybook/${cleanPath}"`;
        }
      );
      
      // Also handle paths without ./ prefix that are relative (but not absolute or external)
      htmlContent = htmlContent.replace(
        /(href|src)=["'](?!https?:\/\/|\/|#|javascript:)([^"']+)["']/g,
        (match, attr, path) => {
          // Skip if already absolute, external, anchor, or javascript
          if (path.startsWith('/') || path.startsWith('http') || path.startsWith('#') || path.startsWith('javascript:')) {
            return match;
          }
          return `${attr}="/storybook/${path}"`;
        }
      );
      
      // Also rewrite script src attributes
      htmlContent = htmlContent.replace(
        /<script([^>]*)\ssrc=["'](\.\/|\.\.\/)([^"']+)["']/g,
        (match, attrs, prefix, path) => {
          const cleanPath = path.replace(/^\.\.?\//, '');
          return `<script${attrs} src="/storybook/${cleanPath}"`;
        }
      );
      
      content = Buffer.from(htmlContent, 'utf-8');
    }

    return new NextResponse(content, {
      headers: {
        'Content-Type': mimeType,
        'Cache-Control': mimeType === 'text/html' 
          ? 'public, max-age=0, must-revalidate' 
          : 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving Storybook file:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

