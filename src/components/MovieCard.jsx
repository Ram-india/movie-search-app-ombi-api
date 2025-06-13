import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
  return (
    <div className='border p-4'>
        <img src={movie.Poster} alt={movie.Title} className='w-full h-40 object-cover'/>
        <h2 className='text-lg font-bold'  >{movie.Title}</h2>
        <Link to={`/movie/${movie.imdbID}`} className='text-blue-600'>Veiw</Link>

    </div>
  )
}

export default MovieCard