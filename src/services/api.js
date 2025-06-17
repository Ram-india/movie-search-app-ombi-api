
// http://www.omdbapi.com/?apikey=[yourkey]&
const BASE_URL = 'https://www.omdbapi.com/?';
const API_KEY = 'bbc8ccb3';

export const getMovies = async (query, type, page =1 )  => {
    if(!query){
        return{ movies:[], error: "Please enter a search term."};
    }
    let url = `${BASE_URL}apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`;
    if (type && type !== 'all') {
        url += `&type=${type}`;
      }
      try{
        const response = await fetch(url);
        const data = await response.json();
        if(data.Response === "False"){
            return { 
                movies: [],
                error: data.Error,
                totalResults: 0
             };
        }
        return {
            movies: data.Search, 
            error: null,
            totalResults: parseInt(data.totalResults, 10) || 0,
        };
      }catch(error){
        console.error("API Error:", error.message);
        return { 
            movies: [],
            error: "Failed to fetch movies. Please try again later.",
            totalResults: 0};
      }
};

 export const getMovieDetails = async (id) => {
    if(!id){
        throw new Error("Movie ID is required");
    }
    try{
        const response = await fetch(`${BASE_URL}apikey=${API_KEY}&i=${id}`);
        const movieData = await response.json();
        if(movieData.Response === "False") {
            throw new Error(movieData.Error);
        }
        return movieData;

    }
    catch(error) {
        console.error("API Error:", error.message);
        throw new Error("Failed to fetch movie details. Please try again later.");
    }
    
   
};
