import {RootStateType} from "./redux-store";

export const getSelectorUsers = (state:RootStateType) => {
    return state.usersPage.users
}

export const getTotalUserCount = (state:RootStateType) => {
    return state.usersPage.totalUserCount
}

export const getPageSize = (state:RootStateType) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state:RootStateType) => {
    return state.usersPage.currentPage
}

export const isFetching = (state:RootStateType) => {
    return state.usersPage.isFetching
}

export const followingInProgress = (state:RootStateType) => {
    return state.usersPage.followingInProgress
}