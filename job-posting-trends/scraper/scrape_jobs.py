"""
Job posting scraper with idempotent storage.
Refactored to use storage and validation modules.
"""

import os
import sys
import logging
from typing import List, Dict, Any

# Add current directory to path for imports when running as script
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from storage import upsert_job, initialize_database, get_db_connection
from validators import validate_job_data, ValidationError

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


def scrape_jobs() -> List[Dict[str, Any]]:
    """
    Scrape job postings from sources.
    
    Returns:
        List of job dictionaries with keys:
        - source: str (e.g., "github_jobs", "remoteok")
        - title: str
        - company: str
        - posted_at: str (YYYY-MM-DD format)
        - region: str (optional)
    """
    # Check if we should use sample data
    use_sample_data = os.getenv('USE_SAMPLE_DATA', 'false').lower() == 'true'
    
    if use_sample_data:
        logger.info("Using sample data generator")
        from generate_sample_data import generate_sample_jobs
        return generate_sample_jobs(days_back=90, jobs_per_day=8)
    
    # Use real scraper
    try:
        from real_scraper import scrape_jobs as scrape_real_jobs
        logger.info("Using real scraper (RSS feeds)")
        return scrape_real_jobs()
    except ImportError:
        logger.warning("real_scraper.py not found - falling back to sample data")
        logger.info("Set USE_SAMPLE_DATA=true to generate sample data for testing")
        return []
    except Exception as e:
        logger.error(f"Error in real scraper: {e}", exc_info=True)
        logger.info("Falling back to sample data. Set USE_SAMPLE_DATA=true to continue.")
        return []


def process_jobs(jobs: List[Dict[str, Any]], db_url: str) -> Dict[str, int]:
    """
    Process and store scraped jobs with validation and upsert.
    
    Args:
        jobs: List of job dictionaries
        db_url: Path to SQLite database file
        
    Returns:
        Dictionary with counts: {'inserted': int, 'updated': int, 'errors': int}
    """
    stats = {'inserted': 0, 'updated': 0, 'errors': 0}
    
    for job in jobs:
        try:
            # Validate job data
            validated_job = validate_job_data(job)
            
            # Upsert into database
            is_new = upsert_job(validated_job, db_url)
            
            if is_new:
                stats['inserted'] += 1
                logger.debug(f"Inserted job: {validated_job['title']} at {validated_job['company']}")
            else:
                stats['updated'] += 1
                logger.debug(f"Updated job: {validated_job['title']} at {validated_job['company']}")
                
        except ValidationError as e:
            stats['errors'] += 1
            logger.warning(f"Validation error for job: {e}")
        except Exception as e:
            stats['errors'] += 1
            logger.error(f"Error processing job: {e}", exc_info=True)
    
    return stats


def main():
    """Main entry point for scraper."""
    # Get database URL from environment or use default
    # Default to ../db/jobs.db (project root) when running from scraper directory
    default_db = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'db', 'jobs.db')
    db_url = os.getenv('DB_URL', default_db)
    
    logger.info(f"Starting job scraper (DB: {db_url})")
    
    # Initialize database schema if needed
    try:
        initialize_database(db_url)
        logger.info("Database initialized")
    except Exception as e:
        logger.error(f"Failed to initialize database: {e}")
        sys.exit(1)
    
    # Scrape jobs
    try:
        jobs = scrape_jobs()
        logger.info(f"Scraped {len(jobs)} job postings")
    except Exception as e:
        logger.error(f"Failed to scrape jobs: {e}", exc_info=True)
        sys.exit(1)
    
    if not jobs:
        logger.warning("No jobs scraped - exiting")
        return
    
    # Process and store jobs
    stats = process_jobs(jobs, db_url)
    
    logger.info(
        f"Processing complete - "
        f"Inserted: {stats['inserted']}, "
        f"Updated: {stats['updated']}, "
        f"Errors: {stats['errors']}"
    )


if __name__ == '__main__':
    main()

