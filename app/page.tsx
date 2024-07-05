// app/page.tsx
import { query } from '../db';

export default async function Home() {
  let diameters = [];

  try {
    const res = await query('SELECT * FROM metric.diameters');
    diameters = res.rows;
  } catch (err) {
    console.error('Error fetching diameters:', err);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">Diameters</h1>
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
