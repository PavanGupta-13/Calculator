import React, {useState} from 'react'
import rootReducer from '../redux/rootReducer'
import {connect, useSelector, useDispatch} from 'react-redux'
import buyCake from '../redux/cakes/cakeAction';

const CakeContainer = () => {
    const [num, setNum] = useState(1)
    const numOfCakes = useSelector(state => state.cakeReducer.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div style={{display:"flex", flexDirection: "column"}}>
           <h1>Remaining cakes are - {numOfCakes}</h1>
           <input type="text" value={num} onChange={(e)=>{setNum(e.target.value)}}></input>
           <button onClick={()=>dispatch(buyCake(num))}>Buy Cake</button>
        </div>
        
    )
}

// const mapStatetoProps = (state)=>{                                   //used useSelector
//     return {
//         numOfCakes: state.numOfCakes
//     }
// }

// const mapDispatchtoProps = (dispatch)=>{                             //used useDispatch
//     return {
//         buyCake : ()=>{dispatch(buyCake())}
//     }
// }

// export default connect(mapStatetoProps,mapDispatchtoProps)(CakeContainer);

export default CakeContainer;