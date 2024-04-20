import React from "react";

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return(
        <> 
           
            <div className="overflow-hidden">
                <div className="flex flex-no-wrap">
                    {props.movies.map((movie, index) => (
                        <div key={index} className="flex-shrink-0 p-5 relative transition-transform hover:cursor-pointer hover:scale-110">
                            <img src={movie.Poster} alt="movie" className="w-auto" />
                            <p className="text-center">{movie.Title}</p>
                            <div onClick={() => props.handleFavouritesClick(movie)} className="flex justify-center items-center absolute bg-slate-900 h-20 w-[300px] transition ease-in-out opacity-0 bottom-10 text-sm text-center hover:opacity-90 hover:text-white">
                            <FavouriteComponent />
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

            
        </>
    )
}

export default MovieList;