import React, { useState } from 'react';
import "./accordion.css";

export const Accordion = ({number}) => {

    
    const[hide,setHide] = useState(false);
    return <>
    {/* // let n  = number.length-1;

    // let cardEle = (<>
    //     <div className="card" style={{width: "18rem"}}>
    //     <img src="..." className="card-img-top" alt="..."/>
    //     <div className="card-body">
    //         <h5 className="card-title">Card title</h5>
    //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //         <a href="#" className="btn btn-primary">Go somewhere</a>
    //     </div>
    //     </div>
    // </>) */}
    
    {number.map((n,index)=>{
        
        return(<>
            <div className="card" style={{width: "18rem"}} key={index}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                {hide?
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                <a className="hov" onClick={()=>{setHide(!hide)}}>see less</a></p>:
                <a className="hov" onClick={()=>{setHide(!hide)}}>click to see more</a>}
                {/* <a href="#" className="btn btn-primary" onClick={()=>{setHide(!hide)}}>Go somewhere</a> */}
            </div>
            </div>
        </>)
    })}

</>}

export default Accordion;


// {{backgroundColor: bgColors.Yellow}}