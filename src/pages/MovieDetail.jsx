import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails } from '../services/api';

const MovieDetails = () => {

    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const data = await getMovieDetails(id);
            setMovie(data);
        }
        fetchDetails();
    }, [id]);
    if(!movie){
         return <div>Loading...</div>
    }

  return (
    <div className='p-4'>
        <div className="container mx-auto">
            <div className="grid grid-cols-2">
              <div className='movie-poster'>
              <img src={movie.Poster} alt={movie.Title} className='object-cover mb-4' />
                </div>  
              <div>
              <p className='text-2xl font-bold'>Movie name : {movie.Title}</p>
              {movie.Year && <p className='text-lg'>Year : {movie.Year}</p>}
                {movie.Rated && <p className='text-lg'>Rated : {movie.Rated}</p>}  
                {movie.Runtime && <p className='text-lg'>Runtime : {movie.Runtime}</p>}
                {movie.Genre && <p className='text-lg'>Genre : {movie.Genre}</p>}
                {movie.Director && <p className='text-lg'>Director : {movie.Director}</p>}
                {movie.Actors && <p className='text-lg'>Actors : {movie.Actors}</p>}
                {movie.Language && <p className='text-lg'>Language : {movie.Language}</p>}
                {movie.Country && <p className='text-lg'>Country : {movie.Country}</p>}
                {movie.Awards && <p className='text-lg'>Awards : {movie.Awards}</p>}
                {movie.imdbRating && <p className='text-lg'>IMDB Rating : {movie.imdbRating}</p>}   
                {movie.imdbVotes && <p className='text-lg'>IMDB Votes : {movie.imdbVotes}</p>}

                {movie.imdbID && <p className='text-lg'>IMDB ID : {movie.imdbID}</p>}
                {movie.Type && <p className='text-lg'>Type : {movie.Type}</p>}

                {movie.DVD && <p className='text-lg'>DVD : {movie.DVD}</p>}
                {movie.BoxOffice && <p className='text-lg'>Box Office : {movie.BoxOffice}</p>}

              </div>
            </div>
            
           
            <p>{movie.Plot}</p>
        </div>
    </div>
  )
}

export default MovieDetails