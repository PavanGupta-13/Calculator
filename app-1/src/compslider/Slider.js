import React, { useState } from 'react';
import Items from './data';

const Slider = ({items}) => {

    const [i,setI] = useState(0);

    const next =()=>{
        
        setI((i)=>{
            let newI=i+1;
            if(newI<Items.length){
                return newI;
            }else{
                return 0;
            }
        })
    }

    const prev =()=>{
        setI((i)=>{
            let newI=i-1;
            if(newI<0){
                return Items.length-1;
            }else{
                return newI;
            }
        })
    }

    // const autoSlide = ()=>{
    //     setInterval(()=>{
    //         next()
    //     },3000)
    //     clearInterval(autoSlide);
    // }

    let ele = (<>
        <div style={{display:"flex"}} key={items[i].id}>
        <div className="card" style={{width: "18rem", justifyContent:"center", alignItems:"center", marginTop:"200px"}}>
        <div className="card-body">
            <h5 className="card-title">{items[i].title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{items[i].category}</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
        <span><svg xmlns="http://www.w3.org/2000/svg" style={{width:"30", height:"30", fill:"currentColor", marginRight:"40px"}} className="bi bi-arrow-left-circle" viewBox="0 0 16 16" onClick={prev}>
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" style={{width:"30", height:"30", fill:"currentColor", marginLeft:"40px"}} className="bi bi-arrow-right-circle" viewBox="0 0 16 16" onClick={next}>
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg></span>
        
        </div>
        </div>
        </>)

    return(<>
    <h1 className="display-1" style={{textAlign:"center"}}>SLIDER CONTENT</h1>{ele}</>)
}


export default Slider;


