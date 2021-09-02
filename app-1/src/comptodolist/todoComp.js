import React from 'react'

const TodoComp = ({todo, taskToggle}) => {
    // console.log({todo})
    return (
        <>
            <tr >
            <th scope="row" ></th>
            <td id={todo.id}  onClick={taskToggle} className={todo.complete ? "text-decoration-line-through" : ""} style={{cursor:"pointer"}}>{todo.task}</td>
            </tr>
        </>
    )
}

export default TodoComp;

