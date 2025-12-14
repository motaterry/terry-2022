# Database Migrations

SQL migration files for database schema changes.

## Current Migrations

- `001_initial_schema.sql`: Creates initial jobs table with indexes

## Running Migrations

Migrations are automatically applied when the scraper initializes the database. To run manually:

```bash
sqlite3 db/jobs.db < db/migrations/001_initial_schema.sql
```







