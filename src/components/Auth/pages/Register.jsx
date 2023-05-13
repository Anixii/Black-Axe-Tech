import {NavLink} from "react-router-dom";
import RegisterContainer from "../RegisterContainer";

const RegisterPage = () => {
    return (
        <div>
            <h3>Вход</h3>
            <RegisterContainer/>
            <p>
            <NavLink to={"/login"}>Войти</NavLink>
            </p>
        </div>
    )
}

export default RegisterPage;