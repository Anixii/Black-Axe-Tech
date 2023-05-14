import { connect } from "react-redux"
import {signInUserTC,addScoreAC} from '../../redux/authReducer'
import Form from "./Form"  
import { Navigate } from "react-router-dom"
import { getEmail, getFetching } from "../../Selectors/authSelecors"
const RegisterContainer = props =>{  
    if(props.email){ 
        return <Navigate to={'/'}/>
    }  
    return (  
        <Form value='Зарегестрироваться' isFetch={props.isFetch} onSubmit={props.signInUserTC}/>
    )
}  
const mapStateToProps = (state) =>{ 
    return{ 
        isFetch: getFetching(state) , 
        email: getEmail(state)
    }
}
export default connect(mapStateToProps, {signInUserTC,addScoreAC})(RegisterContainer) 