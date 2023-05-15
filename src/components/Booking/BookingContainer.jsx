import { connect } from "react-redux"
import Booking from "./Booking"
import { bookTC } from "../../redux/bookingReducer" 
import { getEmail, getId } from "../../Selectors/authSelecors"
import { Navigate } from "react-router-dom"

const BookingContainer = props =>{  
    if(!props.email){ 
        return <Navigate to={'/'}/>
    }
    return( 
        <Booking {...props}/>
    )
} 
 const mapStateToProps = state =>{ 
    return{ 
        email: getEmail(state), 
        id: getId(state), 
        isSucceed: state.bookingReducer.isSucceed
    }
    }
 export default connect(mapStateToProps, {bookTC,})(BookingContainer) 
