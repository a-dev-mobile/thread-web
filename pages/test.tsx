// app/page.tsx
import { GetServerSideProps } from 'next';
import { query } from '../db';

export const getServerSideProps: GetServerSideProps = async () => {
  let diameters = [];

  try {
    const res = await query('SELECT * FROM metric.diameters ORDER BY id ASC');
    diameters = res.rows;
  } catch (err) {
    console.error('Error fetching diameters:', err);
  }

  return {
    props: {
      diameters,
    },
  };
};

type HomeProps = {
  diameters: Array<{ id: number; diameter: number }>;
};

const Home = ({ diameters }: HomeProps) => {
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
};

export default Home;
