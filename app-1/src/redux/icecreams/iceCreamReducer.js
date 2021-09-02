import { BUY_ICECREAM } from "./icecreamTypes"

const iceIntialState = {
        numOfIceCreams:20
}

const iceCreamReducer = (state=iceIntialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:{
            return{
                ...state,
                numOfIceCreams : state.numOfIceCreams-1
            }
        }
        default: return{ ...state}
    }
}

export default iceCreamReducer;