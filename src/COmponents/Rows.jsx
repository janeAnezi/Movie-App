import React, { useEffect, useState } from 'react';
import axios from '../axios'; // Assuming axios.js is in the parent directory

function Rows({ title, fetchURL, props }) {
    


  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchURL);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [fetchURL]);

  console.log(movies);

  return (
   
    <div className="overflow-hidden">
        <h2>{title}</h2>
        <div className="flex flex-no-wrap">
            {movies.map((movie, index) => (
                <div key={index} className="flex-shrink-0 p-5 relative transition-transform hover:cursor-pointer hover:scale-110">
                    <img src={movie.poster_path} alt={movie.name} className="w-auto" />
                    <p className="text-center">{movie.name}</p>
                    <div onClick={() => handleFavouritesClick(movie)} className="flex justify-center items-center absolute bg-slate-900 h-20 w-[300px] transition ease-in-out opacity-0 bottom-10 text-sm text-center hover:opacity-90 hover:text-white">
                    
                    </div>
                </div>
            ))}
        </div>
        <style jsx>{`
            .flex-no-wrap {
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
            }
            .flex-no-wrap::-webkit-scrollbar {
            display: none; 
            }
            `}
        </style>
    </div>
  );
}

export default Rows;
