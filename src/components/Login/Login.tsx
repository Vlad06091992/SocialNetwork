import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {connect} from "react-redux";
import {getAuthUserData, login} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/store";
import css from "./Login.module.css"
import {Redirect} from "react-router-dom";


type FormValues = {
    login: string;
    password: string;
    rememberMe: string;
};

 function LoginForm(props:any) {
     const { register,setError, handleSubmit, formState:{errors},reset } = useForm<FormValues>();



     const onSubmit: SubmitHandler<FormValues> = ({login,password,rememberMe}) => {
        let err =  props.login(login,password,rememberMe)
         // props.authMe()
         reset()
     };

     if(props.auth.isAuth){
         return <Redirect to="/Profile"/>
     }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <input className={errors.login ? css.error : css.item} {...register("login",{ required: true })}  />
                {errors.login && <p>This is required.</p>}
            </div>
            <div>
            <input type="password" className={errors.password ? css.error : css.item} {...register("password",{required:true} )} />
                {errors.password && <p>This is required.</p>}
            </div>
            <input type="checkbox" {...register("rememberMe")} /> <span>remember me</span>
<div>
            <input type="submit" disabled={!!errors.login || !!errors.password} />
    {props.auth.serverError}
        </div>
        </form>
    );
}


let mapStateToProps = (state: RootStateType) => {
    return {
        auth: state.auth,

    }
}

export default connect(mapStateToProps, {authMe: getAuthUserData,login})(LoginForm);

// export const Login = () => {
//     return (
//         <div>Login</div>
//     )
// }



