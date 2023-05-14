import {applyMiddleware, combineReducers,  legacy_createStore as createStore} from 'redux' 
import thunk from 'redux-thunk'
import  {authReducer}  from './authReducer' 
import { bookingReducer } from './bookingReducer'
let reducers = combineReducers({  
     authReducer, 
     bookingReducer
})
let store = createStore(reducers, applyMiddleware(thunk))   
window.store= store
export default store