

// app/page.tsx


function getCurrentTime() {
  const now = new Date();
  return now.toLocaleString(); 
}

export default async function Home() {
  const currentTime = getCurrentTime();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">Diameters</h1>
      
      <div>
        <p>333NEXT_PUBLIC_API_URL: {process.env.NEXT_PUBLIC_API_URL}</p>
        <p>NEXT_PUBLIC_ENVIRONMENT: {process.env.NEXT_PUBLIC_ENVIRONMENT}</p>
      </div>

      <div className="mb-4">
        <p>Current Time: {currentTime}</p>
      </div>



    </main>
  );
}
