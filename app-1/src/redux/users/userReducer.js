import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './userTypes'

export const initialState = {
    loadingFlag: false,
    Data: [],
    error: ''
}

const userReducer = (state=initialState,action)=>{
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loadingFlag: true
            }
            
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loadingFlag: false,
                Data: action.payload
            }
                
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loadingFlag: false,
                error: action.payload
            }
                        
        default:
            return {...state};
    }
}

export default userReducer