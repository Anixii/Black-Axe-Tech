import { connect } from "react-redux"
import Header from "./Header"
import { getEmail } from "../../Selectors/authSelecors"
import { logOutTC } from "../../redux/authReducer"
const HeaderContainer = props => { 
    return( 
        <Header {...props}/>
    )
}  
const mapStateToProps = state =>{ 
    return{ 
        email: getEmail(state)
    }
}
export default connect(mapStateToProps, {logOutTC})(HeaderContainer)