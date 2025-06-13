import React, { useState } from 'react'
import { useMovieContext } from '../context/MovieContext';
import { getMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

const SearchPage = () => {
const {state,dispatch} = useMovieContext();
const[query, setQuery] = useState('');
console.log(state.movies);
const handleSearch = async() =>{
    const res = await getMovies(query);
   
    if(res.Search){
        dispatch({
            type:'SET_MOVIES',
         payload: res.Search
        });
    }else{
        throw new Error('Error fetching data');
    }
    
}
  return (
    <div className='p-4'>
        <div className="container mx-auto">
            <div className="mb-4">
                <input 
                type="text" 
                placeholder='search ...'
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
                className='border rounded w-full px-4 py-2'/>
                <button onClick={handleSearch} className='bg-blue-600 text-white px-4 py-2'>Search</button>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
                {
                    state?.movies?.map((movie) => (
                    
                        <MovieCard key={movie.imdbID} movie={movie} />
                        ))
                    }
                    
            </div>
            <Pagination/>
        </div>
    </div>
  )
}

export default SearchPage