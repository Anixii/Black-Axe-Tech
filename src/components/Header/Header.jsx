import { NavLink } from "react-router-dom"
import logo from '../../assets/img/logo.jpg'
const Header = props => { 
    return( 
        <div className="header"> 
            <div className="header__container"> 
            <div className="header__logo"> 
                <img src={'https://www.artnight.ru/public/upload/special/1/22.svg'} alt="Logo" className="logo" />
            </div> 
            <div className="header__item"> 
                <NavLink to={'/booking'}>Забронировать билет</NavLink> 
            </div>
            <div className="header__auth"> 
                <NavLink to={'/login'}>Войти в аккаунт</NavLink> 
            </div>  
            </div>
        </div>
    )
} 
export default Header