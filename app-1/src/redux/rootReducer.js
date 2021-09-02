import cakeReducer from './cakes/cakeReducer';
import { combineReducers } from 'redux';
import iceCreamReducer from './icecreams/iceCreamReducer';
import userReducer from './users/userReducer';

const rootReducer = combineReducers({
    cakeReducer,
    iceCreamReducer,
    userReducer
})

export default rootReducer;
