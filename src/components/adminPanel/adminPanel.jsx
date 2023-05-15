 import s from './admin.module.css'
 const adminPanel = props=> { 
    return(
        <div className={s.admin}>  
        <div className={s.container}> 
            <div className={s.admin__item}>  
                    <ul className={s.ul}> 
                        <li className={s.admin__link}>Дата бронирования</li> 
                        <li className={s.admin__link}>Почта пользователя</li>
                        <li className={s.admin__link}>ID пользователя</li> 
                     </ul>
                {props.booking.map((item, index) =>( 
                     <ul key={index + item.date}> 
                        <li className={s.admin__link}>{item.date}</li> 
                        <li className={s.admin__link}>{item.email}</li>
                        <li className={s.admin__link}>{item.id}</li> 
                     </ul>))}
            </div> 
        </div>
        </div>
    )
} 
export default adminPanel