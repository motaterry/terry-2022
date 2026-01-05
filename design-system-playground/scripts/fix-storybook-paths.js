/**
 * Fix Storybook relative paths for deployment under /storybook/
 * 
 * This script rewrites all relative paths (./) in Storybook HTML files
 * to absolute paths (/storybook/) so they work correctly when served
 * from a subdirectory.
 */

const fs = require('fs');
const path = require('path');

const STORYBOOK_DIR = path.join(__dirname, '..', 'public', 'storybook');
const BASE_PATH = '/storybook/';

function fixHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace ./ with /storybook/
  content = content.replace(/(['"])\.\/([^'"]+)(['"])/g, `$1${BASE_PATH}$2$3`);
  
  // Replace href="./ and src="./ patterns
  content = content.replace(/(href|src)=(['"])\.\/([^'"]+)(['"])/g, `$1=$2${BASE_PATH}$3$4`);
  
  // Replace url('./) and url("./) in CSS
  content = content.replace(/url\(['"]?\.\/([^'")\s]+)['"]?\)/g, `url('${BASE_PATH}$1')`);
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Fixed: ${path.relative(process.cwd(), filePath)}`);
}

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.name.endsWith('.html')) {
      fixHtmlFile(fullPath);
    }
  }
}

// Check if directory exists
if (!fs.existsSync(STORYBOOK_DIR)) {
  console.error('Error: public/storybook directory not found');
  process.exit(1);
}

console.log('Fixing Storybook paths for /storybook/ deployment...');
processDirectory(STORYBOOK_DIR);
console.log('Done!');

