#!/bin/bash

# Secure Vercel Configuration Script
# This script will update the Root Directory setting via Vercel API

set -e

PROJECT_NAME="design-system-playground"
TEAM_ID="terrymota0-gmailcoms-projects"
ROOT_DIRECTORY="design-system-playground"

echo "🔧 Vercel Project Configuration"
echo "================================"
echo ""
echo "Project: $PROJECT_NAME"
echo "Team: $TEAM_ID"
echo "Root Directory: $ROOT_DIRECTORY"
echo ""

# Check if token is provided as argument or environment variable
if [ -n "$1" ]; then
    VERCEL_TOKEN="$1"
elif [ -n "$VERCEL_TOKEN" ]; then
    echo "Using VERCEL_TOKEN from environment"
else
    echo "❌ Error: Vercel token required"
    echo ""
    echo "Usage:"
    echo "  $0 [VERCEL_TOKEN]"
    echo ""
    echo "Or set environment variable:"
    echo "  export VERCEL_TOKEN='your-token'"
    echo "  $0"
    echo ""
    exit 1
fi

echo "Updating Root Directory..."
echo ""

# Update project settings via Vercel API
RESPONSE=$(curl -s -w "\n%{http_code}" -X PATCH \
  "https://api.vercel.com/v9/projects/$PROJECT_NAME?teamId=$TEAM_ID" \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"rootDirectory\": \"$ROOT_DIRECTORY\"}")

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

if [ "$HTTP_CODE" -eq 200 ] || [ "$HTTP_CODE" -eq 201 ]; then
    echo "✅ Successfully updated Root Directory to: $ROOT_DIRECTORY"
    echo ""
    echo "📋 Next Steps:"
    echo "1. Go to: https://vercel.com/$TEAM_ID/$PROJECT_NAME/deployments"
    echo "2. Click 'Redeploy' on the latest deployment"
    echo "   OR push a new commit to trigger auto-deploy"
    echo ""
    echo "Your Storybook will be available at:"
    echo "  https://$PROJECT_NAME-[hash].vercel.app/storybook"
    echo ""
else
    echo "❌ Error updating settings (HTTP $HTTP_CODE)"
    echo ""
    echo "Response:"
    echo "$BODY" | head -20
    echo ""
    echo "Common issues:"
    echo "- Token expired or invalid"
    echo "- Token doesn't have project access"
    echo "- Project name or team ID incorrect"
    echo ""
    exit 1
fi

