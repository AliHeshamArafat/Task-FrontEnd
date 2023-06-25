import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./MovieCon.module.css";
import Search from "./MoviesFilter";
import Movie from "./Movie";

const MOVIE_API = "http://www.omdbapi.com/?s=man&apikey=b98571b0";

function MovieCon() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(null);
  
    useEffect(() => {
      fetch(MOVIE_API)
        .then(res => res.json())
        .then(jsonres => {
          setMovies(jsonres.Search);
        });
    }, []);
  
    const search = searchValue => {
      setLoading(true);
      fetch(
        searchValue !== ""
          ? `http://www.omdbapi.com/?s=${searchValue}&apikey=b98571b0`
          : `http://www.omdbapi.com/?s=man&apikey=b98571b0`
      )
        .then(res => res.json())
        .then(jsonres => {
          setMovies(jsonres.Search);
          setLoading(false);
        });
    };
    const handleMovies = movies => {
      return loading ? (
        <span>Loading...</span>
      ) : movies !== undefined ? (
        movies.map((movie, index) => <Movie key={index} movie={movie} />)
      ) : (
        <span>There is no movie with such name.</span>
      );
    };
    return (
      <div className="container">
        
        <Search search={search} />
        <div className="row">{handleMovies(movies)}</div>
      </div>
    );
  };
  

export default MovieCon;