import { combineReducers, createStore } from "redux"
import { dialogsReducer } from "./dialogs-reducer"
import { profileReducer } from "./profile-reducer"
import { sidebarReducer } from "./sidebar-reducer"
import {userReducer} from "./users-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,
    usersPage:userReducer,
})

    export let store = createStore(reducers)

    console.log(store.dispatch)

console.log(store.getState())


export type ReduxStoreType = typeof store


