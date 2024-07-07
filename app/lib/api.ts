// app/lib/api.ts
export const fetchDiameters = async () => {
    const response = await fetch('/api/v1/metric/diams');
    if (!response.ok) {
        throw new Error('Failed to fetch diameters');
    }
    const data = await response.json();
    return data.data; 
};
