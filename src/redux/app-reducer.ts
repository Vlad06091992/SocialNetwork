import {ActionsType} from "./store";
import {getAuthUserDataTC} from "./auth-reducer";
import {AppThunk} from "./redux-store";


export type AppStateType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}

export const appReducer = (state: AppStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}


export const initializedSuccess = () => {
    return {
        type: 'SET-INITIALIZED',
    } as const
}

// export const initializeApp = ():AppThunk => (dispatch:any) =>   {
//     dispatch(getAuthUserDataTC());
//
//
//     dispatch(initializedSuccess())
// }

export const initializeApp = ():AppThunk => (dispatch) =>   {

   let promise = dispatch(getAuthUserDataTC())
    promise.then( ()=>{
            dispatch(initializedSuccess())
        }
    )
}




    export type ForAppReducerTypes = SetInitialized

    type SetInitialized = ReturnType<typeof initializedSuccess>
