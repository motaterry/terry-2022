"""
SQLite storage operations for job postings.
Handles database connection and upsert operations.
"""

import sqlite3
import hashlib
import os
from typing import Dict, Any, Optional
from contextlib import contextmanager
from datetime import datetime


def generate_job_id(source: str, title: str, company: str, posted_at: str) -> str:
    """
    Generate deterministic ID using SHA1 hash.
    
    Args:
        source: Job source/platform
        title: Job title
        company: Company name
        posted_at: Posted date string
        
    Returns:
        SHA1 hash hex digest (40 characters)
    """
    id_string = f"{source}|{title}|{company}|{posted_at}"
    return hashlib.sha1(id_string.encode('utf-8')).hexdigest()


@contextmanager
def get_db_connection(db_url: str):
    """
    Context manager for SQLite database connection.
    
    Args:
        db_url: Path to SQLite database file
        
    Yields:
        sqlite3.Connection: Database connection
    """
    # Ensure directory exists
    db_dir = os.path.dirname(db_url)
    if db_dir and not os.path.exists(db_dir):
        os.makedirs(db_dir, exist_ok=True)
    
    conn = sqlite3.connect(db_url)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()


def initialize_database(db_url: str):
    """
    Initialize database schema if it doesn't exist.
    
    Args:
        db_url: Path to SQLite database file
    """
    schema_path = os.path.join(os.path.dirname(__file__), 'models.sql')
    
    with open(schema_path, 'r') as f:
        schema_sql = f.read()
    
    with get_db_connection(db_url) as conn:
        conn.executescript(schema_sql)


def upsert_job(job_data: Dict[str, Any], db_url: str) -> bool:
    """
    Insert or update a job posting in the database.
    Uses deterministic ID to ensure idempotency.
    
    Args:
        job_data: Validated job data dictionary with keys:
                 - source, title, company, posted_at, region (optional)
        db_url: Path to SQLite database file
        
    Returns:
        True if job was inserted/updated successfully
    """
    # Generate deterministic ID
    job_id = generate_job_id(
        job_data['source'],
        job_data['title'],
        job_data['company'],
        job_data['posted_at']
    )
    
    now = datetime.now().isoformat()
    
    with get_db_connection(db_url) as conn:
        # Check if job exists
        cursor = conn.execute(
            "SELECT id FROM jobs WHERE id = ?",
            (job_id,)
        )
        exists = cursor.fetchone() is not None
        
        if exists:
            # Update existing job
            conn.execute(
                """
                UPDATE jobs 
                SET source = ?, title = ?, company = ?, region = ?, 
                    posted_at = ?, updated_at = ?
                WHERE id = ?
                """,
                (
                    job_data['source'],
                    job_data['title'],
                    job_data['company'],
                    job_data.get('region'),
                    job_data['posted_at'],
                    now,
                    job_id
                )
            )
            return False  # Updated, not inserted
        else:
            # Insert new job
            conn.execute(
                """
                INSERT INTO jobs (id, source, title, company, region, posted_at, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    job_id,
                    job_data['source'],
                    job_data['title'],
                    job_data['company'],
                    job_data.get('region'),
                    job_data['posted_at'],
                    now,
                    now
                )
            )
            return True  # Inserted







