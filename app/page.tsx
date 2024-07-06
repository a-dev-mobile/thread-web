

// app/page.tsx


import { query } from '../db';

// Function to fetch diameters from the database
async function fetchDiameters() {
  let diameters = [];

  try {
    const res = await query('SELECT * FROM metric.diameters ORDER BY id ASC');
    diameters = res.rows;
  } catch (err) {
    console.error('Error fetching diameters:', err);
  }

  return diameters;
}

// Function to get the current time
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleString(); // You can format this as needed
}

export default async function Home() {
  const diameters = await fetchDiameters();
  const currentTime = getCurrentTime(); // Get the current time

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">Diameters</h1>
      
      <div>
        <p>NEXT_PUBLIC_API_URL: {process.env.NEXT_PUBLIC_API_URL}</p>
        <p>NEXT_PUBLIC_ENVIRONMENT: {process.env.NEXT_PUBLIC_ENVIRONMENT}</p>
      </div>

      <div className="mb-4">
        <p>Current Time: {currentTime}</p>
      </div>

      <table className="table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Diameter</th>
            {/* Add other column headers based on your table structure */}
          </tr>
        </thead>
        <tbody>
          {diameters.map((diameter) => (
            <tr key={diameter.id}>
              <td>{diameter.id}</td>
              <td>{diameter.diameter}</td>
              {/* Add other columns based on your table structure */}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
