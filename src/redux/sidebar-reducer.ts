import {ActionsType, SidebarStateType, UserType} from "./store";
import { setFetching, } from "./users-reducer";
import {UsersApi} from "../api/api";
import {Dispatch} from "redux";
import {AppDispatch, AppThunk} from "./redux-store";

let initialState: SidebarStateType = {
    friends: []

}

export const sidebarReducer = (state: SidebarStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "GET-FRIENDS":
            return {...state, friends: action.friends}
        default:
            return state
    }
}

export const setFriends = (friends: UserType[]) => {
    return {
        type: "GET-FRIENDS",
        friends
    } as const
}


export const getFriends = (pageSize?: number, currentPage: number = 1):AppThunk => async (dispatch: Dispatch) => {
    dispatch(setFetching(true))
    let res = await UsersApi.getFriends(pageSize, currentPage)
    dispatch(setFriends(res.items))
    dispatch(setFetching(false))
}


export type GetFriendsType = ReturnType<typeof setFriends>
export type ForSideBarReducerType = GetFriendsType