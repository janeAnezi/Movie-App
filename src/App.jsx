import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import MovieList from './Components/MovieList'
import './index.css'
import MovieSubHeading from './Components/MovieSubHeading'
import SearchBox from './Components/SearchBox'

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async() => {
    const url = 'http://www.omdbapi.com/?s=alice&apikey=9591cb8';
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);

    setMovies(responseJson.Search);

  }

  useEffect(() => {
    getMovieRequest();
  }, [searchValue])

  return (
    <>
      <div className=' bg-indigo-950 text-white'>
        <NavBar />
        <div className='flex justify-evenly'>
          <MovieSubHeading heading="MOVIES" />
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <MovieList  movies={movies}/>
         
      </div>
      
    </>
  )
}

export default App
