import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Users({dispId, closUser}) {

    let id = 0
    if(dispId>9){
        dispId%10!==0 ? id = dispId%10 : id=1
    }else{id = dispId}
    const url = `https://jsonplaceholder.typicode.com/users/${id}`
    const [userData, setUserData] = useState('')
    // const [dispUser, setDispUser] = useState(userData[dispId])

    useEffect(() => {
        axios.get(url)
             .then((res)=>{console.log(res.data)
            setUserData(res.data)})
             .catch((err)=>{console.log(err)})
    },[dispId])

    return (
        <div className="card" style={{padding:"20px"}}>
            <div style={{display:"flex"}}>
            <h6 style={{margin:"10px"}} className="display-6">USER DETAILS</h6>
            <button type="button" className="btn-close" aria-label="Close" onClick={()=>{closUser()}}></button>
            </div>
            <table className="table table-hover table-success table-striped">
                <tbody>
                    <tr><td>{userData.name}</td></tr>
                    <tr><td>{userData.email}</td></tr>
                    <tr><td>{userData.phone}</td></tr>
                </tbody>
            </table>

        </div>
    )
}

export default Users
