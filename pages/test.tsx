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


// Function to get the current time
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleString();
}

const Home = ({ diameters }: HomeProps) => {
  const currentTime = getCurrentTime(); 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">Diameters</h1>
      
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
};

export default Home;
