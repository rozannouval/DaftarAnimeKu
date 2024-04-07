export const getApiData = async (resource, query) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  
  // Memeriksa apakah respons berhasil diterima
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${resource}`);
  }
  
  // Mengonversi respons menjadi objek JSON
  const apiData = await response.json();
  
  // Memeriksa apakah respons memiliki properti 'data'
  if (!apiData || typeof apiData !== 'object' || !apiData.data) {
    throw new Error('Invalid API response or missing data');
  }
  
  return apiData;
};


export const getNestedApiData = async (resource, objectProperty) => {
  const response = await getApiData(resource);
  return response.data.map(item => item[objectProperty]).reduce((acc, val) => acc.concat(val), []);
}


export const reproduce = (data, gap) => {
  const first = Math.floor(Math.random() * (data.length - gap) + 1)
  const last = first + gap

  const response = {
    data: data.slice(first, last)
  }
  return response
}