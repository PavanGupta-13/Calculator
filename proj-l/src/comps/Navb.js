import React from 'react'
import { Link } from 'react-router-dom'


const Navb = () => {
    // let hover = {borderColor:"orange"}
    // let [click, setclick] = useState(false)
    return (
        <div>
            <div style={{backgroundColor:"#BE81B6", display:"flex"}}>
            <Link to="/home">
            <button style={{borderStyle:"none",color:"white", backgroundColor:"#BE81B6", paddingLeft:"20px",marginRight:"100px", fontWeight:"bold", marginLeft:"5px"}}><i className="fa fa-home" style={{marginRight:"5px"}}></i>HOME</button>
            </Link>
            <Link to="/form">
            <button style={{border:"none",color:"white", backgroundColor:"#BE81B6", marginRight:"100px", fontWeight:"bold", marginLeft:"5px"}}><i className="fa fa-wpforms" style={{marginRight:"5px"}}></i>FORM</button>
            </Link>
            <Link to="/ourteam">
            <button style={{border:"none",color:"white", backgroundColor:"#BE81B6", marginRight:"100px", fontWeight:"bold", marginLeft:"5px"}}><i className="fa fa-users" style={{marginRight:"5px"}}></i>GUESS YOUR AGE!</button>
            </Link>
            <button style={{border:"none",color:"white", backgroundColor:"#BE81B6", fontWeight:"bold", marginLeft:"5px"}}><i className="fa fa-comments" style={{marginRight:"5px"}}></i>FEEDBACK</button>
            
            </div>
        </div>
    )
}

export default Navb