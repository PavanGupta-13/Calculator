import React, { useEffect, useState } from 'react'

//local storage of elements
const getLocalstorage = ()=>{
    let list = localStorage.getItem('list')
    if(list){
        return JSON.parse(list)
    }else{
        return []
    }
}

const Groclist = () => {

    const[list,setList] = useState(getLocalstorage())
    const[flag,setFlag] = useState(false);
    const[name,setName] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name);
        setFlag(true);
        if(name){
            const newItem = {title:name}
            setList([...list,newItem]);
            setName('');
            console.log(name);
            console.log(list)
        }
    }

    const clearList = ()=>{
        setList([]);
    }

    useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(list))
    },[list])

    return (
        <>
        <div style={{display:"flex", textAlign:"center"}}>
            <form onSubmit={handleSubmit}>
                <h1>Groc List</h1>
                <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} />
                <input type="submit"/>
            </form>
            
        </div>
        {list.length > 0 && (<div>
            {/* <h1>this is list</h1> */}
            {list.map((i)=>{
                return(<>
                    <p>{i.title}</p></>)
                
            })}
        </div>)}
        <button onClick={clearList} style={{display:"flex"}}>Clear List</button>
    </>)
}


export default Groclist;