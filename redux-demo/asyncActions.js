const redux = require('redux')
const thunk = require('redux-thunk').default
const axios = require('axios').default
const createStore = redux.createStore
const combineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware


const appState = {
    loading: false,
    users: [],
    error: ''
}

const FETECH_USER_REQUEST = "FETECH_USER_REQUEST"
const FETECH_USER_SUCCESS = "FETECH_USER_SUCCESS"
const FETECH_USER_FAILURE = "FETECH_USER_FAILURE"
 
function userReq(){
    return {
        type: FETECH_USER_REQUEST
    }
}

function userReqSuccess(usesrs){
    return{
        type: FETECH_USER_SUCCESS,
        payload: usesrs
    }
}

function userReqFailure(error){
    return{
        type: FETECH_USER_FAILURE,
        payload: error
    }
}

const userReqReducer = (state=appState,action)=>{
    switch(action.type){
        case FETECH_USER_REQUEST: return{
            ...state,
            loading : true
        }
        default: return state
    }
}

const userSuccessReducer = (state=appState,action)=>{
    switch(action.type){
        case FETECH_USER_SUCCESS: return{
            ...state,
            loading : false,
            users : action.payload
        }
    default: return state
    }
}

const userFailureReducer = (state=appState,action)=>{
    switch(action.type){
        case FETECH_USER_FAILURE: return{
            ...state,
            loading : false,
            error : action.payload
        }
    default: return state
    }
}

const fetchUsers = ()=>{
    return function(dispatch){
        dispatch(userReq())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            const users = response.data.map(user => user.id)
            dispatch(userReqSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(userReqFailure(errorMsg))
        })
    }
}

const rootReducer = combineReducer({
    Req : userReqReducer,
    Success : userSuccessReducer,
    Failure : userFailureReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())