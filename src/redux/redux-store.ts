import {applyMiddleware, combineReducers, createStore} from "redux"
import {dialogsReducer} from "./dialogs-reducer"
import {profileReducer} from "./profile-reducer"
import {sidebarReducer} from "./sidebar-reducer"
import {userReducer} from "./users-reducer";
import {authReducer, AuthStateType} from "./auth-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionsType, DialogsStateType, ProfileStateType, SidebarStateType, UsersStateType} from "./store";

let rootReducer = combineReducers({
    auth:authReducer,
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,
    usersPage: userReducer,
} as const )






type ReducersType = typeof rootReducer

export type RootStateType = ReturnType<ReducersType>

export let store = createStore(rootReducer, applyMiddleware(thunk))
export type AppDispatch = ThunkDispatch<RootStateType, unknown, ActionsType>
export type ReduxStoreType = typeof store
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, ActionsType>







