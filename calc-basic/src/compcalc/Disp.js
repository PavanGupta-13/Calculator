import React,{useEffect, useState} from 'react'

const Disp = ({val}) => {

    const [que, setQue] = useState([])
    const [qDisp, setQdisp] = useState(true)
    const [ansDisp, setAnsdisp] = useState(false)
    const [operInd, setOperind] = useState([])
    const [j,setJ] = useState('')
    let dVal = ''
    let jit = 0
    const oper = ['+','-','x','/','%']
    val ? dVal = val : dVal='0'


    // let intArr =[]
    const evalVal = (q)=>{
        setQdisp(false)
        setAnsdisp(true)
        setOperind([])
        // let regX = new RegExp()
        let intArr = q.map((i)=>{
            if(/[0-9]/.test(i)){return parseInt(i)}
            else{return i}           
        })
        oper.map((i)=>{
            operInd.push(que.indexOf(i))
        })
        console.log(operInd)
        const op = operInd.findIndex((i)=>{
            return i!==-1
        })
        console.log(op)
        switch (oper[op]) {
            case '+':
                jit = intArr[0]+intArr[2] 
                setJ(jit)
                break;
            case '-':
                jit = intArr[0]-intArr[2] 
                setJ(jit)
                break;
            case 'x':
                jit = intArr[0]*intArr[2] 
                setJ(jit)
                break;
            case '/':
                jit = intArr[0]/intArr[2] 
                setJ(jit)
                break;
            default:
                break;
        }
        
    }

    useEffect(() => {
        val && que.push(val)
        // if(val===''){setQue([])}
        switch (val) {
            case '':
                {
                setQue([])
                setQdisp(true)
                setAnsdisp(false)
                }
                break;
            case '=':
                {
                    console.log('lets calc')
                    evalVal(que)
                }
                break;
        }
        console.log(que)
    }, [val])
    
    return (
        <div>
            <div style={{marginBottom:"20px", marginTop:"20px"}}>
            {qDisp && <input type="text" value={dVal} style={{height:"150px", width:"360px", border:"none", textAlign:"right", fontSize:"130px", paddingRight:"10px"}} readOnly="true"></input>}
            {ansDisp && <input type="text" value={j} style={{height:"150px", width:"360px", border:"none", textAlign:"right", fontSize:"130px", paddingRight:"10px"}} readOnly="true"></input>}
            
            {/* <button className="btn btn-primary" >Test</button> */}
            </div>
        </div>
    )
}

export default Disp


// console.log(operInd)
//         const ans = (operInd)=>{
//             operInd.map((i)=>{
//                 i!=-1 && setOp(oper[i])
//             })
//         }
//         ans(operInd)
//         console.log(op)