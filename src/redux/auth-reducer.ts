import {ActionsType, RootStateType} from "./store";
import {AuthApi} from "../api/api";
import {useForm} from "react-hook-form";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {News} from "../components/News/News";
import {AppDispatch, AppThunk} from "./redux-store";


export type AuthStateType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: null | boolean,
    serverError: null | string
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    serverError: null
}

export const authReducer = (state: AuthStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'AUTH-USER':
            return {
                ...state,
                email: action.email,
                login: action.login,
                userId: action.id,
                isAuth: action.isAuth
            }
        case 'SET-SERVER-ERROR':
            return {...state, serverError: action.error}
        default:
            return state
    }
}


//For auth reducer


export const setAuthUserData = (id: string | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: 'AUTH-USER',
        id,
        login,
        email,
        isAuth
    } as const
}

export const setServerError = (error: string) => {
    return {
        type: 'SET-SERVER-ERROR',
        error
    } as const
}


export const getAuthUserData = () => {
    return (dispatch: any) => {
        AuthApi.me()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}



console.log(typeof getAuthUserData)


export const login = (email: string, password: string, remeberMe: boolean): AppThunk => {
    try {
        return async dispatch => {
            let res = await AuthApi.login(email, password, remeberMe)
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                dispatch(setServerError(res.data.messages[0]))
            }
        }
    } catch (e:any){
        throw new Error(e)
    }
}



export const logout = () => {
    return (dispatch: AppDispatch) => {
        AuthApi.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))

                }
            })
    }
}




export type ForAuthUser = ReturnType<typeof setAuthUserData>
export type SetServerError = ReturnType<typeof setServerError>
