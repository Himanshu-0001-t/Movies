import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from './Context';

export default function Singlemovie() {
    const [Movies, setMovies] = useState("")
    const { id } = useParams()

    // Get Api Data 
    const GetMovieData = async (url) => {
        const res = await fetch(url)
        const data = await res.json();
        setMovies(data)
    }

    // Call Function 
    useEffect(() => {
        GetMovieData(`${API_URL}&i=${id}`)
    }, [id])
    return (
        <div className="container my-5">
            <div className="card border border-3 border-danger">
                <div className="row g-0">
                    <div className="col-md-4 mx-2 mx-lg-5 mx-md-5 mx-sm-2 mx-xxl-0 mx-xl-0">
                        <img src={Movies.Poster} className="img-fluid rounded-start m-4" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{Movies.Title}</h4>
                            <p className="card-text"> Actors : {Movies.Actors}</p>
                            <p className="card-text"> Country : {Movies.Country}</p>
                            <p className="card-text"> Language : {Movies.Language}</p>
                            <p className="card-text"> Released : {Movies.Released}</p>
                            <p className="card-text"> Type : {Movies.Type}</p>
                            <p className="card-text"> imdbRating : {Movies.imdbRating}</p>
                            <p className="card-text"> {Movies.totalSeasons ? "totalSeasons" + " " + Movies.totalSeasons : ""} </p>
                            <p className="card-text"> Plot: {Movies.Plot}</p>
                            <Link to={'/'} className="btn btn-primary m-2">Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
