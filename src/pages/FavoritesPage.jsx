import React from 'react'
import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard';

const FavoritesPage = () => {

    const {state,dispatch} = useMovieContext();

    if(state.favorites.length === 0) {
        return (
            <p className='text-center'>No favorites added</p>
        )
    }



  return (
    <div className='p-4'>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">My Favorites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {state.favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FavoritesPage