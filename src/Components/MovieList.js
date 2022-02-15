import React from "react";

const MovieList = (props) => {
  return (
    // <>
    //   {props.movies.map((movie, index) => {
    //     return <div>{<img src={movie.Poster} alt="movies" />}</div>;
    //   })}
    // </>
    <>
      {props.movies.map((movies) => (
        <div>{<img src={movies.Poster} alt="movies" />}</div>
      ))}
    </>
  );
};

export default MovieList;
