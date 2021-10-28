import React,{useState} from 'react';
import Data from './Data';

const Form = () => {

    const [prsn, setPrsn] = useState([])
    const [name,setName] = useState("")
    const [pass,setPass] = useState("")
    const [gen,setGen] = useState("")
    const [flag,setFlag] = useState(false)
    const [msg,setMsg] = useState('')

    let handleSubmit = (e)=>{
        e.preventDefault()
        sendVals(name,pass,gen)
        console.log(name,pass,gen)
    }

    let sendVals = ()=>{
        let newVals = []
        newVals.push(name,pass,gen)
        setPrsn(newVals)
    }

    let deleteRec = (flag,msg)=>{
        setPrsn([])
        setFlag(flag)
        setMsg(msg)
    }

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"500px"}}>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Name">Name:</label>
                    <input id="Name" type="text" onChange={(e)=>{setName( e.target.value)}}></input>
                </div>
                <div>
                    <label htmlFor="Pass">Password:</label>
                    <input id="Pass" type="password" onChange={(e)=>{setPass( e.target.value)}}></input>
                </div>
                <div>
                    <label htmlFor="Male">Male</label>
                    <input id="Male" type="radio" name="gender" onChange={()=>{setGen('M')}}></input>
                    <label htmlFor="Female">Female</label>
                    <input id="Female" type="radio" name="gender" onChange={()=>{setGen('F')}}></input>
                </div>
                <input type="submit"></input>
            </form>
            <Data prsn={prsn} deleteRec={deleteRec}></Data>
            {flag && <p>...{msg}</p>}
        </div>
        
        </div>
    )
}

export default Form;
