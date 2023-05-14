import { connect } from "react-redux"
import Booking from "./Booking"
import { bookAC } from "../../redux/bookingReducer"
const BookingContainer = props =>{ 
    return( 
        <Booking {...props}/>
    )
} 
 
 export default connect(null, {bookAC})(BookingContainer) 
