import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MoviesList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
            <div className='image-container d-flex justify-content-start m-3'>
               <img src={movie.Poster} alt='movie'></img>
               <h2>{movie.title}</h2>
               <h3>{movie.releaseDate}</h3>
               <div className='overlay d-flex align-items-center justify-content-center'></div>
            </div>
           ))}
     </>
       );
    };

export default MoviesList;
