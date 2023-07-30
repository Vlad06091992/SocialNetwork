import {ActionsType} from "./store";
import {AuthApi, securityApi} from "../api/api";
import {AppDispatch, AppThunk} from "./redux-store";
import {Dispatch} from "redux";


export type AuthStateType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: null | boolean,
    serverError: null | string,
    captchaUrl: null | string
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    serverError: null,
    captchaUrl: null
}

export const authReducer = (state: AuthStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'auth/AUTH-USER':
            return {
                ...state,
                email: action.email,
                login: action.login,
                userId: action.id,
                isAuth: action.isAuth,
                captchaUrl: action.captchaUrl,

            }
        case 'auth/SET-SERVER-ERROR':
            return {...state, serverError: action.error}
        case 'auth/SET-CAPTCHA':
            return {...state, captchaUrl: action.captchaURL}
        default:
            return state
    }
}


//For auth reducer


export const setAuthUserData = (id: string | null, login: string | null, email: string | null, isAuth: boolean, captchaUrl?:string | null) => {
    return {
        type: 'auth/AUTH-USER',
        id,
        login,
        email,
        isAuth,
        captchaUrl
    } as const
}

export const setServerError = (error: string) => {
    return {
        type: 'auth/SET-SERVER-ERROR',
        error
    } as const
}

export const getCaptchaUrlSuccess = (url: string) => {
    return {
        type: 'auth/SET-CAPTCHA',
        captchaURL: url
    } as const
}


export const getAuthUserDataTC = ():AppThunk => {
    return async (dispatch: Dispatch) => {
        try {
            let res = await  AuthApi.me()
            if (res.data.resultCode === 0) {
                let {id, email, login} = res.data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        } catch (e:any){
            throw new Error(e)
        }

    }
}


export const loginTC = (email: string, password: string, remeberMe: boolean,captcha?:string): AppThunk => { //дипатчим санку в санке
    try {
        return async (dispatch:AppDispatch) => {
            let res = await AuthApi.login(email, password, remeberMe,captcha)
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())  //дипатчим санку здесь
            }

            else if(res.data.resultCode === 10) {
                debugger
                dispatch(setServerError(res.data.messages[0]))
                dispatch(getCaptchaTC())
            }

            else {
                dispatch(setServerError(res.data.messages[0]))
            }
        }
    } catch (e:any){
        throw new Error(e)
    }
}

export const logoutTC = ():AppThunk => async (dispatch: AppDispatch)=> {
     let res = await AuthApi.logout()
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false, null))
        }
}

export const getCaptchaTC = ():AppThunk => async (dispatch: AppDispatch)=> {
    let res = await securityApi.getCaptchaUrl()
    debugger
    dispatch(getCaptchaUrlSuccess(res.data.url))
   return
}


export type ForAuthReducersTypes = ForAuthUser | SetServerError | SetCaptchaAC

type ForAuthUser = ReturnType<typeof setAuthUserData>
type SetServerError = ReturnType<typeof setServerError>
type SetCaptchaAC = ReturnType<typeof getCaptchaUrlSuccess>
