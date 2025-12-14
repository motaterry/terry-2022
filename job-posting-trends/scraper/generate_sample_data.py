"""
Generate sample job posting data for testing.
Creates realistic sample data with trends over time.
"""

import random
from datetime import datetime, timedelta
from typing import List, Dict, Any

# Sample job titles
JOB_TITLES = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UX Designer",
    "DevOps Engineer",
    "Backend Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Machine Learning Engineer",
    "Cloud Architect",
    "Security Engineer",
    "Mobile Developer",
    "QA Engineer",
    "Technical Writer",
    "Scrum Master",
]

# Sample companies
COMPANIES = [
    "TechCorp",
    "DataFlow Inc",
    "CloudSystems",
    "InnovateLabs",
    "Digital Solutions",
    "CodeWorks",
    "AppBuilder",
    "WebServices Co",
    "AI Innovations",
    "StartupHub",
    "EnterpriseSoft",
    "DevOps Pro",
    "MobileFirst",
    "CloudNine",
    "TechStart",
]

# Sample regions
REGIONS = [
    "San Francisco, CA",
    "New York, NY",
    "Seattle, WA",
    "Austin, TX",
    "Boston, MA",
    "Chicago, IL",
    "Los Angeles, CA",
    "Denver, CO",
    "Remote",
    "Toronto, ON",
    "Vancouver, BC",
]

# Sample sources
SOURCES = ["indeed", "linkedin", "glassdoor", "monster", "ziprecruiter"]


def generate_sample_jobs(
    days_back: int = 90,
    jobs_per_day: int = 5,
    source: str = None
) -> List[Dict[str, Any]]:
    """
    Generate sample job postings with realistic trends.
    
    Args:
        days_back: Number of days to generate data for
        jobs_per_day: Average number of jobs per day
        source: Specific source to use (or None for random)
        
    Returns:
        List of job dictionaries
    """
    jobs = []
    base_date = datetime.now()
    
    # Create trend: more jobs in recent days
    for day_offset in range(days_back, -1, -1):
        date = base_date - timedelta(days=day_offset)
        date_str = date.strftime('%Y-%m-%d')
        
        # Vary jobs per day with trend (more recent = more jobs)
        trend_factor = 1 + (days_back - day_offset) / days_back * 0.5
        day_job_count = int(jobs_per_day * trend_factor * random.uniform(0.7, 1.3))
        
        for _ in range(day_job_count):
            job = {
                'source': source or random.choice(SOURCES),
                'title': random.choice(JOB_TITLES),
                'company': random.choice(COMPANIES),
                'region': random.choice(REGIONS),
                'posted_at': date_str,
            }
            jobs.append(job)
    
    return jobs


if __name__ == '__main__':
    # Generate sample data
    sample_jobs = generate_sample_jobs(days_back=90, jobs_per_day=8)
    
    print(f"Generated {len(sample_jobs)} sample job postings")
    print(f"Date range: {sample_jobs[0]['posted_at']} to {sample_jobs[-1]['posted_at']}")
    print(f"\nSample jobs:")
    for job in sample_jobs[:5]:
        print(f"  - {job['title']} at {job['company']} ({job['region']}) - {job['posted_at']}")







