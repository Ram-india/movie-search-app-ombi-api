import React, { useEffect, useState } from "react";
import { useMovieContext } from "../context/MovieContext";
import { getMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const SearchPage = () => {
  const { state, dispatch } = useMovieContext();

  const query = state.query;
  const filterType = state.filter;
  const currentPage = state.currentPage;
  const totalResults = state.totalResults;

  const [errorMessage, setErrorMessage] = useState("");

  // Handle API call and dispatch results
  const handleSearch = async () => {
    if (!query) {
      setErrorMessage("Please enter a search term.");
      dispatch({ type: "SET_MOVIES", payload: [] });
      dispatch({ type: "SET_TOTAL_RESULTS", payload: 0 });
      return;
    }

    try {
      const { movies, error, totalResults } = await getMovies(query, filterType, currentPage);

      if (error) {
        setErrorMessage(error);
        dispatch({ type: "SET_MOVIES", payload: [] });
        dispatch({ type: "SET_TOTAL_RESULTS", payload: 0 });
      } else {
        setErrorMessage("");
        dispatch({ type: "SET_MOVIES", payload: movies });
        dispatch({ type: "SET_TOTAL_RESULTS", payload: totalResults });
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  // Re-fetch on filter, page, or query change
  useEffect(() => {
    if (query) {
      handleSearch();
    }
  }, [query, filterType, currentPage]);

  return (
    <div className="p-4">
      <div className="container mx-auto">
        {/* Search Controls */}
        <div className="mx-auto p-10">
          <div className="mb-4  grid grid-cols-3 gap-2">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => dispatch({ type: "SET_QUERY", payload: e.target.value })}
              className="border rounded  px-4 py-2"
            />

            {/* Filter Type */}
            <select
              value={filterType}
              onChange={(e) => {
                dispatch({ type: "SET_FILTER", payload: e.target.value });
                dispatch({ type: "SET_CURRENT_PAGE", payload: 1 }); // reset to page 1
              }}
              className="border px-4 py-2 rounded"
            >
              <option value="">All</option>
              <option value="movie">Movies</option>
              <option value="series">Series</option>
              <option value="episode">Episodes</option>
            </select>

            {/* Search Button */}
            <button
              onClick={() => {
                dispatch({ type: "SET_CURRENT_PAGE", payload: 1 }); // Reset to first page
                handleSearch();
              }}
              className="bg-blue-600 rounded text-white px-4 py-2"
            >
              Search
            </button>
          </div>

          {/* Error Message */}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>

        {/* Movie Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {state.movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalResults={totalResults}
          onPageChange={(page) => dispatch({ type: "SET_CURRENT_PAGE", payload: page })}
        />
      </div>
    </div>
  );
};

export default SearchPage;