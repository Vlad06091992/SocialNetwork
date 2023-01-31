import {ActionsType} from "./store";

export type AuthStateType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'AUTH-USER':
            return {
                ...state,
                email: action.authData.email,
                login: action.authData.login,
                userId: action.authData.id,
                isAuth: true
            }
        default:
            return state
    }
}