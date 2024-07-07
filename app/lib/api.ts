// app/lib/api.ts

import { MetricDiam } from '@/app/models/MetricDiam';

export const fetchDiameters = async (): Promise<MetricDiam[]> => {
  const response = await fetch('http://127.0.0.1:3003/api/v1/metric/diameters');
  if (!response.ok) {
    throw new Error('Failed to fetch diameters');
  }
  const data = await response.json();
  return data.data;
};
