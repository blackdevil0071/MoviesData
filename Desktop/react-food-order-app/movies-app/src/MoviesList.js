import React from "react";

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.episode_id}>
          <strong>Title:</strong> {movie.title}
          <br />
          <strong>Opening Crawl:</strong> {movie.opening_crawl}
          <br />
          <strong>Release Date:</strong> {movie.release_date}
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
