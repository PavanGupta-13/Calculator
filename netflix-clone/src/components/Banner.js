import React,{useState, useEffect} from 'react'
import instance from './axios'
import requests from './requests'

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(requests.fetchActionMovies)
            setMovie(request.data.results[Math.floor(Math.random()* request.data.results.length -1)])
            return request
        }
        fetchData()
    }, [])

    console.log(movie)

    return (
        <header style={{backgroundSize:"cover", backgroundImage:`url("https://image.tmdb.org/t/p/orginal${movie?.backdrop_path}")`, backgroundPosition:"center center", marginTop:"70px"}} className="banner">
            <div className="banner__contents">
                <h1 style={{color:"white"}}>{movie.title}</h1>
                <h3 style={{color:"white"}}>{movie.overview}</h3>
            </div>
        </header>
    )
}

export default Banner
