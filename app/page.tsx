// pages/diameters.js

import { Metadata } from 'next';
import { fetchDiameters } from '@/app/lib/api';
import { MetricDiam } from '@/app/models/MetricDiam';

// Указываем метаданные для страницы
export const metadata: Metadata = {
  title: 'Diameters',
  description: 'List of diameters',
};

// Получение данных на сервере с ISR
export async function generateStaticParams() {
  // Получение данных из API
  const diameters = await fetchDiameters();

  // Возвращаем параметры для статической генерации
  return diameters.map((diameter: MetricDiam) => ({
    id: diameter.id.toString(),
  }));
}

export const revalidate = 60; // Кэширование страницы на 60 секунд

const DiametersPage = async () => {
  const diameters = await fetchDiameters();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">Diameters</h1>
      
      <table className="table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Diameter</th>
          </tr>
        </thead>
        <tbody>
          {diameters.map((diameter) => (
            <tr key={diameter.id}>
              <td>{diameter.id}</td>
              <td>{diameter.diameter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default DiametersPage;
