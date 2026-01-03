#!/bin/bash

# Script to update Vercel Root Directory via API
# Usage: ./update-vercel-root.sh [VERCEL_TOKEN]

set -e

PROJECT_NAME="design-system-playground"
TEAM_ID="terrymota0-gmailcoms-projects"
ROOT_DIRECTORY="design-system-playground"

# Check if token is provided
if [ -z "$1" ]; then
    echo "❌ Error: Vercel token required"
    echo ""
    echo "Usage: ./update-vercel-root.sh [VERCEL_TOKEN]"
    echo ""
    echo "To get your token:"
    echo "1. Go to: https://vercel.com/account/tokens"
    echo "2. Create a new token"
    echo "3. Run: ./update-vercel-root.sh YOUR_TOKEN"
    echo ""
    echo "Or set it as environment variable:"
    echo "export VERCEL_TOKEN='your-token'"
    echo "./update-vercel-root.sh"
    exit 1
fi

VERCEL_TOKEN="${1:-$VERCEL_TOKEN}"

if [ -z "$VERCEL_TOKEN" ]; then
    echo "❌ Error: VERCEL_TOKEN not set"
    exit 1
fi

echo "🔧 Updating Vercel project settings..."
echo "Project: $PROJECT_NAME"
echo "Team: $TEAM_ID"
echo "Root Directory: $ROOT_DIRECTORY"
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
    echo "Next steps:"
    echo "1. Go to: https://vercel.com/$TEAM_ID/$PROJECT_NAME/deployments"
    echo "2. Trigger a new deployment or wait for the next push"
    echo ""
else
    echo "❌ Error updating settings (HTTP $HTTP_CODE)"
    echo "Response: $BODY"
    echo ""
    echo "Make sure:"
    echo "- Your token has the correct permissions"
    echo "- The project name is correct: $PROJECT_NAME"
    echo "- The team ID is correct: $TEAM_ID"
    exit 1
fi

