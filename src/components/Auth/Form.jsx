
import { useForm } from "react-hook-form"; 
const Form = (props) =>{ 
    console.log(props)
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
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
        <form onSubmit={handleSubmit(onClick)}> 
             <input  placeholder="Введите вашу почту" {...register("email", {
                required: "Это поле обязательное!",  
                minLength: {
                    value: 5,
                    message: "Минимум 5 символов!"
                },
            })} />
            {errors.email && <span>{errors.email.message || "Неверный email"}</span>}
            <input placeholder="Введите ваш пароль" {...register("password", {
                required: true, minLength: {
                    value: 6,
                    message: "Минимум 6 символов!"
                },
                
            })} />
            {errors.password && <span>{errors.password.message || "Это поле обязательное!"}</span>}  
            <input type="submit"  value={props.value} />
        </form>
    )
} 


export default Form