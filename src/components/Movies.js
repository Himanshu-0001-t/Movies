import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobal } from './Context'
import '../index.css'

export default function Movies() {
    const { Movies, Totalresult, Userquary, scrolltop, visibal } = useGlobal()
    return (
        <>
            <div className="container mx-auto">
                <h5 className='text-center mt-5'>{Totalresult ? `Totalresult For ${Userquary}` + " : " + Totalresult : "Movie Not Found"}</h5>

                <div className="row">
                    {Movies.map((currmovie) => {
                        return (
                            <div className="card my-3 col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 border-0" key={currmovie.imdbID}>
                                <Link to={`movies/${currmovie.imdbID}`} className='text-decoration-none'>
                                    <img src={currmovie.Poster} className="card-img-top my-3" alt="NOT FOUND" />
                                    <h5 className="card-title text-center text-dark text-decoration-none">{currmovie.Title ? currmovie.Title.substring(0, 15) : ""}</h5>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <button className='btn btn-success mybtn ' onClick={scrolltop} style={{ display: visibal ? 'inline' : 'none' }} >Go To Top</button>
            </div>
        </>
    )

}
