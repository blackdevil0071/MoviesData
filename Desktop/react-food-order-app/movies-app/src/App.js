import logo from "./logo.svg";
import "./App.css";
import Movies from "./Movies";
import MoviesList from "./MoviesList";
import React, { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMoviesHandler() {
    try {
      const response = await fetch('https://swapi.dev/api/films');
      const data = await response.json();
      setMovies(data.results);  // Just set data directly
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  return (
    <div className="App">
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      <Movies movies={movies} />
    </div>
  );
}

export default App;
