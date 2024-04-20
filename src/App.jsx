import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import MovieList from './Components/MovieList'
import './index.css'
import MovieSubHeading from './Components/MovieSubHeading'
import SearchBox from './Components/SearchBox'
import AddToFavourites from './Components/AddToFavourites'

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async (searchValue) => {
    try {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9591cb8`;
      const response = await fetch(url);
      const responseJson = await response.json();
  
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])

  return (
    <>
      <div className=' bg-indigo-950 text-white'>
        <NavBar />
        <div className='flex justify-evenly'>
          <MovieSubHeading heading="MOVIES" />
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <MovieList  movies={movies} favouriteComponent={AddToFavourites}/>
         
      </div>
      
    </>
  )
}

export default App
