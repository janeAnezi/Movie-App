import React from "react";

const MovieList = (props) => {
    return(
        <>
            <div className="overflow-x-auto">
                <div className='min-w-max'>
                    <div className="flex">
                        {props.movies.map((movie, index) => (
                            <div key={index} className="flex-shrink-0 p-5 relative transition-transform hover:cursor-pointer hover:scale-110  ">
                            <img src={movie.Poster} alt="movie" className="w-auto" />
                            <p className="text-center">{movie.Title}</p>
                            <div className="flex justify-center items-center absolute bg-slate-900 h-full w-80 transition ease-in-out opacity-0 bottom-0 text-2xl p-5 text-center  hover:opacity-30"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieList;