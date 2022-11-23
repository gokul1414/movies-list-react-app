import { Modal,show,Button } from "react-bootstrap";
import React, { useState } from "react";
import './App.css';



const API_lMG="https://image.tmdb.org/t/p/w500"
const MovieBox =({title,poster_path,vote_average,release_date
,overview})=>{

const [show,setShow]=useState(false);

const handleShow=()=>setShow(true);
const handleClose=()=>setShow(false);



    return(
        <div className="card text-center bg-secondray mb-3">

            <div className="card-body">
                <img className="card-img-top"  src={API_lMG+poster_path}/>
                <div className="card-body">
                    <div className="card-body">
                        <button type="button" className="btn btn-outline-warning" onClick={handleShow}>More Details</button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Details </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <img className="card-img-top" src ={API_lMG+poster_path}/>
                                <h3 className="tit">{title}</h3>
                                <h4>Ratings  :   {vote_average}</h4>
                                <h5>Relesed Date  :  {release_date}</h5>
                                <br>
                                </br>
                                <h6>Overview</h6>
                                <p>{overview}</p>

                            </Modal.Body>

                            <Modal.Footer>
                                <Button varient="secondar" className="btn-danger" onClick={handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MovieBox;