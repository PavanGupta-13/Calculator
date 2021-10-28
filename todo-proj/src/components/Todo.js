import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Todo({data, id, dispUser}) {

    // const [state, setstate] = useState('')
    // console.log(data)

    return (
        <>
            <tr key={id}>
                <td>{id}</td>
                <td>
                    {data}
                </td>
                {data && <td>
                    <button className="btn btn-light" onClick={()=>{dispUser(id)}}>UserData</button>
                </td>}
            </tr>
        </>
    )
}

export default Todo
