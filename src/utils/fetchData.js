 

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    },
  };

 
  
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': import.meta.env.VITE_YOUTUBE_API_KEY,
    },
  };
  
  export const fetchData = async (url, options) => {
    try {
      const response = await fetch(url, options);
      console.log("API Response Status:", response.status);
      
      if (!response.ok) throw new Error(`API Error: ${response.status}`);
      
      const data = await response.json();
      console.log("API Data:", data);
  
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      return []; 
    }
  };
  