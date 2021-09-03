import React,{useEffect, useState} from 'react'

const Disp = ({val}) => {


    return (
        <div>
            <div style={{marginBottom:"20px", marginTop:"20px"}}>
            <input type="text" value={val} style={{height:"150px", width:"360px", border:"none", textAlign:"right", fontSize:"130px", paddingRight:"10px"}} readOnly="true"></input>
            {/* <button className="btn btn-primary" >Test</button> */}
            </div>
        </div>
    )
}

export default Disp
