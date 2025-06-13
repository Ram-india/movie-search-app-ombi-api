import React from 'react'
import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard';

const FavoritesPage = () => {

    const {state} = useMovieContext();
    if(state.favorites.length === 0) {
        return (
            <p className='text-center'>No favorites added</p>
        )
    }


  return (
    <div className='p-4'>
        <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-4">
                {
                    state.favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default FavoritesPage