import { createContext, useContext, useReducer } from "react";
import movieReducer from "./movieReducer";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const initialState = {
    movies: [],
    favorites: [],
    query: "",
    filterType: "",
    currentPage: 1,
    totalResults: 0,
  };

  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
export const useMovieContext = () => useContext(MovieContext);
