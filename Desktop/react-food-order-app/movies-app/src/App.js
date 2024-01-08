import logo from "./logo.svg";
import "./App.css";
import Movies from "./Movies";
import { Spinner, Button } from "react-bootstrap";
import React, { useCallback, useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [retrying, setRetrying] = useState(false);


  const fetchMoviesHandler =useCallback(async ()=> {
    setError(false);
    setIsLoading(true);
    setRetrying(true); 

    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong....Retrying");
      }
      const data = await response.json();
      setMovies(data.results);
      setRetrying(false); // Stop retrying on successful fetch
    } catch (error) {
      console.log("ERROR", error.message);
      setError(error.message);

      // Retry the fetch after 5 seconds if retrying is true
      if (retrying) {
        setTimeout(() => {
          fetchMoviesHandler();
        }, 5000);
      }
    } finally {
      setIsLoading(false);
    }
  })

  useEffect(()=>{
    fetchMoviesHandler()
  },[fetchMoviesHandler])

  const handleCancelRetry = () => {
    setRetrying(false);
  };

  let content = <p>No Movies Found</p>;
  if (isLoading) {
    content = (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (movies.length > 0) {
    content = <Movies movies={movies} />;
  }
  if (error) {
    content = (
      <div>
        <p>{error}</p>
        {retrying && <Button onClick={handleCancelRetry}>Cancel Retry</Button>}
      </div>
    );
  }

  return (
    <div className="App">
      {content} <div></div>
    </div>
  );
}

export default App;
