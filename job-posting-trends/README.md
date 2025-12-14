# Job Posting Trends

A production-ready data pipeline for visualizing job posting trends over time. This project includes a Python scraper, Express API, and React frontend.

## Architecture

```
job-posting-trends/
├── scraper/              # Python scraper module
│   ├── scrape_jobs.py    # Main scraper logic
│   ├── validators.py     # Data validation
│   ├── storage.py        # SQLite operations
│   └── models.sql        # Schema definition
├── app/
│   ├── api/              # Express API server
│   │   ├── server.ts     # Express app setup
│   │   └── routes/
│   │       └── jobs.ts   # Job endpoints
│   └── web/              # React + Vite frontend
│       └── src/
├── db/
│   └── migrations/       # SQL migration files
└── .github/
    └── workflows/
        └── scrape.yml    # Hourly scraper automation
```

## Features

- **Idempotent Scraper**: Uses deterministic SHA1 IDs to prevent duplicates
- **SQLite Database**: Easy to backup and swap to Postgres later
- **REST API**: Filtering and aggregation endpoints
- **Modern Frontend**: React + Vite with Recharts visualization
- **Automated Scraping**: GitHub Actions runs scraper hourly

## Quick Start (Automated)

### Option 1: Automated Setup Script (Recommended)

```bash
# Run the setup script - it does everything for you!
./setup.sh

# Or if you prefer npm:
npm run setup
```

This will:
- ✅ Install all Python dependencies
- ✅ Install all Node.js dependencies (API + Web)
- ✅ Initialize the database
- ✅ Set up everything automatically

### Option 2: Manual Setup

<details>
<summary>Click to expand manual setup instructions</summary>

#### Prerequisites

- Python 3.11+
- Node.js 18+
- npm or yarn

#### Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd job-posting-trends
```

2. Set up Python scraper:
```bash
cd scraper
pip install -r requirements.txt
```

3. Set up API server:
```bash
cd app/api
npm install
```

4. Set up frontend:
```bash
cd app/web
npm install
```

5. Configure environment:
```bash
cp .env.example .env
# Edit .env with your settings
```

6. Initialize database:
```bash
cd scraper
python -c "from storage import initialize_database; initialize_database('./db/jobs.db')"
```

</details>

## Usage

### 🚀 Quick Start (All Servers)

Start both API and Web servers with one command:

```bash
./dev.sh

# Or using npm:
npm run dev
```

This starts:
- API server on http://localhost:3000
- Web frontend on http://localhost:5173

Press `Ctrl+C` to stop both servers.

### Individual Commands

#### Running the Scraper

```bash
./run-scraper.sh

# Or using npm:
npm run scrape
```

The scraper will:
- Read `DB_URL` from environment (defaults to `./db/jobs.db`)
- Initialize database schema if needed
- Scrape jobs and upsert into database

#### Running the API Server Only

```bash
cd app/api
npm run dev  # Development mode
# or
npm run build && npm start  # Production mode
```

API endpoints:
- `GET /api/jobs` - Filter jobs (query params: title, region, startDate, endDate, limit, offset)
- `GET /api/jobs/aggregate` - Aggregate by time buckets (query params: title, region, startDate, endDate, bucket)
- `GET /health` - Health check

#### Running the Frontend Only

```bash
cd app/web
npm run dev
```

Open http://localhost:5173 in your browser.

### 🐳 Docker (Optional)

Run everything with Docker:

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### GitHub Actions

The scraper runs automatically every hour via GitHub Actions. To set up:

1. Add `DB_URL` secret in GitHub repository settings
2. The workflow will run on schedule and can be triggered manually

## Database Schema

The `jobs` table structure:
- `id` (TEXT PRIMARY KEY): SHA1 hash of source|title|company|posted_at
- `source` (TEXT): Job source/platform
- `title` (TEXT): Job title
- `company` (TEXT): Company name
- `region` (TEXT): Geographic region (nullable)
- `posted_at` (TEXT): Posted date (YYYY-MM-DD)
- `created_at` (TEXT): Record creation timestamp
- `updated_at` (TEXT): Record update timestamp

Indexes are created on: title, region, posted_at, source, and composite (title, region, posted_at).

## Development

### Adding a New Scraper Source

1. Implement scraping logic in `scraper/scrape_jobs.py`
2. Return list of job dictionaries with required fields
3. The storage module handles validation and upsert automatically

### API Development

The API uses TypeScript and Express. Routes are defined in `app/api/routes/jobs.ts`.

### Frontend Development

The frontend uses React, TypeScript, Tailwind CSS, and Recharts. Components are in `app/web/src/components/`.

## Migration from CSV

To migrate existing CSV data:

```python
import csv
from storage import upsert_job, initialize_database
from validators import validate_job_data

initialize_database('./db/jobs.db')

with open('job_posts.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        try:
            validated = validate_job_data(row)
            upsert_job(validated, './db/jobs.db')
        except Exception as e:
            print(f"Error processing row: {e}")
```

## Deployment

### API Deployment

The API can be deployed to Railway, Render, or similar platforms:
1. Set `DB_URL` environment variable
2. Set `NODE_ENV=production`
3. Build and start the server

### Frontend Deployment

The frontend builds to static files:
1. Run `npm run build` in `app/web`
2. Serve `dist/` directory
3. Or configure API to serve static files in production

### Database

SQLite files can be stored:
- Locally for development
- In cloud storage (S3, etc.) for production
- Or migrate to Postgres for better scalability

## License

MIT

