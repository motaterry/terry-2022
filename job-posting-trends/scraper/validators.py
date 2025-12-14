"""
Data validation and normalization for job postings.
"""

from datetime import datetime
from typing import Dict, Any, Optional


class ValidationError(Exception):
    """Raised when job data validation fails."""
    pass


def validate_job_data(job_data: Dict[str, Any]) -> Dict[str, Any]:
    """
    Validate and normalize job posting data.
    
    Args:
        job_data: Dictionary with job posting fields
        
    Returns:
        Validated and normalized job data dictionary
        
    Raises:
        ValidationError: If required fields are missing or invalid
    """
    # Required fields
    required_fields = ['title', 'company', 'posted_at', 'source']
    missing_fields = [field for field in required_fields if not job_data.get(field)]
    
    if missing_fields:
        raise ValidationError(f"Missing required fields: {', '.join(missing_fields)}")
    
    # Normalize and validate
    validated = {
        'source': normalize_text(job_data['source']),
        'title': normalize_text(job_data['title']),
        'company': normalize_text(job_data['company']),
        'posted_at': validate_date(job_data['posted_at']),
        'region': normalize_text(job_data.get('region', '')) or None,
    }
    
    # Ensure non-empty strings for required fields
    if not validated['title'] or not validated['company']:
        raise ValidationError("Title and company cannot be empty")
    
    return validated


def normalize_text(text: Optional[str]) -> str:
    """
    Normalize text: strip whitespace and convert to title case.
    
    Args:
        text: Text to normalize
        
    Returns:
        Normalized text string
    """
    if not text:
        return ''
    return text.strip()


def validate_date(date_str: str) -> str:
    """
    Validate and normalize date string.
    Accepts ISO format (YYYY-MM-DD) or common formats.
    
    Args:
        date_str: Date string to validate
        
    Returns:
        Normalized date string in ISO format (YYYY-MM-DD)
        
    Raises:
        ValidationError: If date format is invalid
    """
    if not date_str:
        raise ValidationError("posted_at cannot be empty")
    
    date_str = date_str.strip()
    
    # Try parsing common date formats
    formats = [
        '%Y-%m-%d',
        '%Y/%m/%d',
        '%m/%d/%Y',
        '%d/%m/%Y',
        '%Y-%m-%d %H:%M:%S',
        '%Y-%m-%dT%H:%M:%S',
    ]
    
    for fmt in formats:
        try:
            dt = datetime.strptime(date_str, fmt)
            return dt.strftime('%Y-%m-%d')
        except ValueError:
            continue
    
    raise ValidationError(f"Invalid date format: {date_str}. Expected YYYY-MM-DD or similar.")







