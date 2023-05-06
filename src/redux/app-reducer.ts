import {ActionsType} from "./store";
import {getAuthUserDataTC} from "./auth-reducer";
import {AppDispatch, AppThunk} from "./redux-store";

let initialState = {
    initialized: false,
    isLoadingDataProfile:false
}

export const appReducer = (state: AppStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'app/SET-INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        case 'app/SET-LOADING-PROFILE-STATUS':
            return {
                ...state,
                isLoadingDataProfile: action.status
            }
        default:
            return state
    }
}


export const initializedSuccess = () => {
    return {
        type: 'app/SET-INITIALIZED',
    } as const
}

export const setloadingProfileStatus = (status:boolean) => {
    return {
        type: 'app/SET-LOADING-PROFILE-STATUS',
        status
    } as const
}



export const initializeApp = ():AppThunk => async (dispatch:AppDispatch) =>   {
   await dispatch(getAuthUserDataTC())
    dispatch(initializedSuccess())
}

export type AppStateType = {
    initialized: boolean
    isLoadingDataProfile:boolean
}


export type ForAppReducerTypes = ReturnType<typeof initializedSuccess> | ReturnType<typeof setloadingProfileStatus>


