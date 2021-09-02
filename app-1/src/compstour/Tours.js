import React from 'react'

const Tours = ({tour}) => {

    return(<>
        {tour.map((t)=>{
            const{place,cost}=t;
            return (<>
            <h1>place is {place}</h1>
        <h1>cost is {cost}</h1>
        {/* <button onClick={delData}>Click here to del</button> */}
        </>)
        })}
        
    </>);

    
    
}

export default Tours;