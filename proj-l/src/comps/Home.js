import React from 'react'

const Home = () => {
    return (
        <div style={{width:"100vw",height:"500px",display:"flex", justifyContent:"center"}}>
        <div className="carousel carousel-dark slide" style={{height:"500px", maxWidth:"500px",color:"white",alignSelf:"center"}}>
            <p>
            Add .carousel-dark to the .carousel for darker controls, indicators, and captions. Controls have been inverted from their default white fill with the filter CSS property. Captions and controls have additional Sass variables that customize the color and background-color.
            </p>
        </div>
        </div>
    )
}

export default Home