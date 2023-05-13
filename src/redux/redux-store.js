import {applyMiddleware, combineReducers,  legacy_createStore as createStore} from 'redux' 
import thunk from 'redux-thunk'
import { authReducer } from '../firebase/firebase-config'
let reducers = combineReducers({  
    authReducer
})
let store = createStore(reducers, applyMiddleware(thunk))   
window.store= store
export default store