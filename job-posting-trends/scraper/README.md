# Scraper Module

Python scraper for job postings with idempotent storage.

## Files

- `scrape_jobs.py`: Main scraper entry point
- `storage.py`: SQLite database operations
- `validators.py`: Data validation and normalization
- `models.sql`: Database schema definition

## Usage

```bash
python scrape_jobs.py
```

Set `DB_URL` environment variable to specify database path (defaults to `./db/jobs.db`).







