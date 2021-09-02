import React from 'react'

const BdayList = ({people}) => {
    return (
        <>
        <h1>{people.length} Birtdays today</h1>
            {people.map((person)=>{
                const {id,name,age} = person;
                
                return (<>
                    
            <div className="card" styles="width: 18rem;">
            {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{age}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>
                </>)
            })}
            
        </>
    )
}

export default BdayList;