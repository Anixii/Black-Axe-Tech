import { connect } from "react-redux"
import {logInUserTC} from '../../redux/authReducer'
import Form from "./Form" 
import { useNavigate } from "react-router-dom"
import { getFetching } from "../../Selectors/authSelecors"
const LogInContainer = props =>{  
    const navigate =useNavigate() 
    return ( 
        <Form value='Войти' isFetch={props.isFetch} onSubmit={props.logInUserTC}/>
    )
}  
const mapStateToProps = (state) =>{ 
    return{ 
        isFetch: getFetching(state) 
    }
}
export default connect(mapStateToProps, {logInUserTC})(LogInContainer) 