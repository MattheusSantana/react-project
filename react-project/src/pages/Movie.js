import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
const Movie = () => {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=fa1192549721df01a1fb28a7788e6608";
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=fa1192549721df01a1fb28a7788e6608&query=";
  
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(API_SEARCH + term)
    .then((res) => res.json())
    .then((data) => setMovies(data.results));
  }

  return (
    <>
      <div className="search" >
        <form onSubmit={handleSearch}>
          <input placeholder="Search.." onChange={(e) => setTerm(e.target.value)} required/>
          <button>Search</button>
        </form>
      </div>
      <div className="movies">
        {movies.map((movie, id) => (
          <MovieCard key={id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default Movie;
