import React, {useState} from "react";
import { Modal,show } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import './Movie.css';


const Movie = ({ movie }) => {

    const [show, setShow] = useState(false);

    const handleShow=() => setShow(true);
    const handleClose=() => setShow(false);
    
  return (
    <div className="col-md-3">
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title text-center">{movie.Title}</h5>
        
        <img src={movie.Poster} className="card-img-top" />
        <button type="button" className="btn btn-dark" onClick={handleShow}>More about this </button>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="card-img-top" src={movie.Poster} />
                <h3>{movie.Title}</h3>
                <h4>Type: {movie.Type}</h4>
                <p>The Main Plot: {movie.Plot}</p>
                <h3>Year of Release: {movie.Year}</h3>
                <br></br>
                <h6>Overview</h6>
                <p>Long written overview, sorry the omdb api didn't offer such option..</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="button" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
        <p>({movie.Year})</p>
      </div>
    </div>
  );
};

export default Movie;