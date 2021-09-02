import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import buyIceCream from '../redux/icecreams/iceCreamAction';

const IceCreamContainer = () => {
    const numOfIceCreams = useSelector(state => state.iceCreamReducer.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>IceCreams available are {numOfIceCreams}</h2>
            <button onClick={()=>dispatch(buyIceCream())}>Buy ICs</button>
        </div>
    )
}

export default IceCreamContainer;