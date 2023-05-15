export const getFetching = (state) =>{ 
    return state.authReducer.isFetch
} 
export const getEmail = state =>{ 
    return state.authReducer.email
}  
export const getId = state =>{ 
    return state.authReducer.id
}