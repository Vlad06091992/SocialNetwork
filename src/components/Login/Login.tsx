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
    captcha?:string
};

type LoginFormType = {
    auth:AuthStateType,
    login:( login: string, password: string,rememberMe: boolean,captcha?:string)=>void
}

 function LoginForm(props:LoginFormType) {

    console.log(props)

     const { register, handleSubmit, formState:{errors} } = useForm<FormValues>();
     const onSubmit: SubmitHandler<FormValues> = ({login,password,rememberMe,captcha}) => {
         props.login(login,password,rememberMe,captcha)
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

    {props.auth.serverError}
    { props.auth.captchaUrl && <div>
    { <img src={props.auth.captchaUrl}/> }

        { props.auth.captchaUrl &&<div> <input type="text" className={errors.password ? css.error : css.item} {...register("captcha",{required:true} )} /></div>}
    {errors.password && <p>This is required.</p>}
</div>}

        </div>
            <input type="submit" disabled={!!errors.login || !!errors.password} />
        </form>
    );
}


let mapStateToProps = (state: RootStateType) => {
    return {
        auth: state.auth,

    }
}

export default connect(mapStateToProps, { login: loginTC})(LoginForm);





