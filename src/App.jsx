import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import MovieList from './Components/MovieList'
import './index.css'

function App() {
  const [movies, setMovies] = useState([
    {
      "Title": "Star Wars: Episode VIII - The Last Jedi",
      "Year": "2017",
      "imdbID": "tt2527336",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode IX - The Rise of Skywalker",
      "Year": "2019",
      "imdbID": "tt2527338",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"
    },
    {
    "Title": "Star Wars: Episode IV - A New Hope",
    "Year": "1977",
    "imdbID": "tt0076759",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
    },
    {
    "Title": "Star Wars: Episode II - Attack of the Clones",
    "Year": "2002",
    "imdbID": "tt0121765",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
    },
    {
    "Title": "Rogue One: A Star Wars Story",
    "Year": "2016",
    "imdbID": "tt3748528",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
    }
  ])

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
