import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import { useMovieContext } from '../context/MovieContext';
import {
  FaCalendarAlt,
  FaGlobeAmericas,
  FaLanguage,
  FaFlag,
  FaUserFriends,
  FaStar,
  FaFilm,
  FaUser,
  FaGlobe,
  FaTrophy,
} from "react-icons/fa";


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const[favorites,setFavourites] = useState(null);
  const {state, dispatch} = useMovieContext();

  useEffect(() => {
    const fetchDetails = async () => {
      try{
        const data = await getMovieDetails(id);
        setMovie(data);

      }catch (error){
        console.error("Error fetching movie details:", error.message);
      }
    };
    if(id){
      fetchDetails();
    }
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const handleFavorite = () => {
    dispatch({
     type: 'ADD_TO_FAVORITES',
     payload: movie
    })
  };
  
  const handleRemoveFavorite = () => {
    dispatch({
      type: 'REMOVE_FROM_FAVORITES',
      payload: movie.imdbID
    });
  };
  const isFavorite= state.favorites.some(fav => fav.imdbID === movie.imdbID);


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#717070] to-[#555657] flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-md shadow-2xl p-8 flex flex-col md:flex-row w-full max-w-5xl">
        {/* Poster */}
        {movie.Poster && (
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-auto max-h-[600px] rounded-md shadow-xl object-cover"
            />
          </div>
        )}

        {/* Details */}
        <div className="md:w-2/3 md:pl-10 text-gray-500 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            {movie.Title}
          </h1>

          <div className="flex flex-wrap  justify-evenly px-10 py-1 text-lg  text-white font-medium bg-gray-500">
            {movie.Year && (
              <p className="flex items-center">
                <FaCalendarAlt className="mr-2" /> {movie.Year}
              </p>
            )}
            {movie.imdbRating && (
              <p className="flex items-center">
                <FaStar className="mr-2 text-yellow-400" /> {movie.imdbRating}
              </p>
            )}
            {movie.Type && (
              <p className="flex items-center">
                <FaFilm className="mr-2" /> {movie.Type}
              </p>
            )}
            {movie.Genre && (
              <p className="flex items-center">
                <FaFilm className="mr-2" /> {movie.Genre}
              </p>
            )}
          </div>

          <div className="space-y-3 text-gray-500 text-lg">
            <div className="grid grid-cols-[40px_120px_1fr]  text-lg">
              <FaUser className="text-xl" />
              <span >Director:</span>
              <span >{movie.Director}</span>

              <FaUserFriends className="text-xl" />
              <span>Actors:</span>
              <span>{movie.Actors}</span>

              <FaLanguage className="text-xl" />
              <span >Language:</span>
              <span>{movie.Language}</span>

              <FaFlag className="text-xl" />
              <span >Country:</span>
              <span>{movie.Country}</span>

              <FaTrophy className="text-xl" />
              <span >Awards:</span>
              <span>{movie.Awards}</span>
            </div>
          </div>

          {movie.Plot && (
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-2">Plot Summary</h3>
              <p className= " leading-relaxed">{movie.Plot}</p>
            </div>
          )}

          {/* Favorite Button */}
          <div className="mt-8">
            {
              isFavorite ?(
                <button
                className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-md text-lg font-semi-bold  shadow-lg transition-all duration-300"
                onClick={handleRemoveFavorite}
                >Remove From favorite</button>
              ):(
                <button
                className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-md text-lg font-semi-bold  shadow-lg transition-all duration-300"
                onClick={handleFavorite}
                >Add to Favorites</button>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
