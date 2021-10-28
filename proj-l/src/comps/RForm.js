import React, { useEffect, useState } from 'react'
import Details from './Details'
import Lights from './Lights'

const getlocalstorag = ()=>{
    let Name = localStorage.getItem('Name')
    let SName = localStorage.getItem('SName')
    let Num = localStorage.getItem('Num')
    if(Name || SName || Num){
        return({Name:Name,SName:SName,Num:Num})
    }else{
        return({Name:"",SName:"",Num:""})
    }
}

const RForm = (props) => {
    const [lights,setLights] = useState([])
    const [card,setCard] = useState([])
    const [values,setValues] = useState(getlocalstorag())
    const [disp,setDisp] = useState(false)



    const modifyVals = (e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        if(values.Name && values.SName && values.Num>0){
            setDisp(true)
        }
        lightsD(values)
        console.log(values)
        
    }

    useEffect(() => {
        localStorage.setItem('Name',values.Name)
        localStorage.setItem('SName',values.SName)
        localStorage.setItem('Num',values.Num)
        let newCards = card
        newCards.push(<div style={{margin:"20px"}}><Details values={values}/><div style={{display:"flex"}}>{lights}</div></div>)
        setCard(newCards)
    }, [values])



    const lightsD = (values)=>{
        let newLights = []
        for (let i=0;i<values.Num;i++){
            newLights.push(<div style={{display:"flex", marginRight:"20px"}} key={i}><Lights/></div>)
        }
        setLights(newLights)
    }

    const sendName = ()=>{
        props.recieveName(values.Name)
    }

    // const clearDetails = ()=>{
    //     setDisp(false)
    //     setValues({Name:"",SName:"",Num:""})
    //     setLights([])
    // }


    return (
        <div style={{width:"100vw", maxHeight:"800px"}}>
        <div style={{display:"flex", justifyContent:"center", opacity:"0.9", maxHeight:"800px"}}>
            
            <form className="card" style={{height:"300px",padding:"20px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <div style={{display:"flex"}}><h2>APPLICATION FORM</h2> <input type="reset" style={{alignSelf:"flex-end", justifySelf:"flex-end"}}></input></div>
                <div style={{alignSelf:"flex-start", margin:"20px"}}>
                    <label htmlFor="Name">NAME:</label>
                    <input name="Name" type="text" placeholder="Name" style={{marginLeft:"203px"}} onChange={modifyVals}></input>
                </div>
                <div style={{alignSelf:"flex-start", margin:"20px"}}>
                    <label htmlFor="SName">STREET NAME:</label>
                    <input name="SName" type="text" placeholder="Street Name" style={{marginLeft:"148px"}} onChange={modifyVals}></input>
                </div>
                <div style={{alignSelf:"flex-start", margin:"20px"}}>
                    <label htmlFor="Num">NUMBER OF STREET LIGHTS:</label>
                    <input name="Num" type="number" placeholder="Num" style={{marginLeft:"50px"}} onChange={modifyVals}></input>
                </div>
                <input className="btn btn-success" type="submit" onClick={handleSubmit}></input>
            </form>
            <button onClick={sendName}></button>
        </div>
        {disp&&<div style={{margin:"20px"}}><Details values={values}/><div style={{display:"flex"}}>{lights}</div></div>}
        </div>
    )
}

export default RForm