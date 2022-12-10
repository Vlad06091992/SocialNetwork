import { combineReducers, createStore } from "redux"
import { dialogsReducer } from "./dialogs-reducer"
import { profileReducer } from "./profile-reducer"
import { sidebarReducer } from "./sidebar-reducer"

let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    sidebarPage:sidebarReducer})

    export let store = createStore(reducers)

    console.log(store.dispatch)


export type ReduxStoreType = typeof store


