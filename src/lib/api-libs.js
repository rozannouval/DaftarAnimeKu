export const getApiData = async(resource, query) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
      );
    
      const apiData = await response.json();
    return apiData
}

export const getNestedApiData = async(resource, objectProperty) => {
  const response = await getApiData(resource)
  return response.data.flatMap(item => item.entry)
}