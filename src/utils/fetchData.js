export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ab25428728msha45c1913ab8a5e3p1b4197jsnbd05d892f487',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ab25428728msha45c1913ab8a5e3p1b4197jsnbd05d892f487',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async(url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}