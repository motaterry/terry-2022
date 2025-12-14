#!/bin/bash

# Design System Package Setup Script
# This script helps set up the design system in a new project

echo "🚀 Setting up Design System Package..."

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from your project root."
    exit 1
fi

# Install the design system package
echo "📦 Installing design system package..."
npm install @your-username/design-system

# Install peer dependencies
echo "📦 Installing peer dependencies..."
npm install react react-dom
npm install tailwindcss @tailwindcss/postcss

# Check if globals.css exists
if [ -f "app/globals.css" ]; then
    CSS_FILE="app/globals.css"
elif [ -f "src/index.css" ]; then
    CSS_FILE="src/index.css"
elif [ -f "index.css" ]; then
    CSS_FILE="index.css"
else
    echo "⚠️  No CSS file found. Creating app/globals.css..."
    mkdir -p app
    CSS_FILE="app/globals.css"
fi

# Add imports to CSS file
if ! grep -q "@your-username/design-system/styles" "$CSS_FILE"; then
    echo "📝 Adding design system styles to $CSS_FILE..."
    {
        echo "@import \"@your-username/design-system/styles\";"
        echo "@import \"tailwindcss\";"
        echo ""
        cat "$CSS_FILE"
    } > "$CSS_FILE.tmp" && mv "$CSS_FILE.tmp" "$CSS_FILE"
else
    echo "✅ Design system styles already imported in $CSS_FILE"
fi

echo ""
echo "✅ Design system setup complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Configure Tailwind CSS in your project (if not already done)"
echo "   2. Import components: import { Button, Card } from '@your-username/design-system'"
echo "   3. Start building! 🎉"




