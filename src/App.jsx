import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import MovieList from './Components/MovieList'
import './index.css'
import MovieSubHeading from './Components/MovieSubHeading'
import SearchBox from './Components/SearchBox'
import AddToFavourites from './Components/AddToFavourites'
import RemoveFavourites from './Components/RemoveFavourites'

function App() {
  const [movies, setMovies] = useState([])
  const [favourites, setFavourites] = useState([])
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


  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [ ...favourites, movie];
    setFavourites(newFavouriteList);
  }

  const removeFavouriteMovie = (movie) => {
    const filteredFavourites = favourites.filter((m) => m.imdbID !== movie.imdbID);
    setFavourites(filteredFavourites);
  }

  return (
    <>
      <div className=' bg-indigo-950 text-white'>
        <NavBar />

        <div className='flex justify-evenly'>
          <MovieSubHeading heading="MOVIES" />
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>

        <MovieList  movies={movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent={AddToFavourites}/>

        <div className='flex justify-evenly'>
          <MovieSubHeading heading="FAVOURITES" />
        </div>

        <MovieList  movies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent={RemoveFavourites}/>
      </div>
      
    </>
  )
}

export default App
