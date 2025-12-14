# Real Scraper Implementation Guide

## Quick Start

1. **Review the example scraper:**
   ```bash
   cat scraper/scraper_example.py
   ```

2. **Update `scrape_jobs.py`:**
   - Replace the template function with real scraping logic
   - Use `scraper_example.py` as a reference

3. **Test your scraper:**
   ```bash
   USE_SAMPLE_DATA=false ./run-scraper.sh
   ```

## Scraping Options

### Option 1: Job Board APIs (Recommended)

Many job sites offer APIs:
- **Adzuna API**: Free tier available
- **Reed API**: UK-focused
- **The Muse API**: Startup jobs
- **GitHub Jobs API**: Developer jobs
- **Stack Overflow Jobs**: Tech jobs

**Advantages:**
- ✅ Legal and reliable
- ✅ Structured data
- ✅ No parsing needed
- ✅ Rate limits are clear

**Example:**
```python
import requests

def scrape_adzuna(api_key: str):
    url = "https://api.adzuna.com/v1/api/jobs/us/search/1"
    params = {
        'app_id': api_key,
        'app_key': api_key,
        'what': 'software engineer',
        'where': 'san francisco'
    }
    response = requests.get(url, params=params)
    return response.json()
```

### Option 2: Web Scraping

Use BeautifulSoup or Selenium for sites without APIs.

**Important Considerations:**
- ⚠️ Check robots.txt
- ⚠️ Respect rate limits
- ⚠️ Use proper User-Agent headers
- ⚠️ Handle dynamic content (may need Selenium)
- ⚠️ Legal/ethical considerations

**Example:**
```python
from bs4 import BeautifulSoup
import requests
import time

def scrape_site(url: str):
    headers = {'User-Agent': 'Mozilla/5.0...'}
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')
    # Parse jobs...
    time.sleep(1)  # Rate limiting
```

### Option 3: RSS Feeds

Some sites offer RSS feeds:
- Indeed RSS
- LinkedIn RSS (limited)
- RemoteOK RSS

**Example:**
```python
import feedparser

def scrape_rss(url: str):
    feed = feedparser.parse(url)
    jobs = []
    for entry in feed.entries:
        jobs.append({
            'title': entry.title,
            'company': entry.author,
            'posted_at': entry.published[:10],
            # ...
        })
    return jobs
```

## Implementation Checklist

- [ ] Choose scraping method (API/Web/RSS)
- [ ] Get API keys if needed
- [ ] Implement scraper function
- [ ] Add error handling
- [ ] Add rate limiting
- [ ] Test with small dataset
- [ ] Update `scrape_jobs()` in `scrape_jobs.py`
- [ ] Test end-to-end
- [ ] Set `USE_SAMPLE_DATA=false` in production

## Rate Limiting

Always implement rate limiting:

```python
import time

def scrape_with_rate_limit():
    jobs = []
    for page in range(1, 10):
        # Scrape page
        page_jobs = scrape_page(page)
        jobs.extend(page_jobs)
        
        # Rate limit: wait 1 second between requests
        time.sleep(1)
    return jobs
```

## Error Handling

Handle errors gracefully:

```python
def scrape_source():
    try:
        return scrape_jobs()
    except requests.RequestException as e:
        logger.error(f"Network error: {e}")
        return []
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        return []
```

## Testing

Test your scraper before production:

```bash
# Test with sample data first
USE_SAMPLE_DATA=true ./run-scraper.sh

# Then test real scraper
USE_SAMPLE_DATA=false ./run-scraper.sh

# Check results
sqlite3 db/jobs.db "SELECT COUNT(*) FROM jobs;"
```







