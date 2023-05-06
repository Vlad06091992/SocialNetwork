import {ActionsType, UsersStateType, UserType} from "./store";
import {UsersApi} from "../api/api";
import {Dispatch} from "redux";
import {AxiosResponse} from "axios";

let initialState = {
    users: [],
    totalUserCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [2],
    fake:0
}
export const userReducer = (state: UsersStateType = initialState, action: ActionsType): UsersStateType => {
    switch (action.type) {
        case("FOLLOW-USER"): {
            return {...state, users: state.users.map(el => el.id === action.UserId ? {...el, followed: true} : el)}
        }
        case ("UNFOLLOW-USER"): {
            return {...state, users: state.users.map(el => el.id === action.UserId ? {...el, followed: false} : el)}
        }
        case ("SET-USERS"): {
            return {...state, users: [...action.users]}
        }
        case ("SET-TOTAL-COUNT"): {
            return {...state, totalUserCount: (action.totalUserCount)}
        }
        case ("SET-CURRENT-PAGE"): {
            return {...state, currentPage: (action.currentPage)}
        }
        case ("TOGGLE-FETCHING"): {
            return {...state, isFetching: (action.isFetching)}
        }
        case ("SET-ID-FOLLOWING-PROGRESS"): {
            return {...state, followingInProgress: [...state.followingInProgress, action.id]}
        }
        case ("REMOVE-ID-FOLLOWING-PROGRESS"): {
            return {...state, followingInProgress: state.followingInProgress.filter(id => id !== action.id)}
        }

        default:
            return state
    }
}


/* For Users reducer */
export const setFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-FETCHING',
        isFetching
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}
export const setTotalUserCount = (totalUserCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        totalUserCount,
    } as const
}
export const follow = (UserId: number) => {
    return {
        type: 'FOLLOW-USER',
        UserId: UserId
    } as const
}
export const unFollow = (UserId: number) => {
    return {
        type: 'UNFOLLOW-USER',
        UserId: UserId
    } as const
}
export const setFollowingProgress = (id: number) => {
    return {
        type: "SET-ID-FOLLOWING-PROGRESS",
        id
    } as const
}
export const removeFollowingProgress = (id: number) => {
    return {
        type: "REMOVE-ID-FOLLOWING-PROGRESS",
        id
    } as const
}

/* For Users reducer */
type RemoveFollowingProgress = ReturnType<typeof removeFollowingProgress>
type SetFollowingProgress = ReturnType<typeof setFollowingProgress>
type SetIsFetchingAC = ReturnType<typeof setFetching>
type SetCurrentPageAC = ReturnType<typeof setCurrentPage>
type SetUsersAC = ReturnType<typeof setUsers>
type SetTotalUserCountAC = ReturnType<typeof setTotalUserCount>
type FollowUserActionType = ReturnType<typeof follow>
type UnFollowUserActionType = ReturnType<typeof unFollow>

export type ForUsersReducerTypes =
    SetIsFetchingAC
    | SetCurrentPageAC
    | SetTotalUserCountAC
    | SetUsersAC
    | FollowUserActionType
    | UnFollowUserActionType
    | SetFollowingProgress
    | RemoveFollowingProgress

let followUnFiollowFlow = (id:number,dispatch:Dispatch,action:(id:number)=>ReturnType<typeof follow>|ReturnType<typeof unFollow>,api:(id:number)=>Promise<any>) => {
    dispatch(setFollowingProgress(id))
    api(id)
        .then((data: { resultCode: number; }) => {
            if (data.resultCode == 0) {
                dispatch(action(id))
            }
            dispatch(removeFollowingProgress(id))
        })
}

export const followUser = (id: number) => {
    return (dispatch: Dispatch) => {
        followUnFiollowFlow(id,dispatch,follow,UsersApi.followUser)
    }
}

export const unFollowUser = (id: number) => {
    return (dispatch: Dispatch) => {
        followUnFiollowFlow(id,dispatch,unFollow,UsersApi.unFollowUser)
    }
}

