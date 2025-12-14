/**
 * Main App component.
 * Layout and state management.
 */

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { JobFilters } from './components/JobFilters';
import { JobTrendsChart } from './components/JobTrendsChart';
import { ExportButton } from './components/ExportButton';
import { getJobs, getAggregatedJobs, type AggregateQueryParams } from '@/lib/api';

function App() {
  const [title, setTitle] = useState('');
  const [region, setRegion] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [bucket, setBucket] = useState<'day' | 'month'>('day');

  // Build query params
  const jobsParams = {
    title: title || undefined,
    region: region || undefined,
    startDate: startDate || undefined,
    endDate: endDate || undefined,
    limit: 1000, // Get all for export
  };

  const aggregateParams: AggregateQueryParams = {
    title: title || undefined,
    region: region || undefined,
    startDate: startDate || undefined,
    endDate: endDate || undefined,
    bucket,
  };

  // Fetch jobs data
  const { data: jobsData, isLoading: jobsLoading } = useQuery({
    queryKey: ['jobs', jobsParams],
    queryFn: () => getJobs(jobsParams),
  });

  // Fetch aggregated data for chart
  const { data: aggregateData, isLoading: aggregateLoading } = useQuery({
    queryKey: ['aggregate', aggregateParams],
    queryFn: () => getAggregatedJobs(aggregateParams),
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Job Posting Trends</h1>
          <p className="text-gray-600 mt-2">
            Analyze job posting trends over time with filtering and visualization
          </p>
        </header>

        <JobFilters
          title={title}
          region={region}
          startDate={startDate}
          endDate={endDate}
          onTitleChange={setTitle}
          onRegionChange={setRegion}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
        />

        <div className="mb-6 flex items-center gap-4">
          <label className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Time Bucket:</span>
            <select
              value={bucket}
              onChange={(e) => setBucket(e.target.value as 'day' | 'month')}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="day">Daily</option>
              <option value="month">Monthly</option>
            </select>
          </label>

          {jobsData && (
            <ExportButton jobs={jobsData.data} />
          )}
        </div>

        {aggregateLoading ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-500 text-center">Loading chart data...</p>
          </div>
        ) : aggregateData ? (
          <JobTrendsChart data={aggregateData.data} bucket={aggregateData.bucket} />
        ) : null}

        {jobsLoading && (
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-500 text-center">Loading jobs...</p>
          </div>
        )}

        {jobsData && (
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Job Postings ({jobsData.pagination.total} total)
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Region
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Posted At
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Source
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {jobsData.data.slice(0, 50).map((job) => (
                    <tr key={job.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {job.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {job.company}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {job.region || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {job.posted_at}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {job.source}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {jobsData.data.length > 50 && (
                <p className="mt-4 text-sm text-gray-500 text-center">
                  Showing first 50 of {jobsData.data.length} jobs
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;







