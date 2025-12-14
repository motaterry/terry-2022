#!/bin/bash
# Setup script for job-posting-trends project
# Automates installation and initialization

set -e

echo "🚀 Setting up Job Posting Trends project..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required but not installed."
    exit 1
fi

echo -e "${BLUE}📦 Setting up Python virtual environment...${NC}"
cd scraper
# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    python3 -m venv venv
fi

# Activate virtual environment and install dependencies
source venv/bin/activate
pip install -r requirements.txt
deactivate
cd ..

echo -e "${BLUE}📦 Installing API dependencies...${NC}"
cd app/api
npm install
cd ../..

echo -e "${BLUE}📦 Installing Web dependencies...${NC}"
cd app/web
npm install
cd ../..

echo -e "${BLUE}🗄️  Initializing database...${NC}"
mkdir -p db
cd scraper
source venv/bin/activate
python3 -c "from storage import initialize_database; initialize_database('../db/jobs.db')"
deactivate
cd ..

echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo "Next steps:"
echo "  1. Copy .env.example to .env and configure:"
echo "     cp .env.example .env"
echo ""
echo "  2. Start the API server:"
echo "     cd app/api && npm run dev"
echo ""
echo "  3. Start the frontend (in another terminal):"
echo "     cd app/web && npm run dev"
echo ""
echo "  4. Run the scraper:"
echo "     cd scraper && python3 scrape_jobs.py"

