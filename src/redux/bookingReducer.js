 import { db } from "../firebase/firebase-config"
 import {collection, getDocs,doc,setDoc} from "@firebase/firestore"; 
 const SET__DATE = 'BOOK' 
 const SET__BOOK = 'SET__BOOK' 
 const TOGGLE_FETCH = 'TOGGLE_FETCH' 
 const  SET_SUCCESS = ' SET_SUCCESS'
 const initialState = { 
    date: null,
    booking: [], 
    isFetch: false, 
    isSucceed: false
    
} 
export const bookingReducer = (state = initialState, action) =>{ 
    switch(action.type) { 
        case SET__DATE: { 
           return{ 
            ...state, 
            // booking: [...state.booking, action.data] 
            date: action.data
           }   
        } 
        case SET__BOOK:{ 
            return {  
                ...state, 
                booking: action.data
            }
        }
        case TOGGLE_FETCH: { 
            return{ 
                ...state, 
                isFetch: action.data
            }
        } 
        case  SET_SUCCESS: 
        return{ 
            ...state, 
            isSucceed: action.data
        }
        
        default: 
        return state
    }
} 
export const bookAC = (data) =>({type: SET__DATE, data}) 
export const toggleFetchingAC = (data) => ({type: TOGGLE_FETCH, data})
export const setBookingAC = (data) => ({type:SET__BOOK, data})   
export const setSuccessAC = (data) => ({type: SET_SUCCESS, data})

export const bookTC = (date,email, id) =>(dispath) =>{ 
    dispath(bookAC(date)) 
    dispath(setBookTC(date, email, id))
}
export const getBookTC = () => { 
    return async (dispath) => {    
        dispath(toggleFetchingAC(true))
        const citiesCol = collection(db, 'Book');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data()); 
        dispath(setBookingAC(cityList)) 
        dispath(toggleFetchingAC(false))  
    } 
}
export const setBookTC = (date,email,id) => async(dispatch) =>{
    await setDoc(doc(db, "Book", email), {date,email,id}); 
    dispatch(setSuccessAC(true))
}