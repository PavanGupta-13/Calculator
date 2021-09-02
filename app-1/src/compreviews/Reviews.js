import React, { useState } from 'react';
import Data from './data';

const Reviews = () => {
    const next = ()=>{
        
        setCount((count)=>{
            let newCount = count+1;
            if(newCount<Data.length){
                return newCount;
            }else{
                return 0;
            }
        });
        console.log({count});
    }
    const [count,setCount] = useState(0);
    const {name,age,review} = Data[count];

    return (
        <>
        <h1>Our Reviews</h1>
        
        
            <div>
        <div >
            <div className="card" styles="width: 18rem;">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body" >
                <h1>{name}</h1>
                <h2>{age}</h2>
                <p className="card-text">{review}</p>
                <button onClick={next}>Click to change</button>
            </div>
            </div>
            </div>
        </div>
        
    </>)
}

export default Reviews;