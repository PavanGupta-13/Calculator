
import React, { useState, useEffect } from 'react'
import instance from './axios'
import './Rowstyles.css'

const base_url = "https://image.tmdb.org/t/p/orginal"

function Row( {title, fetchUrl, isLargeRow}) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        
        async function fetchData(){
            const request = await instance.get(fetchUrl)
            console.log(request.data.results)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])

    // console.log(`${base_url}${movies[0].poster_path}`)
    return (
        <div className="row">
           <h2 className="title">{title}</h2>
           <div className="row__posters">
           {/* <img src = "https://image.tmdb.org/t/p/orginal/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg"/> */}
            {movies.map((movie)=>{
                // console.log(movie.poster_path)
                return(
                <>
                <img key={movie.id} className={`images ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                {/* console.log(movie.poster_path)     */}
                {/* <h1>{`${base_url}${movie.poster_path}`}</h1> */}
                </>
            )})}
            
           </div>
        </div>
    )
}

export default Row
