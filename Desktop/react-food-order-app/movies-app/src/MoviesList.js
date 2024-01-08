// MoviesList.jsx
import React from "react";
import { Button } from "react-bootstrap";

const MoviesList = ({ movies, onDeleteMovie }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <strong>Title:</strong> {movie.title}
          <br />
          <strong>Opening Crawl:</strong> {movie.opening_crawl}
          <br />
          <strong>Release Date:</strong> {movie.release_date}
          <Button variant="danger" onClick={() => onDeleteMovie(movie.id)}>
            Delete
          </Button>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
