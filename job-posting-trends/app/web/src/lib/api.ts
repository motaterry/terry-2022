/**
 * API client for job posting trends.
 * TypeScript types and fetch wrappers.
 */

export interface Job {
  id: string;
  source: string;
  title: string;
  company: string;
  region: string | null;
  posted_at: string;
  created_at: string;
  updated_at: string;
}

export interface JobAggregate {
  date: string;
  count: number;
}

export interface JobsResponse {
  data: Job[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
}

export interface AggregateResponse {
  data: JobAggregate[];
  bucket: 'day' | 'month';
}

export interface JobsQueryParams {
  title?: string;
  region?: string;
  startDate?: string;
  endDate?: string;
  limit?: number;
  offset?: number;
}

export interface AggregateQueryParams {
  title?: string;
  region?: string;
  startDate?: string;
  endDate?: string;
  bucket?: 'day' | 'month';
}

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

async function fetchAPI<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
  const url = new URL(`${API_BASE_URL}${endpoint}`, window.location.origin);
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.append(key, String(value));
      }
    });
  }

  const response = await fetch(url.toString());
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getJobs(params?: JobsQueryParams): Promise<JobsResponse> {
  return fetchAPI<JobsResponse>('/jobs', params);
}

export async function getAggregatedJobs(params?: AggregateQueryParams): Promise<AggregateResponse> {
  return fetchAPI<AggregateResponse>('/jobs/aggregate', params);
}







