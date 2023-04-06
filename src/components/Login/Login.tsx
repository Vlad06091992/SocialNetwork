import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {connect} from "react-redux";
import {AuthStateType, loginTC} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/store";
import css from "./Login.module.css"
import {Redirect} from "react-router-dom";


type FormValues = {
    login: string;
    password: string;
    rememberMe: boolean;
};

type LoginFormType = {
    auth:AuthStateType,
    login:( login: string, password: string,rememberMe: boolean)=>void
}

 function LoginForm(props:LoginFormType) {
     const { register, handleSubmit, formState:{errors},reset } = useForm<FormValues>();



     const onSubmit: SubmitHandler<FormValues> = ({login,password,rememberMe}) => {
        props.login(login,password,rememberMe)

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

export default connect(mapStateToProps, { login: loginTC})(LoginForm);





