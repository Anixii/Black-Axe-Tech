import { NavLink } from "react-router-dom"
import { Button } from "antd"
const Header = props => {  
    const logOut = () =>{ 
        props.logOutTC()
    }
    return( 
        <div className="header"> 
            <div className="header__container"> 
            <div className="header__logo"> 
                <img src={'https://www.artnight.ru/public/upload/special/1/22.svg'} alt="Logo" className="logo" />
            </div> 
            <div className="header__item"> 
                {props.email ? <NavLink to={'/booking'}>Забронировать билет</NavLink> : null }
            </div>
            <div className="header__auth">  
                {props.email? <Button onClick={logOut}  type='primary' danger >Выйтии из аккаунта</Button> : <NavLink to={'/login'}>Войти в аккаунт</NavLink> }
                
            </div>  
            </div>
        </div>
    )
} 
export default Header