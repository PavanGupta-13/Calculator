import React, { useState } from 'react'
import './Background.css'
import clouds from './cloud--1024x667.jpg'
import rains from './gettyimages-1257951336.jpg'
import sunny from './sunshine_36366417_ver1.0-8.jpg'
// import Tempcomp from './Tempcomp'

export const Background = () => {

    const [images, setImages] = useState(0)
    const [bkg,setBkg] = useState('')

    const next = ()=>{
        if(images<2){
            let i = images
            
            // if(i===0){
            //     setBkg('#4365ac')
            // }else if(i===1){
            //     setBkg('#dee5f1')
            // }else setBkg('#294f50')
            i++
            setImages(i)
        }
        else{
            setImages(0)
            // setBkg('#4365ac')
        }
        
    }

    return (
        <div className="bkg" style={{background:bkg}}>

            
            
            {images===0 && <div className="weatherback">
                <img className="images" style={{zIndex:"1"}} src={clouds} alt=""></img>
            </div>}

            {images===1 && <div className="weatherback">
                <img className="images" style={{zIndex:"2"}} src={rains} alt=""></img>
            </div>}

            {images===2 && <div className="weatherback">
                <img className="images" style={{zIndex:"3"}} src={sunny} alt=""></img>
            </div>}

            <div>
            <button onClick={next}>Next</button>
            </div>
            
        </div>
    )
}

export default Background