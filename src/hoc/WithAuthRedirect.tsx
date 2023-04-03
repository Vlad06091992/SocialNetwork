import React, {ComponentType, ReactNode} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootStateType} from "../redux/store";

//Dialogs, Users ---> redirect

// let mstp = (state:RootStateType) => {
//     return{
//         isAuth:state.auth.isAuth
//     }
// }
//
// export const WithAuthRedirect = (Component:any):any => {
//     console.log("WithAuthRedirect")
//     const RedirectComponent = (props:any) => {
//         if(!props.isAuth){
//             return <Redirect to="/Login"/>
//         }
//         return <Component />
//     }
//     return connect(mstp)(RedirectComponent)
// }

type MapStatePropsType = {
    isAuth: boolean | null
}

let mstp = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to="/Login"/>
        }

        return <Component {...restProps as T}  />
    }
    return connect(mstp)(RedirectComponent)
}
