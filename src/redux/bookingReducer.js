 
 const BOOK = 'BOOK'
 const initialState = { 
    booking: []
} 
export const bookingReducer = (state = initialState, action) =>{ 
    switch(action.type) { 
        case BOOK: { 
           return{ 
            ...state, 
            // booking: [...state.booking, action.data] 
            booking: action.data
           }  

        }
        default: 
        return state
    }
} 
export const bookAC = (data) =>({type: BOOK, data}) 

