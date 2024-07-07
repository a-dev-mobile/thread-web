import HomePage from './home-page';
import { MetricDiam } from './models/MetricDiam';

async function fetchDiameters(): Promise<MetricDiam[]> {
  const res = await fetch('http://localhost:3000/api/v1/metric/diams', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch diameters');
  }

  const data = await res.json();
  return data.data; // assuming the response structure is { success: true, data: [...] }
}

const Page = async () => {
  const diameters = await fetchDiameters();
  return <HomePage diameters={diameters} />;
};

export default Page;
