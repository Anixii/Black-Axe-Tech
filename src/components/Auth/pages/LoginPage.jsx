import {NavLink} from "react-router-dom";
import LogInContainer from "../LogInContainer";

const LoginPage = () => {
    return (
        <div>
            <h3>Вход</h3>
            <LogInContainer/>
            <p>
            <NavLink to={"/register"}>Зарегистрироваться</NavLink>
            </p>
        </div>
    )
}

export default LoginPage;