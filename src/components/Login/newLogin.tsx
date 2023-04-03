// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import {connect} from "react-redux";
// import {getAuthUserData, login} from "../../redux/auth-reducer";
// import {RootStateType} from "../../redux/store";
// import css from "./Login.module.css"
// import {Redirect} from "react-router-dom";
//
//
// function LoginForm(props:any) {
//     const {
//         register,
//         formState: {
//             errors,
//             isValid
//         },
//         handleSubmit,
//         clearErrors,
//         setError,
//         reset,
//     } = useForm({
//         mode: "onBlur"
//     });
//
//     const onSubmit = (data:any) => {
//         props.login(data.email, data.password, data.rememberMe, setError);
//         reset({
//             email: "",
//             password: "",
//             rememberMe: false
//         }, { keepErrors: true });
//     }
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <label>Email:
//                 <br />
//                 <input
//                     {...register("email", {
//                         required: "This field is requiered.",
//                         minLength: {
//                             value: 5,
//                             message: "Your login must be at least 5 symbols long."
//                         }
//                     })}
//                     onFocus={() => clearErrors(["email", "server"])}
//                 />
//             </label>
//             <br />
//             <div >
//                 {errors.email && <span>{errors.email?.message || "Error!"}</span>}
//             </div>
//             <label>Password:
//                 <br />
//                 <input
//                     type="password"
//                     {...register("password", {
//                         required: "This field is requiered."
//                     })}
//                     onFocus={() => clearErrors(["password", "server"])}
//                 />
//             </label>
//             <br />
//             <div >
//                 {errors.password && <span>{errors.password.message || "Error!"}</span>}
//             </div>
//             <label>
//                 <input
//                     type="checkbox"
//                     {...register("rememberMe")}
//                 /> Remember me
//             </label>
//             <br />
//             {errors.server
//                 &&
//                 <div >
//                     <span>{errors.server.message}</span>
//                 </div>}
//             <input type="submit" disabled={!isValid} value="Log in" />
//         </form>
//     );
// }
//
// // І ось thunk:
//
//     export const login = (email, password, rememberMe, setError) => (dispatch) => {
//         authAPI.login(email, password, rememberMe)
//             .then(data => {
//                 if (data.resultCode === 0) {
//                     dispatch( getAuth() );
//                 } else {
//                     setError("server", {
//                         type: "custom",
//                         message: data.messages
//                     });
//                 }
//             });
//     };
//
export default ()=>{}