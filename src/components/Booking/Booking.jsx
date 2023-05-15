 import { TimePicker, Button,Tooltip, Alert } from "antd";   
 import { ArrowLeftOutlined, SendOutlined } from '@ant-design/icons';
 import { useForm, Controller } from "react-hook-form";
 import dayjs from "dayjs";  
 import s from './Booking.module.css'
import { NavLink} from "react-router-dom";
 const Booking = props =>{   
   const {control, handleSubmit, reset, formState:{errors} } =useForm({mode: 'onBlur'})
      const onBlur = (data) =>{ 
        props.bookTC(data.date, props.email, props.id) 
        console.log(data)
        reset()
      }

      return(  
      <div className={s.booking}>  
      <div className={s.booking__container}>  
        <div className={s.booking__item}> 

        
        <div className={s.booking__title}>Забронировать билет</div>
        <form className={s.form} onSubmit={handleSubmit(onBlur)}>   
           <div className={s.time}> 
           <Controller 
            name='date' 
            control={control} 
            rules={{ required: "Это поле обязательное!"}} 
            render={({field}) =>  
            // <TimePicker {...field} defaultValue={dayjs('12:08','HH:mm')} format={'HH:mm'} 
            // showTime
            // disabledHours={() => [...Array(18).keys(), ...Array(24).keys()].filter((hour) => !(hour < 6 || hour >= 18))}
            // hideDisabledOptions 
            // />  
            <input {...field} type="time" min="18:00" max="06:00" className={s.time__input}/>
         } 
            />
            {errors.date && <span className={s.error}>{errors.date.message || "Неверный email"}</span>}
           </div>
             {props.isSucceed ?     <Alert message="Вы успешно забронировали!" type="success" showIcon />:<Button  type='primary' htmlType="submit"  icon={<SendOutlined />}>Сохранить</Button>}
                
         </form>  
         <div className={s.booking__back}> 

         <Tooltip className={s.booking__btn} title="Назад" trigger={'hover'}>
        <Button type="primary"  danger  icon={<ArrowLeftOutlined />} ><NavLink to={'/'}>Вернуться назад </NavLink></Button>
        </Tooltip>
         </div>
         
         </div>
            </div> 
            </div>
    )
} 
export default Booking