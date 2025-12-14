#!/bin/bash
# Run the scraper

set -e

# Load environment variables
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
fi

# Default DB_URL if not set
export DB_URL=${DB_URL:-./db/jobs.db}

echo "🔍 Running job scraper..."
echo "   Database: $DB_URL"
echo ""

cd scraper
# Activate virtual environment if it exists
if [ -d "venv" ]; then
    source venv/bin/activate
fi
python3 scrape_jobs.py
if [ -d "venv" ]; then
    deactivate
fi
cd ..

echo ""
echo "✅ Scraper completed!"

