import React from "react";

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return(
        <>
            <div className="overflow-x-auto">
                <div className='min-w-max'>
                    <div className="flex">
                        {props.movies.map((movie, index) => (
                            <div key={index} className="flex-shrink-0 p-5 relative transition-transform hover:cursor-pointer hover:scale-110  ">
                            <img src={movie.Poster} alt="movie" className="w-auto" />
                            <p className="text-center">{movie.Title}</p>
                            <div className="flex justify-center items-center absolute bg-slate-900 h-20 w-[300px] transition ease-in-out opacity-0 bottom-10 text-sm text-center hover:opacity-90 hover:text-white">
                                <FavouriteComponent />
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieList;