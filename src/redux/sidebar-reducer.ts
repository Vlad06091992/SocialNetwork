import {ActionsType, SidebarStateType, UserType} from "./store";
import {setCurrentPage, setFetching, setTotalUserCount, setUsers} from "./users-reducer";
import {UsersApi} from "../api/api";
import {Dispatch} from "redux";

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

export type GetFriendsType = ReturnType<typeof setFriends>

export type ForSideBarType = GetFriendsType


export const getFriends = (pageSize?: number, currentPage: number = 1) => {
    return (dispatch: Dispatch) => {
        dispatch(setFetching(true))
        UsersApi.getFriends(pageSize, currentPage)
            .then(response => {
                dispatch(setFriends(response.items))
            })

    }
}