#!/bin/bash
# Script to test the real scraper

set -e

echo "🔍 Testing real scraper (RSS feeds)..."

# Default DB_URL if not set (relative to project root)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
export DB_URL=${DB_URL:-$PROJECT_ROOT/db/jobs.db}
export USE_SAMPLE_DATA=false

cd scraper

# Activate virtual environment if it exists
if [ -d "venv" ]; then
    source venv/bin/activate
fi

# Install feedparser if needed
pip install -q feedparser 2>/dev/null || true

# Test the scraper first (dry run)
echo ""
echo "Testing scraper (dry run)..."
python3 -c "
from real_scraper import scrape_jobs
import logging
logging.basicConfig(level=logging.INFO)
jobs = scrape_jobs()
print(f'\n✅ Scraper test successful! Found {len(jobs)} jobs')
if jobs:
    print('\nSample jobs:')
    for job in jobs[:3]:
        print(f'  - {job[\"title\"]} at {job[\"company\"]}')
"

echo ""
echo "Running full scraper and saving to database..."
python3 scrape_jobs.py

if [ -d "venv" ]; then
    deactivate
fi

cd ..

echo ""
echo "✅ Real scraper completed!"
echo ""
echo "Check the database:"
echo "  sqlite3 db/jobs.db \"SELECT COUNT(*) FROM jobs;\""

