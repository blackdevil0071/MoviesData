import React from "react";
import MoviesList from "./MoviesList";

const Movies = (props) => {
  const { movies } = props;

  return (
    <>
      <h2>Movies</h2>
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
