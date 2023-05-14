import {NavLink} from "react-router-dom";
import LogInContainer from "../LogInContainer";
import s from '../Form.module.css'
const LoginPage = () => {
    return ( 
        <div className={s.auth}> 
            <div className={s.auth__container}> 
                    <div className={s.auth__title}>Вход</div>
                <div className={s.auth__item}> 
                    <LogInContainer/>
                    <div className={s.auth__link}>
                    <NavLink className={s.auth__subtitle} to={"/register"}>Зарегистрироваться</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;