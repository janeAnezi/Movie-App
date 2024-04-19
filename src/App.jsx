import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import MovieList from './Components/MovieList'
import './index.css'

function App() {
  const [movies, setMovies] = useState([])

  const getMovieRequest = async() => {
    const url = 'http://www.omdbapi.com/?s=star wars&apikey=9591cb8';
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);

    setMovies(responseJson.Search);

  }

  useEffect(() => {
    getMovieRequest();
  }, [])

  return (
    <>
      <div className=' bg-indigo-950 text-white'>
        <NavBar />
        <MovieList  movies={movies}/>
         
      </div>
      
    </>
  )
}

export default App
