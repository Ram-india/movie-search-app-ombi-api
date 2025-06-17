import React from 'react'
import { Link } from 'react-router-dom'
import { useMovieContext } from '../context/MovieContext'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MovieCard = ({ movie }) => {
  const { state, dispatch } = useMovieContext();
  const isFavorite = state?.favorites?.some((fav) => fav.imdbID === movie.imdbID);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: movie });
    } else {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: movie });
    }
  };

  return (
    <div className="relative bg-gray-400 shadow-md rounded-2xl overflow-hidden hover:shadow-lg shadow-red-400 transition ">
      
      {/* Favorite icon */}
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow hover:bg-red-700 transition"
        title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      >
        {isFavorite ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-gray-400" />
        )}
      </button>

      {/* 🎬 Poster Image */}
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'}
        alt={movie.Title}
        className=" px-4 py-2  h-80 w-60 rounded-2xl object-cover"
      />

      {/* 📄 Movie Info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{movie.Title}</h2>
        <p className="text-sm text-gray-500 mt-1">
          {movie.Year} • {movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}
        </p>

        <Link
          to={`/movie/${movie.imdbID}`}
          className="inline-block mt-2 text-sm font-medium text-blue-600 hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;