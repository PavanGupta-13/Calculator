// console.log("from index")
const redux = require('redux')                               //redux normal import 
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducer = redux.combineReducers                 //for combining reducers as a single reducer
const applyMiddleware = redux.applyMiddleware                //for applying any middle ware to the store
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_IC = 'BUY_ICECREAM'

//action creator fun returns an action
function buyCake(){ 
return {                                                     // action
    type: BUY_CAKE,
    info: 'first redux action'
    }
}

function buyIceCream(){
    return {
        type: BUY_IC
    }
}

// const initialState = {                                      // initalstate of the app as an obj
//     numOfCakes : 10,
//     numOfIC : 20
// }

const initalCakeState = {
    numOfCakes :10
}

const initalICState = {
    numOfIC :20
}

// const reducer = (state = initialState, action)=>{           //reducer as a fun with state and action as args. state takes initialstate
//     switch (action.type){
//         case BUY_CAKE: return{
//             ...state,                                       //spread operator on state to return state unchanged with only one param changed  
//             numOfCakes : state.numOfCakes - 1
//         }

//         case BUY_IC: return {
//             ...state,
//             numOfIC : state.numOfIC-1
//         }

//         default: return state
//     }
// }

const cakeReducer = (state=initalCakeState, action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes : state.numOfCakes - 1
        }
        default: return state
    }
}

const ICReducer = (state=initalICState, action)=>{
    switch(action.type){
        case BUY_IC: return{
            ...state,
            numOfIC :  state.numOfIC-1
        }
        default: return state
    }
}

const rootReducer = combineReducer({                            //invoking combinereducer to create a rootreducer having both reducers
    cake:cakeReducer,
    IC:ICReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))   //redux store holding the app state (state from reducer), applying middleware to the store
console.log('inital state', store.getState())
const unsubscribe  = store.subscribe(()=> {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()