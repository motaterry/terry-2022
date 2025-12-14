# AUTOMATION GUIDE
# ================

## 🚀 Quick Commands

### Setup (One-time)
```bash
./setup.sh
# or
npm run setup
```

### Development (Start Everything)
```bash
./dev.sh
# or
npm run dev
```

### Run Scraper Only
```bash
./run-scraper.sh
# or
npm run scrape
```

### Docker (Alternative)
```bash
docker-compose up -d
docker-compose logs -f
docker-compose down
```

## 📋 What Each Script Does

### setup.sh
- Installs Python dependencies
- Installs Node.js dependencies (API + Web)
- Initializes database
- Creates .env file if missing

### dev.sh
- Starts API server (port 3000)
- Starts Web frontend (port 5173)
- Runs both concurrently
- Stops both with Ctrl+C

### run-scraper.sh
- Loads environment variables
- Runs Python scraper
- Updates database

## 🎯 Typical Workflow

1. **First time setup:**
   ```bash
   ./setup.sh
   ```

2. **Daily development:**
   ```bash
   ./dev.sh
   # Opens http://localhost:5173
   ```

3. **Run scraper (when needed):**
   ```bash
   ./run-scraper.sh
   ```

4. **Deploy with Docker:**
   ```bash
   docker-compose up -d
   ```

## 🔧 Troubleshooting

### Scripts not executable?
```bash
chmod +x setup.sh dev.sh run-scraper.sh
```

### Port already in use?
- Change ports in `.env` file
- Or kill existing processes:
  ```bash
  lsof -ti:3000 | xargs kill
  lsof -ti:5173 | xargs kill
  ```

### Database errors?
```bash
# Reinitialize database
cd scraper
python3 -c "from storage import initialize_database; initialize_database('../db/jobs.db')"
```







