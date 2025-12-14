/**
 * Job posting API routes.
 * Handles filtering, aggregation, and data retrieval.
 */

import express from 'express';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Get database connection
function getDb(): Database.Database {
  const dbUrl = process.env.DB_URL || path.join(__dirname, '../../../db/jobs.db');
  return new Database(dbUrl);
}

// GET /api/jobs - Filter jobs with pagination
router.get('/', (req, res) => {
  const {
    title,
    region,
    startDate,
    endDate,
    limit = '100',
    offset = '0'
  } = req.query;

  const db = getDb();
  
  try {
    // Build WHERE clause dynamically
    const conditions: string[] = [];
    const params: any[] = [];

    if (title) {
      conditions.push('title LIKE ?');
      params.push(`%${title}%`);
    }

    if (region) {
      conditions.push('region = ?');
      params.push(region);
    }

    if (startDate) {
      conditions.push('posted_at >= ?');
      params.push(startDate);
    }

    if (endDate) {
      conditions.push('posted_at <= ?');
      params.push(endDate);
    }

    const whereClause = conditions.length > 0 
      ? `WHERE ${conditions.join(' AND ')}`
      : '';

    const limitNum = parseInt(limit as string, 10);
    const offsetNum = parseInt(offset as string, 10);

    // Get total count
    const countQuery = `SELECT COUNT(*) as total FROM jobs ${whereClause}`;
    const countResult = db.prepare(countQuery).get(...params) as { total: number };

    // Get jobs
    const jobsQuery = `
      SELECT id, source, title, company, region, posted_at, created_at, updated_at
      FROM jobs
      ${whereClause}
      ORDER BY posted_at DESC
      LIMIT ? OFFSET ?
    `;
    const jobs = db.prepare(jobsQuery).all(...params, limitNum, offsetNum);

    res.json({
      data: jobs,
      pagination: {
        total: countResult.total,
        limit: limitNum,
        offset: offsetNum,
        hasMore: offsetNum + limitNum < countResult.total
      }
    });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  } finally {
    db.close();
  }
});

// GET /api/jobs/aggregate - Aggregate jobs by time buckets
router.get('/aggregate', (req, res) => {
  const {
    title,
    region,
    startDate,
    endDate,
    bucket = 'day' // 'day' or 'month'
  } = req.query;

  const db = getDb();

  try {
    // Build WHERE clause
    const conditions: string[] = [];
    const params: any[] = [];

    if (title) {
      conditions.push('title LIKE ?');
      params.push(`%${title}%`);
    }

    if (region) {
      conditions.push('region = ?');
      params.push(region);
    }

    if (startDate) {
      conditions.push('posted_at >= ?');
      params.push(startDate);
    }

    if (endDate) {
      conditions.push('posted_at <= ?');
      params.push(endDate);
    }

    const whereClause = conditions.length > 0 
      ? `WHERE ${conditions.join(' AND ')}`
      : '';

    // Determine date format based on bucket
    const dateFormat = bucket === 'month' 
      ? "strftime('%Y-%m', posted_at) as date"
      : "date(posted_at) as date";

    const aggregateQuery = `
      SELECT 
        ${dateFormat},
        COUNT(*) as count
      FROM jobs
      ${whereClause}
      GROUP BY date
      ORDER BY date ASC
    `;

    const results = db.prepare(aggregateQuery).all(...params) as Array<{ date: string; count: number }>;

    res.json({
      data: results,
      bucket: bucket
    });
  } catch (error) {
    console.error('Error aggregating jobs:', error);
    res.status(500).json({ error: 'Failed to aggregate jobs' });
  } finally {
    db.close();
  }
});

export default router;







