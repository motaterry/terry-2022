"""
Real scraper implementation using public APIs and RSS feeds.
This is a working example you can use immediately.
"""

import os
import sys
import logging
import requests
import feedparser
from datetime import datetime, timedelta
from typing import List, Dict, Any
from urllib.parse import quote

# Add current directory to path for imports when running as script
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from storage import upsert_job, initialize_database
from validators import validate_job_data, ValidationError

logger = logging.getLogger(__name__)


def scrape_github_jobs_rss(query: str = "software engineer", location: str = "") -> List[Dict[str, Any]]:
    """
    Scrape GitHub Jobs RSS feed.
    GitHub Jobs RSS is publicly available and doesn't require API keys.
    
    Args:
        query: Job search query
        location: Location filter (optional)
        
    Returns:
        List of job dictionaries
    """
    jobs = []
    
    try:
        # GitHub Jobs RSS URL
        base_url = "https://jobs.github.com/positions.atom"
        params = []
        
        if query:
            params.append(f"description={quote(query)}")
        if location:
            params.append(f"location={quote(location)}")
        
        url = f"{base_url}?{'&'.join(params)}" if params else base_url
        
        logger.info(f"Fetching GitHub Jobs RSS: {url}")
        
        # Parse RSS feed
        feed = feedparser.parse(url)
        
        if feed.bozo:
            logger.warning(f"RSS feed parsing warning: {feed.bozo_exception}")
        
        for entry in feed.entries:
            try:
                # Parse date
                posted_date = datetime(*entry.published_parsed[:6]).strftime('%Y-%m-%d')
                
                # Extract location from summary or title
                location_text = ""
                if hasattr(entry, 'summary'):
                    # Try to extract location from summary
                    summary = entry.summary.lower()
                    # Simple location extraction (can be improved)
                    if 'remote' in summary:
                        location_text = "Remote"
                    elif 'san francisco' in summary or 'sf' in summary:
                        location_text = "San Francisco, CA"
                    elif 'new york' in summary or 'nyc' in summary:
                        location_text = "New York, NY"
                    elif 'seattle' in summary:
                        location_text = "Seattle, WA"
                
                # Extract company from author or link
                company = entry.author if hasattr(entry, 'author') else "Unknown"
                
                job = {
                    'source': 'github_jobs',
                    'title': entry.title,
                    'company': company,
                    'region': location_text or None,
                    'posted_at': posted_date,
                }
                
                jobs.append(job)
                
            except Exception as e:
                logger.warning(f"Error parsing GitHub Jobs entry: {e}")
                continue
        
        logger.info(f"Scraped {len(jobs)} jobs from GitHub Jobs")
        
    except Exception as e:
        logger.error(f"Error scraping GitHub Jobs: {e}")
    
    return jobs


def scrape_remoteok_rss() -> List[Dict[str, Any]]:
    """
    Scrape RemoteOK RSS feed.
    RemoteOK provides an RSS feed for remote jobs.
    """
    jobs = []
    
    try:
        url = "https://remoteok.io/remote-dev-jobs.rss"
        logger.info(f"Fetching RemoteOK RSS: {url}")
        
        feed = feedparser.parse(url)
        
        for entry in feed.entries:
            try:
                # Parse date
                posted_date = datetime(*entry.published_parsed[:6]).strftime('%Y-%m-%d')
                
                # Extract company from title (format: "Job Title - Company Name")
                title_parts = entry.title.split(' - ')
                if len(title_parts) >= 2:
                    title = ' - '.join(title_parts[:-1])
                    company = title_parts[-1]
                else:
                    title = entry.title
                    company = "Unknown"
                
                job = {
                    'source': 'remoteok',
                    'title': title,
                    'company': company,
                    'region': 'Remote',
                    'posted_at': posted_date,
                }
                
                jobs.append(job)
                
            except Exception as e:
                logger.warning(f"Error parsing RemoteOK entry: {e}")
                continue
        
        logger.info(f"Scraped {len(jobs)} jobs from RemoteOK")
        
    except Exception as e:
        logger.error(f"Error scraping RemoteOK: {e}")
    
    return jobs


def scrape_stackoverflow_jobs_rss(query: str = "software engineer") -> List[Dict[str, Any]]:
    """
    Scrape Stack Overflow Jobs RSS feed.
    """
    jobs = []
    
    try:
        # Stack Overflow Jobs RSS
        url = f"https://stackoverflow.com/jobs/feed?q={quote(query)}"
        logger.info(f"Fetching Stack Overflow Jobs RSS: {url}")
        
        feed = feedparser.parse(url)
        
        for entry in feed.entries:
            try:
                # Parse date
                posted_date = datetime(*entry.published_parsed[:6]).strftime('%Y-%m-%d')
                
                # Extract company from author or summary
                company = entry.author if hasattr(entry, 'author') else "Unknown"
                
                # Try to extract location from summary
                location = None
                if hasattr(entry, 'summary'):
                    summary = entry.summary.lower()
                    # Simple location detection
                    if 'remote' in summary:
                        location = "Remote"
                    elif 'san francisco' in summary:
                        location = "San Francisco, CA"
                    elif 'new york' in summary:
                        location = "New York, NY"
                
                job = {
                    'source': 'stackoverflow',
                    'title': entry.title,
                    'company': company,
                    'region': location,
                    'posted_at': posted_date,
                }
                
                jobs.append(job)
                
            except Exception as e:
                logger.warning(f"Error parsing Stack Overflow entry: {e}")
                continue
        
        logger.info(f"Scraped {len(jobs)} jobs from Stack Overflow")
        
    except Exception as e:
        logger.error(f"Error scraping Stack Overflow: {e}")
    
    return jobs


def scrape_jobs() -> List[Dict[str, Any]]:
    """
    Main scraper function - aggregates jobs from multiple sources.
    
    Returns:
        List of job dictionaries
    """
    all_jobs = []
    
    # Scrape from multiple sources
    sources = [
        ('GitHub Jobs', lambda: scrape_github_jobs_rss("software engineer")),
        ('RemoteOK', scrape_remoteok_rss),
        ('Stack Overflow', lambda: scrape_stackoverflow_jobs_rss("software engineer")),
    ]
    
    for source_name, scraper_func in sources:
        try:
            logger.info(f"Scraping {source_name}...")
            jobs = scraper_func()
            logger.info(f"✓ {source_name}: {len(jobs)} jobs found")
            all_jobs.extend(jobs)
        except Exception as e:
            logger.error(f"✗ Error scraping {source_name}: {e}", exc_info=True)
            continue
    
    logger.info(f"Total jobs scraped: {len(all_jobs)}")
    return all_jobs


if __name__ == '__main__':
    # Configure logging
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    )
    
    # Test the scraper
    print("Testing real scraper...")
    jobs = scrape_jobs()
    print(f"\nFound {len(jobs)} jobs:")
    for job in jobs[:5]:
        print(f"  - {job['title']} at {job['company']} ({job.get('region', 'N/A')})")







