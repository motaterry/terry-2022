# Production Deployment Guide

## Quick Deploy Options

### Option 1: Railway (Recommended - Easiest)

1. **Deploy API:**
   ```bash
   # Install Railway CLI
   npm i -g @railway/cli
   
   # Login and deploy
   cd app/api
   railway login
   railway init
   railway up
   ```

2. **Set Environment Variables:**
   - `DB_URL`: Railway will provide PostgreSQL URL
   - `NODE_ENV=production`
   - `API_PORT`: Auto-set by Railway

3. **Deploy Frontend:**
   - Build: `cd app/web && npm run build`
   - Deploy to Vercel/Netlify pointing to Railway API URL

### Option 2: Render

1. **Create Web Service** for API:
   - Connect GitHub repo
   - Root directory: `app/api`
   - Build: `npm install && npm run build`
   - Start: `npm start`
   - Add PostgreSQL database

2. **Create Static Site** for Frontend:
   - Root directory: `app/web`
   - Build: `npm run build`
   - Publish: `dist`

### Option 3: Docker Compose (Self-hosted)

```bash
docker-compose up -d
```

## Environment Variables

### API Server
```env
DB_URL=postgresql://user:pass@host:5432/jobs
NODE_ENV=production
API_PORT=3000
```

### Frontend
```env
VITE_API_URL=https://your-api-domain.com/api
```

## Database Migration (SQLite → Postgres)

The code is designed to work with both. Just change `DB_URL` to a PostgreSQL connection string.

## Health Checks

- API: `GET /health`
- Returns: `{"status":"ok","timestamp":"..."}`

## Monitoring

Add to your deployment platform:
- Uptime monitoring
- Error tracking (Sentry)
- Log aggregation







