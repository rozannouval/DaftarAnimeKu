export const getApiData = async(resource, query) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
      );
    
      const apiData = await response.json();
    return apiData
}