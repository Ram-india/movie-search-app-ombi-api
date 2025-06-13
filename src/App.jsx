import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import { MovieProvider } from "./context/MovieContext"
import SearchPage from "./pages/SearchPage"
import MovieDetails from "./pages/MovieDetail"
import FavoritesPage from "./pages/FavoritesPage"


function App() {


  return (
    <MovieProvider>
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<SearchPage/>} />
            <Route path="/favorites" element={<FavoritesPage/>} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            
          </Routes>
      </Router>

   
    </MovieProvider>

  )
}

export default App
