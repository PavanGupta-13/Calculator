import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Todo from './Todo'
import Users from './Users'
import "./TodoDisp.css"

function TodoDisp({url}) {

    
    const [todos, setTodos] = useState([1])
    const [displayUser, setDisplayUser] = useState(false)
    const [userId, setUserId] = useState(0)

    useEffect(() => {
        axios.get(url)
             .then((res)=>{
                 setTodos(res.data)
                 console.log(res.data)
             })
             .catch((err)=>{console.log(err)})
    }, [])

    const closUser = ()=>{
        setDisplayUser(false)
    }
    const dispUser = (id)=>{
        console.log(id)
        setUserId(id)
        setDisplayUser(true)
    }

    return (
        <div className="displayDiv" >
            {/* style={{display:"flex"}} */}
            {/* {todos.map((ele)=>(
                <h4>{ele.title}</h4>
            )
            )} */}
            {/* style={{maxWidth:"50%"}} */}
            <table className={"table table-dark table-hover todolist " + (displayUser && "opace")}>
                <tbody>
                        {todos.map((ele)=>(
                            <Todo data={ele.title} id={ele.id} dispUser={dispUser}/>
                        ))}
                </tbody>
            </table>
            {/* style={{marginLeft:"50px", maxHeight:"150px"}} */}
            {displayUser && <div className="card userDet"><Users dispId={userId} closUser={closUser}/></div>}
        </div>
    )
}

export default TodoDisp
