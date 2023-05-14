import { connect } from "react-redux"
import {logInUserTC} from '../../redux/authReducer'
import Form from "./Form" 
import { Navigate } from "react-router-dom"
import { getFetching, getEmail } from "../../Selectors/authSelecors"
const LogInContainer = props =>{  
       
    if(props.email){ 
        return <Navigate to={'/'}/>
    }  
    return ( 
        <Form value='Войти' isFetch={props.isFetch} onSubmit={props.logInUserTC}/>
    )
}  
const mapStateToProps = (state) =>{ 
    return{ 
        isFetch: getFetching(state), 
        email: getEmail(state)
    }
}
export default connect(mapStateToProps, {logInUserTC})(LogInContainer) 