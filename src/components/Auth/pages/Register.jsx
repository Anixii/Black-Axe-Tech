import {NavLink} from "react-router-dom";
import RegisterContainer from "../RegisterContainer";
import s from '../Form.module.css'
const RegisterPage = () => {
    return (
        <div className={s.auth}> 
            <div className={s.auth__container}> 
                    <div className={s.auth__title}>Регистрация</div>
                <div className={s.auth__item}> 
                    <RegisterContainer/>
                    <div className={s.auth__link}>
                    <NavLink className={s.auth__subtitle} to={"/login"}>Войти</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;