import { auth } from "../firebase/firebase-config" 
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut, onAuthStateChanged, updateProfile} from "@firebase/firestore"
 
const LOG_IN = 'LOG_IN' 
const LOG_OUT = 'LOG_OUT'
const ADD_SCORE = 'ADD_SCORE'

const initialState = { 
    email: null,
    token: null,
    id: null, 
    score: 0
}
const authReducer = (state = initialState, action) =>{ 
    switch(action){ 
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
        default: 
        return state
    }
}   
//Action Creators
const setUserAC = (data) =>({type: LOG_IN, data})
const logOutAC = (data) => ({type: LOG_OUT, data})
const addScoreAC = (data) => ({type: ADD_SCORE, data})

//ThunkCreators 
export const logInUserTC = (email, password)=> (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(setUserAC({
                email: user.email,
                id: user.uid,
                token: user.accessToken, 
            }))
        })
        .catch(console.error)
}  
export const signInUserTC = (email, password) => (dispatch) =>{ 
    createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
        dispatch(setUserAC({
            email: user.email,
            id: user.uid,
            token: user.accessToken, 
        }))  
        console.log(user);
       // dispatch(addScoreTC(5))
})
    .catch(console.error)
} 
export const logOutTC = () => async(dispatch) =>{ 
    signOut(auth) 
    .then(() =>{ 
        dispatch(setUserAC({
            email: null,
            id: null,
            token: null
        }))
    })
    .catch(console.error)
 
} 
export const addScoreTC = (score) => (dispatch) =>{ 
    updateProfile(auth.currentUser, {
        userScore: score,
      })
}

export default authReducer