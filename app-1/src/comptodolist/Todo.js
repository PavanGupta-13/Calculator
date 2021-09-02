import React, { useEffect, useState } from 'react';
import listItems from './data';
import TodoComp from './todoComp';

const Todo = () => {

    const [todoList,setTodolist] = useState(listItems);
    const [cleared,setCleared] = useState(false)
    const [newItem,setnewItem] = useState("")
    const [glow,setGlow] = useState(false)

    
    const taskToggle = (id)=>{
        console.log(id.target.id)
        let mapped = todoList.map((task)=>{
            // if(task.id === parseInt(id.target.id)){
                
            //     return {...task,complete:true}
            // }else{return {...task}}
            return task.id === parseInt(id.target.id) ? {...task,complete:!task.complete} : {...task}
        })
        setTodolist(mapped);
        console.log(todoList)
    }

    const filterList = ()=>{
        let filterd = todoList.filter((task)=>{
            setCleared(true)
            return !task.complete
        })
        setTodolist(filterd)
    }

    const newList = (e)=>{
        e.preventDefault();
        // console.log(newItem)
        
        // console.log(newList)
        let newList = todoList.concat({"id": todoList.length+1, "task": newItem, "complete": false})
        setTodolist(newList)
        // console.log(document.getElementById("txtbx"))
        let ele = document.getElementById("txtbx")
        
    }
    
    const items =todoList.map(i=>{
        return(
            <>
                <TodoComp todo={i} taskToggle={taskToggle}/>
            </>
        )
    })

    useEffect(()=>{
       const timeout =  setTimeout(()=>{setCleared(false)},3000)
       return ()=> clearTimeout(timeout)
    },[cleared])

    return(
    <>
        <h1 style={{textAlign:"center"}} className="fw-bold font-monospace">TODO LIST</h1>
        
        <form onSubmit={newList}>
        <input id="txtbx" type="text" placeholder="Enter a new Task" onClick={()=>{setGlow(!glow)}} style={{marginBottom:"20px", boxShadow: glow && "0 0 0 0.2rem rgba(40, 167, 69, 0.25)"}} onChange={(e)=>{setnewItem(e.target.value)}}></input>
        <input type="submit" className="btn btn-success" style={{marginLeft:"20px"}}></input>
        </form>
        {cleared && <h3>Pending Tasks are:</h3>}
        <table className="table table-dark table-striped">
        <tbody>
        {items}
        </tbody>
        </table>     
        
        <button onClick={filterList} className="btn btn-danger" style={{marginLeft:"50%"}}>Clear List</button>   
    </>
    )
}

export default Todo;

//text-decoration-line-through

{/* <tr key={i.id}>
            <th scope="row" ></th>
            <td className={status && "text-decoration-line-through"} style={{cursor:"pointer"}}>{i.task}</td>
< */}

{/* <>
        <h1 style={{textAlign:"center"}} className="fw-bold font-monospace">TODO LIST</h1>
        <table className="table table-dark table-striped">
        <tbody>
        {items}
        </tbody>
        </table>        
</> */}