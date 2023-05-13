import { connect } from "react-redux"
import {signInUserTC,addScoreAC} from '../../redux/authReducer'
import Form from "./Form" 
import { getFetching } from "../../Selectors/authSelecors"
const RegisterContainer = props =>{ 
    return (  
        <> 
        <Form value='Зарегестрироваться' isFetch={props.isFetch} onSubmit={props.signInUserTC}/>
        </>
    )
}  
const mapStateToProps = (state) =>{ 
    return{ 
        isFetch: getFetching(state) 
    }
}
export default connect(mapStateToProps, {signInUserTC,addScoreAC})(RegisterContainer) 