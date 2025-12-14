/**
 * CSV export button component.
 */

import React from 'react';
import { Job } from '@/lib/api';

export interface ExportButtonProps {
  jobs: Job[];
  disabled?: boolean;
}

export function ExportButton({ jobs, disabled }: ExportButtonProps) {
  const exportToCSV = () => {
    if (jobs.length === 0) {
      alert('No data to export');
      return;
    }

    // Create CSV header
    const headers = ['ID', 'Source', 'Title', 'Company', 'Region', 'Posted At', 'Created At', 'Updated At'];
    
    // Create CSV rows
    const rows = jobs.map(job => [
      job.id,
      job.source,
      job.title,
      job.company,
      job.region || '',
      job.posted_at,
      job.created_at,
      job.updated_at,
    ]);

    // Combine header and rows
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `job-postings-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={exportToCSV}
      disabled={disabled || jobs.length === 0}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
    >
      Export CSV ({jobs.length} jobs)
    </button>
  );
}







