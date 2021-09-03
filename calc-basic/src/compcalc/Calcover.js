import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Disp from './Disp';

const Calcover = () => {
    
    const [val,  setVal] = useState();

    const setDisp = (i)=>{
        console.log(i)
        setVal(i)
    }


    return (<>
        
        <Disp val={val}/>


        <div style={{display:"grid"}}>
            <div>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em"}}>AC</button>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em"}}>=</button>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em"}} onClick={()=>setDisp('%')}>%</button>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em", background:"rgb(255, 173, 22)", color:"white"}} onClick={()=>setDisp('/')}>&#247;</button>
            </div>

            <div style={{marginTop:"20px"}}>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em", background:"#474540", color:"white"}} onClick={()=>setDisp('7')}>7</button>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em", background:"#474540", color:"white"}} onClick={()=>setDisp('8')}>8</button>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em", background:"#474540", color:"white"}} onClick={()=>setDisp('9')}>9</button>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em", background:"rgb(255, 173, 22)", color:"white"}} onClick={()=>setDisp('x')}>&#215;</button>
            </div>

            <div style={{marginTop:"20px"}}>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em", background:"#474540", color:"white"}} onClick={()=>setDisp('4')}>4</button>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em", background:"#474540", color:"white"}} onClick={()=>setDisp('5')}>5</button>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em", background:"#474540", color:"white"}} onClick={()=>setDisp('6')}>6</button>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em", background:"rgb(255, 173, 22)", color:"white"}} onClick={()=>setDisp('-')}>&#8722;</button>
            </div>

            <div style={{marginTop:"20px"}}>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em", background:"#474540", color:"white"}}onClick={()=>setDisp('1')}>1</button>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em", background:"#474540", color:"white"}}onClick={()=>setDisp('2')}>2</button>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em", background:"#474540", color:"white"}}onClick={()=>setDisp('3')}>3</button>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em", background:"rgb(255, 173, 22)", color:"white"}} onClick={()=>setDisp('+')}>&#43;</button>
            </div>

            <div className="d-flex justify-content-center" style={{marginTop:"20px"}}>
            <button style={{marginRight:"20px",borderRadius:"40px",border:"none", height:"80px", width:"180px", fontSize:"2em", textAlign:"left", paddingLeft:"20px", background:"#474540", color:"white", gridColumn:"1/span2"}} onClick={()=>setDisp('0')}>0</button>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em", background:"#474540", color:"white"}} onClick={()=>setDisp('%')}>%</button>
            <button style={{ marginRight:"20px",borderRadius:"50%",border:"none", height:"80px", width:"80px", fontSize:"2em", background:"rgb(255, 173, 22)", color:"white"}} onClick={()=>setDisp(".")}>&#46;</button>
            </div>
            
        </div>
    </>)
}

export default Calcover

