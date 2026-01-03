#!/bin/bash

# Vercel Configuration Diagnostic Script
# This script helps diagnose Vercel deployment issues

echo "🔍 Vercel Configuration Diagnostic"
echo "===================================="
echo ""

# Check if .vercel directory exists
if [ -d ".vercel" ]; then
    echo "✅ .vercel directory found"
    if [ -f ".vercel/project.json" ]; then
        echo "✅ Project linked to Vercel"
        echo ""
        echo "Project Configuration:"
        cat .vercel/project.json | python3 -m json.tool 2>/dev/null || cat .vercel/project.json
    else
        echo "❌ .vercel/project.json not found"
    fi
else
    echo "❌ .vercel directory not found"
    echo "   Run: npx vercel link"
fi

echo ""
echo "📦 Package Configuration"
echo "========================"

# Check package.json exists
if [ -f "package.json" ]; then
    echo "✅ package.json found"
    
    # Check build script
    BUILD_CMD=$(node -e "console.log(require('./package.json').scripts.build || 'NOT FOUND')" 2>/dev/null)
    echo "   Build command: $BUILD_CMD"
    
    # Check if storybook build script exists
    STORYBOOK_BUILD=$(node -e "console.log(require('./package.json').scripts['build-storybook'] || 'NOT FOUND')" 2>/dev/null)
    if [ "$STORYBOOK_BUILD" != "NOT FOUND" ]; then
        echo "✅ build-storybook script found: $STORYBOOK_BUILD"
    else
        echo "❌ build-storybook script not found"
    fi
else
    echo "❌ package.json not found"
fi

echo ""
echo "⚙️  Vercel Configuration"
echo "========================"

# Check vercel.json
if [ -f "vercel.json" ]; then
    echo "✅ vercel.json found"
    echo ""
    echo "Configuration:"
    cat vercel.json | python3 -m json.tool 2>/dev/null || cat vercel.json
else
    echo "⚠️  vercel.json not found (Vercel will use defaults)"
fi

echo ""
echo "📁 Directory Structure"
echo "======================="

# Check if storybook-static exists
if [ -d "storybook-static" ]; then
    echo "✅ storybook-static directory exists"
    FILE_COUNT=$(find storybook-static -type f | wc -l | tr -d ' ')
    echo "   Files: $FILE_COUNT"
else
    echo "⚠️  storybook-static directory not found"
    echo "   Run: npm run build-storybook"
fi

# Check if .next exists
if [ -d ".next" ]; then
    echo "✅ .next directory exists (Next.js build)"
else
    echo "⚠️  .next directory not found"
    echo "   Run: npm run build"
fi

# Check .storybook directory
if [ -d ".storybook" ]; then
    echo "✅ .storybook directory exists"
    if [ -f ".storybook/main.ts" ]; then
        echo "✅ .storybook/main.ts found"
    else
        echo "❌ .storybook/main.ts not found"
    fi
else
    echo "❌ .storybook directory not found"
fi

echo ""
echo "🧪 Test Build"
echo "=============="
echo ""
echo "To test the build locally, run:"
echo "  npm run build"
echo ""
echo "This will:"
echo "  1. Build Storybook (npm run build-storybook)"
echo "  2. Build Next.js (next build)"
echo ""

# Check git branches
echo "🌿 Git Branches"
echo "==============="
CURRENT_BRANCH=$(git branch --show-current 2>/dev/null)
if [ -n "$CURRENT_BRANCH" ]; then
    echo "Current branch: $CURRENT_BRANCH"
    echo ""
    echo "All branches:"
    git branch -a 2>/dev/null | head -10
else
    echo "⚠️  Not in a git repository"
fi

echo ""
echo "📋 Next Steps"
echo "============="
echo ""
echo "1. Verify Root Directory in Vercel Dashboard:"
echo "   https://vercel.com/terrymota0-gmailcoms-projects/design-system-playground/settings/general"
echo "   Should be: design-system-playground"
echo ""
echo "2. Enable Preview Deployments:"
echo "   https://vercel.com/terrymota0-gmailcoms-projects/design-system-playground/settings/git"
echo "   Enable 'Automatic Preview Deployments'"
echo ""
echo "3. Test build locally:"
echo "   npm run build"
echo ""
echo "4. Push a commit to trigger deployment:"
echo "   git commit --allow-empty -m 'chore: trigger deployment'"
echo "   git push"

