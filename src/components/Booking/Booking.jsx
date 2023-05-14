 import { TimePicker, Button } from "antd";  
 import { useForm, Controller } from "react-hook-form";
 import dayjs from "dayjs"; 
 const Booking = props =>{   
      const onBlur = (data) =>{ 
        // let b = data.date.split(' ') 
        
        props.bookAC(data.date)
      }
      const {control, handleSubmit, reset, formState:{errors} } =useForm({mode: 'onBlur'})
    return( 
        <form onSubmit={handleSubmit(onBlur)}>   
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
            <input {...field} type="time" min="18:00" max="06:00"/>
         } 
            />
            {errors.date && <span>{errors.date.message || "Неверный email"}</span>}
            <Controller 
                name='submit' 
                control={control} 
                render={({field}) => <Button {...field} type='primary' htmlType='sumbit' >Сохранить</Button>}
                />
         </form>
    )
} 
export default Booking