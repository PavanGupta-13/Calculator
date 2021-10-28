import React from 'react'
import background from "./street-light.jpg"


const PBody = () => {
    return (
        <div style={{backgroundImage:`url(${background})`, backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat', height:"100vh", opacity:"0.8"}}>
        </div>
    )
}

export default PBody