import logo from "./logo.svg";
import "./App.css";
import Movies from "./Movies";
import { Spinner } from "react-bootstrap";
import React, { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    console.log("Button Clicked");
    try {
      const response = await fetch("https://swapi.dev/api/films");
      const data = await response.json();

      setMovies(data.results);
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="App">
      <button onClick={fetchMoviesHandler}>Fetch Movies</button><pre></pre>
      {!isLoading && movies.length > 0 && <Movies movies={movies} />}
      {isLoading && (
        <Spinner animation="border" role="status">
          <span  className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!isLoading && movies.length === 0 && <p>No Movies Found</p>}
      <div></div>
    </div>
  );
}

export default App;
