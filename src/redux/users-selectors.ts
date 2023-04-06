import {RootStateType} from "./redux-store";
import { createSelector } from 'reselect'

export const getSelectorUsers = (state:RootStateType) => {
    return state.usersPage.users
}

export const getSelectorUsersSuper = createSelector(getSelectorUsers,(users)=>{
   return  users.filter(el=>el)
})



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