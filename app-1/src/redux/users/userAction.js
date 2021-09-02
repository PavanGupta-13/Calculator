import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './userTypes.js'
import axios from 'axios'

export const userReq = ()=>{
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const userReqSuc = (users)=>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const userReqFail = (error)=>{
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUser = ()=>{
    return (dispatch)=>{
        dispatch(userReq())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(userReqSuc(users))
        })
        .catch(error=>{
            const errormsg = error.message
            dispatch(userReqFail(errormsg))
        })
    }
}

