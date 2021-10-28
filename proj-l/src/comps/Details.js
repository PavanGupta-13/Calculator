import React from 'react'

const Details = (props) => {
    console.log(props.values.Name)
    return (
        <div style={{display:"flex"}}>
        <div className="card" style={{maxWidth:"200px"}}>
            <div style={{margin:"10px"}}><h3>{props.values.Name}</h3></div>
            <div style={{margin:"10px"}}>{props.values.SName}</div>
            <div style={{margin:"10px"}}>{props.values.Num}</div>
        </div>
        </div>
    )
}

export default Details
