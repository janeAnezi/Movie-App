import React from "react";

const MovieList = (props) => {
    return(
        <>
            <div className="overflow-x-auto">
                <div className='min-w-max'>
                    <div className="flex">
                        {props.movies.map((movie, index) => (
                            <div key={index} className="flex-shrink-0 p-5">
                            <img src={movie.Poster} alt="movie" className="w-auto" />
                            <p className="text-center">{movie.Title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieList;