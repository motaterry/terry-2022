# Production Configuration

## Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Database
DB_URL=postgresql://user:pass@host:5432/jobs
# Or for SQLite: DB_URL=./db/jobs.db

# API
API_PORT=3000
NODE_ENV=production

# Frontend API URL (for production builds)
VITE_API_URL=https://your-api-domain.com/api

# Scraper
USE_SAMPLE_DATA=false
SCRAPER_RATE_LIMIT=1  # seconds between requests
```

## Database Setup

### SQLite (Development)
```bash
# Already set up - uses ./db/jobs.db
```

### PostgreSQL (Production)
```bash
# Create database
createdb job_posting_trends

# Run migrations
psql job_posting_trends < db/migrations/001_initial_schema.sql

# Update DB_URL in .env
DB_URL=postgresql://user:pass@localhost:5432/job_posting_trends
```

## Building for Production

### API
```bash
cd app/api
npm install
npm run build
npm start
```

### Frontend
```bash
cd app/web
npm install
npm run build
# Serve dist/ directory
```

## Health Checks

- API: `GET /health`
- Returns: `{"status":"ok","timestamp":"..."}`

## Monitoring

Recommended:
- **Uptime**: UptimeRobot, Pingdom
- **Errors**: Sentry
- **Logs**: Logtail, Papertrail
- **Metrics**: Datadog, New Relic

## Security Checklist

- [ ] Use HTTPS in production
- [ ] Set secure CORS origins
- [ ] Use environment variables for secrets
- [ ] Enable rate limiting on API
- [ ] Set up database backups
- [ ] Use strong database passwords
- [ ] Enable API authentication if needed







