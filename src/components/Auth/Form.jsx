import { EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import { Button, Input } from 'antd';
import s from './Form.module.css'
import { useForm, Controller } from "react-hook-form"; 
const Form = (props) =>{ 
    console.log(props) 
    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        mode: "onBlur",
    }); 
    
    const onClick = (data) =>{ 
        props.onSubmit(data.email, data.password) 
        reset()  
    }  
    if(props.isFetch){ 
        console.log(props.isFetch); 
        return <p>Loading...</p>
    }  
   
    return(  
        <div className={s.auth__form_container}> 
        <form className={s.auth__form} onSubmit={handleSubmit(onClick)}> 
            <Controller 
                name='email' 
                control={control} 
                rules={{ required: "Это поле обязательное!",  
                minLength: {
                    value: 5,
                    message: "Минимум 5 символов!"
                } 
            }} 
            render={({field}) => <Input {...field} placeholder='Введите вашу почту'/>}
            />  
              {errors.email && <span  className={s.auth__error}>{errors.email.message || "Неверный email"}</span>}
            <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: true, minLength: {
                            value: 6,
                            message: "Минимум 6 символов!"
                        }, 
                    }}
                    render={({field}) => <Input.Password {...field}
                    iconRender={(visible) => (visible ? <EyeTwoTone/> :
                    <EyeInvisibleOutlined/>)}
                    placeholder="Введите ваш пароль"
                    
                    />}
                    />
                    {errors.password && <span className={s.auth__error}>{errors.password.message || "Это поле обязательное!"}</span>}  
            <Controller 
                name='submit' 
                control={control} 
                render={({field}) => <Button {...field} type='primary' htmlType='sumbit' >{props.value}</Button>}
                />
        </form> 

                </div>
    )
} 


export default Form