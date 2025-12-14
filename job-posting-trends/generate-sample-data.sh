#!/bin/bash
# Script to populate database with sample data for testing

set -e

echo "🎲 Generating sample job data..."

# Load environment variables
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
fi

# Default DB_URL if not set
export DB_URL=${DB_URL:-./db/jobs.db}
export USE_SAMPLE_DATA=true

cd scraper

# Activate virtual environment if it exists
if [ -d "venv" ]; then
    source venv/bin/activate
fi

# Run scraper with sample data flag
python3 scrape_jobs.py

if [ -d "venv" ]; then
    deactivate
fi

cd ..

echo ""
echo "✅ Sample data generated!"
echo ""
echo "You can now:"
echo "  1. Start the dev servers: ./dev.sh"
echo "  2. View the data at http://localhost:5173"







