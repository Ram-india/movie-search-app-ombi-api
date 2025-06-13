// http://www.omdbapi.com/?apikey=[yourkey]&
const BASE_URL = 'http://www.omdbapi.com/?';
const API_KEY = 'bbc8ccb3';

export const getMovies = async (query)  => {
    const response = await fetch(
        `${BASE_URL}apikey=${API_KEY}&s=${query}`
    );
    const movieData = await response.json();
    return movieData;
};
 export const getMovieDetails = async (id) => {
    const response = await fetch(
        `${BASE_URL}apikey=${API_KEY}&i=${id}`
    );
    const movieData = await response.json();
    return movieData;
};