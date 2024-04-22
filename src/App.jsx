import React, { useEffect, useState } from 'react';
// import NavBar from './Components/NavBar'
import MovieList from "./Components/MovieList";
import './index.css';
import MovieSubHeading from './Components/MovieSubHeading';
import SearchBox from './Components/SearchBox';
import AddToFavourites from './Components/AddToFavourites';
import RemoveFavourites from './Components/RemoveFavourites';
import Rows from './Components/Rows';
import requests from './request';
import Banner from './Components/Banner';

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

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem("Favourite Movies"));
    setFavourites(movieFavourites)
  }, [])
  const saveToLocalStorage = (item) => {
    localStorage.setItem("Favourite Movies", JSON.stringify(item));
  }

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [ ...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const removeFavouriteMovie = (movie) => {
    const filteredFavourites = favourites.filter((m) => m.imdbID !== movie.imdbID);
    setFavourites(filteredFavourites);
    saveToLocalStorage(filteredFavourites);
  }

  return (
    <>
      <div className=' bg-indigo-950 text-white'>
        <Banner />
        <div className='absolute top-0 right-10 pt-3 '>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <MovieList  movies={movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent={AddToFavourites}/>
        <Rows title="NETCHILL ORIGINALS" fetchURL={requests.fetchOriginals} />
        <Rows title="Trending Now" fetchURL={requests.fetchTrending}/>
        <Rows title="Action" fetchURL={requests.fetchActionMovies} />
        <Rows title="Romance" fetchURL={requests.fetchRomanceMovies} />
        

        <div className='flex justify-evenly'>
          <MovieSubHeading heading="FAVOURITES" />
        </div>

        <MovieList  movies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent={RemoveFavourites}/>
      </div>
      
    </>
  )
}

export default App
