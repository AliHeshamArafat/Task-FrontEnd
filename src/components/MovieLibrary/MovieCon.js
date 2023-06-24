import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import MoviesList from "./MoviesList";
import Button from "../UI/Button/Button";
import SearchBox from "../UI/SearchBox/SearchBox";

function MovieCon(props) {
  const [movies, setMovies] = useState([]);
  const [searchValue,setSearchValue] = useState('');

  const fetchMoviesHandler = async (searchValue) => {
    const url = `http://www.omdbapi.com/?apikey=b98571b0&s=${searchValue}`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);

    // if(response.response){
    // const transformedMovie = responseJson.Search.map(searchValue => {
    //     return {
    //         id: searchValue.i,
    //         title: searchValue.t,
    //         releaseDate: searchValue.y,
    //         type: searchValue.type,
    //     };
    // });
    // console.log(transformedMovie.title);
    // setMovies(transformedMovie);
    // console.log(setMovies);
    // console.log("Transformed1");
    // }

    if(responseJson.Search){
        setMovies(responseJson.Search);
        console.log("If statement");
    }    
  };

  useEffect(() => {
    fetchMoviesHandler(searchValue);
  }, [searchValue]);

  return (
      
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
           
        </div>
        <Button onClick={fetchMoviesHandler}>Search</Button>
        <div className="row">
        <MoviesList movies={movies}/>
        </div>
      </div>
  );
}

export default MovieCon;