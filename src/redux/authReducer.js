import { auth } from "../firebase/firebase-config" 
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut, onAuthStateChanged, updateProfile} from "firebase/auth"

const LOG_IN = 'LOG_IN' 
const LOG_OUT = 'LOG_OUT'
const ADD_SCORE = 'ADD_SCORE'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING' 

const initialState = { 
    email: null,
    token: null,
    id: null, 
    score: 0,  
    isFetch: false
}
export const authReducer = (state = initialState, action) =>{ 
     
    switch(action.type){  
        case LOG_IN: {  
            
            return {  
                ...state, 
                ...action.data
            } 
        }
        case LOG_OUT: { 
            return { 
                ...state, 
                ...action.data
            }
        } 
        case ADD_SCORE: {  
            
            return{ 
                ...state, 
                score: action.data
            }
        } 
        case TOGGLE_FETCHING: {  
            
            return{ 
                ...state, 
                isFetch: action.data
            }
        }
        default: 
        return state
    }
}   
//Action Creators
export const setUserAC = (data) =>({type: LOG_IN, data})
// const logOutAC = (data) => ({type: LOG_OUT, data})
export const addScoreAC = (data) => ({type: ADD_SCORE, data})
export const toggleFetchingAC = (data) => ({type: TOGGLE_FETCHING, data})
//ThunkCreators 
export const logInUserTC = (email, password)=> (dispatch) => { 
    dispatch(toggleFetchingAC(true))
    signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(setUserAC({email: user.email,id: user.uid,token: user.accessToken,}))
            console.log(user) 
            dispatch(toggleFetchingAC(false))  
        }) 
        .catch(console.error)
        .finally( dispatch(toggleFetchingAC(false)))
    }   

export const signInUserTC = (email, password) => (dispatch) =>{  
    dispatch(toggleFetchingAC(true)) 
    createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => { 
        dispatch(setUserAC({
            email: user.email,
            id: user.uid,
            token: user.accessToken, 
        }))  
        dispatch(addScoreTC(5))})
    .catch(console.error) 
    .finally( dispatch(toggleFetchingAC(false)))
} 

export const logOutTC = () => async(dispatch) =>{  
    dispatch(toggleFetchingAC(true))
    signOut(auth) 
    .then(() =>{ 
        dispatch(setUserAC({
            email: null,
            id: null,
            token: null
        }))
    })
    .catch(console.error)
    .finally( dispatch(toggleFetchingAC(true)))
} 
export const addScoreTC = (score) => (dispatch) =>{  
    updateProfile(auth.currentUser, {
        phoneNumber: score,
      })   
    dispatch(addScoreAC(score)) 
}

