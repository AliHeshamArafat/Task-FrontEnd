import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MoviesList = (props) => {

  return (
    <>
      {props.movies.map((movie, index) => (
            <div className='image-container d-flex justify-content-start m-3'>
               <img src={movie.Poster} alt='movie'></img>
               <p>Title: <span class="font-normal text-base leadin-relaexed">{movie.title}</span></p>
               <p class="font-medium text-lg">Year of Release: <span class="font-normal text-base">{movie.Year}</span></p>
            </div>
           ))}
     </>
       );
    };

export default MoviesList;
