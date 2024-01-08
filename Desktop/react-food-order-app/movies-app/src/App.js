// App.jsx
import React, { useCallback, useEffect, useState } from "react";
import { Spinner, Button } from "react-bootstrap";
import AddMovies from "./AddMovies";
import MoviesList from "./MoviesList";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [retrying, setRetrying] = useState(false);

  const fetchData = async () => {
    setError(false);
    setIsLoading(true);

    try {
      const response = await fetch("https://react-app-1e677-default-rtdb.firebaseio.com/movies.json");
      if (!response.ok) {
        throw new Error("Something went wrong....Retrying");
      }

      const data = await response.json();
      const loadedMovies = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));

      setMovies(loadedMovies);
    } catch (error) {
      console.log("ERROR", error.message);

      if (retrying) {
        setTimeout(() => {
          fetchData();
        }, 5000);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMoviesHandler = useCallback(() => {
    fetchData();
  }, [retrying]);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler, retrying]);

  const addMovieHandler = async (movie) => {
    try {
      const response = await fetch("https://react-app-1e677-default-rtdb.firebaseio.com/movies.json", {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add movie");
      }

      const data = await response.json();
      console.log("Successfully added:", data);

      // Update the local state with the new movie
      setMovies((prevMovies) => [
        ...prevMovies,
        {
          id: data.name, // Assuming Firebase returns the unique ID
          ...movie,
        },
      ]);
    } catch (error) {
      console.error("Error adding movie:", error.message);
    }
  };

  const deleteMovieHandler = async (id) => {
    try {
      const response = await fetch(`https://react-app-1e677-default-rtdb.firebaseio.com/movies/${id}.json`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete movie");
      }

      console.log("Successfully deleted:", id);

      // Update the local state by filtering out the deleted movie
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error("Error deleting movie:", error.message);
    }
  };

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
    content = <MoviesList movies={movies} onDeleteMovie={deleteMovieHandler} />;
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
      <AddMovies onAddMovie={addMovieHandler} />
      {content}
    </div>
  );
}

export default App;
