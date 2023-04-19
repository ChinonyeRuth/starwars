import './App.css'
import './index.css'
import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Header from './Header'

function App() {
  ;<Header />
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/films')
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
  }, [])

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <MovieCard key={movie.episode_id} movie={movie} />
      ))}
    </div>
  )
}
export default App
